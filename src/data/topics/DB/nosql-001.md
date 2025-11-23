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

## 최신 트렌드
- Multi-model DB
- NewSQL
- Serverless Database
