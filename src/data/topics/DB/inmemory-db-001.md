---
id: inmemory-db-001
title: In-Memory DB (인메모리 데이터베이스)
category: digital-service
subcategory: NoSQL
subjectCategories:
  - DB
  - DS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - Redis
  - Memcached
  - 캐시
  - Key-Value
  - 인메모리
importance: 5
relatedTopics:
  - nosql-001
  - cache-memory-001
trends:
  - Redis Stack
  - Persistent In-Memory
tags:
  - '2025'
---

# 정의
데이터를 디스크가 아닌 메모리(RAM)에 저장하여 초고속 읽기/쓰기를 제공하는 데이터베이스로, 캐시 및 세션 저장소로 널리 사용됩니다.

## 특징
- 주요 제품: Redis, Memcached, Hazelcast, Apache Ignite
- 데이터 구조: Key-Value, Hash, List, Set, Sorted Set (Redis)
- 사용 사례: 캐싱, 세션 스토어, 실시간 순위표, Pub/Sub, 메시지 큐
- 성능: 디스크 DB 대비 100~1000배 빠른 응답 시간
- 영속성: RDB(스냅샷), AOF(Append-Only File)로 데이터 보존
- Redis 고급 기능: Lua 스크립팅, Streams, Geospatial
- 분산: Redis Cluster, Sentinel(고가용성)

## 최신 트렌드
- Redis Stack
- Persistent In-Memory
