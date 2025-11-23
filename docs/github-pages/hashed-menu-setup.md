# GitHub Pages 배포를 위한 Hashed Menu (HashRouter) 설정 가이드

이 문서는 React 애플리케이션을 GitHub Pages에 배포할 때, 클라이언트 측 라우팅 문제를 해결하기 위해 `HashRouter`를 사용하는 방법을 설명합니다. 특히 GitHub Pages의 서브디렉토리에 배포될 때 유용하며, `새로고침` 시 404 오류를 방지할 수 있습니다. 다음 프로젝트에서도 이 가이드를 활용할 수 있습니다.

## 1. HashRouter란?

`HashRouter`는 URL의 해시(`#`) 부분을 사용하여 라우팅을 관리하는 방식입니다. 예를 들어, `https://jeonck.github.io/itpe-portal/#/about`과 같이 URL에 `#`이 포함됩니다. 이 방식의 장점은 `#` 뒤의 내용은 서버로 전송되지 않으므로, 정적 서버(GitHub Pages)가 해당 경로를 찾지 못해 발생하는 404 오류를 방지할 수 있다는 점입니다.

## 2. 전제 조건

*   React 프로젝트가 구성되어 있어야 합니다.
*   `react-router-dom` 라이브러리가 설치되어 있어야 합니다.

## 3. 설정 단계

### 단계 1: `react-router-dom` 설치 확인 (필요시)

프로젝트에 `react-router-dom`이 아직 설치되지 않았다면, 다음 명령어를 사용하여 설치합니다.

```bash
npm install react-router-dom
# 또는 pnpm
pnpm install react-router-dom
```

### 단계 2: `vite.config.ts` 설정 확인 (Vite 프로젝트의 경우)

프로젝트가 GitHub Pages의 서브디렉토리(예: `username.github.io/repository-name/`)에 배포되는 경우, `vite.config.ts` 파일에 `base` 옵션을 설정해야 합니다. 이는 Vite가 빌드 시 모든 자산(CSS, JS 등) 경로를 올바르게 처리하도록 합니다.

예시: `itpe-portal` 저장소에 배포하는 경우

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/itpe-portal/', // GitHub 저장소 이름으로 설정
  plugins: [react()],
})
```

### 단계 3: `BrowserRouter`를 `HashRouter`로 변경

애플리케이션의 최상위 라우터 컴포넌트를 `BrowserRouter`에서 `HashRouter`로 변경합니다. 일반적으로 `src/App.tsx` 또는 라우팅이 설정된 메인 컴포넌트에서 이 작업을 수행합니다.

`src/App.tsx` 예시:

```typescript
// src/App.tsx
// 기존: import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicWiki from './pages/TopicWiki';
// ... 다른 페이지 컴포넌트들

function App() {
  return (
    <Router> {/* 여기의 <Router>는 변경할 필요 없음, import alias를 사용하기 때문 */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<TopicWiki />} />
          {/* ... 다른 라우트들 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

### 단계 4: GitHub Pages로 배포

위 변경사항을 커밋하고 GitHub 저장소에 푸시하면, 설정된 GitHub Actions 워크플로우(`deploy.yml`)가 자동으로 트리거되어 변경된 내용으로 사이트를 재배포합니다.

```bash
git add .
git commit -m "feat: configure HashRouter for GitHub Pages deployment"
git push origin main
```

## 4. 유의사항 및 문제 해결

*   **배포 시간:** 변경사항이 GitHub Pages에 적용되는 데에는 몇 분 정도 소요될 수 있습니다.
*   **브라우저 캐시:** 변경사항이 즉시 보이지 않을 경우, 브라우저 캐시를 지우거나 시크릿 모드(Incognito mode)에서 다시 접속해 보세요.
*   **Vite `base` 경로:** `vite.config.ts`의 `base` 경로는 GitHub 저장소의 이름과 정확히 일치해야 합니다 (선행 및 후행 슬래시 포함).

이 가이드가 다음 프로젝트에서 GitHub Pages 배포 시 라우팅 문제를 해결하는 데 도움이 되기를 바랍니다.
