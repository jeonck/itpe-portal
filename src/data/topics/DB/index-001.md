---
id: index-001
title: 인덱스 (Index)
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - B-Tree
  - B+Tree
  - 비트맵
  - 해시
  - 인덱스 튜닝
importance: 5
relatedTopics:
  - db-normalization-001
  - transaction-001
  - query-optimization-001
---

# 정의
데이터베이스에서 검색 속도를 향상시키기 위해 특정 컬럼의 값을 정렬하여 저장하는 자료구조입니다.

## 특징
- B-Tree 인덱스: 균형 트리 구조, 범위 검색에 효율적
- B+Tree 인덱스: 리프 노드에만 데이터, 순차 접근 향상
- 비트맵 인덱스: 카디널리티가 낮은 컬럼에 효과적
- 해시 인덱스: 동등 비교에 빠름, 범위 검색 불가
- 인덱스 튜닝: 적절한 컬럼 선택, 복합 인덱스, 커버링 인덱스

