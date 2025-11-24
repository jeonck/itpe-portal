---
id: kafka-streaming-001
title: Kafka & Event Streaming
category: digital-service
subcategory: 이벤트 스트리밍
subjectCategories:
  - DB
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Kafka
  - Event Streaming
  - Pub/Sub
  - Producer
  - Consumer
  - Topic
importance: 5
relatedTopics:
  - cdc-001
  - bigdata-platform-001
  - msa-001
trends:
  - Kafka Streams
  - ksqlDB
  - Event-Driven Microservices
tags:
  - '2025'
---

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

## 최신 트렌드
- Kafka Streams
- ksqlDB
- Event-Driven Microservices
