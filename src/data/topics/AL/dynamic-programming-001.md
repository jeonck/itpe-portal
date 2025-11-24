---
id: dynamic-programming-001
title: 동적 계획법 (Dynamic Programming)
category: technical-focus
subcategory: 알고리즘
subjectCategories:
  - AL
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - Dynamic Programming
  - DP
  - Memoization
  - Tabulation
  - Optimal Substructure
importance: 5
relatedTopics:
  - recursion-divide-conquer-001
  - greedy-algorithm-001
trends:
  - GPU-accelerated DP
  - Approximate DP
tags:
  - '2025'
---

# 정의
큰 문제를 작은 부분 문제로 나누고, 중복 계산을 메모이제이션으로 피하여 최적해를 구하는 기법입니다.

## 특징
- 두 가지 조건: Optimal Substructure (최적 부분 구조), Overlapping Subproblems (중복 부분 문제)
- Top-Down (Memoization): 재귀 + 캐싱, 필요한 부분만 계산
- Bottom-Up (Tabulation): 반복문, 작은 문제부터 순차적으로 해결
- 대표 문제: 피보나치 (O(n)), 최장 공통 부분 수열 (LCS), 배낭 문제 (Knapsack), 최단 경로 (Floyd-Warshall)
- 상태 정의: dp[i] = i번째 상태의 최적값
- 점화식: 이전 상태로부터 현재 상태 계산
- Greedy vs DP: Greedy는 매 순간 최선, DP는 모든 경우 고려
- 시간복잡도: 부분 문제 개수 × 각 문제 해결 시간

## 최신 트렌드
- GPU-accelerated DP
- Approximate DP
