---
id: chaos-engineering-001
title: 카오스 엔지니어링 (Chaos Engineering)
category: digital-service
subcategory: 운영 및 신뢰성
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Chaos Monkey
  - 장애 주입
  - 복원력
  - Netflix
  - Steady State
importance: 4
relatedTopics:
  - sre-001
  - kubernetes-001
  - msa-001
trends:
  - Chaos Mesh
  - LitmusChaos
  - AWS Fault Injection Simulator
tags:
  - '2025'
---

# 정의
프로덕션 환경에서 의도적으로 장애를 주입하여 시스템의 복원력을 테스트하고 개선하는 Netflix 발 엔지니어링 기법입니다.

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
