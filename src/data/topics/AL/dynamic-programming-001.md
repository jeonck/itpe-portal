---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: dynamic-programming-001
importance: 5
keywords:
- Dynamic Programming
- DP
- Memoization
- Tabulation
- Optimal Substructure
relatedTopics:
- recursion-divide-conquer-001
- greedy-algorithm-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 동적 계획법 (Dynamic Programming)
trends:
- GPU-accelerated DP
- Approximate DP
---

# 정의
큰 문제를 작은 부분 문제로 나누고, 중복 계산을 메모이제이션으로 피하여 최적해를 구하는 알고리즘 설계 기법

## 특징
- 두 가지 조건: Optimal Substructure (최적 부분 구조), Overlapping Subproblems (중복 부분 문제)
- Top-Down (Memoization): 재귀 + 캐싱, 필요한 부분만 계산
- Bottom-Up (Tabulation): 반복문, 작은 문제부터 순차적으로 해결
- 대표 문제: 피보나치 (O(n)), 최장 공통 부분 수열 (LCS), 배낭 문제 (Knapsack), 최단 경로 (Floyd-Warshall)
- 상태 정의: dp[i] = i번째 상태의 최적값
- 점화식: 이전 상태로부터 현재 상태 계산
- Greedy vs DP: Greedy는 매 순간 최선, DP는 모든 경우 고려
- 시간복잡도: 부분 문제 개수 × 각 문제 해결 시간

## 절차
동적 계획법 문제 해결은 다음 단계를 따릅니다:

**1. 문제 분석 및 조건 확인**
- Optimal Substructure: 큰 문제의 최적해가 작은 문제의 최적해로 구성되는가?
- Overlapping Subproblems: 동일한 부분 문제가 반복적으로 계산되는가?
- 두 조건이 모두 만족되면 DP 적용 가능

**2. 상태 정의 (State Definition)**
- dp[i]: i번째 상태의 최적값 정의
- 예: 피보나치 → dp[i] = i번째 피보나치 수
- 예: 배낭 문제 → dp[i][w] = i번째 물건까지 고려, 무게 w일 때 최대 가치

**3. 점화식 수립 (Recurrence Relation)**
- 현재 상태를 이전 상태로 표현
- 예: 피보나치 → dp[i] = dp[i-1] + dp[i-2]
- 예: LCS → dp[i][j] = dp[i-1][j-1] + 1 (문자 일치 시)

**4. 초기값 설정 (Base Case)**
- 가장 작은 문제의 해를 직접 정의
- 예: dp[0] = 0, dp[1] = 1 (피보나치)

**5. 구현 방식 선택**

Top-Down (Memoization):
```
memo = {}
function fib(n):
  if n in memo: return memo[n]
  if n <= 1: return n
  memo[n] = fib(n-1) + fib(n-2)
  return memo[n]
```

Bottom-Up (Tabulation):
```
dp = [0] * (n+1)
dp[1] = 1
for i in range(2, n+1):
  dp[i] = dp[i-1] + dp[i-2]
return dp[n]
```

**6. 시간/공간 복잡도 분석**
- 시간: 부분 문제 개수 × 각 문제 해결 시간
- 공간: 메모이제이션 배열 크기 (최적화 가능)

## 최신 트렌드
- GPU-accelerated DP
- Approximate DP