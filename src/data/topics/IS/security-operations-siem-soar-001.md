---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: security-operations-siem-soar-001
importance: 5
keywords:
- 보안 관제
- SIEM
- SOAR
- 위협 탐지
- 침해 대응
- 자동화
relatedTopics:
- security-attack-001
- security-solution-001
- cyber-resilience-001
subcategory: 보안 운영
subjectCategories:
- IS
title: 보안 관제 (SIEM & SOAR)
trends:
- XDR (Extended Detection and Response)
- AI 기반 보안 관제
- 위협 인텔리전스 통합
---

# 정의
보안 관제는 정보 시스템에 대한 사이버 위협을 실시간으로 탐지하고 분석하며, 적절히 대응하여 시스템을 보호하는 활동입니다. SIEM(Security Information and Event Management)은 다양한 보안 시스템과 네트워크 장비에서 발생하는 로그 및 이벤트를 통합 수집, 분석하여 위협을 탐지하는 솔루션이며, SOAR(Security Orchestration, Automation and Response)는 SIEM에서 탐지된 위협에 대한 대응 프로세스를 자동화하고 오케스트레이션하여 보안 운영의 효율성과 대응 속도를 높이는 플랫폼.


## 특징
- 보안 관제 (Security Operations):
    - 목표: 정보 시스템의 가용성, 기밀성, 무결성 유지. 위협을 조기에 탐지하고 신속하게 대응하여 피해 최소화.
    - 주요 활동: 실시간 모니터링, 위협 분석, 침해 사고 대응, 취약점 관리.
- SIEM (Security Information and Event Management):
    - 기능:
        - 로그/이벤트 수집: 방화벽, IPS, 서버, 애플리케이션 등 다양한 소스에서 보안 로그와 이벤트를 중앙 집중적으로 수집.
        - 정규화 및 상관 분석: 수집된 이벤트를 표준화하고, 서로 다른 이벤트 간의 관계를 분석하여 실제 위협을 식별.
        - 위협 탐지 및 알림: 정의된 보안 정책이나 위협 시나리오에 따라 이상 징후를 탐지하고 관리자에게 알림.
        - 보고 및 규정 준수: 보안 이벤트 보고서를 생성하고 규제 준수(GDPR, HIPAA 등)를 위한 증적 자료 제공.
    - 장점: 분산된 로그 통합 관리, 광범위한 위협 탐지, 규제 준수 지원.
    - 단점: 오탐(False Positive) 발생 가능성, 고도화된 위협 탐지 한계, 초기 구축 비용 및 운영 복잡성.
- SOAR (Security Orchestration, Automation and Response):
    - 기능:
        - 보안 오케스트레이션: 다양한 보안 도구(SIEM, 방화벽, 백신 등)를 통합하고 연동하여 보안 워크플로우를 구성.
        - 자동화: 침해 사고 대응 절차 중 반복적이고 정형화된 작업을 자동으로 수행. (예: 악성 IP 차단, 사용자 계정 잠금).
        - 플레이북 (Playbook): 특정 위협에 대한 표준화된 대응 절차를 정의한 스크립트 또는 워크플로우.
        - 위협 인텔리전스 통합: 외부 위협 정보(IOCs)를 활용하여 위협 탐지 및 대응 강화.
    - 장점: 침해 사고 대응 시간 단축, 보안 운영 효율성 증대, 인력 부족 해소, 일관된 대응.
    - 단점: 초기 플레이북 구축 비용, 비정형 위협 대응 한계, 통합의 복잡성.
- SIEM과 SOAR의 관계: SIEM이 '위협 탐지'에 중점을 둔다면, SOAR는 SIEM에서 탐지된 위협에 대한 '대응'을 자동화하고 효율화하는 역할을 합니다. 상호 보완적으로 작동하여 보안 관제 역량을 극대화합니다.

## 기술요소
보안 관제를 위한 핵심 기술 요소인 SIEM(Security Information and Event Management)과 SOAR(Security Orchestration, Automation and Response)는 다음과 같은 기능들을 제공합니다.

-   **SIEM (Security Information and Event Management)**:
    -   **로그 및 이벤트 수집**:
        -   다양한 IT 시스템(서버, 네트워크 장비, 보안 솔루션, 애플리케이션)에서 발생하는 보안 로그 및 이벤트를 중앙 집중적으로 수집합니다.
        -   **기능**: Syslog, SNMP, API 연동 등 다양한 방식으로 데이터를 수집하고 정규화합니다.
    -   **위협 탐지 및 상관 분석**:
        -   수집된 로그와 이벤트를 실시간으로 분석하여 잠재적인 보안 위협을 탐지합니다.
        -   **상관 분석**: 서로 다른 로그 간의 관계를 파악하여 단일 로그로는 알 수 없는 복합적인 공격 패턴이나 이상 행위를 식별합니다. (예: 특정 서버의 로그인 실패 후 다른 서버로의 접근 시도)
        -   **위협 인텔리전스 통합**: 외부 위협 정보(블랙리스트 IP, 악성 도메인 등)를 연동하여 탐지 정확도를 높입니다.
    -   **알림 및 보고**:
        -   탐지된 위협에 대해 보안 담당자에게 즉시 알림을 제공하고, 보안 이벤트에 대한 분석 보고서를 생성하여 규제 준수 및 감사 증적 자료로 활용합니다.

-   **SOAR (Security Orchestration, Automation and Response)**:
    -   **보안 오케스트레이션 (Orchestration)**:
        -   **기능**: SIEM, 방화벽, 백신, EDR 등 분산된 보안 솔루션들을 하나의 플랫폼으로 통합하고 연동하여 보안 워크플로우를 자동화합니다.
        -   **효과**: 복잡한 보안 프로세스를 자동화하여 보안 운영의 효율성을 극대화합니다.
    -   **보안 자동화 (Automation)**:
        -   **기능**: 침해 사고 대응 과정 중 반복적이고 정형화된 작업을 자동으로 수행합니다. (예: 악성 IP 차단, 감염된 시스템 격리, 사용자 계정 잠금, 악성 파일 삭제).
        -   **플레이북 (Playbook)**: 특정 위협 시나리오에 대한 표준화된 대응 절차를 미리 정의하고, 이를 스크립트 형태로 자동 실행합니다.
    -   **침해 사고 대응 (Response)**:
        -   **기능**: 위협 탐지부터 분석, 격리, 치료, 복구에 이르는 전체 침해 사고 대응 프로세스를 관리합니다.
        -   **효과**: 대응 시간을 획기적으로 단축하여 피해 확산을 방지하고, 보안 분석가의 업무 부담을 경감시킵니다.
    -   **위협 인텔리전스 (Threat Intelligence) 통합**:
        -   최신 위협 정보(IOCs, Indicators of Compromise)를 자동으로 수집하고, 이를 SIEM 등 다른 보안 시스템과 공유하여 탐지 및 대응 역량을 강화합니다.

이러한 SIEM과 SOAR 기술은 상호 보완적으로 작동하여, SIEM이 수많은 로그 속에서 위협을 '탐지'하고 '알려주는' 역할을 한다면, SOAR는 탐지된 위협에 대해 '어떻게' '자동으로' '대응'할 것인가를 책임져 보안 관제 시스템의 효율성과 효과성을 극대화합니다.