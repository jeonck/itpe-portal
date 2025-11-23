# 토픽 관리 가이드

이 디렉토리에는 기술사 학습 포털의 모든 토픽이 마크다운 파일로 저장됩니다.

## 작동 방식

1. **마크다운으로 작성**: `src/data/topics/` 디렉토리에 `.md` 파일로 토픽 작성
2. **빌드 시 JSON 생성**: `npm run topics:build` 실행 시 자동으로 `topics.json` 생성
3. **런타임 사용**: 애플리케이션은 `topics.json`을 읽어서 사용

이 방식은 **편리한 작성(마크다운)**과 **빠른 성능(JSON)**을 모두 제공합니다.

## 토픽 파일 형식

각 토픽은 개별 `.md` 파일로 작성하며, 다음 구조를 따릅니다:

```markdown
---
id: topic-id-001
title: 토픽 제목
category: fundamental
subcategory: 소프트웨어 공학
difficulty: intermediate
certifications: [information-management, computer-systems]
keywords: [키워드1, 키워드2, 키워드3]
importance: 5
relatedTopics: [related-topic-001, related-topic-002]
trends: [최신 트렌드1, 최신 트렌드2]
---

# 정의
토픽에 대한 명확한 정의를 작성합니다.

## 특징
- 첫 번째 특징
- 두 번째 특징
- 세 번째 특징

## 최신 트렌드
- 트렌드 1
- 트렌드 2
```

## 필드 설명

### Frontmatter (메타데이터)

- **id**: 고유 식별자 (예: `sdlc-001`)
- **title**: 토픽 제목 (예: `SDLC (Software Development Life Cycle)`)
- **category**: 카테고리
  - `fundamental`: 공통 필수
  - `management-focus`: 정보관리 집중
  - `technical-focus`: 컴퓨터시스템 집중
  - `digital-service`: 최신 트렌드
- **subcategory**: 하위 카테고리 (예: `소프트웨어 공학`, `데이터베이스`, `네트워크`)
- **difficulty**: 난이도
  - `basic`: 기초
  - `intermediate`: 중급
  - `advanced`: 고급
- **certifications**: 관련 기술사 자격증
  - `information-management`: 정보관리기술사
  - `computer-systems`: 컴퓨터시스템응용기술사
- **keywords**: 검색 키워드 배열
- **importance**: 중요도 (1-5, 5가 가장 높음)
- **relatedTopics**: 연관 토픽 ID 배열
- **trends**: (선택) 최신 트렌드 배열

### 본문

- **# 정의**: 토픽에 대한 명확한 정의 (1-2문장)
- **## 특징**: 토픽의 주요 특징을 리스트로 작성
- **## 최신 트렌드**: (선택) 최신 기술 트렌드

## 새 토픽 추가하기

1. `src/data/topics/` 디렉토리에 새 `.md` 파일 생성 (예: `new-topic-001.md`)
2. 위 형식에 맞춰 토픽 내용 작성
3. **중요**: `npm run topics:build` 실행하여 JSON 생성
4. 개발 서버 재시작 또는 브라우저 새로고침

### 빠른 명령어

```bash
# 토픽 JSON 빌드
npm run topics:build

# 개발 서버 실행 (변경사항 확인)
npm run dev

# 프로덕션 빌드 (자동으로 topics:build 실행됨)
npm run build
```

## 예시

파일명: `blockchain-001.md`

```markdown
---
id: blockchain-001
title: 블록체인 (Blockchain)
category: digital-service
subcategory: Web/Service
difficulty: advanced
certifications: [information-management, computer-systems]
keywords: [분산원장, 합의 알고리즘, 스마트 컨트랙트, 암호화]
importance: 4
relatedTopics: [encryption-001, distributed-system-001]
trends: [DeFi, NFT, CBDC, Private Blockchain]
---

# 정의
분산된 노드들이 공유하는 변경 불가능한 디지털 원장 기술로, 신뢰 없는 환경에서 거래의 투명성과 보안을 보장합니다.

## 특징
- 탈중앙화된 분산 시스템
- 블록 체인 구조로 변조 방지
- 합의 알고리즘 (PoW, PoS 등)
- 스마트 컨트랙트 실행

## 최신 트렌드
- DeFi (탈중앙화 금융)
- NFT (대체 불가능한 토큰)
- CBDC (중앙은행 디지털 화폐)
- Private Blockchain (기업용 블록체인)
```

## 장점

- ✅ 각 토픽을 개별 파일로 관리하여 편집이 쉬움
- ✅ 마크다운 형식으로 가독성이 높음
- ✅ Git diff로 변경 사항 추적이 명확
- ✅ 여러 사람이 동시에 다른 토픽 작업 가능
- ✅ JSON 문법 오류 걱정 없음
