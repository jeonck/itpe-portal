# 새로운 토픽 마크다운 파일 추가 절차

이 문서는 프로젝트에 새로운 기술 토픽을 마크다운 파일 형태로 추가하는 상세 절차를 안내합니다. 최근 토픽 파일 구조가 과목 카테고리별로 리팩토링되었으므로, 이 가이드를 통해 올바른 방법으로 토픽을 추가할 수 있습니다.

---

## 1. 토픽 파일 구조 이해

*   **저장 위치**: 모든 토픽 마크다운 파일은 `src/data/topics/<SubjectCategory>/` 경로에 저장됩니다. `<SubjectCategory>`는 해당 토픽의 주 과목 카테고리에 해당합니다.
*   **파일 이름**: `lowercase-topic-name-001.md`와 같은 형식으로 명명합니다. `-001` 부분은 토픽 ID의 일부로, 동일한 토픽 내에서 버전이나 세부 항목을 구분하는 데 사용될 수 있습니다. (예: `agile-devops-001.md`)
*   **Frontmatter (YAML)**: 각 마크다운 파일의 상단에는 YAML 형식의 Frontmatter 블록이 필수적으로 포함되어야 합니다. 이 블록은 토픽의 메타데이터를 정의하며, `src/types/index.ts`의 `Topic` 인터페이스를 따릅니다.
*   **본문 내용**: Frontmatter 아래에는 `# 정의`와 `## 특징` 섹션을 포함하여 토픽의 핵심 내용을 작성합니다.

---

## 2. 과목 카테고리 (SubjectCategory) 결정 및 디렉토리 생성

새로운 토픽이 속할 주 과목 카테고리(`SubjectCategory`)를 결정합니다. 유효한 과목 카테고리 목록은 `src/types/index.ts` 파일을 참조하세요.

```typescript
// src/types/index.ts (일부 발췌)
export type SubjectCategory =
  | 'SE'  // Software Engineering (소프트웨어 공학)
  | 'DB'  // Database (데이터베이스)
  | 'NW'  // Network (네트워크)
  | 'IS'  // Information Security (정보보안)
  | 'IM'  // IT Management (IT경영)
  | 'PM'  // Project Management (프로젝트 관리)
  | 'CA'  // Computer Architecture (컴퓨터 구조)
  | 'OS'  // Operating System (운영체제)
  | 'AL'  // Algorithm (알고리즘)
  | 'DS'; // Digital Service (디지털 서비스)
```

**절차:**
1.  새 토픽의 주 과목 카테고리를 선택합니다 (예: 'SE').
2.  해당 카테고리 디렉토리가 `src/data/topics/` 아래에 존재하는지 확인합니다.
    *   존재하지 않는다면, 다음 명령어로 디렉토리를 생성합니다:
        ```bash
        mkdir -p src/data/topics/<SubjectCategory>
        # 예시: mkdir -p src/data/topics/AL
        ```

---

## 3. 새로운 마크다운 파일 생성 및 내용 작성

선택한 과목 카테고리 디렉토리 안에 새로운 마크다운 파일을 생성하고 아래 가이드라인에 따라 내용을 작성합니다.

**파일 경로 예시**: `src/data/topics/AL/binary-search-001.md`

### 3.1. Frontmatter (YAML) 작성

다음 템플릿을 참고하여 Frontmatter를 작성합니다. 각 필드는 `src/types/index.ts`의 `Topic` 인터페이스 정의에 부합해야 합니다.

```yaml
---
id: your-topic-id-001 # 필수: 파일 이름과 동일하게 (확장자 제외)
title: 새로운 토픽 제목 # 필수: 화면에 표시될 토픽 제목
category: fundamental # 필수: DomainCategory 중 하나 (fundamental, management-focus, technical-focus, digital-service)
subcategory: 세부 토픽 분류 # 필수: 도메인 내의 세부 분류 (예: 소프트웨어공학, 자료구조)
subjectCategories: # 필수: SubjectCategory 배열. 첫 번째 항목이 파일 저장 디렉토리를 결정
  - SE
  - AL
difficulty: intermediate # 필수: 난이도 (basic, intermediate, advanced)
certifications: # 필수: 관련 기술사 자격증 (information-management, computer-systems)
  - information-management
keywords: # 필수: 토픽의 핵심 키워드 목록
  - 키워드1
  - 키워드2
importance: 3 # 필수: 중요도 (1-5 사이 숫자)
relatedTopics: # 선택 사항: 연관된 다른 토픽의 ID 목록
  - another-topic-id-001
trends: # 선택 사항: 최신 트렌드 관련 내용 목록
  - 트렌드1
  - 트렌드2
---
```

*   `id`: 마크다운 파일의 이름과 정확히 일치해야 합니다 (확장자 제외). (예: `binary-search-001`)
*   `subjectCategories`: 토픽이 여러 과목 카테고리에 걸쳐 있다면 모두 포함할 수 있습니다. 하지만 **첫 번째 항목**이 이 토픽 마크다운 파일이 저장되는 디렉토리를 결정합니다.

### 3.2. 본문 내용 작성

Frontmatter 아래에 토픽의 본문 내용을 작성합니다. 일반적으로 `# 정의`와 `## 특징` 섹션을 포함하는 것을 권장합니다.

```markdown
# 정의
이 토픽에 대한 간결하고 명확한 정의를 작성합니다.

## 특징
- 토픽의 주요 특징 또는 구성 요소를 목록 형태로 작성합니다.
- 각 특징은 한 줄 또는 여러 줄로 설명할 수 있습니다.
- 필요하다면 추가적인 소제목(###)이나 다이어그램, 코드 예시 등을 포함할 수 있습니다.

## [선택 사항] 기타 섹션
- 이외에 필요한 세부 설명, 예시, 동작 원리 등을 추가할 수 있습니다.
```

---

## 4. `topics.json` 파일 업데이트 및 빌드 실행

새로운 마크다운 파일을 추가한 후, 프로젝트의 `topics.json` 파일을 업데이트해야 합니다. `npm run build` 명령은 이 작업을 자동으로 수행합니다.

```bash
npm run build
```

이 명령은 `node scripts/buildTopics.js` (마크다운 파일들을 파싱하여 `topics.json`을 생성)와 `tsc -b && vite build` (TypeScript 컴파일 및 프로덕션 빌드)를 순차적으로 실행합니다.

---

## 5. 변경사항 확인 및 테스트

1.  **로컬 개발 서버 실행**:
    ```bash
    npm run dev
    ```
2.  브라우저에서 `http://localhost:5173/#/topics` (또는 설정된 개발 서버 주소)로 접속합니다.
3.  토픽 위키 페이지에서 추가한 새로운 토픽이 목록에 올바르게 나타나는지 확인합니다.
4.  새로운 토픽을 클릭하여 상세 정보가 올바르게 표시되는지 확인합니다.

---

## 6. Git 저장소에 커밋 및 푸시

모든 변경사항을 확인한 후, Git을 사용하여 저장소에 커밋하고 푸시합니다.

```bash
# 새로 생성한 마크다운 파일 및 관련 변경사항 스테이징
git add src/data/topics/<SubjectCategory>/your-topic-id-001.md
git add src/data/topics.json # topics.json 파일은 build 시 자동으로 생성/수정됨

# 커밋 메시지 작성
git commit -m "feat(topic): add new topic <Your Topic Title>"

# GitHub 저장소에 푸시 (배포 워크플로우 트리거)
git push origin main
```

이 절차를 따르면 새로운 토픽이 성공적으로 프로젝트에 추가되고, GitHub Pages에 배포될 것입니다.
