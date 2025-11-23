# 토픽 추가 가이드

ITPE 포털에 새로운 학습 토픽을 추가하는 방법을 단계별로 안내합니다.

## 목차
1. [토픽 파일 작성](#1-토픽-파일-작성)
2. [파일 저장 위치](#2-파일-저장-위치)
3. [빌드 실행](#3-빌드-실행)
4. [확인](#4-확인)
5. [주의사항](#5-주의사항)

---

## 1. 토픽 파일 작성

### 파일 구조

토픽은 마크다운(`.md`) 파일로 작성하며, 다음 순서로 구성됩니다:

```markdown
---
[메타데이터 (YAML frontmatter)]
---

## 암기 두음
[암기를 돕는 두음 문자]

# 정의
[토픽에 대한 명확한 정의]

## 특징
- [특징 1]
- [특징 2]
- [특징 3]
```

### 완전한 예시

```markdown
---
id: algorithms-001
title: 알고리즘
category: technical-focus
subcategory: 알고리즘
subjectCategories:
  - AL
difficulty: intermediate
certifications:
  - computer-systems
keywords:
  - Quick Sort
  - Merge Sort
  - Binary Search
  - 시간복잡도
importance: 4
relatedTopics:
  - data-structures-001
  - process-scheduling-001
trends:
  - 양자 알고리즘
  - 근사 알고리즘
---

## 암기 두음
정탐해

# 정의
문제를 해결하기 위한 체계적이고 효율적인 절차로, 정렬과 탐색 알고리즘이 대표적입니다.

## 특징
- 정렬 알고리즘: Quick Sort(평균 O(n log n), 최악 O(n²), 불안정, 제자리), Merge Sort(O(n log n), 안정, 추가 메모리)
- 탐색 알고리즘: Binary Search(이진 탐색, O(log n), 정렬 필요), Linear Search(선형 탐색, O(n))
- 시간복잡도: Big-O 표기법(O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ))
```

---

## 2. 파일 저장 위치

`src/data/topics/` 폴더 아래 **과목별 폴더**에 저장합니다.

### 과목 폴더 구조

| 과목 코드 | 과목명 | 폴더 경로 |
|---------|--------|----------|
| SE | 소프트웨어공학 | `src/data/topics/SE/` |
| DB | 데이터베이스 | `src/data/topics/DB/` |
| NW | 네트워크 | `src/data/topics/NW/` |
| IS | 정보보안 | `src/data/topics/IS/` |
| IM | IT경영 | `src/data/topics/IM/` |
| PM | 프로젝트관리 | `src/data/topics/PM/` |
| CA | 컴퓨터구조 | `src/data/topics/CA/` |
| OS | 운영체제 | `src/data/topics/OS/` |
| AL | 알고리즘 | `src/data/topics/AL/` |
| DS | 디지털 서비스 | `src/data/topics/DS/` |

### 파일 명명 규칙

```
{토픽명}-{일련번호}.md
```

**예시:**
- `algorithms-001.md`
- `data-structures-001.md`
- `rest-api-001.md`

---

## 3. 빌드 실행

마크다운 파일을 추가하거나 수정한 후, 다음 명령어를 실행합니다:

```bash
npm run topics:build
```

이 명령어는:
- `src/data/topics/` 폴더의 모든 `.md` 파일을 읽습니다
- 메타데이터와 본문을 파싱합니다
- `src/data/topics.json` 파일을 생성합니다

### 개발 모드에서 확인

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 토픽 위키 페이지를 확인합니다.

---

## 4. 확인

### 체크리스트

- [ ] 토픽 위키 페이지에서 새 토픽이 목록에 표시되는가?
- [ ] 카테고리 필터가 정상 작동하는가?
- [ ] 과목 필터가 정상 작동하는가?
- [ ] 토픽 클릭 시 상세 페이지가 정상 표시되는가?
- [ ] 암기 두음이 표시되는가? (있는 경우)
- [ ] 정의가 명확하게 표시되는가?
- [ ] 특징이 목록으로 잘 표시되는가?
- [ ] 키워드가 태그로 표시되는가?
- [ ] 연관 토픽 링크가 정상 작동하는가?
- [ ] 최신 트렌드가 표시되는가? (있는 경우)

---

## 5. 주의사항

### ⚠️ 반드시 지켜야 할 사항

#### 1. frontmatter 공백 라인
frontmatter 종료(`---`) 다음에는 **반드시 빈 줄**을 추가해야 합니다.

```markdown
❌ 잘못된 예시:
---
id: example-001
---
## 암기 두음

✅ 올바른 예시:
---
id: example-001
---

## 암기 두음
```

#### 2. 볼드 마크다운 사용 금지
마크다운 볼드(`**텍스트**`)는 사용하지 않습니다. 빌드 시스템이 마크다운을 HTML로 변환하지 않고 텍스트로 추출하기 때문입니다.

```markdown
❌ 잘못된 예시:
- **RAID 레벨**: RAID 0, RAID 1, RAID 5

✅ 올바른 예시:
- RAID 레벨: RAID 0, RAID 1, RAID 5
```

#### 3. 헤딩 레벨 준수
- `## 암기 두음` - 레벨 2 헤딩(`##`)
- `# 정의` - 레벨 1 헤딩(`#`)
- `## 특징` - 레벨 2 헤딩(`##`)

레벨을 바꾸면 빌드 스크립트가 내용을 인식하지 못합니다.

#### 4. 특징은 목록 형식
특징은 반드시 `-`로 시작하는 목록 형식으로 작성합니다.

```markdown
## 특징
- 특징 1
- 특징 2
- 특징 3
```

---

## 메타데이터 필드 설명

### 필수 필드

| 필드 | 타입 | 설명 | 예시 |
|-----|------|------|-----|
| `id` | string | 토픽 고유 ID (중복 불가) | `algorithms-001` |
| `title` | string | 토픽 제목 | `알고리즘` |
| `category` | string | 도메인 카테고리 | `technical-focus` |
| `subcategory` | string | 하위 카테고리명 | `알고리즘` |
| `subjectCategories` | array | 과목 코드 배열 | `[AL]` |
| `difficulty` | string | 난이도 | `intermediate` |
| `certifications` | array | 관련 기술사 | `[computer-systems]` |
| `keywords` | array | 키워드 배열 | `[Quick Sort, Binary Search]` |
| `definition` | string | 정의 (본문) | - |
| `characteristics` | array | 특징 (본문) | - |
| `importance` | number | 중요도 (1-5) | `4` |

### 선택 필드

| 필드 | 타입 | 설명 | 예시 |
|-----|------|------|-----|
| `mnemonic` | string | 암기 두음 (본문) | `정탐해` |
| `relatedTopics` | array | 연관 토픽 ID | `[data-structures-001]` |
| `trends` | array | 최신 트렌드 | `[양자 알고리즘]` |

### 카테고리 값

#### category (도메인 카테고리)
- `fundamental` - 공통 필수
- `management-focus` - 정보관리 집중
- `technical-focus` - 컴퓨터시스템 집중
- `digital-service` - 최신 트렌드

#### difficulty (난이도)
- `basic` - 기초
- `intermediate` - 중급
- `advanced` - 고급

#### certifications (기술사 종류)
- `information-management` - 정보관리기술사
- `computer-systems` - 컴퓨터시스템기술사

---

## 빠른 참조

### 최소 템플릿

```markdown
---
id: topic-name-001
title: 토픽 제목
category: technical-focus
subcategory: 과목명
subjectCategories:
  - XX
difficulty: intermediate
certifications:
  - computer-systems
keywords:
  - 키워드1
  - 키워드2
importance: 3
---

## 암기 두음
암기 두음 내용

# 정의
토픽에 대한 명확한 정의

## 특징
- 특징 1
- 특징 2
```

### 명령어 요약

```bash
# 1. 토픽 빌드
npm run topics:build

# 2. 개발 서버 실행
npm run dev

# 3. 프로덕션 빌드 (자동으로 topics:build 실행됨)
npm run build
```

---

## 도움말

문제가 발생하면:
1. `npm run topics:build` 실행 시 오류 메시지 확인
2. 마크다운 파일의 frontmatter 형식 검증
3. 헤딩 레벨과 공백 라인 확인
4. 예시 파일(`src/data/topics/AL/algorithms-001.md`) 참고
