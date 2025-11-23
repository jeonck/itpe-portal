# 프로젝트 구축 시행착오 및 해결 방법

React + TypeScript + Vite 프로젝트 구축 시 발생한 문제들과 해결 방법을 정리한 문서입니다.

## 목차
1. [Tailwind CSS 버전 문제](#1-tailwind-css-버전-문제)
2. [TypeScript 타입 Import 문제](#2-typescript-타입-import-문제)
3. [JSON 파일 Import 설정](#3-json-파일-import-설정)
4. [외부 라이브러리 타입 Import 문제](#4-외부-라이브러리-타입-import-문제)
5. [프로젝트 설정 체크리스트](#5-프로젝트-설정-체크리스트)
6. [마크다운 토픽 로딩 실패 (백지 페이지)](#6-마크다운-토픽-로딩-실패-백지-페이지)
7. [파일 수정 충돌 문제](#7-파일-수정-충돌-문제)
8. [토픽 상세 페이지 UI 중복 표시](#8-토픽-상세-페이지-ui-중복-표시)

---

## 1. Tailwind CSS 버전 문제

### 문제
```
[postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package...
```

### 원인
- Tailwind CSS v4 베타 버전의 불안정성
- PostCSS 플러그인이 별도 패키지로 분리됨
- 새로운 `@import` 문법과 기존 `@tailwind` 디렉티브 호환성 문제

### 해결 방법
**안정적인 v3 버전 사용**

```bash
# v4 제거
npm uninstall tailwindcss @tailwindcss/postcss

# v3 설치
npm install -D tailwindcss@^3 postcss autoprefixer
```

**postcss.config.js**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**CSS 파일 (src/index.css)**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900;
  }
}
```

### 권장 사항
- ✅ **프로덕션 프로젝트에서는 안정 버전(v3) 사용**
- ❌ 베타/실험적 버전 사용 지양
- 📦 `package.json`에 정확한 버전 명시 (`^3.4.0` 형식)

---

## 2. TypeScript 타입 Import 문제

### 문제
```
Uncaught SyntaxError: The requested module '/src/types/index.ts'
does not provide an export named 'CertificationType'
```

### 원인
- TypeScript의 `verbatimModuleSyntax: true` 설정
- 타입과 값의 import를 명확히 구분해야 함
- Vite가 런타임에 타입 import를 제거하지 못함

### 해결 방법
**타입은 반드시 `import type` 사용**

❌ **잘못된 방법**
```typescript
import { Topic, DomainCategory, DifficultyLevel } from '../types';
```

✅ **올바른 방법**
```typescript
import type { Topic, DomainCategory, DifficultyLevel } from '../types';
```

### 권장 사항
- 모든 타입/인터페이스 import에는 `import type` 사용
- ESLint 규칙 추가:
```json
{
  "rules": {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { "prefer": "type-imports" }
    ]
  }
}
```

---

## 3. JSON 파일 Import 설정

### 문제
```typescript
import topicsData from '../data/topics.json'; // 타입 에러 또는 실행 오류
```

### 원인
- TypeScript가 JSON 모듈을 인식하지 못함
- `resolveJsonModule` 옵션이 비활성화됨

### 해결 방법
**tsconfig.app.json 또는 tsconfig.json 수정**

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "resolveJsonModule": true,  // ← 추가
    "allowImportingTsExtensions": true,
    // ... 기타 설정
  }
}
```

### 사용 예시
```typescript
import topicsData from '../data/topics.json';
import type { Topic } from '../types';

const topics = topicsData as Topic[];
```

---

## 4. 외부 라이브러리 타입 Import 문제

### 문제 (@xyflow/react 예시)
```
Uncaught SyntaxError: The requested module does not provide
an export named 'Edge'
```

### 원인
- 라이브러리의 타입 export 방식 차이
- Named export vs Default export
- TypeScript의 `verbatimModuleSyntax` 모드

### 해결 방법
**인라인 타입 import 사용**

❌ **작동하지 않는 방법**
```typescript
import { Node, Edge } from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
```

✅ **올바른 방법**
```typescript
import {
  ReactFlow,
  Controls,
  Background,
  type Node,  // ← 인라인 타입 import
  type Edge,
} from '@xyflow/react';
```

### 권장 사항
- 외부 라이브러리 설치 후 타입 import 테스트
- 공식 문서의 TypeScript 예제 확인
- 타입 정의 파일 확인: `node_modules/@types/...` 또는 라이브러리 내 `.d.ts`

---

## 5. 프로젝트 설정 체크리스트

새 프로젝트 시작 시 반드시 확인해야 할 항목들입니다.

### 📦 패키지 설치

```bash
# 기본 설정
npm create vite@latest my-project -- --template react-ts
cd my-project
npm install

# Tailwind CSS (v3 안정 버전)
npm install -D tailwindcss@^3 postcss autoprefixer

# 라우팅
npm install react-router-dom

# 필요한 추가 라이브러리
npm install lucide-react  # 아이콘
```

### ⚙️ 설정 파일

**1. tsconfig.app.json**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,        // ✅ JSON import
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "jsx": "react-jsx",
    "strict": true
  }
}
```

**2. tailwind.config.js**
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**3. postcss.config.js**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**4. src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 📝 코딩 규칙

**타입 Import**
```typescript
// ✅ 타입만 import할 때
import type { User, Product } from './types';

// ✅ 타입과 값을 함께 import할 때
import { useState } from 'react';
import type { FC } from 'react';

// ✅ 외부 라이브러리 타입
import { Button, type ButtonProps } from 'some-library';
```

**JSON Import**
```typescript
import data from './data.json';
import type { DataType } from './types';

const typedData = data as DataType[];
```

### 🐛 디버깅 팁

**문제 발생 시 체크 순서**

1. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 빨간색 에러 메시지 확인

2. **개발 서버 로그 확인**
   - 터미널에서 에러 메시지 확인
   - Vite 컴파일 에러 확인

3. **타입 에러 확인**
   ```bash
   npx tsc --noEmit
   ```

4. **캐시 삭제 및 재설치**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **의존성 버전 확인**
   ```bash
   npm list <package-name>
   npm outdated
   ```

### 🔧 유용한 VS Code 설정

**.vscode/settings.json**
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```

---

## 요약

### 핵심 원칙

1. **안정 버전 사용** - 프로덕션에서는 베타 버전 지양
2. **타입 명시** - `import type`으로 타입과 값 구분
3. **설정 확인** - `resolveJsonModule`, `verbatimModuleSyntax` 등
4. **공식 문서 참조** - 라이브러리별 TypeScript 가이드 확인
5. **점진적 추가** - 기능을 하나씩 추가하며 테스트

### 문제 발생 시

1. 에러 메시지 정확히 읽기
2. 브라우저 콘솔 + 터미널 로그 모두 확인
3. 설정 파일 점검
4. 공식 문서 및 GitHub Issues 검색
5. 최소 재현 케이스 만들기

---

## 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- [React Router 공식 문서](https://reactrouter.com/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

## 6. 마크다운 토픽 로딩 실패 (백지 페이지)

### 문제
- 토픽 위키 메뉴 클릭 시 백지 화면 표시
- 마인드맵 메뉴 클릭 시 백지 화면 표시
- 브라우저 콘솔 로그: `Loading topics from: []` (파일을 찾지 못함)

### 원인
런타임에 마크다운 파일을 동적으로 로드하려는 시도가 실패했습니다.

**실패한 접근법:**
```typescript
// loadTopics.ts - 작동하지 않음
const topicFiles = import.meta.glob('../data/topics/*.md', {
  query: '?raw',
  eager: true
});
```

Vite의 `import.meta.glob`이 예상대로 작동하지 않아 파일을 찾지 못했습니다.

### 해결 방법
**빌드 타임 변환(Build-time Conversion)** 방식으로 전환했습니다.

#### 1. 마크다운 파일을 소스로 유지
```markdown
<!-- src/data/topics/example-001.md -->
---
id: example-001
title: 예시 토픽
category: fundamental
subcategory: 소프트웨어 공학
subjectCategories: [SE]
difficulty: intermediate
certifications: [information-management, computer-systems]
keywords: [키워드1, 키워드2]
importance: 5
relatedTopics: [related-001]
trends: [트렌드1, 트렌드2]
---

# 정의
토픽의 정의 내용

## 특징
- 특징 1: 상세 설명
- 특징 2: 상세 설명
```

#### 2. 빌드 스크립트 작성 (`scripts/buildTopics.js`)
```javascript
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const topicsDir = path.join(__dirname, '../src/data/topics');
const outputFile = path.join(__dirname, '../src/data/topics.json');

// 마크다운 파일 읽기
const files = fs.readdirSync(topicsDir)
  .filter(file => file.endsWith('.md'));

const topics = files.map(file => {
  const filePath = path.join(topicsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Frontmatter와 본문 파싱
  const { data, content: markdownContent } = matter(content);

  // 본문에서 정의와 특징 추출
  const lines = markdownContent.trim().split('\n');
  const definitionIndex = lines.findIndex(line => line.startsWith('# 정의'));
  const characteristicsIndex = lines.findIndex(line => line.startsWith('## 특징'));

  const definition = lines[definitionIndex + 1]?.trim() || '';
  const characteristics = lines
    .slice(characteristicsIndex + 1)
    .filter(line => line.startsWith('- '))
    .map(line => line.substring(2).trim());

  return {
    id: data.id,
    title: data.title,
    category: data.category,
    subcategory: data.subcategory,
    subjectCategories: data.subjectCategories || [],
    difficulty: data.difficulty,
    certifications: data.certifications,
    keywords: data.keywords,
    definition,
    characteristics,
    relatedTopics: data.relatedTopics || [],
    importance: data.importance,
    ...(data.trends && { trends: data.trends })
  };
});

// JSON 파일 생성
fs.writeFileSync(outputFile, JSON.stringify(topics, null, 2));
console.log(`✅ Successfully converted ${topics.length} markdown files to topics.json!`);
```

#### 3. package.json에 빌드 스크립트 추가
```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run topics:build && tsc -b && vite build",
    "topics:build": "node scripts/buildTopics.js"
  },
  "devDependencies": {
    "gray-matter": "^4.0.3"
  }
}
```

#### 4. 컴포넌트에서 JSON 직접 import
```typescript
// TopicWiki.tsx, MindMap.tsx
import topicsData from '../data/topics.json';
import type { Topic } from '../types';

const topics = topicsData as Topic[];
```

### 장점
- ✅ Vite 빌드 시스템과 완벽한 호환성
- ✅ 런타임 오버헤드 없음 (이미 JSON으로 변환됨)
- ✅ 마크다운으로 토픽 관리 용이
- ✅ 타입 안정성 유지
- ✅ 빌드 시 자동 변환

### 토픽 추가 워크플로우
```bash
# 1. 마크다운 파일 작성
vi src/data/topics/new-topic-001.md

# 2. 빌드 스크립트 실행
npm run topics:build

# 3. 결과 확인
cat src/data/topics.json

# 4. 개발 서버에서 확인
npm run dev
```

### 관련 파일
- `scripts/buildTopics.js` - 변환 스크립트
- `src/data/topics/*.md` - 마크다운 소스 파일
- `src/data/topics.json` - 자동 생성된 JSON (Git에 포함)
- `src/pages/TopicWiki.tsx` - 토픽 목록/상세 페이지
- `src/pages/MindMap.tsx` - 마인드맵 페이지

---

## 7. 파일 수정 충돌 문제

### 문제
```
Error: File has been modified since read, either by the user or by a linter
```

### 원인
`App.tsx` 파일을 읽은 후, 사용자가 수동으로 `BrowserRouter`를 `HashRouter`로 변경했으나, 이전에 읽은 내용을 기반으로 파일을 수정하려고 시도했습니다.

### 상세 상황
1. Claude가 `App.tsx` 파일을 읽음
2. 사용자가 직접 파일 수정 (BrowserRouter → HashRouter)
3. Claude가 이전에 읽은 내용을 기반으로 Edit 시도
4. 파일 내용 불일치로 에러 발생

### 해결 방법
파일을 다시 읽어서 최신 내용을 확인한 후 수정 작업을 수행합니다.

```typescript
// 1. 최신 내용 다시 읽기
<Read file_path="App.tsx" />

// 2. 현재 상태 확인 후 수정
<Edit
  file_path="App.tsx"
  old_string="현재 실제 파일 내용"
  new_string="변경할 내용"
/>
```

### 예방책
- ✅ 파일 수정 전 항상 최신 내용 확인
- ✅ Read tool을 사용하여 현재 상태 파악
- ✅ 수정 시점과 읽기 시점 사이에 다른 작업이 없도록 주의
- ✅ Linter나 Formatter가 자동으로 파일을 변경하는 경우 고려

### 관련 상황
이 에러는 다음과 같은 경우에도 발생할 수 있습니다:
- Prettier, ESLint 등의 자동 포맷팅
- Git auto-CRLF 변환
- 다른 편집기에서 동시 수정
- 파일 감시 도구(file watcher)의 자동 변경

---

## 8. 토픽 상세 페이지 UI 중복 표시

### 문제
새로 추가한 정보관리 토픽(ISP/ISMP, PMBOK 등)을 클릭하면, 토픽 상세 내용 위에 "XX개의 토픽"이라는 카운트가 함께 표시되었습니다.

### 원인
조건부 렌더링 구조에서 "Results Count" 섹션이 `selectedTopic` 조건 분기 외부에 위치하여, 상세 페이지와 목록 페이지 모두에서 표시되었습니다.

**문제가 있던 코드:**
```tsx
{/* Results Count - 항상 표시됨 ❌ */}
<div className="text-sm text-gray-600">
  {filteredTopics.length}개의 토픽
</div>

{/* Topics Grid or Detail View */}
{selectedTopic ? (
  /* 상세 페이지 */
  <div className="space-y-6">
    <button onClick={() => setSelectedTopic(null)}>
      ← 목록으로 돌아가기
    </button>
    {/* 토픽 상세 내용 */}
  </div>
) : (
  /* 목록 페이지 */
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* 토픽 카드들 */}
  </div>
)}
```

### 해결 방법
Results Count를 목록 페이지 조건 분기 내부로 이동했습니다.

**수정된 코드:**
```tsx
{/* Topics Grid or Detail View */}
{selectedTopic ? (
  /* 상세 페이지 - Results Count 없음 ✅ */
  <div className="space-y-6">
    <button onClick={() => setSelectedTopic(null)}>
      ← 목록으로 돌아가기
    </button>
    <div className="card space-y-6">
      {/* 토픽 상세 내용 */}
      <h2>{selectedTopic.title}</h2>
      <div>{selectedTopic.definition}</div>
      {/* ... */}
    </div>
  </div>
) : (
  /* 목록 페이지 ✅ */
  <>
    {/* Results Count - 목록에서만 표시 */}
    <div className="text-sm text-gray-600">
      {filteredTopics.length}개의 토픽
    </div>

    {/* Topics Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTopics.map((topic) => (
        <button key={topic.id} onClick={() => setSelectedTopic(topic)}>
          {/* 토픽 카드 */}
        </button>
      ))}
    </div>
  </>
)}
```

### 핵심 변경사항
1. **Fragment 사용**: `<>...</>` 를 사용하여 목록 페이지의 여러 요소 그룹화
2. **조건부 배치**: Results Count를 Fragment 내부로 이동
3. **UI 분리**: 상세 페이지에서는 불필요한 UI 요소 제거

### 조건부 렌더링 베스트 프랙티스

**올바른 패턴:**
```tsx
{condition ? (
  // True 케이스 전용 UI
  <DetailView />
) : (
  // False 케이스 전용 UI
  <>
    <Counter />
    <ListView />
  </>
)}
```

**피해야 할 패턴:**
```tsx
{/* ❌ 조건과 무관하게 항상 표시 */}
<AlwaysVisible />

{condition ? (
  <DetailView />
) : (
  <ListView />
)}
```

### 관련 파일
- `src/pages/TopicWiki.tsx` (Line 196-352)

---

**작성일**: 2025-11-23
**최종 수정**: 2025-11-23
**프로젝트**: 기술사 학습 포털
**스택**: React 18 + TypeScript + Vite + Tailwind CSS v3
