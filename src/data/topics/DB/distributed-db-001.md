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

## 최신 트렌드
- Serverless Database
- Multi-Region Replication
