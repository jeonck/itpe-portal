---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: string-algorithms-001
importance: 4
keywords:
- KMP
- Boyer-Moore
- String Matching
- Pattern Search
- Rabin-Karp
relatedTopics:
- algorithms-001
- data-structures-001
subcategory: 알고리즘
subjectCategories:
- AL
tags:
- '2025'
title: 문자열 알고리즘 (KMP, Boyer-Moore)
trends:
- Approximate String Matching
- DNA Sequence Matching
---

# 정의
텍스트에서 패턴을 효율적으로 찾는 문자열 검색 알고리즘입니다.

## 특징
- Naive 알고리즘: 모든 위치에서 비교, O(nm), n=텍스트 길이, m=패턴 길이
- KMP (Knuth-Morris-Pratt): 실패 함수로 불필요한 비교 생략, O(n+m)
- Failure Function: 패턴의 접두사-접미사 일치 정보 사전 계산
- Boyer-Moore: 뒤에서부터 비교, Bad Character/Good Suffix Rule, 평균 O(n/m)
- Rabin-Karp: 해싱 기반, 여러 패턴 동시 검색, 평균 O(n+m)
- Aho-Corasick: Trie 기반, 여러 패턴 동시 검색, O(n+m+z)
- Suffix Array/Tree: 접미사 배열/트리, 빠른 패턴 검색
- 활용: 텍스트 에디터, 검색 엔진, DNA 시퀀싱, 컴파일러

## 최신 트렌드
- Approximate String Matching
- DNA Sequence Matching

# 정의
텍스트에서 패턴을 효율적으로 찾는 문자열 검색 알고리즘입니다.

## 특징
- Naive 알고리즘: 모든 위치에서 비교, O(nm), n=텍스트 길이, m=패턴 길이
- KMP (Knuth-Morris-Pratt): 실패 함수로 불필요한 비교 생략, O(n+m)
- Failure Function: 패턴의 접두사-접미사 일치 정보 사전 계산
- Boyer-Moore: 뒤에서부터 비교, Bad Character/Good Suffix Rule, 평균 O(n/m)
- Rabin-Karp: 해싱 기반, 여러 패턴 동시 검색, 평균 O(n+m)
- Aho-Corasick: Trie 기반, 여러 패턴 동시 검색, O(n+m+z)
- Suffix Array/Tree: 접미사 배열/트리, 빠른 패턴 검색
- 활용: 텍스트 에디터, 검색 엔진, DNA 시퀀싱, 컴파일러

## 최신 트렌드
- Approximate String Matching
- DNA Sequence Matching