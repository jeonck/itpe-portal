---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: gradient-descent-001
importance: 5
keywords:
- Gradient Descent
- Backpropagation
- SGD
- Adam
- Learning Rate
- Optimizer
relatedTopics:
- ai-deep-learning-001
- ml-learning-types-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: 경사하강법 & 역전파 (Gradient Descent & Backpropagation)
trends:
- Second-order Optimization
- Adaptive Learning Rates
---

# 정의
손실 함수를 최소화하기 위해 가중치를 업데이트하는 최적화 알고리즘과 신경망 학습의 핵심 기법입니다.

## 특징
- 경사하강법 (Gradient Descent): 손실 함수의 기울기 반대 방향으로 이동
- 수식: θ = θ - α∇J(θ), α=학습률, ∇J=기울기
- Batch GD: 전체 데이터 사용, 느림, 안정적
- SGD (Stochastic): 1개 샘플씩, 빠름, 불안정
- Mini-batch GD: 일부 샘플 사용, 절충안
- Momentum: 관성 추가, 진동 감소
- Adam (Adaptive Moment): Momentum + RMSProp, 적응형 학습률
- 학습률 (Learning Rate): 너무 크면 발산, 너무 작으면 느림
- 역전파 (Backpropagation): 출력에서 입력으로 오차 전파, 가중치 갱신
- Chain Rule: 합성 함수 미분, 각 층의 기울기 계산

## 최신 트렌드
- Second-order Optimization
- Adaptive Learning Rates

# 정의
손실 함수를 최소화하기 위해 가중치를 업데이트하는 최적화 알고리즘과 신경망 학습의 핵심 기법입니다.

## 특징
- 경사하강법 (Gradient Descent): 손실 함수의 기울기 반대 방향으로 이동
- 수식: θ = θ - α∇J(θ), α=학습률, ∇J=기울기
- Batch GD: 전체 데이터 사용, 느림, 안정적
- SGD (Stochastic): 1개 샘플씩, 빠름, 불안정
- Mini-batch GD: 일부 샘플 사용, 절충안
- Momentum: 관성 추가, 진동 감소
- Adam (Adaptive Moment): Momentum + RMSProp, 적응형 학습률
- 학습률 (Learning Rate): 너무 크면 발산, 너무 작으면 느림
- 역전파 (Backpropagation): 출력에서 입력으로 오차 전파, 가중치 갱신
- Chain Rule: 합성 함수 미분, 각 층의 기울기 계산

## 최신 트렌드
- Second-order Optimization
- Adaptive Learning Rates