---
id: mvcc-001
title: MVCC (다중 버전 동시성 제어)
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - MVCC
  - Multi-Version Concurrency Control
  - 스냅샷 격리
  - 동시성 제어
  - Lock-Free
importance: 4
relatedTopics:
  - transaction-001
  - distributed-db-001
trends:
  - Distributed MVCC
tags:
  - '2025'
---

# 정의
트랜잭션마다 데이터의 여러 버전을 유지하여 읽기 작업 시 Lock 없이 높은 동시성을 제공하는 동시성 제어 기법입니다.

## 특징
- 원리: 데이터 수정 시 새 버전 생성, 이전 버전 유지
- 읽기: Lock 없이 트랜잭션 시작 시점의 스냅샷 읽기
- 쓰기: 새 버전 생성, 다른 트랜잭션의 읽기 블로킹 없음
- 장점: 읽기-쓰기 충돌 없음, 높은 동시성, 일관된 읽기
- 단점: 저장 공간 증가, 버전 정리(Vacuum) 필요
- 구현: PostgreSQL, MySQL InnoDB, Oracle
- Snapshot Isolation: 트랜잭션별 일관된 스냅샷 제공
- Write Skew: MVCC에서 발생 가능한 이상 현상

## 최신 트렌드
- Distributed MVCC
