---
id: transaction-001
title: 트랜잭션 (Transaction)
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - ACID
  - 격리성 수준
  - 원자성
  - 일관성
  - 지속성
importance: 5
relatedTopics:
  - db-normalization-001
  - index-001
  - nosql-001
---

# 정의
데이터베이스에서 하나의 논리적 작업 단위를 구성하는 연산들의 집합으로, ACID 특성을 보장해야 합니다.

## 특징
- Atomicity (원자성): 트랜잭션의 모든 연산이 완전히 수행되거나 전혀 수행되지 않음
- Consistency (일관성): 트랜잭션 실행 전후 데이터베이스가 일관된 상태 유지
- Isolation (격리성): 동시 실행되는 트랜잭션들이 서로 영향을 주지 않음
- Durability (지속성): 완료된 트랜잭션의 결과가 영구적으로 보존됨
- 격리성 수준: Read Uncommitted, Read Committed, Repeatable Read, Serializable

