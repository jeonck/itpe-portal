# AI 토픽 생성 가이드

> 이 문서는 AI가 ITPE Portal의 토픽을 자동으로 생성할 때 따라야 할 지침입니다.

---

## 📋 목차

1. [토픽 생성 프로세스](#토픽-생성-프로세스)
2. [YAML 프론트매터 작성](#yaml-프론트매터-작성)
3. [콘텐츠 섹션 작성](#콘텐츠-섹션-작성)
4. [섹션 선택 가이드](#섹션-선택-가이드)
5. [작성 체크리스트](#작성-체크리스트)
6. [예시 템플릿](#예시-템플릿)

---

## 토픽 생성 프로세스

### 1단계: 토픽 분석
주어진 주제에 대해 다음을 파악합니다:
- **토픽 유형**: 인프라/아키텍처, 프로세스/방법론, 시스템/플랫폼, 알고리즘 등
- **대상 독자**: 정보관리기술사, 컴퓨터시스템응용기술사, 또는 둘 다
- **난이도**: basic, intermediate, advanced
- **과목 카테고리**: SE, DB, NW, IS, IM, PM, CA, OS, AL, DS

### 2단계: 정보 수집
다음 정보를 수집합니다:
- 핵심 개념과 정의
- 주요 특징 (3-7개)
- 기술요소/동작원리/기능/절차 중 하나 이상
- 주요 키워드 (5-10개)
- 최신 트렌드 (2-5개, 2024-2025년)
- 연관 토픽 (3-5개)

### 3단계: 구조화
수집한 정보를 다음 구조로 정리합니다:
```
YAML 프론트매터
↓
암기 두음 (선택)
↓
정의 (1-2문장)
↓
특징 (3-7개 불릿)
↓
기술요소/동작원리/기능/절차 (선택, 1개 이상)
↓
최신 트렌드 (2-5개)
```

### 4단계: 검증
작성 후 다음을 확인합니다:
- [ ] YAML 프론트매터 필수 필드 모두 포함
- [ ] 정의가 1-2문장으로 간결
- [ ] 특징이 3-7개 범위 내
- [ ] 적절한 상세 섹션 선택
- [ ] 키워드가 5-10개
- [ ] 최신 트렌드가 2024-2025년 기준

---

## YAML 프론트매터 작성

### 필수 필드

```yaml
---
id: topic-name-001                    # kebab-case, 숫자 3자리
title: 토픽 제목                       # 명확하고 간결한 한글 제목
category: fundamental                 # fundamental/management-focus/technical-focus/digital-service
subcategory: 소프트웨어 공학            # 세부 분류 (한글)
subjectCategories:                    # 배열로 작성
  - SE                                # SE/DB/NW/IS/IM/PM/CA/OS/AL/DS
difficulty: intermediate              # basic/intermediate/advanced
certifications:                       # 배열로 작성
  - information-management            # information-management/computer-systems
keywords:                             # 5-10개
  - 키워드1
  - 키워드2
importance: 5                         # 1-5 (5가 최고)
relatedTopics:                        # 3-5개 권장
  - related-topic-001
  - related-topic-002
---
```

### 선택 필드

```yaml
trends:                               # 최신 트렌드 2-5개
  - AI-Powered Development
  - Cloud-Native Architecture
tags:                                 # 태그
  - '2025'                            # 연도는 문자열로
  - '신규'
```

### category 선택 기준

| Category | 설명 | 예시 |
|----------|------|------|
| `fundamental` | 양쪽 기술사 공통 필수 | SDLC, 디자인 패턴, 알고리즘 |
| `management-focus` | 정보관리기술사 집중 | IT 거버넌스, 프로젝트 관리 |
| `technical-focus` | 컴퓨터시스템응용 집중 | CPU 아키텍처, 임베디드 시스템 |
| `digital-service` | 최신 기술 트렌드 | AI, 클라우드, 블록체인 |

### subjectCategories 선택

- **SE** (Software Engineering): 소프트웨어 공학, 개발 방법론
- **DB** (Database): 데이터베이스, 빅데이터
- **NW** (Network): 네트워크, 통신
- **IS** (Information Security): 정보보안, 암호화
- **IM** (IT Management): IT 경영, 거버넌스
- **PM** (Project Management): 프로젝트 관리
- **CA** (Computer Architecture): 컴퓨터 구조, 하드웨어
- **OS** (Operating System): 운영체제, 시스템 소프트웨어
- **AL** (Algorithm): 알고리즘, 자료구조
- **DS** (Digital Service): 디지털 서비스, 최신 기술

**복수 선택 가능**: 관련성이 높은 경우 2-3개까지 선택
- 예: Kubernetes → SE, DS
- 예: CMMI → SE, IM

---

## 콘텐츠 섹션 작성

### 1. 정의 (필수)

**작성 지침:**
- 1-2문장으로 간결하게
- 핵심 개념과 목적을 명확히
- "~입니다", "~합니다" 형태로 종결

**작성 예:**
```markdown
# 정의
마이크로서비스 아키텍처는 애플리케이션을 작고 독립적인 서비스들로 분해하여 개발, 배포, 확장하는 아키텍처 패턴입니다.
```

**DO ✅**
- 핵심 개념 명확히
- 목적과 가치 포함
- 간결한 1-2문장

**DON'T ❌**
- 장황한 설명
- 여러 개념 혼재
- 불완전한 문장

### 2. 특징 (필수)

**작성 지침:**
- 불릿 포인트 형식 (- 사용)
- 3-7개 항목 권장
- 각 항목은 간결하게 (1-2줄)
- 콜론(:) 사용 가능 - `항목명: 설명`

**작성 예:**
```markdown
## 특징
- 서비스 독립성: 각 서비스를 독립적으로 개발, 배포, 확장 가능
- 기술 다양성: 서비스마다 다른 프로그래밍 언어와 데이터베이스 사용 가능
- 장애 격리: 한 서비스의 장애가 전체 시스템에 영향을 주지 않음
- 수평적 확장: 필요한 서비스만 선택적으로 스케일 아웃
- 팀 자율성: 소규모 팀이 서비스 전체 생명주기 책임
```

**주의사항:**
- 구체적이고 측정 가능한 특징 작성
- 일반적이거나 모호한 표현 지양
- 기술적 세부사항보다는 핵심 특성 중심

### 3. 상세 섹션 (선택, 1개 이상)

토픽의 성격에 따라 다음 중 1개 이상 선택합니다:

#### A. 기술요소 (Technical Elements)

**언제 사용:**
- 시스템/기술의 구성 요소를 설명할 때
- 인프라, 아키텍처, 프레임워크 토픽

**형식:**
- 불릿 포인트 (- 사용)
- 각 요소에 대한 간단한 설명 포함
- 계층 구조가 있다면 들여쓰기 사용 가능

**작성 예:**
```markdown
## 기술요소
- API Gateway 계층: 외부 클라이언트 요청의 단일 진입점, North-South 트래픽 처리
- Service Mesh 계층: 서비스 간 내부 통신 관리, East-West 트래픽 처리
- 데이터 플레인(Data Plane): Envoy 프록시 기반의 실제 트래픽 전달 계층
- 컨트롤 플레인(Control Plane): Istio Pilot, Citadel 등의 정책 및 설정 관리 계층
- Sidecar Proxy: 각 서비스 Pod에 배치되는 경량 프록시 (Envoy)
```

**적용 예시:**
- Kubernetes: Master Node, Worker Node, etcd, API Server
- Database: Storage Engine, Query Optimizer, Transaction Manager
- Security: Firewall, IDS/IPS, SIEM, DLP

#### B. 동작원리 (Operating Principle)

**언제 사용:**
- 시스템/메커니즘의 자동 작동 과정을 설명할 때
- 알고리즘, 자동화 프로세스, 시스템 동작 토픽

**형식:**
- 일반 텍스트 (여러 줄 지원)
- 단계별 번호 매기기 (1. 2. 3.)
- 각 단계에 상세 설명 포함
- 들여쓰기로 세부 항목 표시

**작성 예:**
```markdown
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
```

**적용 예시:**
- Algorithm: 버블 정렬, 이진 탐색, 다익스트라 알고리즘
- CI/CD: Jenkins 파이프라인, GitHub Actions 워크플로우
- Testing: TDD Red-Green-Refactor 사이클

#### C. 기능 (Functions)

**언제 사용:**
- 시스템이 제공하는 주요 기능을 나열할 때
- 플랫폼, 도구, 시스템 토픽

**형식:**
- 불릿 포인트 (- 사용)
- 각 기능에 대한 간단한 설명 포함
- 구체적인 도구/기술 예시 추가 가능

**작성 예:**
```markdown
## 기능
- 독립적 배포: 각 서비스를 개별적으로 빌드, 테스트, 배포 가능
- 서비스 디스커버리: 동적으로 서비스 위치 탐색 및 로드 밸런싱 (Consul, Eureka)
- API 게이트웨이: 단일 진입점을 통한 라우팅, 인증, Rate Limiting
- 분산 트랜잭션 관리: Saga 패턴을 통한 장기 트랜잭션 처리
- 이벤트 기반 통신: 메시지 큐(Kafka, RabbitMQ)를 통한 비동기 통신
- 분산 추적: 서비스 간 호출 추적 및 성능 모니터링 (Zipkin, Jaeger)
- Circuit Breaker: 장애 서비스 격리 및 연쇄 장애 방지 (Hystrix, Resilience4j)
```

**적용 예시:**
- ERP: 재무관리, 인사관리, 생산관리, 재고관리
- Low-Code: 드래그앤드롭 UI 빌더, 워크플로우 자동화, 원클릭 배포
- AI Assistant: 코드 자동완성, 테스트 생성, 리팩토링 제안

#### D. 절차 (Procedure)

**언제 사용:**
- 사람이 수행하는 단계별 업무 프로세스를 설명할 때
- 관리, 평가, 감리, 분석 관련 토픽

**형식:**
- 일반 텍스트 (여러 줄 지원)
- 대단계 구분 (1단계, 2단계, 3단계)
- 각 단계 내 세부 활동 번호 매기기 (1. 2. 3.)
- 체크 항목이나 산출물 명시

**작성 예:**
```markdown
## 절차
소프트웨어 감리는 다음과 같은 3단계 프로세스로 수행됩니다:

1단계: 계획/설계 단계 감리
프로젝트 초기에 요구사항과 설계의 적정성을 검증:

1. 감리 계획 수립
   - 감리 범위, 일정, 투입 인력 계획
   - 감리 기준: 소프트웨어 감리 기준(정보통신산업진흥원)
   - 점검 항목 선정: 프로젝트 규모/특성에 따라 맞춤형 점검표 작성

2. 요구사항 점검
   - 요구사항 명세서(SRS) 완전성 검토: 누락된 기능 요구사항 확인
   - 요구사항 추적성 매트릭스: 사용자 요구 → 시스템 요구사항 추적
   - 비기능 요구사항: 성능, 보안, 가용성 목표 명확성
   - 요구사항 변경 관리: 변경 이력 및 영향 분석 프로세스 확인

3. 시스템 설계 점검
   - 아키텍처 설계: 시스템 구조, 계층 분리, 인터페이스 정의 적정성
   - 데이터베이스 설계: ERD, 정규화, 인덱스 설계 검토
   - 보안 설계: 인증/인가, 암호화, 접근 통제 방안

4. 지적사항 도출 및 보고
   - 중대 지적: 프로젝트 성공에 심각한 영향
   - 권고사항: 개선 필요 항목
   - 개선 조치 기한 설정

2단계: 개발 단계 감리
구현 중간 단계에서 개발 프로세스와 품질을 점검:
...

3단계: 시험/종료 단계 감리
프로젝트 완료 전 최종 품질과 운영 준비 상태를 점검:
...
```

**적용 예시:**
- Project Management: 착수 → 계획 → 실행 → 감시통제 → 종료
- Requirements Engineering: 추출 → 분석 → 명세 → 검증 → 관리
- Cost Estimation: 기능 식별 → FP 측정 → 보정 → 공수 산정 → 비용 계산

### 4. 최신 트렌드 (선택)

**작성 지침:**
- YAML 프론트매터의 trends와 동일한 내용
- 2024-2025년 최신 동향
- 2-5개 항목 권장
- 구체적인 기술/방법론 이름 사용

**작성 예:**
```markdown
## 최신 트렌드
- Platform as a Product
- Developer Portal (Backstage)
- GitOps
- Internal Developer Platform (IDP)
```

---

## 섹션 선택 가이드

### 의사결정 트리

```
토픽 유형 파악
│
├─ 시스템/기술의 구성요소를 설명? → 기술요소
│  예: API Gateway, Kubernetes, Database
│
├─ 자동화된 메커니즘/알고리즘? → 동작원리
│  예: CI/CD 파이프라인, 정렬 알고리즘, 암호화 과정
│
├─ 시스템이 제공하는 기능? → 기능
│  예: ERP, CRM, Low-Code 플랫폼, AI Assistant
│
└─ 사람이 수행하는 업무 프로세스? → 절차
   예: 프로젝트 관리, 감리, 평가, 분석
```

### 토픽 유형별 추천

| 토픽 유형 | 추천 섹션 | 예시 |
|---------|----------|------|
| 인프라/아키텍처 | **기술요소** | API Gateway, Service Mesh, Kubernetes |
| 자동화 프로세스 | **동작원리** | DevOps CI/CD, 알고리즘 실행 |
| 수동 프로세스/관리 | **절차** | SW 감리, 프로젝트 관리, 요구공학 |
| 시스템/플랫폼 | **기능** | MSA, ERP, Low-Code, AI Assistant |
| 알고리즘 | **동작원리** | 정렬, 탐색, 그래프 알고리즘 |
| 보안 기술 | **기술요소** 또는 **동작원리** | 암호화, 인증, 방화벽 |
| 데이터베이스 | **기술요소** + **동작원리** | Storage Engine + Transaction 처리 |
| 네트워크 | **기술요소** 또는 **동작원리** | OSI 7계층, TCP 3-way handshake |

### 복수 섹션 사용

큰 토픽의 경우 여러 섹션 조합 가능:

**예시 1: Kubernetes**
- 기술요소: Master Node, Worker Node, etcd, kubelet, kube-proxy
- 동작원리: Pod 스케줄링 과정

**예시 2: 프로젝트 관리**
- 절차: PMBOK 5대 프로세스 그룹
- 기술요소: WBS, Gantt Chart, RACI Matrix

**예시 3: Database Transaction**
- 기술요소: Transaction Manager, Lock Manager, Log Manager
- 동작원리: ACID 보장 메커니즘

---

## 작성 체크리스트

### YAML 프론트매터 검증

- [ ] `id`: kebab-case, 숫자 3자리 (예: api-gateway-001)
- [ ] `title`: 명확한 한글 제목
- [ ] `category`: 4가지 중 적절한 것 선택
- [ ] `subcategory`: 한글 세부 분류
- [ ] `subjectCategories`: 1-3개 배열
- [ ] `difficulty`: basic/intermediate/advanced 중 선택
- [ ] `certifications`: 배열로 작성
- [ ] `keywords`: 5-10개
- [ ] `importance`: 1-5
- [ ] `relatedTopics`: 3-5개
- [ ] `trends`: 2-5개 (선택)
- [ ] `tags`: '2025' 등 (선택)

### 콘텐츠 검증

- [ ] **정의**: 1-2문장으로 간결
- [ ] **특징**: 3-7개 불릿 포인트
- [ ] **상세 섹션**: 토픽 성격에 맞는 섹션 1개 이상 선택
  - [ ] 기술요소: 시스템 구성요소
  - [ ] 동작원리: 자동화 메커니즘
  - [ ] 기능: 시스템 제공 기능
  - [ ] 절차: 수동 업무 프로세스
- [ ] **최신 트렌드**: 2-5개 (선택)

### 품질 검증

- [ ] 한글 맞춤법 확인
- [ ] 전문 용어 정확성 확인
- [ ] 불릿 포인트 일관성 (- 사용)
- [ ] 들여쓰기 일관성
- [ ] 연도 표기 정확 (2024-2025년)
- [ ] 관련 토픽 ID 존재 여부 확인

---

## 예시 템플릿

### 템플릿 1: 인프라/아키텍처 토픽 (기술요소 사용)

```markdown
---
id: example-infrastructure-001
title: 예제 인프라 기술
category: digital-service
subcategory: 클라우드
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Infrastructure
  - Cloud Native
  - Container
  - Orchestration
  - Microservices
importance: 5
relatedTopics:
  - kubernetes-001
  - docker-001
  - cloud-native-001
trends:
  - Serverless Container
  - Service Mesh
  - GitOps
tags:
  - '2025'
---

# 정의
컨테이너 기반의 분산 애플리케이션을 자동으로 배포, 확장, 관리하는 오픈소스 플랫폼입니다.

## 특징
- 컨테이너 오케스트레이션: 대규모 컨테이너 배포 및 관리 자동화
- 선언적 설정: YAML로 원하는 상태 정의, 시스템이 자동으로 유지
- 자동 복구: 컨테이너 장애 시 자동 재시작 및 복구
- 수평적 확장: 부하에 따라 Pod 개수 자동 조절
- 롤링 업데이트: 무중단 배포 지원

## 기술요소
- Control Plane
  - API Server: 모든 REST API 요청 처리, 클러스터 진입점
  - etcd: 클러스터 상태 정보를 저장하는 분산 키-값 저장소
  - Scheduler: Pod를 어느 노드에 배치할지 결정
  - Controller Manager: 원하는 상태 유지를 위한 제어 루프 실행
- Data Plane (Worker Node)
  - kubelet: 각 노드에서 실행되는 에이전트, Pod 생명주기 관리
  - kube-proxy: 네트워크 규칙 관리, 서비스 간 통신 라우팅
  - Container Runtime: Docker, containerd 등 컨테이너 실행 환경
- Workload Resources
  - Pod: 최소 배포 단위, 1개 이상의 컨테이너 포함
  - Deployment: Pod 복제 및 롤링 업데이트 관리
  - Service: Pod 그룹에 대한 안정적인 네트워크 엔드포인트 제공
  - Ingress: 외부 HTTP/HTTPS 트래픽을 Service로 라우팅

## 최신 트렌드
- Serverless Container (Knative)
- Service Mesh (Istio, Linkerd)
- GitOps (ArgoCD, Flux)
```

### 템플릿 2: 자동화 프로세스 토픽 (동작원리 사용)

```markdown
---
id: example-automation-001
title: 예제 자동화 프로세스
category: digital-service
subcategory: 개발 플랫폼
subjectCategories:
  - SE
  - DS
difficulty: intermediate
certifications:
  - information-management
keywords:
  - CI/CD
  - Automation
  - DevOps
  - Pipeline
  - Continuous Integration
importance: 5
relatedTopics:
  - agile-devops-001
  - kubernetes-001
  - git-001
trends:
  - GitOps
  - Infrastructure as Code
  - Platform Engineering
tags:
  - '2025'
---

# 정의
코드 커밋부터 프로덕션 배포까지의 전 과정을 자동화하여 소프트웨어를 빠르고 안정적으로 출시하는 DevOps 실천 방법입니다.

## 특징
- 자동화: 빌드, 테스트, 배포의 모든 단계 자동 수행
- 빠른 피드백: 코드 품질 이슈를 즉시 발견
- 일관성: 동일한 프로세스로 매번 배포
- 위험 감소: 작은 단위로 자주 배포하여 리스크 최소화
- 협업 향상: 개발과 운영 팀 간 장벽 제거

## 동작원리
CI/CD 파이프라인은 다음 단계로 자동 실행됩니다:

1. 소스 코드 관리 (SCM)
   개발자가 Git에 코드를 푸시하면 웹훅으로 파이프라인 트리거:
   - Feature 브랜치에서 작업
   - Pull Request 생성
   - 코드 리뷰 후 Main 브랜치 병합

2. 지속적 통합 (Continuous Integration)
   코드 품질 검증 및 빌드:
   - 소스 코드 체크아웃
   - 의존성 패키지 설치 (npm install, pip install)
   - 코드 컴파일/빌드
   - 단위 테스트 실행 (JUnit, Jest, PyTest)
   - 정적 코드 분석 (SonarQube, ESLint)
   - 보안 취약점 스캔 (Snyk, Trivy)
   - 코드 커버리지 측정

3. 아티팩트 생성 및 저장
   배포 가능한 패키지 생성:
   - 컨테이너 이미지 빌드 (Docker build)
   - 이미지 레지스트리에 푸시 (Docker Hub, ECR, Harbor)
   - 버전 태깅 (Semantic Versioning)

4. 지속적 배포 (Continuous Deployment)
   자동으로 운영 환경에 배포:
   - Staging 환경 배포
   - 통합 테스트 실행 (API 테스트, E2E 테스트)
   - Production 환경 배포 (Blue-Green, Canary)
   - 헬스 체크 및 스모크 테스트

5. 모니터링 및 피드백
   배포 후 시스템 상태 지속 관찰:
   - 애플리케이션 성능 모니터링 (APM)
   - 로그 수집 및 분석 (ELK Stack)
   - 알림 설정 (Slack, Email)
   - 문제 발생 시 자동 롤백

이 전체 과정은 5-10분 내에 완료되며, 하루에 수십 번 반복됩니다.

## 최신 트렌드
- GitOps (ArgoCD, Flux)
- Infrastructure as Code (Terraform, Pulumi)
- Platform Engineering (Developer Portal)
```

### 템플릿 3: 수동 프로세스 토픽 (절차 사용)

```markdown
---
id: example-procedure-001
title: 예제 관리 절차
category: management-focus
subcategory: IT 거버넌스
subjectCategories:
  - SE
  - IM
difficulty: intermediate
certifications:
  - information-management
keywords:
  - Software Audit
  - Quality Assurance
  - Compliance
  - Process
  - Inspection
importance: 4
relatedTopics:
  - quality-001
  - cmmi-001
  - pmbok-001
trends:
  - Agile Audit
  - Cloud Audit
  - AI System Audit
tags:
  - '2025'
---

# 정의
정보시스템 개발 프로젝트의 품질 및 관리 적정성을 독립적으로 검증하는 제도로, 한국의 3단계 감리가 대표적입니다.

## 특징
- 독립성: 프로젝트와 독립적인 제3자가 수행
- 객관성: 정해진 기준과 체크리스트 기반 평가
- 단계별 검증: 계획/설계, 개발, 시험/종료 3단계
- 지적사항 도출: 문제점 발견 및 개선 권고
- 품질 보증: 프로젝트 성공 가능성 향상

## 절차
소프트웨어 감리는 다음 3단계로 수행됩니다:

1단계: 계획/설계 단계 감리
프로젝트 초기에 요구사항과 설계의 적정성을 검증:

1. 감리 계획 수립
   - 감리 범위: 점검 대상 시스템 및 산출물 확정
   - 감리 일정: 프로젝트 일정에 맞춰 감리 시점 결정
   - 감리 팀 구성: 감리 책임자, 전문가 배정
   - 점검 항목 선정: 프로젝트 특성에 맞는 체크리스트 작성

2. 요구사항 점검
   - 요구사항 명세서(SRS) 완전성: 누락된 기능 확인
   - 요구사항 추적성: 사용자 요구 → 시스템 요구사항 매핑
   - 비기능 요구사항: 성능, 보안, 가용성 목표 명확성
   - 변경 관리: 요구사항 변경 이력 및 영향 분석

3. 시스템 설계 점검
   - 아키텍처 설계: 시스템 구조, 계층 분리, 확장성
   - 데이터베이스 설계: ERD, 정규화, 인덱스 전략
   - 인터페이스 설계: 외부 시스템 연계 명세
   - 보안 설계: 인증, 암호화, 접근 통제

4. 사업 관리 점검
   - 일정 관리: WBS, 마일스톤, 일정 준수율
   - 비용 관리: 예산 집행 현황, 원가 분석
   - 인력 관리: 투입 인력 적정성, 핵심 인력 확보
   - 위험 관리: 리스크 식별 및 대응 계획

5. 지적사항 도출 및 보고
   - 중대 지적: 프로젝트 성공에 심각한 영향
   - 권고사항: 개선 필요 항목
   - 개선 조치 계획: 다음 감리까지 시정 요구

2단계: 개발 단계 감리
구현 중간 단계에서 개발 프로세스와 품질을 점검:

1. 이전 감리 지적사항 이행 점검
2. 코드 품질 점검
3. 단위/통합 테스트 점검
4. 형상 관리 점검
5. 프로젝트 진행 상황 점검

3단계: 시험/종료 단계 감리
프로젝트 완료 전 최종 품질과 운영 준비 상태를 점검:

1. 시스템 테스트 점검
2. 운영 준비 점검
3. 산출물 완전성 점검
4. 프로젝트 종료 평가
5. 최종 감리 보고서 작성

## 최신 트렌드
- 애자일 감리 (스프린트 단위 점검)
- 클라우드 감리 (SaaS, IaaS 점검 기준)
- AI 시스템 감리 (알고리즘 공정성, 설명가능성)
```

### 템플릿 4: 시스템/플랫폼 토픽 (기능 사용)

```markdown
---
id: example-platform-001
title: 예제 플랫폼 시스템
category: digital-service
subcategory: 개발 플랫폼
subjectCategories:
  - SE
  - DS
difficulty: basic
certifications:
  - information-management
keywords:
  - Low-Code
  - No-Code
  - Visual Programming
  - Rapid Development
  - Citizen Developer
importance: 4
relatedTopics:
  - platform-engineering-001
  - agile-001
trends:
  - AI-Powered Low-Code
  - Enterprise Low-Code
  - Hybrid Development
tags:
  - '2025'
---

# 정의
최소한의 코딩 또는 코딩 없이 시각적 인터페이스와 드래그앤드롭으로 애플리케이션을 개발하는 플랫폼입니다.

## 특징
- 개발 속도 향상: 전통적 개발 대비 5-10배 빠른 개발
- 진입 장벽 낮음: 비개발자(시민 개발자)도 애플리케이션 구축 가능
- 시각적 개발: 드래그앤드롭, 플로우차트 기반 로직 구성
- 프리빌트 컴포넌트: 재사용 가능한 UI/기능 템플릿 제공
- 협업 강화: 비즈니스 사용자와 개발자 간 협업 촉진

## 기능
- Visual Programming (시각적 프로그래밍)
  - 드래그앤드롭 UI 빌더: 화면 요소를 마우스로 배치
  - 플로우차트 기반 로직: 조건문, 반복문을 시각화
  - 데이터 모델링: 테이블 구조를 GUI로 설계
  - WYSIWYG 에디터: 실제 화면과 동일하게 편집
- 프리빌트 컴포넌트 및 템플릿
  - UI 컴포넌트 라이브러리: 버튼, 폼, 차트, 테이블
  - 업무 템플릿: CRM, 재고관리, 승인 워크플로우
  - 커넥터: 데이터베이스, REST API, SaaS 연동
  - 인증 모듈: OAuth, SAML 기본 제공
- 워크플로우 자동화
  - 비즈니스 프로세스 자동화: 승인 프로세스, 알림
  - 이벤트 트리거: 특정 조건 발생 시 자동 작업 실행
  - 스케줄링: 주기적 작업 예약
- 협업 및 배포
  - 실시간 협업: 여러 사용자가 동시에 편집
  - 버전 관리: 변경 이력 추적 및 롤백
  - 원클릭 배포: 개발 → 스테이징 → 프로덕션 자동 배포
  - 멀티 디바이스 지원: 웹, 모바일 앱 자동 생성
- Low-Code 확장 기능
  - 커스텀 코드 삽입: JavaScript, Python 코드로 복잡한 로직 구현
  - API 생성: 생성된 애플리케이션을 REST API로 노출
  - Git 통합: 소스코드를 Git 저장소로 관리
- No-Code 간편 기능
  - 자연어 기반 쿼리: SQL 없이 데이터 조회
  - 시각적 데이터 필터링: 엑셀처럼 필터 및 정렬
  - 폼 빌더: 설문조사, 신청서 등 입력 폼 생성

## 최신 트렌드
- AI-Powered Low-Code (자연어로 앱 생성)
- Enterprise Low-Code Platforms (대기업급 확장성)
- Low-Code + Pro-Code Hybrid (전문 개발자와 협업)
```

---

## 작성 시 주의사항

### DO ✅

1. **구체적이고 명확하게**
   - 모호한 표현 지양
   - 구체적인 기술/도구 이름 사용
   - 측정 가능한 지표 제시

2. **일관성 유지**
   - 불릿 포인트 형식 통일 (- 사용)
   - 들여쓰기 일관성
   - 종결어미 통일 ("~입니다", "~합니다")

3. **최신성 확보**
   - 2024-2025년 기준 정보
   - 최신 트렌드 반영
   - 레거시 기술은 명시

4. **독자 고려**
   - 기술사 시험 준비생 대상
   - 전문 용어 설명 포함
   - 실무 적용 사례 언급

### DON'T ❌

1. **피해야 할 표현**
   - "매우 좋습니다", "중요합니다" 같은 주관적 평가
   - "많은 회사에서 사용", "앞으로 발전할 것" 같은 모호한 진술
   - 지나치게 기술적인 세부사항

2. **피해야 할 구조**
   - 장황한 문장
   - 중복된 내용
   - 일관성 없는 형식

3. **피해야 할 내용**
   - 오래된 정보 (2023년 이전)
   - 검증되지 않은 정보
   - 특정 제품의 과도한 홍보

---

## 생성 후 검증

작성 완료 후 다음을 확인하세요:

### 1. 구조 검증
- [ ] YAML 프론트매터 완성
- [ ] 정의 섹션 존재 (1-2문장)
- [ ] 특징 섹션 존재 (3-7개)
- [ ] 상세 섹션 최소 1개 존재
- [ ] 섹션 순서 올바름 (정의 → 특징 → 상세 → 트렌드)

### 2. 내용 검증
- [ ] 정의가 명확하고 간결함
- [ ] 특징이 구체적이고 측정 가능함
- [ ] 상세 섹션이 토픽 성격에 맞음
- [ ] 키워드가 검색에 유용함
- [ ] 트렌드가 2024-2025년 기준

### 3. 형식 검증
- [ ] 마크다운 문법 올바름
- [ ] 불릿 포인트 일관성
- [ ] 들여쓰기 올바름
- [ ] 한글 맞춤법 정확
- [ ] 연도 표기 정확 ('2025' 문자열)

### 4. 품질 검증
- [ ] 전문 용어 정확성
- [ ] 정보 최신성
- [ ] 독자 적합성 (기술사 수험생)
- [ ] 실무 적용 가능성

---

## 마무리

이 가이드를 따라 작성하면 일관성 있고 고품질의 토픽을 생성할 수 있습니다.

**중요 원칙:**
1. **간결함**: 핵심만 담기
2. **명확함**: 모호한 표현 지양
3. **일관성**: 형식 통일
4. **최신성**: 2024-2025년 기준
5. **실용성**: 시험과 실무에 도움

질문이나 불확실한 부분이 있다면 기존 토픽들을 참고하세요:
- `TOPIC_WRITING_GUIDE.md`: 전체 작성 가이드
- `src/data/topics/SE/`: 다양한 예시 토픽들
