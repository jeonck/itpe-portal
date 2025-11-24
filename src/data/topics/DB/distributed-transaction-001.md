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

## 최신 트렌드
- Event-Driven Saga
- Transactional Outbox Pattern
