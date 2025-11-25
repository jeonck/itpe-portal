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

## 동작원리
동기화 기법들은 다음과 같이 동작합니다:

Mutex 동작
1) lock() 호출
   - 잠금 변수 확인 (locked = 0 또는 1)
   - locked = 0이면 1로 설정하고 진입 (Test-and-Set 원자 연산)
   - locked = 1이면 대기 큐에 추가되고 Sleep
2) 임계 영역 실행
3) unlock() 호출
   - locked = 0으로 설정
   - 대기 큐에서 스레드 깨움 (Wakeup)

Semaphore 동작
- 정수 변수 S로 자원 개수 관리
- P(wait) 연산:
  ```
  P(S):
    S = S - 1
    if S < 0:
      현재 스레드를 대기 큐에 추가
      Sleep
  ```
- V(signal) 연산:
  ```
  V(S):
    S = S + 1
    if S <= 0:
      대기 큐에서 스레드 깨움
  ```
- Binary Semaphore (S=1): Mutex와 유사
- Counting Semaphore (S=N): 여러 자원 관리

Monitor 동작 (Java synchronized)
1) Monitor 진입: 한 번에 한 스레드만 진입
2) Condition Variable 사용:
   - wait(): 조건 불만족 시 대기, 다른 스레드에게 모니터 양보
   - signal(): 대기 중인 스레드 하나 깨움
   - broadcast(): 모든 대기 스레드 깨움
3) Monitor 퇴출: 자동으로 잠금 해제

Spinlock 동작
```
while (test_and_set(&lock) == 1) {
  // Busy waiting (계속 확인)
}
// 임계 영역
lock = 0
```
- CPU를 계속 사용하며 대기 (Context Switch 없음)
- 짧은 임계 영역에 유리 (Mutex보다 빠름)
- 멀티코어 환경에서 효과적

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