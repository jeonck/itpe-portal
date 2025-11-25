---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: chaos-engineering-001
importance: 4
keywords:
- Chaos Monkey
- 장애 주입
- 복원력
- Netflix
- Steady State
relatedTopics:
- sre-001
- kubernetes-001
- msa-001
subcategory: 운영 및 신뢰성
subjectCategories:
- SE
- DS
tags:
- '2025'
title: 카오스 엔지니어링 (Chaos Engineering)
trends:
- Chaos Mesh
- LitmusChaos
- AWS Fault Injection Simulator
---

# 정의
프로덕션 환경에서 의도적으로 장애를 주입하여 시스템의 복원력을 테스트하고 개선하는 Netflix 발 엔지니어링 기법입니다.

## 동작원리
카오스 엔지니어링 실험은 다음 단계로 수행됩니다:

1. Steady State 정의 (정상 상태 정의)
   시스템의 정상 동작 상태를 측정 가능한 지표로 정의:
   - 응답 시간: 평균 응답시간 < 200ms
   - 처리량(Throughput): 초당 요청 처리 수 > 1000 TPS
   - 에러율: HTTP 5xx 에러율 < 0.1%
   - 가용성: 서비스 가동률 > 99.9%
   이러한 지표를 모니터링 대시보드로 시각화하여 지속 관찰

2. Hypothesis 수립 (가설 수립)
   특정 장애 상황에서 시스템이 어떻게 동작할지 가설 설정:
   - "API Gateway 인스턴스 1개가 종료되어도 나머지 인스턴스가 트래픽을 처리하여 사용자는 영향을 받지 않을 것이다"
   - "데이터베이스 응답이 5초 지연되어도 Circuit Breaker가 동작하여 전체 시스템은 정상 동작할 것이다"

3. 장애 주입 (Inject Failure)
   실제 프로덕션 환경에서 제어된 방식으로 장애를 발생:
   - 서버 종료: EC2/Pod 무작위 종료 (Chaos Monkey)
   - 네트워크 지연: 특정 서비스 간 통신에 지연 추가 (Latency Injection)
   - CPU/메모리 부하: 리소스 사용률을 임계값까지 증가
   - 디스크 장애: I/O 에러 시뮬레이션
   - 의존성 장애: 외부 API 호출 실패 시뮬레이션
   - 시간대 제한: 트래픽이 적은 시간대에 실험 진행
   - Blast Radius 제한: 전체 중 일부(예: 10%) 트래픽만 영향

4. 실험 실행 및 관찰
   장애 주입 후 시스템 동작을 모니터링:
   - Steady State 지표가 허용 범위 내에 유지되는지 확인
   - 알림(Alert) 발생 여부 확인
   - 자동 복구 메커니즘 동작 여부 확인
   - 사용자 영향도 측정

5. 결과 분석 및 개선
   실험 결과를 바탕으로 시스템 개선:
   - 가설이 맞으면: 시스템이 복원력을 갖췄음을 검증, 정기 실험으로 전환
   - 가설이 틀리면: 취약점 발견, 개선 작업 수행 (Auto Scaling, Circuit Breaker, Retry 로직 추가 등)
   - Postmortem 문서화: 실험 결과와 개선 사항 기록

6. Game Day (정기 훈련)
   팀 전체가 참여하는 대규모 장애 대응 훈련:
   - 복합 장애 시나리오 실행
   - 사고 대응 프로세스 검증
   - On-call 팀 훈련

## 특징
- Steady State: 정상 상태 정의 (응답시간, 처리량, 에러율 등)
- Hypothesis: 장애 발생 시 시스템 동작 가설 수립
- 장애 주입: 서버 종료, 네트워크 지연, CPU/메모리 부하, 디스크 장애
- 실험 실행: 프로덕션 환경에서 제어된 장애 실험
- Chaos Monkey: AWS 인스턴스 무작위 종료 (Netflix)
- 도구: Chaos Toolkit, Gremlin, Chaos Mesh, LitmusChaos
- Game Day: 팀 전체가 참여하는 장애 대응 훈련

