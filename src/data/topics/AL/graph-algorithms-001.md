---
id: graph-algorithms-001
title: 그래프 알고리즘 (BFS, DFS, 최단경로, MST)
category: technical-focus
subcategory: 알고리즘
subjectCategories:
  - AL
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - BFS
  - DFS
  - Dijkstra
  - Floyd-Warshall
  - Bellman-Ford
  - Kruskal
  - Prim
  - MST
importance: 5
relatedTopics:
  - data-structures-001
  - dynamic-programming-001
trends:
  - Graph Neural Networks
  - Distributed Graph Algorithms
tags:
  - '2025'
---

# 정의
그래프 자료구조에서 탐색, 최단 경로, 최소 신장 트리를 구하는 핵심 알고리즘들입니다.

## 특징
- BFS (너비 우선 탐색): 큐 사용, 최단 거리 (가중치 없음), O(V+E)
- DFS (깊이 우선 탐색): 스택/재귀, 연결 요소, 사이클 탐지, O(V+E)
- Dijkstra: 단일 시작점 최단 경로, 우선순위 큐, 양수 가중치, O((V+E) log V)
- Bellman-Ford: 음수 가중치 허용, 음수 사이클 탐지, O(VE)
- Floyd-Warshall: 모든 쌍 최단 경로, DP 기반, O(V³)
- MST (Minimum Spanning Tree): 최소 비용으로 모든 정점 연결
- Kruskal: 간선 정렬 후 선택, Union-Find, O(E log E)
- Prim: 정점 기반, 우선순위 큐, O((V+E) log V)
- 활용: 네트워크 라우팅, 지도 내비게이션, SNS 추천

## 최신 트렌드
- Graph Neural Networks
- Distributed Graph Algorithms
