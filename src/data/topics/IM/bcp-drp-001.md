---
category: management-focus
certifications:
- information-management
difficulty: intermediate
id: bcp-drp-001
importance: 5
keywords:
- BCP
- DRP
- 업무 연속성
- 재해 복구
- RTO
- RPO
relatedTopics:
- cyber-resilience-001
- it-governance-001
subcategory: IT 리스크 관리
subjectCategories:
- IM
- IS
title: BCP & DRP (업무 연속성 계획)
trends:
- 클라우드 기반 BCP/DRP
- 사이버 레질리언스 통합
- 자동화된 재해 복구
---

# 정의
BCP(Business Continuity Plan)는 재해나 비상사태 발생 시에도 핵심 비즈니스 기능을 최소한으로 유지하고, 정해진 시간 내에 정상적인 운영 상태로 복구하기 위한 포괄적인 계획입니다. DRP(Disaster Recovery Plan)는 BCP의 하위 개념으로, IT 시스템 및 인프라에 초점을 맞춰 재해 발생 시 정보 시스템을 복구하는 데 필요한 절차와 자원을 상세히 기술한 계획입니다.

## 특징
- BCP (Business Continuity Plan):
    - 목표: 재해 발생 시 비즈니스 기능의 연속성을 확보. IT뿐만 아니라 인력, 시설, 프로세스 등 전사적 관점에서 접근.
    - 주요 활동: 비즈니스 영향 분석(BIA), 리스크 평가, 복구 전략 수립, BCP 문서화, 교육 및 훈련, 테스트 및 유지보수.
    - RTO (Recovery Time Objective): 재해 발생 후 비즈니스 기능 또는 IT 시스템을 복구해야 하는 최대 허용 시간.
    - RPO (Recovery Point Objective): 재해 발생 시 데이터 손실을 허용할 수 있는 최대 허용 시점.
- DRP (Disaster Recovery Plan):
    - 목표: 재해 발생 시 IT 시스템 및 데이터를 신속하게 복구하여 비즈니스 연속성을 지원.
    - 주요 내용: 백업 및 복구 절차, 재해 복구 센터(DRC) 운영, 네트워크 및 서버 복구 방안, 애플리케이션 복구 절차, 비상 연락망.
    - BCP와의 관계: BCP가 비즈니스 전반의 연속성을 다룬다면, DRP는 그중 IT 부문의 구체적인 복구 방안을 다룹니다. DRP는 BCP의 IT 구성 요소.
- 주요 복구 전략:
    - Hot Site: 재해 발생 시 즉시 운영 가능한 완벽한 복구 환경. (높은 비용, 낮은 RTO/RPO)
    - Warm Site: 주요 장비만 갖추고, 데이터 복구를 통해 운영 준비. (중간 비용, 중간 RTO/RPO)
    - Cold Site: 최소한의 공간만 확보하고, 재해 발생 시 장비 및 시스템 구축. (낮은 비용, 높은 RTO/RPO)

# 정의
BCP(Business Continuity Plan)는 재해나 비상사태 발생 시에도 핵심 비즈니스 기능을 최소한으로 유지하고, 정해진 시간 내에 정상적인 운영 상태로 복구하기 위한 포괄적인 계획입니다. DRP(Disaster Recovery Plan)는 BCP의 하위 개념으로, IT 시스템 및 인프라에 초점을 맞춰 재해 발생 시 정보 시스템을 복구하는 데 필요한 절차와 자원을 상세히 기술한 계획입니다.

## 특징
- BCP (Business Continuity Plan):
    - 목표: 재해 발생 시 비즈니스 기능의 연속성을 확보. IT뿐만 아니라 인력, 시설, 프로세스 등 전사적 관점에서 접근.
    - 주요 활동: 비즈니스 영향 분석(BIA), 리스크 평가, 복구 전략 수립, BCP 문서화, 교육 및 훈련, 테스트 및 유지보수.
    - RTO (Recovery Time Objective): 재해 발생 후 비즈니스 기능 또는 IT 시스템을 복구해야 하는 최대 허용 시간.
    - RPO (Recovery Point Objective): 재해 발생 시 데이터 손실을 허용할 수 있는 최대 허용 시점.
- DRP (Disaster Recovery Plan):
    - 목표: 재해 발생 시 IT 시스템 및 데이터를 신속하게 복구하여 비즈니스 연속성을 지원.
    - 주요 내용: 백업 및 복구 절차, 재해 복구 센터(DRC) 운영, 네트워크 및 서버 복구 방안, 애플리케이션 복구 절차, 비상 연락망.
    - BCP와의 관계: BCP가 비즈니스 전반의 연속성을 다룬다면, DRP는 그중 IT 부문의 구체적인 복구 방안을 다룹니다. DRP는 BCP의 IT 구성 요소.
- 주요 복구 전략:
    - Hot Site: 재해 발생 시 즉시 운영 가능한 완벽한 복구 환경. (높은 비용, 낮은 RTO/RPO)
    - Warm Site: 주요 장비만 갖추고, 데이터 복구를 통해 운영 준비. (중간 비용, 중간 RTO/RPO)
    - Cold Site: 최소한의 공간만 확보하고, 재해 발생 시 장비 및 시스템 구축. (낮은 비용, 높은 RTO/RPO)