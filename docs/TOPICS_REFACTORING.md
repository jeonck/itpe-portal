# Topics Data Refactoring

## 개요

토픽 데이터의 유지보수성을 개선하기 위해 단일 대용량 JSON 파일을 여러 개의 작은 파일로 분할했습니다.

## 변경 전후 비교

### Before
- **단일 파일**: `src/data/topics.json` (244KB, 8,373줄)
- 251개의 모든 토픽이 하나의 파일에 저장
- 파일이 너무 커서 편집 및 유지보수가 어려움

### After
- **카테고리별 분할**: 11개의 작은 JSON 파일로 분할
- 각 파일 크기: 3KB ~ 81KB (관리 가능한 크기)
- 필요한 카테고리만 로드하여 성능 향상 가능

## 생성되는 파일 구조

빌드 스크립트(`npm run topics:build`)를 실행하면 다음 파일들이 생성됩니다:

### 1. 카테고리별 JSON 파일
`src/data/topics-by-category/`
- `AL.json` - 알고리즘 (23개 토픽, 18KB)
- `CA.json` - 컴퓨터구조 (12개 토픽, 13KB)
- `DB.json` - 데이터베이스 (27개 토픽, 23KB)
- `DS.json` - 디지털서비스 (91개 토픽, 81KB)
- `IM.json` - 정보관리 (56개 토픽, 63KB)
- `IS.json` - 정보보안 (51개 토픽, 56KB)
- `MG.json` - 관리 (4개 토픽, 3.1KB)
- `NW.json` - 네트워크 (21개 토픽, 19KB)
- `OS.json` - 운영체제 (17개 토픽, 14KB)
- `PM.json` - 프로젝트관리 (32개 토픽, 37KB)
- `SE.json` - 소프트웨어공학 (35개 토픽, 35KB)

### 2. 개별 토픽 JSON 파일
`src/data/parsedTopics/`
- 각 토픽별로 개별 JSON 파일 생성 (예: `sdn-nfv-001.json`)
- 토픽 상세 정보를 포함 (특징, 기술요소, 동작원리 등)

### 3. 전체 토픽 JSON 파일 (하위 호환성)
`src/data/topics.json`
- 기존 코드와의 호환성을 위해 유지
- 모든 토픽의 메타데이터 포함

## 사용 방법

### 방법 1: 기존 방식 (모든 토픽 로드)
```typescript
import topics from './data/topics.json';
```

### 방법 2: 카테고리별 로드 (권장)
```typescript
import { loadTopicsByCategory } from './utils/topicsLoader';

// 단일 카테고리
const alTopics = await loadTopicsByCategory('AL');

// 여러 카테고리
import { loadTopicsByCategories } from './utils/topicsLoader';
const topics = await loadTopicsByCategories(['AL', 'DS', 'IS']);
```

### 방법 3: 전체 토픽 로드
```typescript
import { loadAllTopics } from './utils/topicsLoader';
const allTopics = await loadAllTopics();
```

## 장점

1. **유지보수성 향상**: 작은 파일로 분할되어 편집 및 검토가 용이
2. **성능 개선**: 필요한 카테고리만 로드 가능
3. **Git diff 가독성**: 변경사항 추적이 더 명확
4. **확장성**: 새로운 카테고리 추가 시 기존 파일에 영향 없음

## 빌드 프로세스

1. 마크다운 파일 읽기: `src/data/topics/**/*.md`
2. 각 토픽을 파싱하여 3가지 형태로 저장:
   - 개별 JSON 파일 (`parsedTopics/`)
   - 카테고리별 JSON 파일 (`topics-by-category/`)
   - 전체 토픽 JSON 파일 (`topics.json`)

## Git 관리

생성된 JSON 파일들은 `.gitignore`에 추가되어 Git에서 관리하지 않습니다:
```
src/data/topics.json
src/data/topics-by-category/
src/data/parsedTopics/
```

이는 마크다운 소스 파일만 버전 관리하고, JSON 파일은 빌드 시 자동 생성하는 전략입니다.

## 마이그레이션 가이드

기존 코드를 수정할 필요는 없습니다. `topics.json`이 여전히 생성되므로 기존 import 구문은 그대로 동작합니다.

성능 개선을 원한다면:
1. `topicsLoader.ts` 유틸리티 사용
2. 필요한 카테고리만 선택적으로 로드
3. 대용량 데이터 처리 시 성능 향상 확인

## 향후 개선 방향

- [ ] 코드베이스에서 `loadTopicsByCategory` 사용으로 마이그레이션
- [ ] 필요시 인덱싱 전략 도입 (검색 성능 향상)
- [ ] 카테고리별 lazy loading 구현
