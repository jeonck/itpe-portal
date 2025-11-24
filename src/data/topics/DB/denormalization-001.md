---
id: denormalization-001
title: 반정규화 (De-normalization)
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 반정규화
  - 성능 최적화
  - 중복 허용
  - 테이블 통합
  - 컬럼 중복
importance: 4
relatedTopics:
  - db-normalization-001
  - index-001
  - transaction-001
trends:
  - Read-Heavy 워크로드 최적화
  - NoSQL 비정규화 전략
tags:
  - '2025'
---

# 정의
정규화된 데이터베이스에서 의도적으로 중복을 허용하여 조인 연산을 줄이고 조회 성능을 향상시키는 설계 기법입니다.

## 특징
- 목적: 조회 성능 향상, 복잡한 조인 감소, 응답 시간 단축
- 기법: 테이블 통합, 컬럼 중복, 파생 컬럼 추가, 테이블 분할
- 테이블 통합: 1:1, 1:N 관계의 테이블 병합
- 컬럼 중복: 자주 조인되는 컬럼을 여러 테이블에 중복 저장
- 파생 컬럼: 계산 값을 미리 저장 (예: 합계, 평균)
- 트레이드오프: 조회 성능 향상 vs 저장 공간 증가, 갱신 이상 위험
- 데이터 일관성 관리: 트리거, 애플리케이션 로직으로 동기화
- 적용 시점: Read-Heavy 워크로드, 복잡한 조인, 성능 병목

## 최신 트렌드
- Read-Heavy 워크로드 최적화
- NoSQL 비정규화 전략