## 최신 트렌드
- Chaos Mesh
- LitmusChaos
- AWS Fault Injection Simulator

# 정의
프로덕션 환경에서 의도적으로 장애를 주입하여 시스템의 복원력을 테스트하고 개선하는 Netflix 발 엔지니어링 기법입니다.

## 동작원리
카오스 엔지니어링 실험은 다음 단계로 수행됩니다:

1. Steady State 정의 (정상 상태 정의)
   시스템의 정상 동작 상태를 측정 가능한 지표로 정의:
   - 응답 시간: 평균 응답시간 < 200ms
   - 처리량(Throughput): 초당 요청 처리 수 > 1000 TPS
   - 에러율: HTTP 5xx 에러율 < 0.1%
   - 가용성: 서비스 가동률 > 99.9%
   이러한 지표를 모니터링 대시보드로 시각화하여 지속 관찰

2. Hypothesis 수립 (가설 수립)
   특정 장애 상황에서 시스템이 어떻게 동작할지 가설 설정:
   - "API Gateway 인스턴스 1개가 종료되어도 나머지 인스턴스가 트래픽을 처리하여 사용자는 영향을 받지 않을 것이다"
   - "데이터베이스 응답이 5초 지연되어도 Circuit Breaker가 동작하여 전체 시스템은 정상 동작할 것이다"

3. 장애 주입 (Inject Failure)
   실제 프로덕션 환경에서 제어된 방식으로 장애를 발생:
   - 서버 종료: EC2/Pod 무작위 종료 (Chaos Monkey)
   - 네트워크 지연: 특정 서비스 간 통신에 지연 추가 (Latency Injection)
   - CPU/메모리 부하: 리소스 사용률을 임계값까지 증가
   - 디스크 장애: I/O 에러 시뮬레이션
   - 의존성 장애: 외부 API 호출 실패 시뮬레이션
   - 시간대 제한: 트래픽이 적은 시간대에 실험 진행
   - Blast Radius 제한: 전체 중 일부(예: 10%) 트래픽만 영향

4. 실험 실행 및 관찰
   장애 주입 후 시스템 동작을 모니터링:
   - Steady State 지표가 허용 범위 내에 유지되는지 확인
   - 알림(Alert) 발생 여부 확인
   - 자동 복구 메커니즘 동작 여부 확인
   - 사용자 영향도 측정

5. 결과 분석 및 개선
   실험 결과를 바탕으로 시스템 개선:
   - 가설이 맞으면: 시스템이 복원력을 갖췄음을 검증, 정기 실험으로 전환
   - 가설이 틀리면: 취약점 발견, 개선 작업 수행 (Auto Scaling, Circuit Breaker, Retry 로직 추가 등)
   - Postmortem 문서화: 실험 결과와 개선 사항 기록

6. Game Day (정기 훈련)
   팀 전체가 참여하는 대규모 장애 대응 훈련:
   - 복합 장애 시나리오 실행
   - 사고 대응 프로세스 검증
   - On-call 팀 훈련

## 특징
- Steady State: 정상 상태 정의 (응답시간, 처리량, 에러율 등)
- Hypothesis: 장애 발생 시 시스템 동작 가설 수립
- 장애 주입: 서버 종료, 네트워크 지연, CPU/메모리 부하, 디스크 장애
- 실험 실행: 프로덕션 환경에서 제어된 장애 실험
- Chaos Monkey: AWS 인스턴스 무작위 종료 (Netflix)
- 도구: Chaos Toolkit, Gremlin, Chaos Mesh, LitmusChaos
- Game Day: 팀 전체가 참여하는 장애 대응 훈련

## 최신 트렌드
- Chaos Mesh
- LitmusChaos
- AWS Fault Injection Simulator