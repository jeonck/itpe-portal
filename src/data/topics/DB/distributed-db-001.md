---
id: distributed-db-001
title: 분산 DB (Sharding & Partitioning)
category: digital-service
subcategory: 데이터베이스
subjectCategories:
  - DB
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Sharding
  - Partitioning
  - 분산 데이터베이스
  - Horizontal Scaling
  - Consistent Hashing
importance: 5
relatedTopics:
  - nosql-001
  - transaction-001
  - distributed-transaction-001
trends:
  - Serverless Database
  - Multi-Region Replication
tags:
  - '2025'
---

# 정의
대규모 데이터를 여러 서버에 분산 저장하여 수평 확장성과 고가용성을 확보하는 데이터베이스 아키텍처입니다.

## 특징
- Sharding: 데이터를 여러 DB 서버(Shard)에 수평 분할
- Partitioning: 테이블을 논리적/물리적으로 분할 (Range, Hash, List)
- Sharding Key: 데이터 분산 기준 (예: user_id, region)
- Consistent Hashing: 샤드 추가/제거 시 재분배 최소화
- 장점: 수평 확장, 성능 향상, 장애 격리
- 단점: 복잡한 조인, 분산 트랜잭션 어려움, 샤드 재조정
- Replication: Master-Slave, Multi-Master 복제
- 주요 제품: Vitess, Citus, CockroachDB, TiDB

## 기술요소
분산 데이터베이스는 다음과 같은 기술 요소를 통해 수평 확장성, 고가용성, 내결함성을 확보합니다.

-   **데이터 분할 전략 (Data Partitioning Strategies)**:
    -   **샤딩 (Sharding)**:
        -   **정의**: 데이터를 여러 개의 독립적인 데이터베이스 서버(Shard)에 수평적으로 분할하여 저장하는 기술. 각 샤드는 전체 데이터의 일부분을 저장하며 독립적인 데이터베이스 인스턴스로 작동합니다.
        -   **샤딩 키 (Sharding Key)**: 데이터를 샤드에 분산하는 기준이 되는 컬럼(예: 사용자 ID, 지역 코드). 샤딩 키의 선택이 분산 효율성에 큰 영향을 미칩니다.
        -   **샤딩 방식**:
            -   **범위 기반 샤딩 (Range-Based Sharding)**: 샤딩 키의 특정 범위를 기준으로 데이터를 분산.
            -   **해시 기반 샤딩 (Hash-Based Sharding)**: 샤딩 키의 해시 값을 기준으로 데이터를 분산.
            -   **목록 기반 샤딩 (List-Based Sharding)**: 샤딩 키의 특정 값을 기준으로 데이터를 분산.
        -   **Consistent Hashing**: 샤드를 추가하거나 제거할 때 데이터 재분배를 최소화하여 시스템 안정성 유지.
    -   **파티셔닝 (Partitioning)**:
        -   **정의**: 하나의 논리적인 테이블이나 인덱스를 더 작고 관리하기 쉬운 여러 개의 물리적인 세그먼트(파티션)로 분할하는 기술. 주로 단일 데이터베이스 내에서 성능 향상과 관리 용이성을 목적으로 합니다.
        -   **유형**: 범위 파티셔닝(Range Partitioning), 목록 파티셔닝(List Partitioning), 해시 파티셔닝(Hash Partitioning).
-   **데이터 복제 (Data Replication)**:
    -   **목표**: 데이터의 고가용성과 내결함성을 확보하고, 읽기 성능을 향상시킵니다.
    -   **마스터-슬레이브 (Master-Slave) 복제**: 하나의 마스터 노드에서 쓰기 작업을 처리하고, 변경된 데이터를 여러 슬레이브 노드로 복제합니다. 슬레이브 노드는 읽기 전용으로 사용됩니다.
    -   **멀티-마스터 (Multi-Master) 복제**: 여러 노드에서 동시에 쓰기 작업을 처리할 수 있으며, 각 노드 간에 데이터를 동기화합니다. 충돌 해결 메커니즘이 중요합니다.
    -   **싱글 리더 복제 (Single-Leader Replication)**: 하나의 리더 노드가 쓰기 작업을 전담하고, 다른 팔로워 노드들은 리더의 데이터를 복제하여 읽기 요청을 처리합니다.
-   **분산 트랜잭션 관리**:
    -   분산 환경에서 ACID 속성을 보장하기 위한 기술 (2단계 커밋(2PC), Saga 패턴 등).
-   **분산 쿼리 처리**:
    -   분산된 데이터 소스에서 쿼리를 효율적으로 실행하고 결과를 통합하는 기술.
-   **주요 분산 DB 제품**: Vitess, Citus, CockroachDB, TiDB, Apache Cassandra, MongoDB Sharded Cluster.

이러한 기술 요소들을 통해 분산 데이터베이스는 대규모 데이터 처리와 높은 트래픽에 효율적으로 대응할 수 있습니다.
