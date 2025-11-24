# 기술사 토픽 작성 가이드

이 문서는 ITPE 포털의 토픽 마크다운 파일 작성 지침입니다. 다른 AI나 협업자가 일관된 형식으로 토픽을 작성할 수 있도록 표준화된 구조와 예시를 제공합니다.

## 목차

1. [파일 구조](#파일-구조)
2. [YAML 프론트매터](#yaml-프론트매터)
3. [콘텐츠 섹션](#콘텐츠-섹션)
4. [작성 예시](#작성-예시)
5. [작성 가이드라인](#작성-가이드라인)

---

## 파일 구조

### 파일 위치
```
src/data/topics/
├── SE/  (소프트웨어 공학)
├── DB/  (데이터베이스)
├── NW/  (네트워크)
├── IS/  (정보보안)
├── IM/  (IT경영)
├── PM/  (프로젝트관리)
├── CA/  (컴퓨터구조)
├── OS/  (운영체제)
├── AL/  (알고리즘)
└── DS/  (디지털서비스)
```

### 파일명 규칙
- 형식: `{topic-name}-001.md`
- 소문자와 하이픈 사용
- 숫자 001로 끝남 (버전 관리용)
- 예시: `api-gateway-servicemesh-001.md`

---

## YAML 프론트매터

파일 상단에 `---`로 구분된 YAML 메타데이터를 작성합니다.

### 필수 필드

```yaml
---
id: api-gateway-servicemesh-001        # 파일명과 동일
title: API Gateway & Service Mesh      # 한글/영문 토픽 제목
category: digital-service              # fundamental | management-focus | technical-focus | digital-service
subcategory: Cloud                     # 세부 분류
subjectCategories:                     # 과목 카테고리 (배열)
  - SE
  - DS
difficulty: advanced                   # basic | intermediate | advanced
certifications:                        # 해당 기술사 자격증
  - information-management
  - computer-systems
keywords:                              # 검색 키워드
  - API Gateway
  - Service Mesh
  - Istio
  - Envoy
importance: 5                          # 1-5 중요도
relatedTopics:                         # 연관 토픽 ID들
  - msa-001
  - kubernetes-001
---
```

### 선택적 필드

```yaml
trends:                                # 최신 트렌드 (배열)
  - Ambient Mesh
  - eBPF-based Service Mesh
tags:                                  # 태그
  - '2025'                            # 2025 신규 토픽 표시
```

### 카테고리 설명

#### category (도메인 카테고리)
- `fundamental`: 공통 필수 (양쪽 기술사 모두 중요)
- `management-focus`: 정보관리 집중
- `technical-focus`: 컴퓨터시스템응용 집중
- `digital-service`: 최신 기술 트렌드

#### subjectCategories (과목 카테고리)
- `SE`: Software Engineering (소프트웨어 공학)
- `DB`: Database (데이터베이스)
- `NW`: Network (네트워크)
- `IS`: Information Security (정보보안)
- `IM`: IT Management (IT경영)
- `PM`: Project Management (프로젝트 관리)
- `CA`: Computer Architecture (컴퓨터 구조)
- `OS`: Operating System (운영체제)
- `AL`: Algorithm (알고리즘)
- `DS`: Digital Service (디지털 서비스)

---

## 콘텐츠 섹션

토픽 본문은 다음 순서로 구성됩니다. **굵은 글씨**는 필수, *기울임*은 선택 사항입니다.

### 1. 암기 두음 (선택)

```markdown
## 암기 두음
암기를 돕기 위한 두음이나 약어 설명
```

### 2. 정의 (필수) - 기

```markdown
# 정의
토픽의 핵심 개념을 1-2문장으로 간결하게 설명합니다.
```

**작성 요령:**
- 1-2문장으로 간결하게
- "~입니다", "~합니다" 형태로 종결
- 핵심 개념과 목적을 명확히

### 3. 특징 (필수) - 승

```markdown
## 특징
- 특징 1: 첫 번째 주요 특징
- 특징 2: 두 번째 주요 특징
- 특징 3: 세 번째 주요 특징
```

**작성 요령:**
- 불릿 포인트 형식 (하이픈 사용)
- 3-7개 항목 권장
- 각 항목은 핵심만 간결하게
- 콜론(:) 사용 가능 - `항목명: 설명`

### 4-6. 상세 섹션 (선택) - 전

**다음 중 하나를 선택하여 작성합니다. 여러 개 사용 가능하지만 토픽의 성격에 맞게 선택하세요.**

#### 4. 기술요소 (선택)

**언제 사용:** 시스템이나 기술의 구성 요소를 설명할 때

```markdown
## 기술요소
- 요소 1: 첫 번째 핵심 기술 컴포넌트
- 요소 2: 두 번째 핵심 기술 컴포넌트
- 요소 3: 세 번째 핵심 기술 컴포넌트
```

**UI 표시:** 파란색 불릿 포인트

**예시:**
```markdown
## 기술요소
- API Gateway 계층: 외부 클라이언트 요청의 단일 진입점
- Service Mesh 계층: 서비스 간 내부 통신 관리
- Sidecar Proxy: 각 서비스 Pod에 배치되는 경량 프록시
```

#### 5. 동작원리 (선택)

**언제 사용:** 프로세스나 메커니즘의 작동 방식을 설명할 때

```markdown
## 동작원리
시스템의 동작 과정을 단계별로 설명합니다.

1. 첫 번째 단계
   상세 설명...

2. 두 번째 단계
   상세 설명...

3. 세 번째 단계
   상세 설명...

최종적으로 어떻게 동작하는지 요약합니다.
```

**UI 표시:** 일반 텍스트 (여러 줄 지원)

**예시:**
```markdown
## 동작원리
DevOps의 CI/CD 파이프라인은 다음과 같은 단계로 동작합니다:

1. 코드 커밋 (Commit)
   개발자가 Git에 코드를 푸시하면 자동으로 파이프라인이 트리거됩니다.

2. 지속적 통합 (Continuous Integration)
   - 소스 코드 빌드 (컴파일)
   - 단위 테스트 자동 실행
   - 코드 품질 분석

3. 지속적 배포 (Continuous Deployment)
   - 컨테이너 이미지 빌드
   - 운영 환경으로 자동 배포

이 과정은 하루에도 수십 번 반복되며, 피드백 루프를 통해 지속적으로 개선됩니다.
```

#### 6. 기능 (선택)

**언제 사용:** 시스템이 제공하는 주요 기능을 나열할 때

```markdown
## 기능
- 기능 1: 첫 번째 주요 기능
- 기능 2: 두 번째 주요 기능
- 기능 3: 세 번째 주요 기능
```

**UI 표시:** 초록색 불릿 포인트

**예시:**
```markdown
## 기능
- 독립적 배포: 각 서비스를 개별적으로 빌드, 테스트, 배포 가능
- 서비스 디스커버리: 동적으로 서비스 위치 탐색 및 로드 밸런싱
- Circuit Breaker: 장애 서비스 격리 및 연쇄 장애 방지
```

### 7. 최신 트렌드 (선택) - 결

```markdown
## 최신 트렌드
- 트렌드 1
- 트렌드 2
- 트렌드 3
```

**작성 요령:**
- YAML 프론트매터의 trends와 동일한 내용
- 2024-2025년 최신 동향
- 2-5개 항목 권장

---

## 작성 예시

### 예시 1: 기술요소를 사용한 토픽 (인프라/아키텍처)

```markdown
---
id: api-gateway-servicemesh-001
title: API Gateway & Service Mesh
category: digital-service
subcategory: Cloud
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - API Gateway
  - Service Mesh
  - Istio
importance: 5
relatedTopics:
  - msa-001
  - kubernetes-001
trends:
  - Ambient Mesh
  - eBPF-based Service Mesh
tags:
  - '2025'
---

# 정의
MSA 환경에서 API 라우팅/보안/모니터링을 담당하는 API Gateway와 서비스 간 통신을 관리하는 Service Mesh를 통해 분산 시스템의 복잡도를 관리합니다.

## 특징
- API Gateway: 외부 요청의 단일 진입점, 라우팅, 인증/인가, Rate Limiting
- Service Mesh: 서비스 간 통신 관리 인프라 계층
- Sidecar Pattern: 각 서비스에 프록시(Envoy) 배포
- 데이터 플레인 vs 컨트롤 플레인 분리

## 기술요소
- API Gateway 계층: 외부 클라이언트 요청의 단일 진입점, North-South 트래픽 처리
- Service Mesh 계층: 서비스 간 내부 통신 관리, East-West 트래픽 처리
- 데이터 플레인(Data Plane): Envoy 프록시 기반의 실제 트래픽 전달 계층
- 컨트롤 플레인(Control Plane): Istio Pilot, Citadel 등의 정책 및 설정 관리 계층
- Sidecar Proxy: 각 서비스 Pod에 배치되는 경량 프록시 (Envoy)
- 서비스 레지스트리: 동적 서비스 디스커버리 및 헬스 체크
- mTLS (Mutual TLS): 서비스 간 암호화 통신 및 상호 인증
- Circuit Breaker: 장애 전파 방지를 위한 회로 차단 메커니즘

## 최신 트렌드
- Ambient Mesh
- eBPF-based Service Mesh
```

### 예시 2: 동작원리를 사용한 토픽 (프로세스/메커니즘)

```markdown
---
id: agile-devops-001
title: Agile / DevOps
category: fundamental
subcategory: 소프트웨어 공학
subjectCategories:
  - SE
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - Scrum
  - CI/CD
  - 파이프라인
importance: 5
relatedTopics:
  - sdlc-001
  - kubernetes-001
trends:
  - GitOps
  - Platform Engineering
tags:
  - '2025'
---

# 정의
변화에 빠르게 대응하는 Agile 방법론과 개발-운영 통합을 통한 DevOps 문화로, 지속적 개선과 자동화를 추구합니다.

## 특징
- Agile: Scrum (스프린트, 데일리 스탠드업), XP (페어 프로그래밍)
- DevOps: CI/CD 파이프라인, 인프라의 코드화(IaC), 자동화된 테스트
- 짧은 반복 주기와 지속적 배포
- 개발-운영-비즈니스 간 협업 문화

## 동작원리
DevOps의 CI/CD 파이프라인은 다음과 같은 단계로 동작합니다:

1. 코드 커밋 (Commit)
   개발자가 Git에 코드를 푸시하면 자동으로 파이프라인이 트리거됩니다.

2. 지속적 통합 (Continuous Integration)
   - 소스 코드 빌드 (컴파일)
   - 단위 테스트 자동 실행
   - 코드 품질 분석 (SonarQube 등)
   - 정적 분석 및 보안 스캔

3. 지속적 배포 (Continuous Deployment)
   - 컨테이너 이미지 빌드 (Docker)
   - 아티팩트 저장소에 업로드
   - 통합 테스트 실행 (Staging 환경)
   - 운영 환경으로 자동 배포

4. 모니터링 및 피드백
   - 애플리케이션 성능 모니터링
   - 로그 수집 및 분석
   - 이슈 발견 시 롤백 또는 긴급 패치

이 과정은 하루에도 수십 번 반복되며, 피드백 루프를 통해 지속적으로 개선됩니다.

## 최신 트렌드
- GitOps
- Platform Engineering
```

### 예시 3: 기능을 사용한 토픽 (시스템/플랫폼)

```markdown
---
id: msa-001
title: MSA (Microservices Architecture)
category: digital-service
subcategory: Cloud
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
keywords:
  - 마이크로서비스
  - 독립 배포
  - 분산 시스템
importance: 5
relatedTopics:
  - kubernetes-001
  - api-gateway-001
trends:
  - 서비스 메시
  - Saga 패턴
tags:
  - '2025'
---

# 정의
애플리케이션을 작고 독립적인 서비스들로 분해하여 개발, 배포, 확장하는 아키텍처 패턴입니다.

## 특징
- 서비스 단위로 독립적 개발/배포
- 기술 스택의 다양성 허용
- 장애 격리 및 복원력 향상
- 수평적 확장 용이

## 기능
- 독립적 배포: 각 서비스를 개별적으로 빌드, 테스트, 배포 가능
- 서비스 디스커버리: 동적으로 서비스 위치 탐색 및 로드 밸런싱 (Consul, Eureka)
- API 게이트웨이: 단일 진입점을 통한 라우팅, 인증, Rate Limiting
- 분산 트랜잭션 관리: Saga 패턴을 통한 장기 트랜잭션 처리
- 이벤트 기반 통신: 메시지 큐(Kafka, RabbitMQ)를 통한 비동기 통신
- 분산 추적: 서비스 간 호출 추적 및 성능 모니터링 (Zipkin, Jaeger)
- Circuit Breaker: 장애 서비스 격리 및 연쇄 장애 방지
- 중앙화된 설정 관리: Config Server를 통한 환경별 설정 관리

## 최신 트렌드
- 서비스 메시
- Saga 패턴
```

---

## 작성 가이드라인

### 1. 정의 작성 가이드

**DO ✅**
- 1-2문장으로 간결하게
- 핵심 개념과 목적을 명확히
- "~입니다", "~합니다" 형태로 종결

**DON'T ❌**
- 장황한 설명
- 여러 개념을 혼재
- 불완전한 문장

### 2. 특징 작성 가이드

**DO ✅**
```markdown
## 특징
- 주요 특성: 간결한 설명
- 핵심 장점: 구체적인 내용
- 적용 분야: 실제 사용 사례
```

**DON'T ❌**
```markdown
## 특징
- 이 기술은 매우 좋습니다
- 많은 회사에서 사용합니다
- 앞으로 발전할 것입니다
```

### 3. 기술요소/동작원리/기능 선택 가이드

| 토픽 유형 | 추천 섹션 | 예시 |
|---------|----------|------|
| 인프라/아키텍처 | 기술요소 | API Gateway, Kubernetes, Service Mesh |
| 프로세스/방법론 | 동작원리 | Agile, DevOps, CI/CD |
| 시스템/플랫폼 | 기능 | MSA, ERP, CRM |
| 알고리즘 | 동작원리 | 정렬, 탐색, 그래프 알고리즘 |
| 보안 기술 | 기술요소 또는 동작원리 | 암호화, 인증, 방화벽 |

**복수 사용 가능:**
- 큰 토픽의 경우 기술요소 + 동작원리 조합 가능
- 예: Kubernetes (기술요소: 컴포넌트, 동작원리: 스케줄링 과정)

### 4. 키워드 선정 가이드

**DO ✅**
- 검색에 유용한 영문 약어
- 한글 핵심 용어
- 관련 기술/제품명
- 5-10개 권장

**예시:**
```yaml
keywords:
  - API Gateway
  - Service Mesh
  - Istio
  - Envoy
  - Kong
  - Sidecar Pattern
```

### 5. 연관 토픽 연결 가이드

**DO ✅**
- 직접적으로 관련된 토픽만 연결
- 3-5개 권장
- 상위/하위 개념 연결
- 함께 사용되는 기술 연결

**예시:**
```yaml
relatedTopics:
  - msa-001          # MSA에서 사용
  - kubernetes-001   # 함께 사용되는 기술
  - api-design-001   # 관련 개념
```

### 6. 최신 트렌드 작성 가이드

**DO ✅**
- 2024-2025년 최신 동향
- 구체적인 기술/개념명
- 2-5개 항목

**예시:**
```markdown
## 최신 트렌드
- Ambient Mesh
- eBPF-based Service Mesh
- Multi-Cloud Service Mesh
```

---

## 빌드 프로세스

토픽 마크다운을 작성한 후:

```bash
# 1. 토픽 빌드 (MD → JSON 변환)
npm run topics:build

# 2. 전체 빌드
npm run build

# 3. 확인
# - src/data/topics.json 생성 확인
# - 브라우저에서 토픽 위키 페이지 확인
```

---

## 체크리스트

새 토픽을 작성할 때 다음을 확인하세요:

- [ ] YAML 프론트매터 모든 필수 필드 작성
- [ ] 파일명과 id가 일치
- [ ] category와 subjectCategories 정확히 선택
- [ ] 정의가 1-2문장으로 명확
- [ ] 특징이 3-7개 항목으로 구성
- [ ] 기술요소/동작원리/기능 중 적절한 섹션 선택
- [ ] 키워드 5-10개 선정
- [ ] 연관 토픽 3-5개 연결
- [ ] 최신 트렌드 2-5개 작성 (선택)
- [ ] 빌드 테스트 완료

---

## 문의 및 기여

- 이슈: [GitHub Issues](https://github.com/jeonck/itpe-portal/issues)
- 새로운 토픽 제안이나 개선 사항은 Pull Request로 제출해주세요.

---

**작성일:** 2025-01-25
**버전:** 1.0
