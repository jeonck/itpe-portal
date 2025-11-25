---
id: nosql-001
title: NoSQL
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - CAP
  - PACELC
  - Key-Value
  - Document
  - Column-Family
  - Graph
importance: 5
relatedTopics:
  - transaction-001
  - distributed-system-001
  - big-data-001
trends:
  - Multi-model DB
  - NewSQL
  - Serverless Database
---

# 정의
관계형 데이터베이스의 제약을 극복하고 대용량 분산 환경에 최적화된 비관계형 데이터베이스 시스템입니다.

## 특징
- CAP 이론: Consistency, Availability, Partition Tolerance 중 2가지만 보장
- PACELC: Partition 시 A vs C 선택, Else Latency vs Consistency 선택
- Key-Value: Redis, DynamoDB (빠른 접근)
- Document: MongoDB, Couchbase (유연한 스키마)
- Column-Family: Cassandra, HBase (대용량 쓰기)

## 기술요소
NoSQL 데이터베이스는 데이터 모델에 따라 크게 네 가지 유형으로 분류되며, 각각 다른 기술 요소를 기반으로 합니다.

-   **Key-Value Store (키-값 저장소)**:
    -   **정의**: 가장 단순한 형태의 NoSQL 데이터베이스로, 고유한 키(Key)와 이에 매핑되는 값(Value)의 쌍으로 데이터를 저장합니다. 값은 어떤 형태(문자열, 숫자, 객체 등)든 될 수 있습니다.
    -   **특징**: 매우 빠른 읽기/쓰기 성능, 높은 확장성.
    -   **주요 제품**: Redis, Amazon DynamoDB, Memcached.
    -   **활용**: 캐싱, 세션 관리, 실시간 랭킹, 사용자 프로필 저장.

-   **Document Database (문서형 데이터베이스)**:
    -   **정의**: 데이터를 JSON, BSON, XML과 같은 문서(Document) 형태로 저장합니다. 각 문서는 고유한 ID를 가지며, 필드와 값의 쌍으로 구성됩니다. 스키마가 유연하여 데이터 구조 변경에 용이합니다.
    -   **특징**: 유연한 스키마(Schema-less), 계층적 데이터 저장, 풍부한 쿼리 기능.
    -   **주요 제품**: MongoDB, Couchbase, Amazon DocumentDB.
    -   **활용**: 콘텐츠 관리 시스템, 카탈로그, 사용자 프로필, 모바일 앱 백엔드.

-   **Column-Family Store (컬럼 지향 데이터베이스)**:
    -   **정의**: 데이터를 로우(Row)와 컬럼(Column)의 개념을 사용하지만, RDBMS와 달리 컬럼 패밀리(Column Family) 단위로 데이터를 저장하고 관리합니다. 로우마다 컬럼 구성이 다를 수 있습니다.
    -   **특징**: 대규모 데이터 쓰기 및 읽기에 매우 효율적, 높은 확장성, 높은 가용성.
    -   **주요 제품**: Apache Cassandra, Apache HBase, Google Bigtable.
    -   **활용**: 대규모 로그 데이터, 시계열 데이터, 센서 데이터, 실시간 분석.

-   **Graph Database (그래프 데이터베이스)**:
    -   **정의**: 데이터를 노드(Node, 개체)와 간선(Edge, 관계)의 그래프 구조로 저장합니다. 노드와 간선 모두 속성(Property)을 가질 수 있습니다.
    -   **특징**: 복잡한 관계 데이터 모델링 및 관계 기반 쿼리에 매우 강력. 조인 연산 없이 직접적으로 관계를 탐색.
    -   **주요 제품**: Neo4j, Amazon Neptune, JanusGraph.
    -   **활용**: 소셜 네트워크, 추천 시스템, 지식 그래프, 사기 탐지.

-   **기타 NoSQL 유형**:
    -   **Timeseries Database (시계열 데이터베이스)**: 시간 순서에 따라 데이터가 발생하는 특정 유형의 데이터를 저장하고 분석하는 데 최적화 (예: InfluxDB, Prometheus).
    -   **Search Engine (검색 엔진)**: 역인덱스(Inverted Index)를 기반으로 텍스트 데이터의 전문 검색에 특화 (예: Elasticsearch, Apache Solr).

이러한 NoSQL 데이터베이스들은 관계형 데이터베이스의 한계를 보완하며, 특정 워크로드와 요구사항에 최적화된 유연하고 확장 가능한 솔루션을 제공합니다.
