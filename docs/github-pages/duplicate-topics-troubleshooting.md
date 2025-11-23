# 토픽 위키 페이지 중복 토픽 오류 해소 가이드

이 문서는 토픽 위키 페이지에서 특정 토픽(`pmbok`, `ea` 등)이 중복되어 나타나거나 필터링 시 예상치 않게 포함되는 문제에 대한 원인 분석 및 해결 과정을 설명합니다. 이는 `key` prop 오류와 함께 목록이 비정상적으로 증가하는 현상으로 나타났습니다.

---

## 1. 문제 상황

*   **현상**: 토픽 위키 페이지에서 특정 과목 카테고리를 선택하면 `pmbok` 및 `ea`와 같은 특정 토픽들이 필터링 결과에 계속해서 포함되거나, 심지어 동일한 토픽이 목록에 여러 번 나타나는 현상(`Encountered two children with the same key` React 오류와 함께)이 발생했습니다. 또한, 다른 카테고리를 선택 후 다시 돌아오면 중복된 토픽의 수가 증가하는 것처럼 보였습니다.

*   **의심되는 원인**: 초기에는 필터링 로직(`matchesSubject`)이나 `topics` 데이터의 불변성 문제로 추정되었습니다.

---

## 2. 원인 분석

문제 해결을 위해 `src/pages/TopicWiki.tsx`에 디버그 `console.log`를 추가하여 `Initial topics array`와 `Filtered topics for rendering`의 내용을 확인했습니다.

*   **디버그 결과**:
    *   `Initial topics array` ( `topicsData` ) 자체가 `pmbok-001`과 `ea-001` 등 여러 토픽을 중복해서 포함하고 있음을 확인했습니다 (예: 51개의 토픽이 로드되었다고 보고되었지만, 실제 고유 토픽 수는 더 적었음).
    *   필터링 로직 자체는 `selectedSubject`와 `topic.subjectCategories`를 정확하게 비교하여 작동하고 있었습니다. 즉, 필터링 로직보다는 입력 데이터(`topicsData`의 중복)가 문제의 근원이었습니다.

*   **중복의 원인**:
    이전에 마크다운 파일들을 `src/data/topics/` 하위의 과목 카테고리별 디렉토리로 리팩토링하는 과정이 있었습니다. 이 과정에서 `scripts/refactorTopics.js` 스크립트를 통해 파일들이 새 위치로 이동되었으나, **기존의 `src/data/topics/` 최상위 디렉토리에 남아있던 원본 마크다운 파일들이 완전히 삭제되지 않았습니다.**

    `scripts/buildTopics.js` 스크립트는 `globSync(`${topicsDir}/**/*.md`)` 패턴을 사용하여 마크다운 파일을 검색합니다. 이 패턴은 모든 하위 디렉토리를 재귀적으로 검색하므로, 새롭게 이동된 파일들과 삭제되지 않고 남아있던 원본 파일들을 모두 찾아 `topics.json`에 중복으로 추가하게 된 것입니다.

---

## 3. 해결책

1.  **잔여 마크다운 파일 삭제**:
    `src/data/topics/` 디렉토리 최상위에 남아있던 모든 `.md` 파일을 삭제하여 중복 소스를 제거했습니다.

    ```bash
    rm src/data/topics/*.md
    ```

2.  **`topics.json` 재생성**:
    마크다운 파일 정리가 완료된 후, `scripts/buildTopics.js`를 다시 실행하여 `src/data/topics.json` 파일을 새로운 고유 토픽 목록으로 업데이트했습니다. 이는 `npm run topics:build` 명령을 통해 수행됩니다.

    ```bash
    npm run topics:build
    ```

3.  **디버그 `console.log` 제거**:
    문제 해결 후, 불필요한 `console.log` 구문들을 `src/pages/TopicWiki.tsx` 파일에서 제거하여 코드를 정리했습니다.

---

## 4. 최종 확인

*   위 과정을 통해 `topics.json`에 더 이상 중복된 토픽이 포함되지 않도록 하였습니다.
*   이후 `npm run dev` 또는 배포된 페이지에서 확인했을 때, `pmbok` 및 `ea` 토픽을 포함한 모든 토픽이 중복 없이 정확하게 필터링되는 것을 확인할 수 있습니다.

이 가이드가 향후 유사한 데이터 중복 또는 필터링 문제 발생 시 원인을 파악하고 해결하는 데 도움이 되기를 바랍니다.
