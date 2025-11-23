---
id: embedded-rtos-001
title: 임베디드/RTOS
category: technical-focus
subcategory: 운영체제
subjectCategories:
  - OS
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - RTOS
  - Priority Inversion
  - Watchdog Timer
  - 실시간
  - 임베디드
importance: 4
relatedTopics:
  - process-scheduling-001
  - process-thread-001
trends:
  - RTOS 가상화
  - 안전 인증(Safety-Critical) RTOS
  - Rust 기반 RTOS
  - Edge AI 임베디드
---

# 정의
실시간 운영체제(RTOS)는 정해진 시간 내에 작업을 완료하는 것이 보장되는 임베디드 시스템용 OS로, 결정론적 동작이 핵심입니다.

## 특징
- RTOS 특징: 하드 실시간(데드라인 위반 시 치명적, 자동차 브레이크), 소프트 실시간(데드라인 위반 허용, 멀티미디어). 작은 커널, 빠른 문맥교환, 우선순위 기반 선점형 스케줄링, 인터럽트 지연시간 최소화
- Priority Inversion(우선순위 역전): 낮은 우선순위 태스크가 자원 점유 시 높은 우선순위 태스크가 대기하는 현상. 해결: Priority Inheritance(상속), Priority Ceiling(천장) 프로토콜
- Watchdog Timer: 시스템 행(hang) 감지 및 복구 메커니즘. 주기적으로 타이머 리셋하지 않으면 자동으로 시스템 재시작. 하드웨어/소프트웨어 구현
- 대표 RTOS: FreeRTOS, VxWorks, QNX, ThreadX, Zephyr. 특징: 작은 메모리 풋프린트, 모듈화, 결정론적 스케줄링