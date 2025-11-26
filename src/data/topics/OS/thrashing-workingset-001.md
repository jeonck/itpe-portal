---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: thrashing-workingset-001
importance: 4
keywords:
- Thrashing
- Working Set
- Page Fault
- Locality
- Demand Paging
relatedTopics:
- virtual-memory-001
- process-scheduling-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: Thrashing & Working Set
trends:
- NUMA 인식 메모리 관리
- Transparent Huge Pages
---

# 정의
프로세스가 필요한 페이지를 메모리에 유지하지 못해 과도한 페이지 부재가 발생하는 현상과 이를 방지하기 위한 Working Set 모델 기술.

## 특징
- 성능 저하 현상: 페이지 교체가 실제 작업보다 많아짐
- 메모리 관리 핵심: Working Set 개념으로 필요 메모리 예측
- 지역성 원리: 프로그램의 시간적/공간적 참조 패턴 활용
- 시스템 안정성: 적절한 메모리 할당으로 예방

## 동작원리
- Thrashing 발생 메커니즘:
  - 다중 프로그래밍 수준 과도: 너무 많은 프로세스가 메모리 경쟁
  - 메모리 부족: 각 프로세스의 Working Set을 수용하지 못함
  - 빈번한 Page Fault: 페이지 교체 오버헤드가 CPU 작업 시간 초과
  - CPU 이용률 급락: 대부분 시간을 I/O 대기로 소비
- Working Set Model:
  - Working Set: Δ(델타) 시간 윈도우 내에 프로세스가 참조한 페이지 집합
  - 원리: 충분한 Working Set 크기를 보장하면 Page Fault 최소화
  - Locality (지역성) 활용: Temporal Locality(최근 참조 페이지 재참조), Spatial Locality(인접 주소 참조)
- PFF (Page Fault Frequency) 전략:
  - 페이지 부재율 모니터링: 임계값 설정
  - 할당 조정: PFF 높으면 메모리 증가, 낮으면 감소
  - 다중 프로그래밍 수준 조절: 메모리 부족 시 프로세스 수 감소 (Suspend/Swap-out)

## 최신 트렌드
- NUMA 인식 메모리 관리
- Transparent Huge Pages