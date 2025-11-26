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
레이블 없는 데이터를 유사한 그룹으로 나누는 비지도 학습 알고리즘 기술 기술.

## 특징
- 비지도 학습: 레이블 없는 데이터에서 패턴 발견
- 거리 기반: 유사도 측정을 통한 그룹화
- 다양한 알고리즘: 중심 기반, 밀도 기반, 계층적 방법
- 평가 지표: Silhouette Score, Inertia, DB Index

## 동작원리
- K-Means 알고리즘: 1) 초기 중심(Centroid) 선택 → 2) 가장 가까운 중심에 데이터 할당 → 3) 중심 재계산 → 수렴까지 반복
- DBSCAN 알고리즘: 밀도 기반 군집화, 파라미터 ε(반경)와 MinPts(최소 점 개수)로 핵심점/경계점/노이즈 구분
- Hierarchical Clustering: Dendrogram 구조로 계층적 군집 형성, Agglomerative(상향식)/Divisive(하향식) 방식
- 거리 측정: 유클리드 거리, 맨하탄 거리, 코사인 유사도
- 최적 K 선정: Elbow Method로 관성(Inertia) 감소율 분석

## 최신 트렌드
- Deep Clustering
- Spectral Clustering