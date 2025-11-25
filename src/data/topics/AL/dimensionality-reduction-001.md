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
고차원 데이터를 저차원으로 변환하여 시각화하거나 노이즈를 제거하는 기법입니다.

## 특징
- 목적: 시각화, 계산 효율, 과적합 방지, 노이즈 제거
- PCA (Principal Component Analysis): 선형 변환, 분산 최대화
- 주성분: 고유벡터, 데이터 분산이 가장 큰 방향
- Explained Variance: 각 주성분이 설명하는 분산 비율
- LDA (Linear Discriminant Analysis): 지도 학습, 클래스 분리 최대화
- t-SNE (t-distributed Stochastic Neighbor Embedding): 비선형, 고차원 유사도 보존
- 장점: 시각화 우수, 단점: 느림, 전역 구조 보존 약함
- UMAP (Uniform Manifold Approximation): 빠른 t-SNE 대안, 전역+지역 구조
- Autoencoder: 신경망 기반, Encoder-Decoder, 비선형 변환
- 활용: 고차원 데이터 시각화, 특징 추출, 전처리

## 최신 트렌드
- UMAP
- Autoencoders
