---
id: rto-rpo-001
title: RTO / RPO (재해 복구 목표)
category: management-focus
subcategory: IT 리스크 관리
subjectCategories:
  - IM
  - IS
difficulty: intermediate
certifications:
  - information-management
keywords:
  - RTO
  - RPO
  - 재해 복구 목표
  - 복구 시간 목표
  - 복구 시점 목표
importance: 4
relatedTopics:
  - bcp-drp-001
  - cyber-resilience-001
trends:
  - 제로 RTO/RPO
  - 클라우드 기반 DR
  - CDP (Continuous Data Protection)
---

# 정의
RTO(Recovery Time Objective)와 RPO(Recovery Point Objective)는 재해 복구 계획(DRP) 및 비즈니스 연속성 계획(BCP) 수립 시 핵심적으로 고려되는 목표 지표입니다.
*   **RTO (Recovery Time Objective)**: 재해 발생 후 비즈니스 기능 또는 IT 시스템을 복구하여 정상적인 운영 상태로 되돌려야 하는 최대 허용 시간입니다. '얼마나 빨리 복구할 것인가'에 대한 목표입니다.
*   **RPO (Recovery Point Objective)**: 재해 발생 시 데이터 손실을 허용할 수 있는 최대 허용 시점입니다. '얼마까지의 데이터를 잃어도 되는가'에 대한 목표입니다.

## 특징
- **RTO (Recovery Time Objective)**:
    - **시간 단위**: 일반적으로 분, 시간, 일 단위로 측정됩니다.
    - **영향**: RTO가 짧을수록 복구 시스템 구축 비용이 증가합니다 (예: Hot Site).
    - **고려 사항**: 비즈니스 프로세스의 중요도, 서비스 중단으로 인한 재정적 손실, 규제 준수 요구사항 등을 고려하여 결정됩니다.
- **RPO (Recovery Point Objective)**:
    - **시간 단위**: 일반적으로 초, 분, 시간 단위로 측정됩니다.
    - **영향**: RPO가 짧을수록 백업/복제 주기가 짧아지고, 시스템 및 네트워크 부하가 증가합니다 (예: 실시간 데이터 복제).
    - **고려 사항**: 데이터 손실로 인한 비즈니스 영향, 데이터의 휘발성, 백업/복제 비용 등을 고려하여 결정됩니다.
- **BCP/DRP의 핵심 지표**: RTO와 RPO는 비즈니스 영향 분석(BIA)의 주요 산출물이며, 재해 복구 전략 및 기술 선정의 기준이 됩니다.
- **상호 연관성**: 일반적으로 RTO와 RPO 목표가 짧을수록 더 높은 수준의 복구 인프라와 기술이 요구되며, 이는 곧 높은 비용으로 이어집니다. 따라서 비즈니스 중요도와 비용 효율성을 고려하여 적절한 균형점을 찾아야 합니다.
- **제어점 (Control Point)**:
    - **RTO**: 시스템 가동 중단 시간.
    - **RPO**: 데이터 손실 허용 시간.

