---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: dimensionality-reduction-001
importance: 4
keywords:
- PCA
- LDA
- t-SNE
- UMAP
- Dimensionality Reduction
relatedTopics:
- clustering-001
- ml-learning-types-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: 차원 축소 (PCA, LDA, t-SNE)
trends:
- UMAP
- Autoencoders
---

# 정의
고차원 데이터를 저차원으로 변환하여 시각화하거나 노이즈를 제거하는 기법 기법.

## 특징
- 고차원의 저주 극복: 계산 효율성 향상
- 시각화 지원: 2D/3D로 변환하여 직관적 이해
- 노이즈 제거: 중요 특징만 보존
- 다양한 기법: 선형(PCA, LDA), 비선형(t-SNE, UMAP)

## 동작원리
- PCA (Principal Component Analysis): 공분산 행렬의 고유벡터를 주성분으로 선택, 분산이 최대화되는 방향으로 선형 변환, Explained Variance로 차원 수 결정
- LDA (Linear Discriminant Analysis): 클래스 간 분산 최대화, 클래스 내 분산 최소화하는 판별 축 탐색, 지도 학습 방식
- t-SNE (t-distributed Stochastic Neighbor Embedding): 고차원 공간의 유사도를 저차원에 보존, t-분포 사용으로 군집 분리 강화, 지역 구조 우수
- UMAP (Uniform Manifold Approximation): 리만 기하학 기반, 전역 구조와 지역 구조 동시 보존, t-SNE보다 빠른 속도
- Autoencoder: Encoder로 차원 축소, Decoder로 복원, 병목층(Bottleneck)이 압축 표현, 비선형 변환 가능

## 최신 트렌드
- UMAP
- Autoencoders