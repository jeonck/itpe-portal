# AI를 위한 토픽 추가 절차 가이드

이 문서는 AI 어시스턴트가 ITPE Portal 프로젝트에 새로운 토픽을 추가할 때 따라야 할 단계별 절차를 설명합니다.

---

## 📋 사전 확인 사항

1. **프로젝트 루트 경로**: `/Users/mac/ws/gemini/itpe-portal`
2. **토픽 저장 위치**: `src/data/topics/<SubjectCategory>/`
3. **파일 명명 규칙**: `lowercase-topic-name-001.md`

---

## 🎯 단계별 절차

### STEP 1: 과목 카테고리(SubjectCategory) 결정

토픽이 속할 주 과목 카테고리를 결정합니다.

**유효한 과목 카테고리** (src/types/index.ts 참조):
- `SE` - Software Engineering (소프트웨어 공학)
- `DB` - Database (데이터베이스)
- `NW` - Network (네트워크)
- `IS` - Information Security (정보보안)
- `IM` - IT Management (IT경영)
- `PM` - Project Management (프로젝트 관리)
- `CA` - Computer Architecture (컴퓨터 구조)
- `OS` - Operating System (운영체제)
- `AL` - Algorithm (알고리즘)
- `DS` - Digital Service (디지털 서비스)

**예시**: SRE 토픽의 경우 → `SE` (소프트웨어 공학)

---

### STEP 2: 마크다운 파일 생성

파일 경로: `src/data/topics/<SubjectCategory>/<topic-id>.md`

**파일명 규칙**:
- 모두 소문자
- 단어는 하이픈(-)으로 구분
- 끝에 `-001` 붙임
- 예: `sre-001.md`, `api-design-001.md`

---

### STEP 3: Frontmatter 작성

마크다운 파일 상단에 YAML 형식으로 메타데이터를 작성합니다.

```yaml
---
id: topic-id-001                    # 필수: 파일명과 동일 (확장자 제외)
title: 토픽 제목                     # 필수: 화면에 표시될 제목
category: domain-category           # 필수: fundamental | management-focus | technical-focus | digital-service
subcategory: 세부 분류              # 필수: 자유 텍스트
subjectCategories:                  # 필수: 배열, 첫 번째 항목이 파일 저장 위치 결정
  - SE
  - DS
difficulty: intermediate            # 필수: basic | intermediate | advanced
certifications:                     # 필수: 배열
  - information-management
  - computer-systems
keywords:                           # 필수: 배열, 검색용 키워드
  - 키워드1
  - 키워드2
importance: 5                       # 필수: 1-5 사이 숫자
relatedTopics:                      # 선택: 연관 토픽 ID 배열
  - sdlc-001
  - agile-devops-001
trends:                             # 선택: 최신 트렌드 배열
  - 트렌드1
  - 트렌드2
tags:                               # 선택: 토픽 태그 배열
  - '2025'
---
```

#### Frontmatter 필드 설명

| 필드 | 필수 | 타입 | 설명 | 예시 |
|------|------|------|------|------|
| `id` | ✅ | string | 파일명과 동일 (확장자 제외) | `sre-001` |
| `title` | ✅ | string | 화면 표시 제목 | `SRE (Site Reliability Engineering)` |
| `category` | ✅ | DomainCategory | 도메인 카테고리 | `digital-service` |
| `subcategory` | ✅ | string | 세부 분류 | `운영 및 신뢰성` |
| `subjectCategories` | ✅ | string[] | 과목 카테고리 배열 (첫 번째가 파일 위치) | `['SE', 'DS']` |
| `difficulty` | ✅ | DifficultyLevel | 난이도 | `advanced` |
| `certifications` | ✅ | string[] | 관련 기술사 자격증 | `['information-management']` |
| `keywords` | ✅ | string[] | 검색 키워드 | `['SLI', 'SLO', 'SLA']` |
| `importance` | ✅ | number | 중요도 (1-5) | `5` |
| `relatedTopics` | ❌ | string[] | 연관 토픽 ID | `['agile-devops-001']` |
| `trends` | ❌ | string[] | 최신 트렌드 | `['AIOps']` |
| `tags` | ❌ | string[] | 토픽 태그 (UI 필터 및 배지 표시) | `['2025']` |

