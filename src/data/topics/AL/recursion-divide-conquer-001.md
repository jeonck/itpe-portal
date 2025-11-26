---
category: technical-focus
certifications:
- computer-systems
difficulty: intermediate
id: recursion-divide-conquer-001
importance: 5
keywords:
- Recursion
- Divide and Conquer
- Merge Sort
- Quick Sort
- Binary Search
- Master Theorem
relatedTopics:
- algorithms-001
- dynamic-programming-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 재귀 & 분할정복 (Recursion & Divide and Conquer)
trends:
- Tail Recursion Optimization
- Parallel Divide and Conquer
---

# 정의
함수가 자기 자신을 호출하는 재귀와, 문제를 작은 부분으로 나누어 해결하는 분할정복 기법.

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

## 절차
- 재귀 함수 작성 절차: 1) 기저 조건(Base Case) 정의 → 2) 재귀 케이스에서 문제를 더 작은 하위 문제로 분해 → 3) 하위 문제 해결을 위해 자기 자신 호출 → 4) 하위 문제 결과를 결합하여 반환
- Merge Sort 절차: 1) 배열을 절반으로 분할 (Divide) → 2) 각 부분을 재귀적으로 정렬 (Conquer) → 3) 정렬된 두 부분을 병합 (Combine, 두 포인터로 비교하며 합침) → 4) 크기 1이 될 때까지 반복
- Quick Sort 절차: 1) Pivot 선택 (보통 마지막 원소) → 2) Partition: Pivot보다 작은 원소는 왼쪽, 큰 원소는 오른쪽으로 배치 → 3) Pivot의 최종 위치 확정 → 4) 왼쪽과 오른쪽 부분을 재귀적으로 정렬
- Binary Search 절차: 1) 정렬된 배열의 중간 원소 선택 → 2) 찾는 값과 중간 원소 비교 → 3) 같으면 반환, 작으면 왼쪽 절반에서 재귀, 크면 오른쪽 절반에서 재귀 → 4) 범위가 없어지면 없음 반환
- 분할정복 일반 절차: Divide (문제 분할) → Conquer (재귀 해결) → Combine (결과 결합)

## 최신 트렌드
- Tail Recursion Optimization
- Parallel Divide and Conquer