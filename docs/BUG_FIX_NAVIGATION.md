# 버그 수정: 토픽 상세 페이지 뒤로가기 네비게이션 문제

> 작성일: 2025-11-27
> 커밋: 8a51f40

## 📋 목차
1. [문제 상황](#문제-상황)
2. [원인 분석](#원인-분석)
3. [해결 방법](#해결-방법)
4. [변경사항 상세](#변경사항-상세)
5. [개선 효과](#개선-효과)
6. [테스트 방법](#테스트-방법)
7. [추가 개선 사항](#추가-개선-사항)

---

## 문제 상황

### 증상
- 토픽 위키 페이지에서 토픽을 클릭하여 상세 페이지로 이동
- "← 목록으로 돌아가기" 버튼을 클릭하면 **출제경향 페이지**로 이동
- 사용자는 토픽 목록으로 돌아가길 기대하지만, 의도하지 않은 페이지로 이동

### 재현 단계
1. 홈 또는 출제경향 페이지에서 시작
2. 네비게이션 바에서 "토픽 위키" 클릭
3. 아무 토픽 카드 클릭하여 상세 페이지로 이동
4. "← 목록으로 돌아가기" 버튼 클릭
5. **예상**: 토픽 목록으로 복귀
6. **실제**: 이전 페이지(출제경향 등)로 이동

### 사용자 경험 문제
- 네비게이션 흐름이 직관적이지 않음
- 브라우저 뒤로가기 버튼도 동일한 문제 발생
- URL이 변경되지 않아 토픽 공유 불가능
- 북마크 기능 사용 불가

---

## 원인 분석

### 근본 원인: 상태 기반 네비게이션

**기존 구조:**
```tsx
const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

// 토픽 클릭 시 상태만 변경
onClick={() => setSelectedTopic(topic)}

// 뒤로가기 버튼 클릭 시 상태만 초기화
onClick={() => setSelectedTopic(null)}
```

### 문제점 분석

#### 1. URL 변경 없음
```
토픽 목록: /topics
토픽 클릭: /topics  (URL 그대로)
            └─ selectedTopic 상태만 변경
```

URL이 변경되지 않기 때문에:
- 브라우저 히스토리에 기록되지 않음
- 뒤로가기 버튼이 이전 페이지(출제경향)로 이동
- 상태 초기화가 브라우저 히스토리와 무관

#### 2. 히스토리 스택 구조
```
[홈] → [출제경향] → [토픽 목록]
                      └─ selectedTopic 상태 변경 (히스토리에 기록 안됨)
```

뒤로가기 시:
```
현재: [토픽 목록] (상태: selectedTopic = null)
  ↓ 브라우저 뒤로가기
이전: [출제경향]  ← 여기로 이동!
```

#### 3. React 상태 vs 브라우저 히스토리

| 구분 | React 상태 관리 | 브라우저 히스토리 |
|-----|---------------|----------------|
| selectedTopic | 변경됨 | 기록 안됨 |
| URL | 변경 안됨 | 변경 안됨 |
| 뒤로가기 | 작동 안함 | 이전 URL로 이동 |

### 코드 분석

**기존 TopicWiki.tsx:**
```tsx
// 문제 코드 1: 상태만 변경
const handleTopicClick = (topic: Topic) => {
  setSelectedTopic(topic);  // ❌ URL 변경 없음
};

// 문제 코드 2: 상태만 초기화
const handleBackClick = () => {
  setSelectedTopic(null);  // ❌ 히스토리 조작 없음
};

// 렌더링
{selectedTopic ? (
  <TopicDetail topic={selectedTopic} onBack={handleBackClick} />
) : (
  <TopicList onTopicClick={handleTopicClick} />
)}
```

**문제:**
- `setSelectedTopic(null)`은 React 상태만 변경
- 브라우저 히스토리에는 아무런 영향 없음
- 브라우저 뒤로가기는 URL 기반으로 동작

---

## 해결 방법

### 전략: URL 기반 라우팅

React Router의 URL 파라미터를 활용하여 토픽 상태를 URL에 반영합니다.

### 새로운 아키텍처

```
[이전 방식 - 상태 기반]
/topics → selectedTopic 상태 변경 (히스토리 기록 X)

[새로운 방식 - URL 기반]
/topics → /topics/algorithms-001 (히스토리 기록 O)
```

### URL 구조 설계

```
/topics                    → 토픽 목록
/topics/:topicId           → 토픽 상세 (예: /topics/algorithms-001)
```

### 히스토리 스택 (개선 후)

```
[홈] → [출제경향] → [토픽 목록] → [토픽 상세]
                    /topics       /topics/algorithms-001
```

뒤로가기 시:
```
현재: [토픽 상세] /topics/algorithms-001
  ↓ 브라우저 뒤로가기
이전: [토픽 목록] /topics  ← 정상적으로 이동!
  ↓ 한 번 더 뒤로가기
이전: [출제경향]
```

---

## 변경사항 상세

### 1. App.tsx - 라우트 추가

#### 변경 전
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/topics" element={<TopicWiki />} />
  <Route path="/roadmap" element={<Roadmap />} />
  ...
</Routes>
```

#### 변경 후
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/topics" element={<TopicWiki />} />
  <Route path="/topics/:topicId" element={<TopicWiki />} />  {/* 추가 */}
  <Route path="/roadmap" element={<Roadmap />} />
  ...
</Routes>
```

**설명:**
- `/topics/:topicId` 라우트 추가
- `:topicId`는 URL 파라미터 (예: `algorithms-001`)
- 같은 `TopicWiki` 컴포넌트 재사용
- 파라미터 유무로 목록/상세 구분

### 2. TopicWiki.tsx - URL 기반 네비게이션 구현

#### Import 추가
```tsx
// Before
import { useState, useMemo } from 'react';

// After
import { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
```

**추가된 훅:**
- `useParams`: URL 파라미터 읽기
- `useNavigate`: 프로그래매틱 네비게이션
- `useCallback`: 함수 메모이제이션
- `useEffect`: URL 변경 감지

#### URL 파라미터 읽기
```tsx
export default function TopicWiki() {
  const { topicId } = useParams<{ topicId?: string }>();
  const navigate = useNavigate();

  // topicId가 있으면 상세 페이지, 없으면 목록
  // 예: /topics/algorithms-001 → topicId = "algorithms-001"
  // 예: /topics → topicId = undefined
```

#### URL 변경 시 자동 로드
```tsx
const loadTopicDetail = useCallback(async (id: string) => {
  setIsLoadingTopic(true);
  try {
    const response = await fetch(`/itpe-portal/data/parsedTopics/${id}.json`);
    if (!response.ok) {
      throw new Error('Topic not found');
    }
    const topicData = await response.json();
    setSelectedTopic(topicData);
  } catch (error) {
    console.error('Failed to load topic:', error);
    alert('토픽을 불러오는데 실패했습니다.');
    navigate('/topics');  // 에러 시 목록으로
  } finally {
    setIsLoadingTopic(false);
  }
}, [navigate]);

// URL 파라미터가 변경되면 자동으로 토픽 로드
useEffect(() => {
  if (topicId) {
    loadTopicDetail(topicId);
  } else {
    setSelectedTopic(null);
  }
}, [topicId, loadTopicDetail]);
```

**동작 방식:**
1. URL이 `/topics/algorithms-001`로 변경
2. `topicId` 파라미터가 `"algorithms-001"`로 설정
3. `useEffect`가 `topicId` 변경 감지
4. `loadTopicDetail("algorithms-001")` 호출
5. 토픽 데이터 fetch 및 상태 업데이트

#### 토픽 클릭 이벤트 변경
```tsx
// Before
onClick={() => setSelectedTopic(topic)}

// After
onClick={() => navigate(`/topics/${topic.id}`)}
```

**효과:**
- 상태 변경 → URL 변경으로 전환
- 브라우저 히스토리에 기록됨
- 뒤로가기/앞으로가기 버튼 작동

#### 뒤로가기 버튼 변경
```tsx
// Before
<button onClick={() => setSelectedTopic(null)}>
  ← 목록으로 돌아가기
</button>

// After
<button onClick={() => navigate('/topics')}>
  ← 목록으로 돌아가기
</button>
```

**효과:**
- 상태 초기화 → URL 변경으로 전환
- `/topics`로 이동하면 `topicId`가 undefined가 됨
- `useEffect`가 감지하여 `selectedTopic`을 null로 설정
- 목록 화면 렌더링

#### 연관 토픽 링크 변경
```tsx
// Before
<button onClick={() => loadTopicDetail(relatedId)}>
  {relatedTopic.title}
</button>

// After
<button onClick={() => navigate(`/topics/${relatedId}`)}>
  {relatedTopic.title}
</button>
```

#### 필터 변경 시 목록으로 자동 복귀
```tsx
// 카테고리 필터 예시
<button
  onClick={() => {
    setSelectedCategory(cat.value);
    if (topicId) navigate('/topics');  // 상세 페이지에서 필터 변경 시 목록으로
  }}
>
  {cat.label}
</button>

// 과목 필터
<button
  onClick={() => {
    setSelectedSubject(subj.value);
    if (topicId) navigate('/topics');
  }}
>

// 난이도 필터
<select
  onChange={(e) => {
    setSelectedDifficulty(e.target.value as DifficultyLevel | 'all');
    if (topicId) navigate('/topics');
  }}
>

// 기술사 필터
<select
  onChange={(e) => {
    setSelectedCertification(e.target.value as CertificationType | 'all');
    if (topicId) navigate('/topics');
  }}
>
```

**동작:**
1. 토픽 상세 페이지에서 필터 클릭
2. `topicId`가 존재하면 `/topics`로 이동
3. 목록 화면에서 필터가 적용된 결과 표시

---

## 개선 효과

### 1. 브라우저 네비게이션 정상화

| 시나리오 | 이전 | 개선 후 |
|---------|-----|--------|
| 뒤로가기 버튼 클릭 | 출제경향으로 이동 ❌ | 토픽 목록으로 이동 ✅ |
| 브라우저 뒤로가기 | 출제경향으로 이동 ❌ | 토픽 목록으로 이동 ✅ |
| 앞으로가기 | 작동 안함 ❌ | 정상 작동 ✅ |
| 새로고침 | 목록으로 돌아감 ❌ | 현재 토픽 유지 ✅ |

### 2. URL 공유 및 북마크

**이전:**
```
모든 토픽이 같은 URL
→ /topics
→ 공유 불가능
→ 북마크 불가능
```

**개선 후:**
```
각 토픽마다 고유 URL
→ /topics/algorithms-001
→ URL 복사하여 공유 가능
→ 북마크 저장 가능
→ URL 직접 입력으로 접근 가능
```

### 3. SEO 개선

```html
<!-- 이전: 모두 같은 URL -->
<meta property="og:url" content="https://example.com/topics">

<!-- 개선 후: 개별 토픽 URL -->
<meta property="og:url" content="https://example.com/topics/algorithms-001">
<meta property="og:title" content="알고리즘 - ITPE 포털">
```

### 4. 사용자 경험 향상

#### 네비게이션 흐름
```
[이전]
홈 → 출제경향 → 토픽 목록 → (상태 변경)
                              ↓ 뒤로가기
                    토픽 목록 ← 출제경향  ← 혼란스러움!

[개선 후]
홈 → 출제경향 → 토픽 목록 → 토픽 상세
                    ↑           ↓ 뒤로가기
                    토픽 목록 ←┘  직관적!
```

#### 딥링크 지원
```bash
# 특정 토픽으로 바로 이동
https://example.com/itpe-portal/#/topics/algorithms-001

# 이메일, 메신저로 공유 가능
# 북마크 바에 저장 가능
# QR 코드로 생성 가능
```

### 5. 브라우저 히스토리 관리

```javascript
// 히스토리 스택 시각화
history.length: 4

Stack:
[3] /topics/algorithms-001  ← 현재
[2] /topics                  ← 뒤로가기 시 이동
[1] /exam-trends
[0] /
```

---

## 테스트 방법

### 1. 기본 네비게이션 테스트

```bash
# 시나리오 1: 토픽 클릭 → 뒤로가기
1. /topics 접속
2. 토픽 클릭 → URL이 /topics/{id}로 변경되는지 확인
3. "← 목록으로 돌아가기" 클릭 → /topics로 이동하는지 확인
✅ 통과 조건: 토픽 목록으로 복귀

# 시나리오 2: 브라우저 뒤로가기
1. /topics 접속
2. 토픽 클릭
3. 브라우저 뒤로가기 버튼 클릭
✅ 통과 조건: 토픽 목록으로 복귀

# 시나리오 3: 브라우저 앞으로가기
1. 위 시나리오 2 완료 상태에서
2. 브라우저 앞으로가기 버튼 클릭
✅ 통과 조건: 토픽 상세로 다시 이동

# 시나리오 4: 새로고침
1. /topics/{id} 접속
2. F5 또는 새로고침 버튼 클릭
✅ 통과 조건: 같은 토픽 상세 페이지 유지
```

### 2. URL 직접 접근 테스트

```bash
# 테스트 케이스
/topics/algorithms-001          → 알고리즘 토픽 표시 ✅
/topics/data-structures-001     → 자료구조 토픽 표시 ✅
/topics/invalid-topic-id        → 에러 메시지 후 /topics로 이동 ✅
/topics                         → 토픽 목록 표시 ✅
```

### 3. 필터 상호작용 테스트

```bash
# 시나리오: 상세 페이지에서 필터 변경
1. 토픽 상세 페이지로 이동 (/topics/algorithms-001)
2. 카테고리 필터 클릭 (예: "공통 필수")
✅ 통과 조건: /topics로 이동하고 필터 적용된 목록 표시

3. 과목 필터 클릭 (예: "DB")
✅ 통과 조건: /topics로 이동하고 DB 토픽만 표시

4. 난이도 선택 변경
✅ 통과 조건: /topics로 이동하고 해당 난이도 토픽만 표시
```

### 4. 연관 토픽 테스트

```bash
# 시나리오: 연관 토픽 클릭
1. 토픽 A 상세 페이지 (/topics/topic-a)
2. 연관 토픽 B 버튼 클릭
✅ 통과 조건: URL이 /topics/topic-b로 변경
✅ 통과 조건: 토픽 B 상세 내용 표시
3. 브라우저 뒤로가기
✅ 통과 조건: 토픽 A로 복귀
```

### 5. 히스토리 스택 테스트

```bash
# 복잡한 네비게이션 시나리오
1. 홈 (/)
2. 출제경향 클릭 (/exam-trends)
3. 토픽 위키 클릭 (/topics)
4. 토픽 A 클릭 (/topics/topic-a)
5. 연관 토픽 B 클릭 (/topics/topic-b)
6. 브라우저 뒤로가기 → /topics/topic-a ✅
7. 브라우저 뒤로가기 → /topics ✅
8. 브라우저 뒤로가기 → /exam-trends ✅
9. 브라우저 뒤로가기 → / ✅
10. 브라우저 앞으로가기 → /exam-trends ✅
```

### 6. 에러 처리 테스트

```bash
# 존재하지 않는 토픽 ID
1. 주소창에 /topics/non-existent-topic 입력
✅ 통과 조건:
   - 에러 메시지 표시 ("토픽을 불러오는데 실패했습니다.")
   - 자동으로 /topics로 리다이렉트

# 네트워크 오류
1. 개발자 도구 → Network 탭 → Offline 설정
2. /topics/algorithms-001 접속
✅ 통과 조건:
   - 에러 메시지 표시
   - /topics로 리다이렉트
```

### 7. 성능 테스트

```bash
# URL 변경 속도
1. 토픽 클릭 시 즉시 URL 변경되는지 확인
✅ 통과 조건: URL 즉시 변경 (< 50ms)

# 뒤로가기 속도
1. 브라우저 뒤로가기 클릭
✅ 통과 조건: 즉시 이전 페이지로 이동 (< 100ms)

# 새로고침 후 복원
1. 토픽 상세 페이지에서 새로고침
✅ 통과 조건: 같은 토픽 정상 로드 (< 1s)
```

---

## 추가 개선 사항

### 1. 뒤로가기 버튼 아이콘 추가

```tsx
import { ArrowLeft } from 'lucide-react';

<button onClick={() => navigate('/topics')}>
  <ArrowLeft className="w-4 h-4 inline mr-2" />
  목록으로 돌아가기
</button>
```

### 2. 키보드 단축키 지원

```tsx
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    // ESC 키로 목록으로 돌아가기
    if (e.key === 'Escape' && topicId) {
      navigate('/topics');
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [topicId, navigate]);
```

### 3. 스크롤 위치 복원

```tsx
// 목록에서 스크롤 위치 저장
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
  if (!topicId) {
    // 목록으로 돌아올 때 스크롤 복원
    window.scrollTo(0, scrollPosition);
  }
}, [topicId, scrollPosition]);

// 토픽 클릭 시 스크롤 위치 저장
const handleTopicClick = (id: string) => {
  setScrollPosition(window.scrollY);
  navigate(`/topics/${id}`);
};
```

### 4. URL 파라미터로 필터 상태 유지

```tsx
// 필터 상태를 URL 쿼리 파라미터로 관리
// /topics?category=technical-focus&subject=AL

const [searchParams, setSearchParams] = useSearchParams();

// 필터 변경 시
const handleCategoryChange = (category: string) => {
  setSearchParams({ category });
};

// 초기 로드 시 URL에서 필터 복원
useEffect(() => {
  const category = searchParams.get('category');
  if (category) {
    setSelectedCategory(category as DomainCategory);
  }
}, [searchParams]);
```

### 5. 페이지 전환 애니메이션

```tsx
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence mode="wait">
  {selectedTopic ? (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <TopicDetail />
    </motion.div>
  ) : (
    <motion.div
      key="list"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
    >
      <TopicList />
    </motion.div>
  )}
</AnimatePresence>
```

### 6. 메타 태그 동적 업데이트

```tsx
import { Helmet } from 'react-helmet-async';

{selectedTopic && (
  <Helmet>
    <title>{selectedTopic.title} - ITPE 포털</title>
    <meta name="description" content={selectedTopic.definition} />
    <meta property="og:title" content={selectedTopic.title} />
    <meta property="og:description" content={selectedTopic.definition} />
    <meta property="og:url" content={`https://example.com/topics/${selectedTopic.id}`} />
  </Helmet>
)}
```

### 7. 브레드크럼 추가

```tsx
<nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
  <Link to="/" className="hover:text-primary-600">홈</Link>
  <span>/</span>
  <Link to="/topics" className="hover:text-primary-600">토픽 위키</Link>
  {selectedTopic && (
    <>
      <span>/</span>
      <span className="text-gray-900 font-medium">{selectedTopic.title}</span>
    </>
  )}
</nav>
```

---

## 관련 파일

### 수정된 파일
- `src/App.tsx` - 라우트 추가
- `src/pages/TopicWiki.tsx` - URL 기반 네비게이션 구현

### 관련 문서
- `docs/BUG_FIX_TOPIC_DETAIL.md` - 토픽 상세 페이지 백지 문제 수정
- `docs/ADD_TOPIC_GUIDE.md` - 토픽 추가 가이드

---

## 참고 자료

### 커밋 히스토리
- `8a51f40` - fix: 토픽 상세 페이지 뒤로가기 네비게이션 개선

### React Router 문서
- [useParams](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
- [URL Parameters](https://reactrouter.com/en/main/route/route#dynamic-segments)

### 학습 포인트
1. **URL 기반 라우팅**: 상태를 URL에 반영하는 중요성
2. **브라우저 히스토리 API**: navigate vs window.location
3. **React Router 훅**: useParams, useNavigate, useEffect 조합
4. **사용자 경험**: 직관적인 네비게이션의 중요성
5. **딥링크**: URL 공유 가능성의 가치
