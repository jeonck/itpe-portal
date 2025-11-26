---
category: technical-focus
certifications:
- computer-systems
difficulty: intermediate
id: greedy-algorithm-001
importance: 4
keywords:
- Greedy Algorithm
- Optimal Choice
- Activity Selection
- Huffman Coding
- Dijkstra
relatedTopics:
- dynamic-programming-001
- graph-algorithms-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 탐욕 알고리즘 (Greedy Algorithm)
trends:
- Online Greedy Algorithms
- Approximation Algorithms
---

# 정의
매 단계에서 현재 최선의 선택을 하여 전체 최적해를 구하는 알고리즘 설계 기법

## 특징
- 핵심: 매 순간 지역적 최적 선택 (Local Optimal) → 전역 최적 (Global Optimal)
- 조건: Greedy Choice Property (탐욕 선택 속성), Optimal Substructure (최적 부분 구조)
- 장점: 구현 간단, 빠른 실행 시간, 단점: 항상 최적해 보장 못함
- 대표 알고리즘: Activity Selection (활동 선택), Huffman Coding (압축), Dijkstra (최단 경로), Kruskal/Prim (MST)
- 동전 거스름돈: 큰 단위부터 선택 (특정 화폐 체계에서만 최적)
- Fractional Knapsack: 부분 선택 가능, Greedy로 해결
- 0/1 Knapsack: 부분 선택 불가, DP 필요
- 증명: Greedy가 최적임을 수학적으로 증명 필요

## 절차
탐욕 알고리즘 설계 및 적용 단계:

**1. 문제 이해 및 조건 확인**
- Greedy Choice Property: 매 순간의 최선의 선택이 전체 최적해로 이어지는가?
- Optimal Substructure: 부분 문제의 최적해가 전체 문제의 최적해를 구성하는가?

**2. 선택 기준 정의 (Selection Criteria)**
- 매 단계에서 무엇을 기준으로 선택할지 결정
- 예: Activity Selection → 종료 시간이 가장 빠른 활동
- 예: Dijkstra → 현재까지 거리가 가장 짧은 정점
- 예: Huffman Coding → 빈도가 가장 낮은 두 노드

**3. 탐욕 선택 수행**
- 현재 상태에서 지역적 최적 선택
- 선택한 항목은 해에 포함
- 선택한 항목과 관련된 부분 문제로 축소

**4. 다음 단계로 진행**
- 축소된 문제에 대해 동일한 방식 반복
- 더 이상 선택할 수 없을 때까지 계속

**5. 정당성 증명 (선택적)**
- Exchange Argument: Greedy 해를 최적해로 교환 가능함을 증명
- Induction: 귀납법으로 각 단계의 선택이 올바름을 증명

**대표 예제: Activity Selection (활동 선택)**
```
1) 활동을 종료 시간 기준으로 정렬
2) 첫 번째 활동 선택
3) 선택한 활동과 겹치지 않는 활동 중 종료 시간이 가장 빠른 것 선택
4) 3번 반복
```

**대표 예제: Dijkstra 최단 경로**
```
1) 시작 정점의 거리를 0으로, 나머지는 ∞로 초기화
2) 방문하지 않은 정점 중 거리가 가장 짧은 정점 선택
3) 선택한 정점을 거쳐 가는 경로로 거리 업데이트
4) 모든 정점을 방문할 때까지 2-3 반복
```

## 최신 트렌드
- Online Greedy Algorithms
- Approximation Algorithms