---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: process-thread-001
importance: 5
keywords:
- 프로세스
- 스레드
- PCB
- TCB
- Context Switching
- Deadlock
relatedTopics:
- process-scheduling-001
- virtual-memory-001
subcategory: 운영체제
subjectCategories:
- OS
title: 프로세스/스레드
trends:
- 코루틴(Coroutine)
- Go의 고루틴
- Async/Await 패턴
- 경량 컨테이너
---

# 정의
프로세스는 실행 중인 프로그램의 인스턴스이며, 스레드는 프로세스 내의 실행 단위로, 운영체제의 핵심 개념입니다.

## 특징
- PCB/TCB: PCB(Process Control Block)는 프로세스 정보(PID, 상태, PC, 레지스터, 메모리 포인터 등) 저장, TCB(Thread Control Block)는 스레드 정보(TID, PC, 스택 포인터, 레지스터) 저장
- 문맥교환(Context Switching): CPU가 프로세스/스레드를 전환할 때 현재 상태 저장 후 새로운 상태 복원. 프로세스 전환은 무겁고(메모리 맵 전환), 스레드 전환은 가볍다(같은 주소 공간)
- 교착상태(Deadlock): 둘 이상의 프로세스가 서로의 자원을 기다리며 무한 대기. 발생 조건: 상호배제, 점유대기, 비선점, 순환대기. 해결: 예방(조건 제거), 회피(Banker's Algorithm), 탐지/복구, 무시(타조 알고리즘)
- 프로세스 vs 스레드: 프로세스는 독립적 메모리 공간, 스레드는 코드/데이터/힙 공유하고 스택만 독립. 멀티프로세스는 안정적(격리), 멀티스레드는 효율적(공유)

# 정의
프로세스는 실행 중인 프로그램의 인스턴스이며, 스레드는 프로세스 내의 실행 단위로, 운영체제의 핵심 개념입니다.

## 특징
- PCB/TCB: PCB(Process Control Block)는 프로세스 정보(PID, 상태, PC, 레지스터, 메모리 포인터 등) 저장, TCB(Thread Control Block)는 스레드 정보(TID, PC, 스택 포인터, 레지스터) 저장
- 문맥교환(Context Switching): CPU가 프로세스/스레드를 전환할 때 현재 상태 저장 후 새로운 상태 복원. 프로세스 전환은 무겁고(메모리 맵 전환), 스레드 전환은 가볍다(같은 주소 공간)
- 교착상태(Deadlock): 둘 이상의 프로세스가 서로의 자원을 기다리며 무한 대기. 발생 조건: 상호배제, 점유대기, 비선점, 순환대기. 해결: 예방(조건 제거), 회피(Banker's Algorithm), 탐지/복구, 무시(타조 알고리즘)
- 프로세스 vs 스레드: 프로세스는 독립적 메모리 공간, 스레드는 코드/데이터/힙 공유하고 스택만 독립. 멀티프로세스는 안정적(격리), 멀티스레드는 효율적(공유)