---
id: query-optimization-001
title: 쿼리 최적화 (Query Optimization)
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Optimizer
  - 실행 계획
  - Hint
  - Index Scan
  - Full Table Scan
  - Cost-Based
importance: 5
relatedTopics:
  - index-001
  - transaction-001
  - denormalization-001
trends:
  - AI-Powered Query Optimization
  - Adaptive Query Execution
tags:
  - '2025'
---

# 정의
SQL 쿼리의 실행 계획을 분석하고 최적의 데이터 접근 경로를 선택하여 응답 시간과 리소스 사용을 최소화하는 기법입니다.

## 특징
- Optimizer: Rule-Based(규칙 기반), Cost-Based(비용 기반) 최적화
- 실행 계획(Execution Plan): EXPLAIN으로 확인, 테이블 스캔 방식 분석
- Index Scan vs Full Table Scan: 인덱스 활용 여부
- 조인 최적화: Nested Loop, Hash Join, Sort Merge Join
- Hint: 개발자가 실행 계획 강제 지정 (/*+ INDEX(t1) */)
- 서브쿼리 최적화: 상관 서브쿼리 제거, EXISTS vs IN
- 통계 정보: 카디널리티, 히스토그램 기반 비용 추정
- WHERE 절 최적화: Sargable 조건, 인덱스 컬럼 가공 회피

## 최신 트렌드
- AI-Powered Query Optimization
- Adaptive Query Execution
