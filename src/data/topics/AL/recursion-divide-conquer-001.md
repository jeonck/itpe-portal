---
id: recursion-divide-conquer-001
title: 재귀 & 분할정복 (Recursion & Divide and Conquer)
category: technical-focus
subcategory: 알고리즘
subjectCategories:
  - AL
difficulty: intermediate
certifications:
  - computer-systems
keywords:
  - Recursion
  - Divide and Conquer
  - Merge Sort
  - Quick Sort
  - Binary Search
  - Master Theorem
importance: 5
relatedTopics:
  - algorithms-001
  - dynamic-programming-001
trends:
  - Tail Recursion Optimization
  - Parallel Divide and Conquer
tags:
  - '2025'
---

# 정의
함수가 자기 자신을 호출하는 재귀와, 문제를 작은 부분으로 나누어 해결하는 분할정복 기법입니다.

## 특징
- 재귀 (Recursion): 함수가 자기 자신을 호출, 기저 조건(Base Case) 필수
- 재귀 구조: Base Case + Recursive Case
- 스택 오버플로우: 깊은 재귀 시 스택 메모리 초과
- Tail Recursion: 마지막에 자신 호출, 컴파일러 최적화 가능
- 분할정복 (Divide and Conquer): 문제를 작게 나눔 → 해결 → 합침
- 대표 알고리즘: Merge Sort (O(n log n)), Quick Sort (평균 O(n log n)), Binary Search (O(log n))
- Master Theorem: 재귀 시간복잡도 분석 공식
- 예시: 팩토리얼, 피보나치, 하노이 탑, 트리 순회
- 장점: 코드 간결, 직관적, 단점: 메모리 사용, 중복 계산

## 최신 트렌드
- Tail Recursion Optimization
- Parallel Divide and Conquer
