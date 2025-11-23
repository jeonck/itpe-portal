---
id: process-scheduling-001
title: OS 스케줄링
category: technical-focus
subcategory: 운영체제
subjectCategories:
  - OS
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - 선점형
  - 비선점형
  - Round Robin
  - SJF
  - MLQ
  - MLFQ
importance: 5
relatedTopics:
  - process-thread-001
  - virtual-memory-001
trends:
  - CFS(Completely Fair Scheduler)
  - BPF 기반 스케줄러
  - 실시간 스케줄링
  - 이기종 코어 스케줄링
---

# 정의
CPU 자원을 여러 프로세스에 효율적으로 할당하기 위한 알고리즘과 정책으로, 시스템 성능과 응답성을 최적화합니다.

## 특징
- 선점형 vs 비선점형: 선점형(Preemptive)은 실행 중인 프로세스를 강제로 중단 가능(RR, Priority 등, 응답성 좋음), 비선점형(Non-preemptive)은 프로세스가 자발적으로 CPU 반납(FCFS, SJF, 단순함)
- 주요 알고리즘: 1) FCFS(First Come First Served) - 도착 순서 2) SJF(Shortest Job First) - 실행시간 짧은 것 우선, 기아 발생 가능 3) RR(Round Robin) - 시간 할당량(Time Quantum)마다 교체, 대화형 시스템에 적합
- MLQ/MLFQ: MLQ(Multi-Level Queue)는 프로세스를 여러 큐로 분류(Foreground/Background), MLFQ(Multi-Level Feedback Queue)는 동적으로 우선순위 조정하여 기아 방지
- 성능 지표: CPU 이용률, 처리량(Throughput), 반환시간(Turnaround Time), 대기시간(Waiting Time), 응답시간(Response Time)

