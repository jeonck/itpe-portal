---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: backtracking-001
importance: 4
keywords:
- Backtracking
- N-Queens
- Sudoku
- Pruning
- DFS
relatedTopics:
- recursion-divide-conquer-001
- graph-algorithms-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 백트래킹 (Backtracking)
trends:
- Constraint Satisfaction
- SAT Solvers
---

# 정의
모든 가능한 경우를 탐색하되, 조건에 맞지 않으면 즉시 후퇴(backtrack)하여 불필요한 탐색을 줄이는 기법입니다.

## 특징
- DFS 기반: 깊이 우선 탐색으로 모든 경우 탐색
- Pruning (가지치기): 조건 위배 시 즉시 중단, 탐색 공간 축소
- 구조: 선택 → 유효성 검사 → 재귀 → 복원
- 대표 문제: N-Queens (N개 퀸 배치), Sudoku, Hamilton Path, Graph Coloring
- Permutation (순열), Combination (조합) 생성
- Constraint Satisfaction Problem (CSP): 제약 조건 만족 문제
- 시간복잡도: 최악 O(2ⁿ) 또는 O(n!), Pruning으로 개선
- 최적화: 가지치기 조건 강화, 휴리스틱 사용

## 최신 트렌드
- Constraint Satisfaction
- SAT Solvers

# 정의
모든 가능한 경우를 탐색하되, 조건에 맞지 않으면 즉시 후퇴(backtrack)하여 불필요한 탐색을 줄이는 기법입니다.

## 특징
- DFS 기반: 깊이 우선 탐색으로 모든 경우 탐색
- Pruning (가지치기): 조건 위배 시 즉시 중단, 탐색 공간 축소
- 구조: 선택 → 유효성 검사 → 재귀 → 복원
- 대표 문제: N-Queens (N개 퀸 배치), Sudoku, Hamilton Path, Graph Coloring
- Permutation (순열), Combination (조합) 생성
- Constraint Satisfaction Problem (CSP): 제약 조건 만족 문제
- 시간복잡도: 최악 O(2ⁿ) 또는 O(n!), Pruning으로 개선
- 최적화: 가지치기 조건 강화, 휴리스틱 사용

## 최신 트렌드
- Constraint Satisfaction
- SAT Solvers