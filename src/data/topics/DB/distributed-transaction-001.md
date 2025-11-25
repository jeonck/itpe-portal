---
id: distributed-transaction-001
title: 분산 트랜잭션 (2PC & Saga Pattern)
category: digital-service
subcategory: 분산 시스템
subjectCategories:
  - DB
  - DS
  - SE
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 분산 트랜잭션
  - 2PC
  - Two-Phase Commit
  - Saga Pattern
  - 보상 트랜잭션
importance: 5
relatedTopics:
  - transaction-001
  - distributed-db-001
  - msa-001
trends:
  - Event-Driven Saga
  - Transactional Outbox Pattern
tags:
  - '2025'
---

# 정의
여러 데이터베이스나 서비스에 걸친 트랜잭션의 원자성을 보장하기 위한 기법으로, 2PC와 Saga Pattern이 대표적입니다.

## 특징
- 2PC (Two-Phase Commit): Prepare → Commit 2단계 프로토콜
- 2PC 단점: 블로킹, 코디네이터 장애 시 전체 실패
- Saga Pattern: 로컬 트랜잭션 체인 + 보상 트랜잭션
- Saga 종류: Choreography(이벤트 기반), Orchestration(중앙 조정)
- 보상 트랜잭션: 실패 시 이전 단계 롤백
- CAP 이론: 일관성 vs 가용성 트레이드오프
- BASE: Basically Available, Soft state, Eventually consistent
- 사용 사례: MSA 주문 처리, 결제 시스템

## 동작원리
분산 트랜잭션의 주요 동작원리는 2PC(Two-Phase Commit)와 Saga Pattern으로 구분됩니다.

-   **2PC (Two-Phase Commit, 2단계 커밋) 프로토콜**:
    -   **원리**: 분산된 데이터베이스 시스템에서 모든 참여자(노드)가 트랜잭션의 성공 또는 실패에 대해 합의하도록 보장하는 원자적 커밋 프로토콜입니다. 코디네이터(Coordinator)와 참여자(Participant) 간의 통신을 통해 진행됩니다.
    -   **동작 단계**:
        1.  **준비 단계 (Prepare Phase)**:
            -   코디네이터는 모든 참여자에게 트랜잭션 커밋 준비 요청(`VOTE_REQUEST`)을 보냅니다.
            -   각 참여자는 로컬 트랜잭션을 실행하고, 커밋이 가능한 상태가 되면 트랜잭션 로그에 기록한 후 코디네이터에게 `VOTE_COMMIT` 응답을 보냅니다. (데이터 잠금 유지)
            -   커밋이 불가능하면 `VOTE_ABORT` 응답을 보냅니다.
        2.  **커밋 단계 (Commit Phase)**:
            -   코디네이터는 모든 참여자로부터 `VOTE_COMMIT` 응답을 받으면, 모든 참여자에게 `GLOBAL_COMMIT` 명령을 보냅니다.
            -   각 참여자는 로컬 트랜잭션을 커밋하고 데이터 잠금을 해제합니다.
            -   만약 단 하나라도 `VOTE_ABORT` 응답을 보내거나 응답이 없으면, 코디네이터는 모든 참여자에게 `GLOBAL_ABORT` 명령을 보내고 모든 참여자는 트랜잭션을 롤백합니다.
    -   **장점**: 강한 일관성 보장.
    -   **단점**:
        -   **블로킹 (Blocking)**: 코디네이터가 실패하거나 특정 참여자가 응답하지 않으면, 다른 참여자들이 무기한으로 대기 상태에 빠질 수 있습니다.
        -   **성능 저하**: 네트워크 지연 및 통신 오버헤드로 인해 성능이 저하될 수 있습니다.

-   **Saga Pattern**:
    -   **원리**: 2PC의 블로킹 문제를 해결하기 위해 도입된 분산 트랜잭션 관리 패턴으로, 일련의 로컬 트랜잭션으로 구성됩니다. 각 로컬 트랜잭션은 자체 데이터베이스에서 커밋되며, Saga가 실패하면 이전에 성공한 로컬 트랜잭션들을 보상 트랜잭션(Compensation Transaction)을 통해 롤백합니다.
    -   **동작 방식**:
        1.  **로컬 트랜잭션 실행**: 각 서비스는 자체 데이터베이스에서 로컬 트랜잭션을 실행하고 커밋합니다.
        2.  **이벤트 발행**: 로컬 트랜잭션이 성공하면 다음 로컬 트랜잭션을 시작할 이벤트(또는 메시지)를 발행합니다.
        3.  **보상 트랜잭션**: 만약 Saga의 어떤 로컬 트랜잭션이 실패하면, 이전에 성공한 로컬 트랜잭션들을 되돌리는 보상 트랜잭션을 실행하여 전체 Saga의 일관성을 유지합니다.
    -   **유형**:
        -   **오케스트레이션 (Orchestration)**: 중앙의 오케스트레이터가 Saga의 흐름과 각 로컬 트랜잭션의 실행을 조정합니다.
        -   **코레오그래피 (Choreography)**: 각 서비스가 이벤트를 발행하고 구독하며, 서로의 이벤트를 기반으로 다음 로컬 트랜잭션을 자율적으로 실행합니다.
    -   **장점**: 2PC 대비 높은 가용성, 블로킹 없음, 느슨한 결합(Loose Coupling).
    -   **단점**:
        -   **결과적 일관성 (Eventual Consistency)**: 2PC와 같은 강한 일관성이 아닌 결과적 일관성을 제공합니다.
        -   **복잡성**: 보상 트랜잭션 구현 및 Saga 흐름 관리가 복잡할 수 있습니다.
        -   **디버깅 어려움**: 분산된 로그와 이벤트로 인해 디버깅이 어려울 수 있습니다.

이러한 패턴들은 마이크로서비스 아키텍처와 같이 분산된 시스템 환경에서 데이터 일관성을 유지하는 데 필수적입니다.
