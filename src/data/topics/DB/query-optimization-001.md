---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: advanced
id: query-optimization-001
importance: 5
keywords:
- Optimizer
- 실행 계획
- Hint
- Index Scan
- Full Table Scan
- Cost-Based
relatedTopics:
- index-001
- transaction-001
- denormalization-001
subcategory: 데이터베이스
subjectCategories:
- DB
tags:
- '2025'
title: 쿼리 최적화 (Query Optimization)
trends:
- AI-Powered Query Optimization
- Adaptive Query Execution
---

# 정의
SQL 쿼리의 실행 계획을 분석하고 최적의 데이터 접근 경로를 선택하여 응답 시간과 리소스 사용을 최소화하는 기법.

## 특징
- Optimizer: Rule-Based(규칙 기반), Cost-Based(비용 기반) 최적화
- 실행 계획(Execution Plan): EXPLAIN으로 확인, 테이블 스캔 방식 분석
- Index Scan vs Full Table Scan: 인덱스 활용 여부
- 조인 최적화: Nested Loop, Hash Join, Sort Merge Join
- Hint: 개발자가 실행 계획 강제 지정 (/*+ INDEX(t1) */)
- 서브쿼리 최적화: 상관 서브쿼리 제거, EXISTS vs IN
- 통계 정보: 카디널리티, 히스토그램 기반 비용 추정
- WHERE 절 최적화: Sargable 조건, 인덱스 컬럼 가공 회피

## 동작원리
데이터베이스 쿼리 최적화는 내부적으로 다음과 같은 단계를 거쳐 최적의 실행 계획을 찾아냅니다.

1.  **구문 분석 (Parsing)**:
    -   입력된 SQL 쿼리의 문법적인 오류를 확인하고, 데이터베이스가 이해할 수 있는 내부적인 트리 구조(Parse Tree)로 변환합니다.
    -   이 과정에서 테이블 이름, 컬럼 이름 등의 유효성을 검사합니다.

2.  **의미 분석 (Semantic Analysis)**:
    -   파싱된 쿼리가 데이터베이스의 스키마에 대해 의미적으로 올바른지 확인합니다. (예: 존재하지 않는 테이블이나 컬럼 참조 여부, 데이터 타입 일치 여부)
    -   사용자의 접근 권한을 확인합니다.

3.  **최적화 (Optimization)**:
    -   이 단계는 쿼리 최적화의 핵심으로, 옵티마이저(Optimizer)가 가장 효율적인 실행 계획(Execution Plan)을 생성하는 과정입니다.
    -   **논리적 최적화**: SQL 쿼리의 의미를 유지하면서 더 효율적인 동등한 쿼리로 변환합니다. (예: 서브쿼리 제거, 뷰 통합, WHERE 절 단순화)
    -   **물리적 최적화**: 변환된 논리적 쿼리를 물리적으로 어떻게 실행할 것인지 결정합니다.
        -   **접근 경로 선택**: 데이터를 읽을 때 어떤 인덱스를 사용할지, 전체 테이블 스캔을 할지 등을 결정합니다.
        -   **조인 순서 및 알고리즘 선택**: 여러 테이블을 조인할 때 어떤 순서로 조인할지, 어떤 조인 알고리즘(Nested Loop Join, Hash Join, Sort Merge Join)을 사용할지 결정합니다.
        -   **정렬 및 그룹화 방법 선택**: `ORDER BY`, `GROUP BY` 연산을 수행하는 가장 효율적인 방법을 선택합니다.
    -   **옵티마이저 유형**:
        -   **규칙 기반 옵티마이저 (Rule-Based Optimizer, RBO)**: 미리 정의된 규칙(예: 인덱스가 있으면 사용)에 따라 실행 계획을 생성합니다.
        -   **비용 기반 옵티마이저 (Cost-Based Optimizer, CBO)**: 통계 정보(테이블의 행 수, 컬럼의 데이터 분포, 인덱스 정보 등)를 활용하여 각 실행 계획의 예상 비용을 계산하고, 가장 낮은 비용의 실행 계획을 선택합니다. 현대 데이터베이스의 주류.

4.  **코드 생성 (Code Generation)**:
    -   최적화 단계에서 선택된 실행 계획을 실제 데이터베이스 엔진이 실행할 수 있는 저수준의 코드로 변환합니다.

5.  **실행 (Execution)**:
    -   생성된 코드를 데이터베이스 엔진이 실행하여 쿼리 결과를 반환합니다.

이러한 과정을 통해 데이터베이스는 사용자가 작성한 SQL 쿼리를 내부적으로 가장 효율적인 방식으로 처리하여 빠른 응답 시간을 보장하고 시스템 자원 사용을 최소화합니다. 개발자는 `EXPLAIN` 명령어를 통해 실행 계획을 확인하고 옵티마이저의 결정을 이해하여 쿼리 튜닝에 활용할 수 있습니다.
