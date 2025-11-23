# 타이머 기능 추가 중 발생한 오류 및 복구 가이드

이 문서는 React 프로젝트에 새로운 타이머 기능을 추가하는 과정에서 발생할 수 있는 일반적인 TypeScript 컴파일 에러와 그 해결책을 정리한 가이드입니다. 향후 유사한 기능을 구현할 때 시행착오를 줄이는 데 활용될 수 있습니다.

---

## 1. `durations` 변수가 선언되기 전에 사용됨 (`ReferenceError`)

### 문제 상황
새로운 타이머 모드(예: 100분 타이머)를 추가하고 `src/pages/Timer.tsx` 파일을 수정한 후 `npm run build`를 실행했을 때, 다음과 유사한 TypeScript 에러가 발생합니다.

```
src/pages/Timer.tsx:7:44 - error TS2448: Block-scoped variable 'durations' used before its declaration.
src/pages/Timer.tsx:7:44 - error TS2454: Variable 'durations' is used before being assigned.
```
이 에러로 인해 빌드가 실패하고, 페이지 접근 시 빈 화면이 나타날 수 있습니다.

### 원인
JavaScript(및 TypeScript)에서 `const`나 `let`으로 선언된 변수는 선언되기 전에 사용될 수 없습니다 (TDZ: Temporal Dead Zone). `src/pages/Timer.tsx` 파일에서 `durations`와 `labels` 객체가 `useState` 훅의 초기값으로 사용되었는데, 이 `useState` 호출 시점보다 `durations`와 `labels` 변수의 선언이 더 늦게 이루어졌기 때문에 발생한 문제입니다.

**잘못된 코드 예시:**
```typescript
// src/pages/Timer.tsx (오류 발생 코드)
export default function Timer() {
  const [mode, setMode] = useState<TimerMode>('long');
  const [timeLeft, setTimeLeft] = useState(durations['long']); // 여기서 durations를 참조하지만, 아직 선언되지 않음
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const durations: Record<TimerMode, number> = { /* ... */ }; // durations는 여기서 선언됨
  const labels: Record<TimerMode, string> = { /* ... */ };
  // ...
}
```

### 해결책
`durations`와 `labels` 상수가 `useState` 훅들보다 먼저 선언되도록 코드 순서를 변경해야 합니다. 이는 `durations` 객체가 `timeLeft`의 초기값을 계산하는 데 사용되기 전에 이미 존재하도록 보장합니다.

**수정된 코드 예시:**
```typescript
// src/pages/Timer.tsx (수정된 코드)
import { useState, useEffect, useCallback } from 'react';
// ...
import type { TimerMode } from '../types';

export default function Timer() {
  // durations와 labels를 useState 훅들보다 먼저 선언
  const durations: Record<TimerMode, number> = {
    short: 10 * 60,
    long: 25 * 60,
    hundred_minutes: 100 * 60,
  };

  const labels: Record<TimerMode, string> = {
    short: '1교시 용어형',
    long: '2~4교시 논술형',
    hundred_minutes: '실전 모의고사 (100분)',
  };

  const [mode, setMode] = useState<TimerMode>('long');
  const [timeLeft, setTimeLeft] = useState(durations['long']); // 이제 durations가 선언된 후에 참조됨
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // ...
}
```

### 적용 후 조치
1.  변경된 파일을 커밋하고 GitHub에 푸시하여 배포 워크플로우를 트리거합니다.
2.  배포가 완료되면, 브라우저 캐시를 비우고 타이머 페이지에 다시 접속하여 정상적으로 작동하는지 확인합니다.

---

이 가이드가 타이머 기능 구현 시 발생할 수 있는 유사한 변수 선언 관련 오류를 해결하는 데 도움이 되기를 바랍니다.
