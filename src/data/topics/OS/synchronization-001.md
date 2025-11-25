---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: synchronization-001
importance: 5
keywords:
- Mutex
- Semaphore
- Monitor
- Critical Section
- Race Condition
- 동기화
relatedTopics:
- process-thread-001
- process-scheduling-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: 동기화 (Mutex, Semaphore, Monitor)
trends:
- Lock-Free Programming
- RCU (Read-Copy-Update)
---

# 정의
여러 프로세스/스레드가 공유 자원에 동시 접근할 때 데이터 일관성을 보장하기 위한 기법입니다.

## 특징
- Critical Section (임계 영역): 공유 자원에 접근하는 코드 영역, 한 번에 하나만 실행
- Race Condition (경쟁 상태): 여러 스레드가 동시에 공유 데이터 접근, 결과가 실행 순서에 따라 달라짐
- Mutex (Mutual Exclusion): 상호 배제, 잠금(Lock) 기반, 소유자만 해제 가능
- Semaphore: 정수형 변수로 자원 개수 관리, Binary(0/1), Counting(N), P(wait), V(signal) 연산
- Monitor: 고수준 동기화, 공유 자원과 연산을 캡슐화, Condition Variable 사용
- Spinlock: 바쁜 대기(Busy Waiting), 짧은 임계 영역에 적합
- 해결 조건: Mutual Exclusion, Progress, Bounded Waiting

## 최신 트렌드
- Lock-Free Programming
- RCU (Read-Copy-Update)

# 정의
여러 프로세스/스레드가 공유 자원에 동시 접근할 때 데이터 일관성을 보장하기 위한 기법입니다.

## 특징
- Critical Section (임계 영역): 공유 자원에 접근하는 코드 영역, 한 번에 하나만 실행
- Race Condition (경쟁 상태): 여러 스레드가 동시에 공유 데이터 접근, 결과가 실행 순서에 따라 달라짐
- Mutex (Mutual Exclusion): 상호 배제, 잠금(Lock) 기반, 소유자만 해제 가능
- Semaphore: 정수형 변수로 자원 개수 관리, Binary(0/1), Counting(N), P(wait), V(signal) 연산
- Monitor: 고수준 동기화, 공유 자원과 연산을 캡슐화, Condition Variable 사용
- Spinlock: 바쁜 대기(Busy Waiting), 짧은 임계 영역에 적합
- 해결 조건: Mutual Exclusion, Progress, Bounded Waiting

## 최신 트렌드
- Lock-Free Programming
- RCU (Read-Copy-Update)