---
id: ot-ics-security-001
title: OT/ICS 보안 (산업제어시스템)
category: digital-service
subcategory: 산업 보안
subjectCategories:
  - IS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - OT 보안
  - ICS 보안
  - 산업제어시스템
  - SCADA
  - DCS
  - PLC
importance: 5
relatedTopics:
  - security-attack-001
  - network-security-001
trends:
  - 스마트 팩토리 보안
  - 융합 보안
  - 제로 트러스트 OT
---

# 정의
OT(Operational Technology, 운영 기술) 보안은 산업 시설 및 인프라의 운영을 제어하고 모니터링하는 하드웨어 및 소프트웨어(예: ICS, Industrial Control Systems)를 사이버 위협으로부터 보호하는 분야입니다. ICS는 SCADA(Supervisory Control And Data Acquisition), DCS(Distributed Control System), PLC(Programmable Logic Controller) 등을 포함하며, 물리적 시스템의 안전하고 안정적인 운영을 보장하는 것이 최우선 목표입니다.

## 특징
- **OT/ICS 환경의 특성**:
    - **가용성 최우선**: 24/7 중단 없는 운영이 핵심. 보안 기능으로 인한 가용성 저하는 치명적.
    - **레거시 시스템**: 수명이 길고 패치 적용이 어려운 오래된 시스템이 많음.
    - **실시간성**: 엄격한 실시간 제어가 중요하며, 네트워크 지연에 매우 민감.
    - **물리적 안전**: 사이버 공격이 물리적 피해(폭발, 환경 오염, 인명 피해)로 이어질 수 있음.
    - **네트워크 분리**: 과거에는 IT 네트워크와 물리적으로 분리(Air Gap)되어 있었으나, 스마트 팩토리 등으로 인해 IT/OT 융합 가속화.
- **주요 ICS 구성 요소**:
    - **SCADA (Supervisory Control And Data Acquisition)**: 광범위한 지역에 분산된 산업 공정을 원격에서 감시하고 제어.
    - **DCS (Distributed Control System)**: 공장 내 특정 공정을 분산된 제어기로 제어.
    - **PLC (Programmable Logic Controller)**: 기계의 자동 제어에 사용되는 컴퓨터.
    - **RTU (Remote Terminal Unit)**: SCADA 시스템에서 현장 장비의 데이터를 수집하고 제어 명령을 전달.
- **OT/ICS 보안 위협**:
    - **물리적 피해**: 시스템 마비, 오작동으로 인한 설비 파괴, 환경 오염.
    - **생산 중단**: 랜섬웨어, 악성코드 등으로 인한 생산 라인 정지.
    - **정보 탈취**: 산업 기밀, 생산 기술 유출.
    - **내부자 위협**: 내부자에 의한 고의 또는 실수로 인한 시스템 장애.
    - **주요 공격 사례**: 스턱스넷(Stuxnet), 블랙에너지(BlackEnergy).
- **OT/ICS 보안 대책**:
    - **네트워크 분리 및 영역화**: IT/OT 네트워크 분리 및 보안 영역(Zone) 설정.
    - **접근 통제 강화**: 특권 계정 관리, MFA, 망 연계/망 분리.
    - **보안 가시성 확보**: OT 네트워크 트래픽 모니터링, 자산 식별.
    - **취약점 관리**: 제어 시스템 특성을 고려한 패치 관리, 취약점 분석.
    - **물리적 보안 강화**: 제어 시스템에 대한 물리적 접근 통제.
    - **OT 전용 보안 솔루션**: OT IDS/IPS, OT 방화벽.

