---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: kafka-streaming-001
importance: 5
keywords:
- Kafka
- Event Streaming
- Pub/Sub
- Producer
- Consumer
- Topic
relatedTopics:
- cdc-001
- bigdata-platform-001
- msa-001
subcategory: 이벤트 스트리밍
subjectCategories:
- DB
- DS
tags:
- '2025'
title: Kafka & Event Streaming
trends:
- Kafka Streams
- ksqlDB
- Event-Driven Microservices
---

# 정의
대용량 실시간 데이터 스트림을 안정적으로 수집, 저장, 처리하는 분산 이벤트 스트리밍 플랫폼으로, MSA와 실시간 데이터 파이프라인의 핵심 플랫폼.

## 특징
- 구성: Producer(생산자) → Topic(메시지 큐) → Consumer(소비자)
- Topic & Partition: 메시지를 파티션으로 분산 저장, 병렬 처리
- Offset: 각 Consumer의 읽기 위치 추적
- Broker: 메시지 저장 서버, Cluster로 구성
- Replication: 파티션 복제로 고가용성 보장
- Kafka Connect: 외부 시스템 연동 (CDC, DB, S3)
- Kafka Streams: 스트림 처리 라이브러리
- ksqlDB: SQL로 스트림 처리
- 사용 사례: 로그 수집, 이벤트 소싱, 실시간 분석, MSA 메시징

## 기술요소
Apache Kafka는 다음과 같은 주요 기술 요소들로 구성된 분산 이벤트 스트리밍 플랫폼입니다.

-   **Producer (생산자)**:
    -   **역할**: 데이터를 Kafka Cluster의 Topic으로 발행(Publish)하는 클라이언트 애플리케이션.
    -   **특징**: 데이터를 보낼 Topic과 선택적으로 메시지 키(Message Key)를 지정할 수 있습니다. 메시지 키는 특정 파티션에 데이터를 일관되게 전송하는 데 사용될 수 있습니다.

-   **Consumer (소비자)**:
    -   **역할**: Kafka Cluster의 Topic으로부터 데이터를 구독(Subscribe)하고 소비하는 클라이언트 애플리케이션.
    -   **Consumer Group**: 여러 컨슈머를 하나의 그룹으로 묶어, Topic의 파티션들을 분담하여 처리함으로써 처리량을 높이고 고가용성을 제공합니다. 각 컨슈머 그룹은 각 파티션에 대해 고유한 오프셋(Offset)을 추적합니다.

-   **Broker (브로커)**:
    -   **역할**: Kafka Cluster를 구성하는 핵심 서버. 프로듀서로부터 메시지를 받아 저장하고, 컨슈머에게 메시지를 전달합니다.
    -   **클러스터**: 여러 브로커가 모여 하나의 Kafka Cluster를 형성하며, Zookeeper 또는 Kraft(Kafka Raft)를 통해 클러스터 메타데이터(Topic, Partition 정보 등)를 관리합니다.

-   **Topic (토픽)**:
    -   **역할**: 메시지(이벤트)를 카테고리별로 분류하는 논리적인 단위. 프로듀서는 특정 토픽으로 메시지를 발행하고, 컨슈머는 특정 토픽을 구독합니다.
    -   **파티션 (Partition)**:
        -   **역할**: 토픽은 하나 이상의 파티션으로 나뉩니다. 각 파티션은 메시지가 기록되는 순서 있는 로그(Log)입니다.
        -   **특징**: 파티션은 Kafka의 병렬 처리 및 수평 확장성의 핵심입니다. 각 파티션은 하나의 브로커에 저장될 수 있으며, 여러 브로커에 분산 저장될 수 있습니다. 메시지는 파티션 내에서만 순서가 보장됩니다.

-   **Offset (오프셋)**:
    -   **역할**: 각 파티션 내에서 메시지의 고유한 순차 ID. 컨슈머는 이 오프셋을 사용하여 자신이 어디까지 메시지를 읽었는지 추적합니다.

-   **Replication (복제)**:
    -   **원리**: 각 파티션은 하나 이상의 브로커에 복제되어 저장될 수 있습니다. 이는 브로커 장애 시 데이터 손실을 방지하고 고가용성을 제공합니다.
    -   **리더/팔로워**: 각 파티션에는 하나의 리더(Leader) 파티션이 있으며, 모든 쓰기 및 읽기 작업은 리더를 통해 이루어집니다. 나머지 파티션들은 팔로워(Follower) 파티션으로 리더의 데이터를 복제합니다.

-   **Kafka Connect**:
    -   **역할**: Kafka와 외부 시스템(데이터베이스, 파일 시스템, 클라우드 스토리지 등) 간에 데이터를 쉽게 연결하고 통합하는 프레임워크.
    -   **Connector**: 소스 커넥터(Source Connector)는 외부 시스템에서 Kafka로 데이터를 가져오고, 싱크 커넥터(Sink Connector)는 Kafka에서 외부 시스템으로 데이터를 내보냅니다.

-   **Kafka Streams**:
    -   **역할**: Kafka에 저장된 데이터를 실시간으로 처리하고 분석하기 위한 클라이언트 라이브러리. 스트림 처리 애플리케이션을 쉽게 구축할 수 있도록 합니다.

