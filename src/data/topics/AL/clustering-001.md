---
category: technical-focus
certifications:
- information-management
difficulty: intermediate
id: clustering-001
importance: 4
keywords:
- Clustering
- K-Means
- DBSCAN
- Hierarchical Clustering
- Unsupervised Learning
relatedTopics:
- ml-learning-types-001
- dimensionality-reduction-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: 군집화 (K-Means, DBSCAN)
trends:
- Deep Clustering
- Spectral Clustering
---

# 정의
레이블 없는 데이터를 유사한 그룹으로 나누는 비지도 학습 알고리즘 기술.

## 특징
- K-Means: 중심(Centroid) 기반, K개 클러스터, 유클리드 거리
- 동작: 1) 초기 중심 선택 → 2) 가장 가까운 중심에 할당 → 3) 중심 재계산 → 반복
- 장점: 간단, 빠름, 단점: K 사전 설정, 초기값 의존, 구형 클러스터만
- Elbow Method: 최적 K 찾기, 관성(Inertia) 감소율
- DBSCAN (Density-Based): 밀도 기반, 임의 모양 클러스터, 노이즈 처리
- 파라미터: ε (반경), MinPts (최소 점 개수)
- Hierarchical Clustering: 계층적, Dendrogram, Agglomerative/Divisive
- Silhouette Score: 군집화 품질 평가, -1~1
- 활용: 고객 세분화, 이미지 분할, 이상 탐지, 문서 분류

## 최신 트렌드
- Deep Clustering
- Spectral Clustering