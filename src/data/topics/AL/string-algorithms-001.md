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
텍스트에서 패턴을 효율적으로 찾는 문자열 검색 알고리즘 기술.

## 특징
- Naive 알고리즘: 모든 위치에서 비교, O(nm), n=텍스트 길이, m=패턴 길이
- KMP (Knuth-Morris-Pratt): 실패 함수로 불필요한 비교 생략, O(n+m)
- Failure Function: 패턴의 접두사-접미사 일치 정보 사전 계산
- Boyer-Moore: 뒤에서부터 비교, Bad Character/Good Suffix Rule, 평균 O(n/m)
- Rabin-Karp: 해싱 기반, 여러 패턴 동시 검색, 평균 O(n+m)
- Aho-Corasick: Trie 기반, 여러 패턴 동시 검색, O(n+m+z)
- Suffix Array/Tree: 접미사 배열/트리, 빠른 패턴 검색
- 활용: 텍스트 에디터, 검색 엔진, DNA 시퀀싱, 컴파일러

## 절차

**KMP (Knuth-Morris-Pratt) 알고리즘 절차**

1단계: Failure Function (실패 함수) 구축
```
1) fail[0] = 0으로 초기화
2) j = 0, i = 1부터 패턴 길이까지:
   - pattern[i] == pattern[j]:
     * fail[i] = j + 1
     * i++, j++
   - pattern[i] != pattern[j]:
     * j가 0이 아니면 j = fail[j-1]로 이동
     * j가 0이면 fail[i] = 0, i++
```

2단계: 패턴 매칭
```
1) i = 0 (텍스트 인덱스), j = 0 (패턴 인덱스)
2) while i < 텍스트 길이:
   - text[i] == pattern[j]:
     * i++, j++
     * if j == 패턴 길이:
       → 패턴 발견 (위치: i-j)
       → j = fail[j-1] (다음 매칭 계속)
   - text[i] != pattern[j]:
     * j가 0이 아니면: j = fail[j-1]
     * j가 0이면: i++
```

**Boyer-Moore 알고리즘 절차**

1단계: Bad Character Table 생성
```
1) 모든 문자의 이동 거리를 패턴 길이로 초기화
2) 패턴의 각 문자에 대해:
   badChar[pattern[i]] = 패턴 길이 - i - 1
```

2단계: 뒤에서부터 비교
```
1) i = 0 (텍스트 시작 위치)
2) while i <= 텍스트 길이 - 패턴 길이:
   - j = 패턴 길이 - 1 (뒤에서부터)
   - while j >= 0 and pattern[j] == text[i+j]:
     * j--
   - if j < 0:
     → 패턴 발견
   - else:
     → i += max(1, j - badChar[text[i+j]])
```

**Rabin-Karp 알고리즘 절차**

1단계: 해시 값 계산
```
1) 패턴의 해시 값 계산:
   hash_p = 0
   for i in 0 to m-1:
     hash_p = (hash_p * d + pattern[i]) % q
   (d=진법, q=소수)

2) 텍스트 첫 윈도우 해시 값 계산:
   hash_t = 0
   for i in 0 to m-1:
     hash_t = (hash_t * d + text[i]) % q
```

2단계: Rolling Hash로 비교
```
1) for i in 0 to n-m:
   - if hash_p == hash_t:
     * 실제 문자열 비교 (해시 충돌 확인)
     * 일치하면 패턴 발견

   - 다음 윈도우 해시 계산 (Rolling Hash):
     * hash_t = (d * (hash_t - text[i] * h) + text[i+m]) % q
     * h = d^(m-1) % q
```

**Aho-Corasick (다중 패턴 매칭) 절차**

1단계: Trie 구축
```
1) 모든 패턴을 Trie에 삽입
2) 각 패턴의 끝 노드 표시
```

2단계: Failure Link 구축
```
1) BFS로 Trie 순회
2) 각 노드의 failure link 설정:
   - 현재 경로의 가장 긴 접미사가 Trie에 존재하는 노드로 연결
```

3단계: 텍스트 스캔
```
1) 현재 노드 = 루트
2) 텍스트의 각 문자에 대해:
   - 자식 노드 존재: 이동
   - 자식 노드 없음: failure link 따라 이동
   - 패턴 끝 노드 도달 시 매칭 발견
```

## 최신 트렌드
- Approximate String Matching
- DNA Sequence Matching