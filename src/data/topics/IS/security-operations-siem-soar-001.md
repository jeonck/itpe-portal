---
id: security-operations-siem-soar-001
title: 보안 관제 (SIEM & SOAR)
category: digital-service
subcategory: 보안 운영
subjectCategories:
  - IS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 보안 관제
  - SIEM
  - SOAR
  - 위협 탐지
  - 침해 대응
  - 자동화
importance: 5
relatedTopics:
  - security-attack-001
  - security-solution-001
  - cyber-resilience-001
trends:
  - XDR (Extended Detection and Response)
  - AI 기반 보안 관제
  - 위협 인텔리전스 통합
---

# 정의
보안 관제는 정보 시스템에 대한 사이버 위협을 실시간으로 탐지하고 분석하며, 적절히 대응하여 시스템을 보호하는 활동입니다. SIEM(Security Information and Event Management)은 다양한 보안 시스템과 네트워크 장비에서 발생하는 로그 및 이벤트를 통합 수집, 분석하여 위협을 탐지하는 솔루션이며, SOAR(Security Orchestration, Automation and Response)는 SIEM에서 탐지된 위협에 대한 대응 프로세스를 자동화하고 오케스트레이션하여 보안 운영의 효율성과 대응 속도를 높이는 플랫폼입니다.

## 특징
- **보안 관제 (Security Operations)**:
    - **목표**: 정보 시스템의 가용성, 기밀성, 무결성 유지. 위협을 조기에 탐지하고 신속하게 대응하여 피해 최소화.
    - **주요 활동**: 실시간 모니터링, 위협 분석, 침해 사고 대응, 취약점 관리.
- **SIEM (Security Information and Event Management)**:
    - **기능**:
        - **로그/이벤트 수집**: 방화벽, IPS, 서버, 애플리케이션 등 다양한 소스에서 보안 로그와 이벤트를 중앙 집중적으로 수집.
        - **정규화 및 상관 분석**: 수집된 이벤트를 표준화하고, 서로 다른 이벤트 간의 관계를 분석하여 실제 위협을 식별.
        - **위협 탐지 및 알림**: 정의된 보안 정책이나 위협 시나리오에 따라 이상 징후를 탐지하고 관리자에게 알림.
        - **보고 및 규정 준수**: 보안 이벤트 보고서를 생성하고 규제 준수(GDPR, HIPAA 등)를 위한 증적 자료 제공.
    - **장점**: 분산된 로그 통합 관리, 광범위한 위협 탐지, 규제 준수 지원.
    - **단점**: 오탐(False Positive) 발생 가능성, 고도화된 위협 탐지 한계, 초기 구축 비용 및 운영 복잡성.
- **SOAR (Security Orchestration, Automation and Response)**:
    - **기능**:
        - **보안 오케스트레이션**: 다양한 보안 도구(SIEM, 방화벽, 백신 등)를 통합하고 연동하여 보안 워크플로우를 구성.
        - **자동화**: 침해 사고 대응 절차 중 반복적이고 정형화된 작업을 자동으로 수행. (예: 악성 IP 차단, 사용자 계정 잠금).
        - **플레이북 (Playbook)**: 특정 위협에 대한 표준화된 대응 절차를 정의한 스크립트 또는 워크플로우.
        - **위협 인텔리전스 통합**: 외부 위협 정보(IOCs)를 활용하여 위협 탐지 및 대응 강화.
    - **장점**: 침해 사고 대응 시간 단축, 보안 운영 효율성 증대, 인력 부족 해소, 일관된 대응.
    - **단점**: 초기 플레이북 구축 비용, 비정형 위협 대응 한계, 통합의 복잡성.
- **SIEM과 SOAR의 관계**: SIEM이 '위협 탐지'에 중점을 둔다면, SOAR는 SIEM에서 탐지된 위협에 대한 '대응'을 자동화하고 효율화하는 역할을 합니다. 상호 보완적으로 작동하여 보안 관제 역량을 극대화합니다.

