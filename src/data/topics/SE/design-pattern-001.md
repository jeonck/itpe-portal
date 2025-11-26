---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: design-pattern-001
importance: 5
keywords:
- GoF
- MVC
- Singleton
- Factory
- Adapter
- Observer
relatedTopics:
- sdlc-001
- oop-001
- solid-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
title: 디자인 패턴 (Design Pattern)
---

# 정의
소프트웨어 설계에서 반복적으로 발생하는 문제들에 대한 재사용 가능한 해결책으로, GoF의 23가지 패턴이 대표적 기법.

## 특징
- 생성 패턴 (Creational): Singleton, Factory, Builder, Prototype
- 구조 패턴 (Structural): Adapter, Decorator, Proxy, Composite
- 행위 패턴 (Behavioral): Observer, Strategy, Command, Template Method
- MVC (Model-View-Controller): 관심사 분리를 통한 아키텍처 패턴
- 재사용성, 유지보수성, 확장성 향상

## 기술요소
- 생성 패턴 (Creational Patterns): 객체 생성 메커니즘을 추상화하여 유연성 제공
  - Singleton: 클래스의 인스턴스가 하나만 존재하도록 보장
  - Factory Method: 객체 생성 로직을 서브클래스로 위임
  - Abstract Factory: 관련된 객체군을 생성하는 인터페이스 제공
  - Builder: 복잡한 객체를 단계별로 생성
  - Prototype: 기존 객체를 복제하여 새 객체 생성
- 구조 패턴 (Structural Patterns): 클래스와 객체를 조합하여 더 큰 구조 형성
  - Adapter: 호환되지 않는 인터페이스를 연결
  - Decorator: 객체에 동적으로 새로운 기능 추가
  - Proxy: 객체에 대한 접근 제어 및 간접 참조 제공
  - Composite: 트리 구조로 객체들을 구성하여 부분-전체 계층 표현
  - Facade: 복잡한 서브시스템에 대한 단순화된 인터페이스 제공
- 행위 패턴 (Behavioral Patterns): 객체 간 책임 분배 및 알고리즘 캡슐화
  - Observer: 객체 상태 변화를 관찰자들에게 자동 통지
  - Strategy: 알고리즘을 캡슐화하여 런타임에 교체 가능
  - Command: 요청을 객체로 캡슐화하여 매개변수화
  - Template Method: 알고리즘 골격을 정의하고 세부 단계는 서브클래스에서 구현
  - Iterator: 컬렉션 내부 구조를 노출하지 않고 순차 접근 제공
