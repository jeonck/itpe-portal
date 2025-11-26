---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: cache-memory-001
importance: 5
keywords:
- 캐시
- Direct Mapping
- Set-Associative
- LRU
- Write-Through
- Cache Coherence
relatedTopics:
- cpu-architecture-001
- virtual-memory-001
subcategory: 컴퓨터 구조
subjectCategories:
- CA
title: 캐시 메모리
trends:
- 3D 스택 캐시
- Non-Volatile 캐시
- AI 가속기용 캐시
- CXL(Compute Express Link) 메모리
---

# 정의
CPU와 주기억장치 사이의 속도 차이를 해소하기 위한 고속 버퍼 메모리로, 지역성 원리를 활용하여 성능을 향상시킵니다 기술.

## 특징
- 매핑 기법: 1) Direct Mapping - 각 블록이 하나의 캐시 라인에만 매핑(간단, 충돌 많음) 2) Fully Associative - 어느 라인에나 배치 가능(유연, 검색 느림) 3) Set-Associative - N-way(2, 4, 8-way 등), Direct와 Fully의 절충안
- 교체 알고리즘: LRU(Least Recently Used, 가장 오래 사용 안함), FIFO(First In First Out), Random, LFU(Least Frequently Used)
- 쓰기 정책: Write-Through(즉시 메모리 갱신, 느림), Write-Back(캐시만 갱신 후 나중에 반영, 빠름, Dirty Bit 사용)
- 캐시 일관성(Cache Coherence): 멀티코어에서 여러 캐시 간 데이터 일관성 유지. MESI 프로토콜(Modified, Exclusive, Shared, Invalid), Snoop 기반(버스 감시) 또는 Directory 기반

## 동작원리
캐시 메모리는 지역성 원리를 활용하여 CPU와 메모리 간 속도 차이를 해소합니다:

지역성 원리 (Principle of Locality)
- 시간 지역성 (Temporal Locality): 최근 접근한 데이터는 가까운 미래에 다시 접근할 가능성이 높음
- 공간 지역성 (Spatial Locality): 접근한 데이터 근처의 데이터도 곧 접근할 가능성이 높음
- 이를 활용하여 자주 사용되는 데이터를 캐시에 보관

캐시 동작 과정
1) CPU가 메모리 주소 요청
2) 캐시 확인 (Tag 비교)
3) Cache Hit: 캐시에 데이터 존재 → 즉시 반환
4) Cache Miss: 캐시에 데이터 없음 → 메인 메모리 접근 → 캐시에 저장

Set-Associative 매핑 동작
1) 메모리 주소를 Tag, Index, Offset으로 분할
2) Index로 캐시 Set 선택
3) Set 내 모든 Way의 Tag와 비교 (병렬 비교)
4) 일치하면 Hit, 불일치하면 Miss
5) Miss 시 교체 알고리즘(LRU 등)으로 희생자 선택

MESI 프로토콜 (Cache Coherence)
- Modified: 수정됨, 다른 캐시에 없음, 메모리와 불일치
- Exclusive: 유일하게 존재, 메모리와 일치
- Shared: 여러 캐시에 공유, 읽기 전용
- Invalid: 무효화됨
- 버스 스누핑으로 다른 코어의 쓰기 감지 및 상태 전이