---
id: cache-memory-001
title: 캐시 메모리
category: technical-focus
subcategory: 컴퓨터 구조
subjectCategories:
  - CA
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - 캐시
  - Direct Mapping
  - Set-Associative
  - LRU
  - Write-Through
  - Cache Coherence
importance: 5
relatedTopics:
  - cpu-architecture-001
  - virtual-memory-001
trends:
  - 3D 스택 캐시
  - Non-Volatile 캐시
  - AI 가속기용 캐시
  - CXL(Compute Express Link) 메모리
---

# 정의
CPU와 주기억장치 사이의 속도 차이를 해소하기 위한 고속 버퍼 메모리로, 지역성 원리를 활용하여 성능을 향상시킵니다.

## 특징
- 매핑 기법: 1) Direct Mapping - 각 블록이 하나의 캐시 라인에만 매핑(간단, 충돌 많음) 2) Fully Associative - 어느 라인에나 배치 가능(유연, 검색 느림) 3) Set-Associative - N-way(2, 4, 8-way 등), Direct와 Fully의 절충안
- 교체 알고리즘: LRU(Least Recently Used, 가장 오래 사용 안함), FIFO(First In First Out), Random, LFU(Least Frequently Used)
- 쓰기 정책: Write-Through(즉시 메모리 갱신, 느림), Write-Back(캐시만 갱신 후 나중에 반영, 빠름, Dirty Bit 사용)
- 캐시 일관성(Cache Coherence): 멀티코어에서 여러 캐시 간 데이터 일관성 유지. MESI 프로토콜(Modified, Exclusive, Shared, Invalid), Snoop 기반(버스 감시) 또는 Directory 기반
