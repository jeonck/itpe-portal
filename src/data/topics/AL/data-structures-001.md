---
category: technical-focus
certifications:
- computer-systems
difficulty: intermediate
id: data-structures-001
importance: 4
keywords:
- Stack
- Queue
- Linked List
- Tree
- Graph
- BST
relatedTopics:
- algorithms-001
- process-scheduling-001
subcategory: 알고리즘
subjectCategories:
- AL
title: 자료구조
trends:
- Persistent Data Structures
- Lock-Free Data Structures
- Cache-Oblivious Data Structures
- Probabilistic Data Structures
---

## 암기 두음
선트그

# 정의
데이터를 효율적으로 저장하고 접근하기 위한 구조로, 각 자료구조는 특정 연산에 최적화되어 있습니다.

## 특징
- 선형 자료구조: Stack(LIFO, push/pop O(1), 함수 호출, 괄호 검사), Queue(FIFO, enqueue/dequeue O(1), BFS, 스케줄링), Linked List(동적 크기, 삽입/삭제 O(1), 탐색 O(n), 단방향/양방향/원형)
- 트리(Tree): 계층 구조. Binary Tree(이진 트리), BST(Binary Search Tree, 탐색/삽입/삭제 평균 O(log n), 최악 O(n)), AVL/Red-Black Tree(균형 이진 탐색 트리, O(log n) 보장), Heap(완전 이진 트리, 우선순위 큐), B-Tree(DB 인덱스)
- 그래프(Graph): 정점(Vertex)과 간선(Edge). 표현: 인접 행렬(O(V²) 공간, O(1) 간선 확인), 인접 리스트(O(V+E) 공간, 희소 그래프 적합). 순회: DFS(깊이 우선, 스택), BFS(너비 우선, 큐)
- 고급 자료구조: Hash Table(O(1) 평균), Trie(문자열 검색), Segment Tree(구간 쿼리), Union-Find(Disjoint Set)

## 암기 두음
선트그

# 정의
데이터를 효율적으로 저장하고 접근하기 위한 구조로, 각 자료구조는 특정 연산에 최적화되어 있습니다.

## 특징
- 선형 자료구조: Stack(LIFO, push/pop O(1), 함수 호출, 괄호 검사), Queue(FIFO, enqueue/dequeue O(1), BFS, 스케줄링), Linked List(동적 크기, 삽입/삭제 O(1), 탐색 O(n), 단방향/양방향/원형)
- 트리(Tree): 계층 구조. Binary Tree(이진 트리), BST(Binary Search Tree, 탐색/삽입/삭제 평균 O(log n), 최악 O(n)), AVL/Red-Black Tree(균형 이진 탐색 트리, O(log n) 보장), Heap(완전 이진 트리, 우선순위 큐), B-Tree(DB 인덱스)
- 그래프(Graph): 정점(Vertex)과 간선(Edge). 표현: 인접 행렬(O(V²) 공간, O(1) 간선 확인), 인접 리스트(O(V+E) 공간, 희소 그래프 적합). 순회: DFS(깊이 우선, 스택), BFS(너비 우선, 큐)
- 고급 자료구조: Hash Table(O(1) 평균), Trie(문자열 검색), Segment Tree(구간 쿼리), Union-Find(Disjoint Set)