이러한 요소들의 조합을 통해 Kafka는 대규모 이벤트 스트리밍 데이터를 안정적이고 효율적으로 처리할 수 있는 강력한 플랫폼을 제공합니다.

# 정의
대용량 실시간 데이터 스트림을 안정적으로 수집, 저장, 처리하는 분산 이벤트 스트리밍 플랫폼으로, MSA와 실시간 데이터 파이프라인의 핵심입니다.

## 특징
- 구성: Producer(생산자) → Topic(메시지 큐) → Consumer(소비자)
- Topic & Partition: 메시지를 파티션으로 분산 저장, 병렬 처리
- Offset: 각 Consumer의 읽기 위치 추적
- Broker: 메시지 저장 서버, Cluster로 구성
- Replication: 파티션 복제로 고가용성 보장
- Kafka Connect: 외부 시스템 연동 (CDC, DB, S3)
- Kafka Streams: 스트림 처리 라이브러리
- ksqlDB: SQL로 스트림 처리
- 사용 사례: 로그 수집, 이벤트 소싱, 실시간 분석, MSA 메시징

## 기술요소
Apache Kafka는 다음과 같은 주요 기술 요소들로 구성된 분산 이벤트 스트리밍 플랫폼입니다.

-   Producer (생산자):
    -   역할: 데이터를 Kafka Cluster의 Topic으로 발행(Publish)하는 클라이언트 애플리케이션.
    -   특징: 데이터를 보낼 Topic과 선택적으로 메시지 키(Message Key)를 지정할 수 있습니다. 메시지 키는 특정 파티션에 데이터를 일관되게 전송하는 데 사용될 수 있습니다.

-   Consumer (소비자):
    -   역할: Kafka Cluster의 Topic으로부터 데이터를 구독(Subscribe)하고 소비하는 클라이언트 애플리케이션.
    -   Consumer Group: 여러 컨슈머를 하나의 그룹으로 묶어, Topic의 파티션들을 분담하여 처리함으로써 처리량을 높이고 고가용성을 제공합니다. 각 컨슈머 그룹은 각 파티션에 대해 고유한 오프셋(Offset)을 추적합니다.

-   Broker (브로커):
    -   역할: Kafka Cluster를 구성하는 핵심 서버. 프로듀서로부터 메시지를 받아 저장하고, 컨슈머에게 메시지를 전달합니다.
    -   클러스터: 여러 브로커가 모여 하나의 Kafka Cluster를 형성하며, Zookeeper 또는 Kraft(Kafka Raft)를 통해 클러스터 메타데이터(Topic, Partition 정보 등)를 관리합니다.

-   Topic (토픽):
    -   역할: 메시지(이벤트)를 카테고리별로 분류하는 논리적인 단위. 프로듀서는 특정 토픽으로 메시지를 발행하고, 컨슈머는 특정 토픽을 구독합니다.
    -   파티션 (Partition):
        -   역할: 토픽은 하나 이상의 파티션으로 나뉩니다. 각 파티션은 메시지가 기록되는 순서 있는 로그(Log)입니다.
        -   특징: 파티션은 Kafka의 병렬 처리 및 수평 확장성의 핵심입니다. 각 파티션은 하나의 브로커에 저장될 수 있으며, 여러 브로커에 분산 저장될 수 있습니다. 메시지는 파티션 내에서만 순서가 보장됩니다.

-   Offset (오프셋):
    -   역할: 각 파티션 내에서 메시지의 고유한 순차 ID. 컨슈머는 이 오프셋을 사용하여 자신이 어디까지 메시지를 읽었는지 추적합니다.

-   Replication (복제):
    -   원리: 각 파티션은 하나 이상의 브로커에 복제되어 저장될 수 있습니다. 이는 브로커 장애 시 데이터 손실을 방지하고 고가용성을 제공합니다.
    -   리더/팔로워: 각 파티션에는 하나의 리더(Leader) 파티션이 있으며, 모든 쓰기 및 읽기 작업은 리더를 통해 이루어집니다. 나머지 파티션들은 팔로워(Follower) 파티션으로 리더의 데이터를 복제합니다.

-   Kafka Connect:
    -   역할: Kafka와 외부 시스템(데이터베이스, 파일 시스템, 클라우드 스토리지 등) 간에 데이터를 쉽게 연결하고 통합하는 프레임워크.
    -   Connector: 소스 커넥터(Source Connector)는 외부 시스템에서 Kafka로 데이터를 가져오고, 싱크 커넥터(Sink Connector)는 Kafka에서 외부 시스템으로 데이터를 내보냅니다.

-   Kafka Streams:
    -   역할: Kafka에 저장된 데이터를 실시간으로 처리하고 분석하기 위한 클라이언트 라이브러리. 스트림 처리 애플리케이션을 쉽게 구축할 수 있도록 합니다.

이러한 요소들의 조합을 통해 Kafka는 대규모 이벤트 스트리밍 데이터를 안정적이고 효율적으로 처리할 수 있는 강력한 플랫폼을 제공합니다.