#### tags 필드 활용

`tags` 필드는 UI에서 다음과 같이 활용됩니다:

1. **도메인 카테고리 필터**: 토픽 위키 페이지에서 "2025 신규" 버튼 클릭 시 `tags: ['2025']`가 있는 토픽만 필터링됩니다.
2. **배지 표시**: 토픽 카드와 상세 페이지에 "2025 신규" 핑크색 배지가 자동으로 표시됩니다.
3. **그룹화**: 특정 년도나 주제별로 토픽을 그룹화할 수 있습니다.

**사용 예시**:
```yaml
tags:
  - '2025'  # 2025년에 추가된 신규 토픽
```

**DomainCategory 값**:
- `fundamental` - 공통 필수
- `management-focus` - 정보관리 집중
- `technical-focus` - 컴퓨터시스템응용 집중
- `digital-service` - 최신 기술 트렌드

---

### STEP 4: 본문 내용 작성

Frontmatter 아래에 본문을 작성합니다.

#### 4.1 암기 두음 (선택사항)

```markdown
## 암기 두음
슬아에 (SLI-SLO-Error Budget)
```

#### 4.2 정의 (필수)

```markdown
# 정의
토픽에 대한 간결하고 명확한 정의를 1-2문장으로 작성합니다.
```

#### 4.3 특징 (필수)

```markdown
## 특징
- 주요 특징 1: 설명
- 주요 특징 2: 설명
- 주요 특징 3: 설명
```

#### 4.4 최신 트렌드 (선택사항)

```markdown
## 최신 트렌드
- 트렌드 1
- 트렌드 2
```

---

### STEP 5: 완성된 마크다운 파일 예시

```markdown
---
id: sre-001
title: SRE (Site Reliability Engineering)
category: digital-service
subcategory: 운영 및 신뢰성
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - SLI
  - SLO
  - SLA
  - Error Budget
importance: 5
relatedTopics:
  - agile-devops-001
  - kubernetes-001
trends:
  - Observability Engineering
  - AIOps
tags:
  - '2025'
---

# 정의
시스템의 신뢰성과 확장성을 소프트웨어 엔지니어링 원칙으로 관리하는 Google 발 운영 방법론으로, SLI/SLO/SLA 기반의 정량적 목표 관리를 추구합니다.

## 특징
- SLI (Service Level Indicator): 서비스 수준 측정 지표
- SLO (Service Level Objective): 서비스 수준 목표
- SLA (Service Level Agreement): 고객과의 서비스 수준 계약
- Error Budget: 목표 대비 허용 가능한 오류 범위

## 최신 트렌드
- Observability Engineering
- AIOps
```

---

### STEP 6: topics.json 업데이트 (빌드)

마크다운 파일을 생성한 후, 반드시 빌드 명령어를 실행해야 합니다.

```bash
npm run build
```

**이 명령어가 하는 일**:
1. `scripts/buildTopics.js` 스크립트 실행
2. `src/data/topics/**/*.md` 파일들을 파싱
3. Frontmatter와 본문 내용을 추출
4. `src/data/topics.json` 파일 생성/업데이트
5. TypeScript 컴파일 및 Vite 프로덕션 빌드

**빌드 성공 확인**:
```
✅ Successfully converted XX markdown files to topics.json!
```

---

### STEP 7: 검증 (선택사항)

로컬 개발 서버로 확인:

```bash
npm run dev
```

브라우저에서 `http://localhost:5173/#/topics` 접속하여 새 토픽이 목록에 표시되는지 확인합니다.

---

## 🔍 buildTopics.js 스크립트 동작 원리

`scripts/buildTopics.js`는 다음과 같이 동작합니다:

1. **마크다운 파일 검색**: `src/data/topics/**/*.md` 패턴으로 모든 토픽 파일 찾기
2. **Frontmatter 파싱**: `gray-matter` 라이브러리로 YAML 메타데이터 추출
3. **본문 파싱**:
   - `## 암기 두음` 섹션 추출 → `mnemonic` 필드
   - `# 정의` 섹션 추출 → `definition` 필드
   - `## 특징` 섹션의 리스트 항목 추출 → `characteristics` 배열
