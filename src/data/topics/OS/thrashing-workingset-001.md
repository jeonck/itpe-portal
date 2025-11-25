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
프로세스가 필요한 페이지를 메모리에 유지하지 못해 과도한 페이지 부재가 발생하는 현상과 이를 방지하기 위한 Working Set 모델입니다.

## 특징
- Thrashing: 페이지 교체가 너무 빈번하여 CPU 이용률 급격히 감소, 시스템 성능 저하
- 발생 원인: 다중 프로그래밍 수준 과도, 메모리 부족, 지역성(Locality) 부족
- Working Set: 특정 시간 동안 프로세스가 참조하는 페이지 집합
- Working Set Model: Δ(델타) 시간 윈도우 내 참조된 페이지, 충분한 Working Set 크기 보장
- Locality (지역성): Temporal (시간), Spatial (공간) 지역성 활용
- 해결 방법: 다중 프로그래밍 수준 감소, 메모리 증설, 페이지 교체 알고리즘 개선
- PFF (Page Fault Frequency): 페이지 부재율 모니터링하여 프로세스 할당 메모리 조정

## 최신 트렌드
- NUMA 인식 메모리 관리
- Transparent Huge Pages
