---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: clean-code-001
importance: 5
keywords:
- 클린코드
- 클린아키텍처
- SOLID
- 의존성 규칙
- 관심사 분리
relatedTopics:
- design-pattern-001
- refactoring-001
- tdd-bdd-ddd-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
tags:
- '2025'
title: Clean Code & Clean Architecture
trends:
- Hexagonal Architecture
- Onion Architecture
- Vertical Slice Architecture
---

# 정의
읽기 쉽고 유지보수 가능한 코드 작성 원칙(Clean Code)과 변경에 유연한 소프트웨어 구조 설계 원칙(Clean Architecture)을 통합한 소프트웨어 개발 철학입니다.

## 기술요소
- Clean Code 작성 원칙
  - 의미있는 이름(Meaningful Names): 변수, 함수, 클래스명이 의도를 명확히 표현
  - 작은 함수(Small Functions): 하나의 일만 수행, 20줄 이하 권장
  - 주석보다 코드(Code over Comments): 코드 자체로 의도 표현, 불필요한 주석 제거
  - DRY (Don't Repeat Yourself): 중복 코드 제거, 재사용 가능한 추상화
  - 단일 책임 원칙: 클래스나 함수는 하나의 책임만 가져야 함
- SOLID 설계 원칙
  - Single Responsibility: 클래스는 하나의 변경 이유만 가져야 함
  - Open/Closed: 확장에는 열려있고 수정에는 닫혀있어야 함
  - Liskov Substitution: 하위 타입은 상위 타입을 대체 가능해야 함
  - Interface Segregation: 클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 함
  - Dependency Inversion: 고수준 모듈은 저수준 모듈에 의존하지 않고 추상화에 의존
- Clean Architecture 계층 구조
  - Entities (엔티티 계층): 핵심 비즈니스 규칙과 데이터 구조
  - Use Cases (유스케이스 계층): 애플리케이션 비즈니스 규칙, 엔티티 조작
  - Interface Adapters (인터페이스 어댑터 계층): 데이터 변환, Presenter, Controller, Gateway
  - Frameworks & Drivers (프레임워크 계층): 외부 도구, DB, Web Framework, UI
  - 의존성 규칙: 외부 계층에서 내부 계층으로만 의존, 내부는 외부를 알지 못함
- 아키텍처 패턴 변형
  - Hexagonal Architecture (Port & Adapter): 도메인을 중심에 두고 외부 어댑터로 격리
  - Onion Architecture: 도메인 중심, 계층별 의존성 방향 명확화
  - Vertical Slice Architecture: 기능별 수직 분할, 계층보다 기능 단위 응집

## 특징
- Clean Code 원칙: 의미있는 이름, 작은 함수, 주석보다 코드, DRY(Don't Repeat Yourself)
- SOLID 원칙: 단일책임, 개방폐쇄, 리스코프치환, 인터페이스분리, 의존성역전
- Clean Architecture 계층: Entities, Use Cases, Interface Adapters, Frameworks & Drivers
- 의존성 규칙: 외부에서 내부로만 의존, 내부는 외부를 모름
- 관심사 분리: 비즈니스 로직과 인프라 분리
- 테스트 용이성: 독립적인 테스트 가능
- 프레임워크 독립성: 특정 프레임워크에 종속되지 않음

## 최신 트렌드
- Hexagonal Architecture
- Onion Architecture
- Vertical Slice Architecture

# 정의
읽기 쉽고 유지보수 가능한 코드 작성 원칙(Clean Code)과 변경에 유연한 소프트웨어 구조 설계 원칙(Clean Architecture)을 통합한 소프트웨어 개발 철학입니다.

## 기술요소
- Clean Code 작성 원칙
  - 의미있는 이름(Meaningful Names): 변수, 함수, 클래스명이 의도를 명확히 표현
  - 작은 함수(Small Functions): 하나의 일만 수행, 20줄 이하 권장
  - 주석보다 코드(Code over Comments): 코드 자체로 의도 표현, 불필요한 주석 제거
  - DRY (Don't Repeat Yourself): 중복 코드 제거, 재사용 가능한 추상화
  - 단일 책임 원칙: 클래스나 함수는 하나의 책임만 가져야 함
- SOLID 설계 원칙
  - Single Responsibility: 클래스는 하나의 변경 이유만 가져야 함
  - Open/Closed: 확장에는 열려있고 수정에는 닫혀있어야 함
  - Liskov Substitution: 하위 타입은 상위 타입을 대체 가능해야 함
  - Interface Segregation: 클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 함
  - Dependency Inversion: 고수준 모듈은 저수준 모듈에 의존하지 않고 추상화에 의존
- Clean Architecture 계층 구조
  - Entities (엔티티 계층): 핵심 비즈니스 규칙과 데이터 구조
  - Use Cases (유스케이스 계층): 애플리케이션 비즈니스 규칙, 엔티티 조작
  - Interface Adapters (인터페이스 어댑터 계층): 데이터 변환, Presenter, Controller, Gateway
  - Frameworks & Drivers (프레임워크 계층): 외부 도구, DB, Web Framework, UI
  - 의존성 규칙: 외부 계층에서 내부 계층으로만 의존, 내부는 외부를 알지 못함
- 아키텍처 패턴 변형
  - Hexagonal Architecture (Port & Adapter): 도메인을 중심에 두고 외부 어댑터로 격리
  - Onion Architecture: 도메인 중심, 계층별 의존성 방향 명확화
  - Vertical Slice Architecture: 기능별 수직 분할, 계층보다 기능 단위 응집

## 특징
- Clean Code 원칙: 의미있는 이름, 작은 함수, 주석보다 코드, DRY(Don't Repeat Yourself)
- SOLID 원칙: 단일책임, 개방폐쇄, 리스코프치환, 인터페이스분리, 의존성역전
- Clean Architecture 계층: Entities, Use Cases, Interface Adapters, Frameworks & Drivers
- 의존성 규칙: 외부에서 내부로만 의존, 내부는 외부를 모름
- 관심사 분리: 비즈니스 로직과 인프라 분리
- 테스트 용이성: 독립적인 테스트 가능
- 프레임워크 독립성: 특정 프레임워크에 종속되지 않음

## 최신 트렌드
- Hexagonal Architecture
- Onion Architecture
- Vertical Slice Architecture