---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: graph-algorithms-001
importance: 5
keywords:
- BFS
- DFS
- Dijkstra
- Floyd-Warshall
- Bellman-Ford
- Kruskal
- Prim
- MST
relatedTopics:
- data-structures-001
- dynamic-programming-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 그래프 알고리즘 (BFS, DFS, 최단경로, MST)
trends:
- Graph Neural Networks
- Distributed Graph Algorithms
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

## 절차

**BFS (너비 우선 탐색) 절차**
```
1) 시작 정점을 큐에 삽입하고 방문 표시
2) 큐에서 정점 v를 꺼냄
3) v의 인접 정점 중 미방문 정점을 모두 큐에 삽입하고 방문 표시
4) 큐가 빌 때까지 2-3 반복
```

**DFS (깊이 우선 탐색) 절차**
```
재귀 방식:
1) 현재 정점 v를 방문 표시
2) v의 인접 정점 중 미방문 정점에 대해 DFS 재귀 호출
3) 모든 인접 정점 처리 완료 시 종료

스택 방식:
1) 시작 정점을 스택에 삽입
2) 스택에서 정점을 꺼내 방문 표시
3) 인접한 미방문 정점들을 스택에 삽입
4) 스택이 빌 때까지 반복
```

**Dijkstra 최단 경로 절차**
```
1) 시작 정점의 거리를 0, 나머지는 ∞로 초기화
2) 우선순위 큐에 (거리, 시작 정점) 삽입
3) 큐에서 거리가 가장 짧은 정점 u 추출
4) u의 인접 정점 v에 대해:
   if dist[u] + weight(u,v) < dist[v]:
     dist[v] = dist[u] + weight(u,v)
     큐에 (dist[v], v) 삽입
5) 큐가 빌 때까지 3-4 반복
```

**Bellman-Ford 절차**
```
1) 시작 정점의 거리를 0, 나머지는 ∞로 초기화
2) V-1번 반복:
   모든 간선 (u,v)에 대해:
     if dist[u] + weight(u,v) < dist[v]:
       dist[v] = dist[u] + weight(u,v)
3) 음수 사이클 확인: 한 번 더 갱신되면 음수 사이클 존재
```

**Floyd-Warshall 모든 쌍 최단 경로 절차**
```
1) dist[i][j] 초기화:
   - i == j: 0
   - 간선 존재: weight(i,j)
   - 간선 없음: ∞
2) k = 1 to V:
     i = 1 to V:
       j = 1 to V:
         dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

**Kruskal MST 절차**
```
1) 모든 간선을 가중치 기준 오름차순 정렬
2) 각 정점을 독립적인 집합으로 초기화 (Union-Find)
3) 정렬된 간선 순서대로:
   - 간선 (u,v)가 사이클을 만들지 않으면 (Find(u) ≠ Find(v)):
     - MST에 추가
     - Union(u, v)
4) V-1개 간선 선택 시 종료
```

**Prim MST 절차**
```
1) 임의의 시작 정점을 MST에 포함
2) MST에 포함된 정점과 연결된 간선 중 최소 가중치 간선 선택
3) 선택한 간선으로 연결된 새 정점을 MST에 추가
4) V-1개 간선 선택할 때까지 2-3 반복
```

## 최신 트렌드
- Graph Neural Networks
- Distributed Graph Algorithms