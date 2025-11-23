# 프로젝트 구축 시행착오 및 해결 방법

React + TypeScript + Vite 프로젝트 구축 시 발생한 문제들과 해결 방법을 정리한 문서입니다.

## 목차
1. [Tailwind CSS 버전 문제](#1-tailwind-css-버전-문제)
2. [TypeScript 타입 Import 문제](#2-typescript-타입-import-문제)
3. [JSON 파일 Import 설정](#3-json-파일-import-설정)
4. [외부 라이브러리 타입 Import 문제](#4-외부-라이브러리-타입-import-문제)
5. [체크리스트](#5-프로젝트-설정-체크리스트)

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

**작성일**: 2025-11-23
**프로젝트**: 기술사 학습 포털
**스택**: React 18 + TypeScript + Vite + Tailwind CSS v3