4. **JSON 객체 생성**: Topic 인터페이스에 맞춰 객체 생성
5. **JSON 파일 저장**: `src/data/topics.json`에 전체 토픽 배열 저장

---

## ✅ 체크리스트

토픽 추가 시 다음 사항을 확인하세요:

- [ ] 파일명이 `lowercase-topic-name-001.md` 형식인가?
- [ ] 파일이 올바른 과목 카테고리 디렉토리에 있는가?
- [ ] `id` 필드가 파일명(확장자 제외)과 일치하는가?
- [ ] 모든 필수 필드가 작성되었는가?
- [ ] `subjectCategories` 배열의 첫 번째 항목이 파일 위치와 일치하는가?
- [ ] 신규 토픽인 경우 `tags: ['2025']` 필드를 추가했는가?
- [ ] `# 정의`와 `## 특징` 섹션이 작성되었는가?
- [ ] `npm run build` 명령어를 실행했는가?
- [ ] 빌드가 성공적으로 완료되었는가?
- [ ] (선택) 로컬 서버에서 "2025 신규" 필터로 토픽이 조회되는지 확인했는가?

---

## 🚨 주의사항

### 1. Frontmatter 형식 엄수
- YAML 형식을 정확히 지켜야 합니다
- 들여쓰기는 2칸 스페이스 사용
- 문자열에 콜론(:)이 포함되면 따옴표로 감싸기

### 2. tags 필드 사용 및 UI 반영
```yaml
tags:
  - '2025'  # 올바름: 따옴표로 감싸기
  - 2025    # 잘못됨: 숫자로 해석됨
```

**tags 필드의 UI 효과**:
- `tags: ['2025']` 추가 시:
  - 도메인 카테고리에서 "2025 신규" 필터로 조회 가능
  - 토픽 카드와 상세 페이지에 "2025 신규" 핑크색 배지 자동 표시
  - 신규 토픽임을 사용자에게 시각적으로 알림

**언제 tags를 추가해야 하는가**:
- 새로운 년도에 추가된 토픽: `tags: ['2025']`, `tags: ['2026']` 등
- 특정 주제별 그룹화가 필요한 경우

### 3. 파일 위치와 subjectCategories 일치
```yaml
# 파일: src/data/topics/SE/sre-001.md
subjectCategories:
  - SE  # 첫 번째 항목이 SE여야 함
  - DS
```

### 4. relatedTopics는 존재하는 토픽 ID만
- 존재하지 않는 토픽 ID를 참조하면 연결이 깨짐
- 다른 토픽 파일의 `id` 필드를 확인하고 작성

---

## 📝 여러 개 토픽 추가 시 워크플로우

여러 개의 토픽을 한 번에 추가하는 경우:

1. 모든 마크다운 파일을 먼저 생성
2. 한 번에 `npm run build` 실행
3. 한 번의 빌드로 모든 토픽이 topics.json에 반영됨

**예시**:
```bash
# 1. 토픽 파일들 생성
Write src/data/topics/SE/topic1-001.md
Write src/data/topics/SE/topic2-001.md
Write src/data/topics/SE/topic3-001.md

# 2. 한 번에 빌드
npm run build
```

---

## 🔗 관련 파일

- **타입 정의**: `src/types/index.ts` - Topic 인터페이스 확인
- **빌드 스크립트**: `scripts/buildTopics.js` - 마크다운 → JSON 변환 로직
- **토픽 저장소**: `src/data/topics/` - 모든 토픽 마크다운 파일
- **JSON 출력**: `src/data/topics.json` - 빌드된 토픽 데이터

---

## 🎓 예제: 전체 프로세스

```bash
# 1. 파일 생성
Write src/data/topics/SE/sre-001.md

# 2. Frontmatter + 본문 작성 (위 예시 참조)

# 3. 빌드 실행
npm run build

# 4. 결과 확인
npm run dev
# 브라우저에서 http://localhost:5173/#/topics 확인
```

---

이 가이드를 따라 토픽을 추가하면, 프로젝트의 일관성을 유지하면서 새로운 내용을 확장할 수 있습니다.
