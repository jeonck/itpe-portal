# GitHub Pages 배포 및 프로젝트 설정 트러블슈팅 가이드

이 문서는 React 프로젝트를 GitHub Pages에 배포하고 프로젝트를 설정하는 과정에서 발생할 수 있는 일반적인 문제들과 그 해결책을 정리한 가이드입니다. 향후 유사한 프로젝트를 진행할 때 시행착오를 줄이는 데 활용될 수 있습니다.

---

## 1. `Property 'subjectCategories' is missing` 빌드 에러 (TS2741)

### 문제 상황
`npm run build` 실행 시 `src/utils/loadTopics.ts` 파일에서 `Property 'subjectCategories' is missing in type ... but required in type 'Topic'`과 같은 TypeScript 에러가 발생하며 빌드가 실패합니다.

### 원인
`src/types/index.ts`에 정의된 `Topic` 인터페이스는 `subjectCategories` 속성을 필수로 요구하지만, `src/utils/loadTopics.ts`에서 마크다운 파일의 frontmatter를 파싱하여 `Topic` 객체를 생성할 때 이 `subjectCategories` 속성을 제대로 포함하지 않았기 때문에 발생합니다.

### 해결책
`src/utils/loadTopics.ts` 파일 내에서 `Topic` 객체를 생성하는 부분에 `subjectCategories` 속성을 추가합니다. `scripts/buildTopics.js`에서 이미 `data.subjectCategories || []` 형태로 처리하고 있으므로, 이와 동일하게 속성이 없을 경우 빈 배열을 기본값으로 사용하도록 합니다.

```typescript
// src/utils/loadTopics.ts
const topic: Topic = {
  id: data.id,
  title: data.title,
  category: data.category,
  subcategory: data.subcategory,
  subjectCategories: data.subjectCategories || [], // 이 라인을 추가
  difficulty: data.difficulty,
  certifications: data.certifications,
  keywords: data.keywords,
  definition: extractDefinition(content),
  characteristics: extractCharacteristics(content),
  relatedTopics: data.relatedTopics || [],
  importance: data.importance,
  trends: data.trends,
};
```

---

## 2. GitHub Pages 배포 후 웹사이트가 백지로 표시되는 문제

### 문제 상황
GitHub Pages(`https://username.github.io/repository-name/`)로 배포된 React 애플리케이션에 접속했을 때 웹사이트가 빈 화면(백지)으로 표시됩니다. 개발자 도구(Console/Network 탭)를 확인하면 자산(CSS, JS) 파일 로드에 실패하거나 라우팅 오류가 발생하는 것을 볼 수 있습니다.

### 원인
1.  **잘못된 `base` 경로 설정**: Vite와 같은 번들러는 기본적으로 `/`를 기준으로 자산 경로를 설정합니다. GitHub Pages의 서브디렉토리(`repository-name/`)에 배포될 경우, 번들링된 자산의 경로(예: `/assets/index.js`)가 실제 경로(`/repository-name/assets/index.js`)와 일치하지 않아 로드에 실패합니다.
2.  **`BrowserRouter` 사용**: React Router의 `BrowserRouter`는 HTML5 History API를 사용하여 깔끔한 URL(`example.com/about`)을 제공하지만, 정적 웹 서버 환경에서 직접 해당 URL로 접근하거나 새로고침할 경우 서버가 해당 경로의 파일을 찾지 못해 404 오류가 발생합니다.

### 해결책
1.  **`vite.config.ts`에 `base` 경로 설정**:
    `vite.config.ts` 파일에 `base` 옵션을 GitHub 저장소 이름과 일치하도록 설정합니다. (예: 저장소 이름이 `itpe-portal`이라면 `/itpe-portal/`)

    ```typescript
    // vite.config.ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      base: '/itpe-portal/', // GitHub 저장소 이름으로 설정
      plugins: [react()],
    })
    ```

2.  **`BrowserRouter`를 `HashRouter`로 변경**:
    `src/App.tsx` (또는 라우터가 정의된 파일)에서 `react-router-dom`의 `BrowserRouter`를 `HashRouter`로 변경합니다. `HashRouter`는 URL의 해시(`/#/`)를 사용하여 라우팅을 관리하므로 정적 서버에서 404 오류를 발생시키지 않습니다.

    ```typescript
    // src/App.tsx
    // 기존: import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { HashRouter as Router, Routes, Route } from 'react-router-dom';
    // ...

    function App() {
      return (
        <Router> {/* import alias를 사용하므로 여기는 변경할 필요 없음 */}
          {/* ... 라우트들 ... */}
        </Router>
      );
    }
    ```

---

## 3. `ReferenceError: file is not defined` 빌드 에러 (scripts/buildTopics.js)

### 문제 상황
`npm run build` 실행 시 `scripts/buildTopics.js` 파일에서 `ReferenceError: file is not defined` 에러가 발생하며 빌드가 실패합니다. 이는 `topics:build` 스크립트 실행 중에 발생합니다.

### 원인
`scripts/buildTopics.js` 스크립트에서 마크다운 파일을 재귀적으로 검색하기 위해 `fs.readdirSync`에서 `globSync`로 변경하는 과정에서 `files.forEach` 루프의 변수 이름이 `file`에서 `filePath`로 변경되었으나, 내부 `console.log` 구문이 여전히 `file` 변수를 참조하고 있었기 때문입니다.

### 해결책
`scripts/buildTopics.js` 파일에서 `console.log` 구문을 `file` 대신 `filePath` 변수를 사용하도록 수정합니다. 또한, 파일 이름만 출력하려면 `path.basename()`을 사용합니다.

```javascript
// scripts/buildTopics.js
// ...
files.forEach((filePath) => { // 'file'이 'filePath'로 변경됨
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // ...
  // 기존: console.log(`Processed: ${file}`);
  console.log(`Processed: ${path.basename(filePath)}`); // 이 라인을 수정
});
// ...
```

---

이 트러블슈팅 가이드가 향후 프로젝트 설정 및 배포 과정에서 발생할 수 있는 유사한 문제를 해결하는 데 도움이 되기를 바랍니다.
