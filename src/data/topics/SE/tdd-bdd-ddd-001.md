---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: advanced
id: tdd-bdd-ddd-001
importance: 5
keywords:
- Test-Driven Development
- Behavior-Driven Development
- Domain-Driven Design
- Red-Green-Refactor
- Ubiquitous Language
- Bounded Context
relatedTopics:
- test-001
- clean-code-001
- design-pattern-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
tags:
- '2025'
title: TDD / BDD / DDD
trends:
- Event Storming
- CQRS & Event Sourcing
- Specification by Example
---

# 정의
테스트 주도 개발(TDD), 행위 주도 개발(BDD), 도메인 주도 설계(DDD)를 통합하여 품질과 비즈니스 가치 중심의 소프트웨어를 개발하는 방법론입니다.

## 특징
- TDD: Red(실패 테스트 작성) → Green(최소 코드로 통과) → Refactor(개선)
- BDD: Given-When-Then 형식으로 비즈니스 시나리오 테스트
- DDD 전략적 설계: Bounded Context, Ubiquitous Language, Context Map
- DDD 전술적 설계: Entity, Value Object, Aggregate, Repository, Domain Service
- CQRS: Command와 Query 책임 분리
- Event Sourcing: 모든 변경을 이벤트로 저장

## 동작원리
세 방법론은 다음과 같이 실제 개발에 적용됩니다:

**TDD (Test-Driven Development) 사이클:**
1. Red - 실패하는 테스트 작성
   - 구현하려는 기능의 테스트 케이스 먼저 작성
   - 테스트 실행 시 실패 확인 (빨간불)

2. Green - 테스트를 통과하는 최소한의 코드 작성
   - 테스트를 통과시키는 가장 간단한 코드 구현
   - 테스트 실행 시 성공 확인 (초록불)

3. Refactor - 코드 개선
   - 중복 제거, 가독성 향상
   - 테스트는 여전히 통과 유지

**BDD (Behavior-Driven Development) 과정:**
1. Given - 초기 상황 설정
   예: Given 사용자가 로그인되어 있고

2. When - 행위 실행
   예: When 장바구니에 상품을 추가하면

3. Then - 결과 검증
   예: Then 장바구니에 해당 상품이 표시되어야 한다

Gherkin 언어로 시나리오를 작성하고, Cucumber 등으로 자동화합니다.

**DDD (Domain-Driven Design) 접근:**
1. 도메인 전문가와 협업하여 Ubiquitous Language 정의
2. Event Storming으로 도메인 이벤트 발견
3. Bounded Context로 도메인 경계 구분
4. Aggregate로 일관성 경계 정의
5. Repository로 영속성 추상화
6. Domain Service로 도메인 로직 캡슐화

이 세 방법론을 함께 사용하면:
DDD로 도메인 설계 → BDD로 시나리오 정의 → TDD로 구현 및 테스트

## 최신 트렌드
- Event Storming
- CQRS & Event Sourcing
- Specification by Example

# 정의
테스트 주도 개발(TDD), 행위 주도 개발(BDD), 도메인 주도 설계(DDD)를 통합하여 품질과 비즈니스 가치 중심의 소프트웨어를 개발하는 방법론입니다.

## 특징
- TDD: Red(실패 테스트 작성) → Green(최소 코드로 통과) → Refactor(개선)
- BDD: Given-When-Then 형식으로 비즈니스 시나리오 테스트
- DDD 전략적 설계: Bounded Context, Ubiquitous Language, Context Map
- DDD 전술적 설계: Entity, Value Object, Aggregate, Repository, Domain Service
- CQRS: Command와 Query 책임 분리
- Event Sourcing: 모든 변경을 이벤트로 저장

## 동작원리
세 방법론은 다음과 같이 실제 개발에 적용됩니다:

TDD (Test-Driven Development) 사이클:
1. Red - 실패하는 테스트 작성
   - 구현하려는 기능의 테스트 케이스 먼저 작성
   - 테스트 실행 시 실패 확인 (빨간불)

2. Green - 테스트를 통과하는 최소한의 코드 작성
   - 테스트를 통과시키는 가장 간단한 코드 구현
   - 테스트 실행 시 성공 확인 (초록불)

3. Refactor - 코드 개선
   - 중복 제거, 가독성 향상
   - 테스트는 여전히 통과 유지

BDD (Behavior-Driven Development) 과정:
1. Given - 초기 상황 설정
   예: Given 사용자가 로그인되어 있고

2. When - 행위 실행
   예: When 장바구니에 상품을 추가하면

3. Then - 결과 검증
   예: Then 장바구니에 해당 상품이 표시되어야 한다

Gherkin 언어로 시나리오를 작성하고, Cucumber 등으로 자동화합니다.

DDD (Domain-Driven Design) 접근:
1. 도메인 전문가와 협업하여 Ubiquitous Language 정의
2. Event Storming으로 도메인 이벤트 발견
3. Bounded Context로 도메인 경계 구분
4. Aggregate로 일관성 경계 정의
5. Repository로 영속성 추상화
6. Domain Service로 도메인 로직 캡슐화

이 세 방법론을 함께 사용하면:
DDD로 도메인 설계 → BDD로 시나리오 정의 → TDD로 구현 및 테스트

## 최신 트렌드
- Event Storming
- CQRS & Event Sourcing
- Specification by Example