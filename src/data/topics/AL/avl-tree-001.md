---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: advanced
id: avl-tree-001
importance: 4
keywords:
- 균형 이진 탐색 트리
- 자가 균형
- 회전
- 높이 균형 인수
relatedTopics:
- binary-search-tree-001
- red-black-tree-001
subcategory: 자료구조
subjectCategories:
- AL
- SE
title: AVL 트리
trends:
- 데이터베이스 인덱싱
- 파일 시스템
---

# 정의
모든 노드에서 왼쪽 서브트리와 오른쪽 서브트리의 높이 차이를 1 이하로 유지하여 최악의 경우에도 탐색, 삽입, 삭제 연산의 시간 복잡도를 O(log N)으로 보장하는 자가 균형 이진 탐색 트리 기술 기술.

## 특징
- 자가 균형 (Self-Balancing): 삽입 또는 삭제 연산 후 트리의 균형이 깨지면 자동으로 균형을 맞춥니다.
- 높이 균형 인수 (Balance Factor): 각 노드의 왼쪽 서브트리 높이에서 오른쪽 서브트리 높이를 뺀 값으로, 이 값이 -1, 0, 1 중 하나여야 합니다.
- 회전 (Rotation): 균형이 깨졌을 때 LL, RR, LR, RL 회전을 통해 트리의 균형을 복원합니다.
- 시간 복잡도: 탐색, 삽입, 삭제 연산 모두 최악의 경우에도 O(log N)의 시간 복잡도를 가집니다.
- 구현 복잡성: 이진 탐색 트리보다 구현이 더 복잡합니다.