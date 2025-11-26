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
모든 가능한 경우를 탐색하되, 조건에 맞지 않으면 즉시 후퇴(backtrack)하여 불필요한 탐색을 줄이는 알고리즘 설계 기법

## 특징
- DFS 기반: 깊이 우선 탐색으로 모든 경우 탐색
- Pruning (가지치기): 조건 위배 시 즉시 중단, 탐색 공간 축소
- 구조: 선택 → 유효성 검사 → 재귀 → 복원
- 대표 문제: N-Queens (N개 퀸 배치), Sudoku, Hamilton Path, Graph Coloring
- Permutation (순열), Combination (조합) 생성
- Constraint Satisfaction Problem (CSP): 제약 조건 만족 문제
- 시간복잡도: 최악 O(2ⁿ) 또는 O(n!), Pruning으로 개선
- 최적화: 가지치기 조건 강화, 휴리스틱 사용

## 절차
- 백트래킹 기본 절차: 1) 기저 조건 확인 (해를 찾았거나 더 이상 진행 불가) → 2) 현재 상태에서 가능한 선택지 탐색 → 3) 각 선택지에 대해 유효성 검사 수행 → 4) 유효하면 선택 적용 및 재귀 호출 → 5) 재귀 호출 후 선택 복원(backtrack) → 6) 모든 선택지 탐색 완료
- N-Queens 적용 예시: 1) 빈 체스판에서 시작 → 2) 현재 행에서 각 열 위치 시도 → 3) 퀸 배치 시 같은 열, 대각선에 다른 퀸이 있는지 검사 → 4) 유효하면 퀸 배치 후 다음 행으로 재귀 → 5) N개 퀸을 모두 배치하면 해 발견 → 6) 실패 시 퀸 제거하고 다음 위치 시도
- Sudoku 적용 예시: 1) 빈 칸 찾기 → 2) 1~9 숫자 시도 → 3) 같은 행/열/3x3 박스에 중복이 없는지 검사 → 4) 유효하면 숫자 배치 후 다음 빈 칸으로 재귀 → 5) 모든 칸이 채워지면 해 발견 → 6) 실패 시 숫자 제거하고 다음 숫자 시도
- 가지치기 최적화: 조기에 불가능한 경로를 판단하여 재귀 깊이 감소

## 최신 트렌드
- Constraint Satisfaction
- SAT Solvers

