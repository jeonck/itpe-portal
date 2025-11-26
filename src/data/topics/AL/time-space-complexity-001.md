---
category: technical-focus
certifications:
- computer-systems
difficulty: intermediate
id: time-space-complexity-001
importance: 5
keywords:
- Big-O
- Time Complexity
- Space Complexity
- Algorithm Analysis
- Asymptotic Notation
relatedTopics:
- algorithms-001
- data-structures-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 시간복잡도 & 공간복잡도 (Big-O)
trends:
- Amortized Analysis
- Cache Complexity
---

# 정의
알고리즘의 효율성을 분석하는 척도로, 입력 크기에 따른 실행 시간과 메모리 사용량을 표기 기술.

## 특징
- Big-O 표기법: 최악의 경우 성능, O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
- Big-Ω (Omega): 최선의 경우, Big-Θ (Theta): 평균의 경우
- 시간복잡도: 입력 크기 n에 대한 연산 횟수
- 공간복잡도: 알고리즘이 사용하는 메모리 양
- O(1): 상수 시간 (배열 인덱스 접근, 해시 테이블 조회)
- O(log n): 로그 시간 (이진 탐색, 균형 트리)
- O(n): 선형 시간 (배열 순회, 선형 탐색)
- O(n log n): 효율적 정렬 (Merge Sort, Quick Sort, Heap Sort)
- O(n²): 이중 루프 (Bubble Sort, Selection Sort)
- Amortized Analysis: 분할 상환 분석, 평균적으로 보장되는 성능

## 절차
- 시간복잡도 분석 절차: 1) 알고리즘의 기본 연산 식별 (비교, 대입, 연산 등) → 2) 각 코드 블록의 실행 횟수 계산 → 3) 중첩 루프는 곱셈, 순차 코드는 덧셈으로 합산 → 4) 최고차항만 남기고 계수 제거 → 5) Big-O 표기법으로 표현
- 공간복잡도 분석 절차: 1) 입력 데이터 크기 확인 → 2) 추가 메모리 사용량 계산 (변수, 배열, 재귀 스택 등) → 3) 입력 크기에 따른 메모리 증가 패턴 분석 → 4) Big-O 표기법으로 표현
- 최악/평균/최선 케이스 분석: 1) 입력 데이터의 배치 상태에 따른 시나리오 식별 → 2) 각 케이스별 연산 횟수 계산 → 3) Big-O(최악), Big-Θ(평균), Big-Ω(최선) 표기
- 알고리즘 비교: 1) 각 알고리즘의 시간/공간 복잡도 계산 → 2) 입력 크기별 성능 비교 → 3) 상황에 맞는 최적 알고리즘 선택

## 최신 트렌드
- Amortized Analysis
- Cache Complexity