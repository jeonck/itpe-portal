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
손실 함수를 최소화하기 위해 가중치를 업데이트하는 최적화 알고리즘 및 신경망 학습 핵심 기법.

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

## 동작원리
- 순전파 (Forward Pass): 입력 데이터를 신경망에 통과시켜 예측값 계산
- 손실 계산: 예측값과 실제값의 차이를 손실 함수로 측정 (MSE, Cross-Entropy 등)
- 역전파 (Backward Pass): Chain Rule을 사용해 출력층부터 입력층으로 기울기 계산
- 가중치 갱신: 계산된 기울기를 사용하여 θ = θ - α∇J(θ) 공식으로 파라미터 업데이트
- Optimizer 적용: SGD, Momentum, Adam 등의 최적화 알고리즘으로 학습률 조정 및 수렴 가속화
- 반복 학습: 여러 에폭(epoch)에 걸쳐 위 과정을 반복하여 손실 함수 최소화
- 수렴 조건: 손실이 더 이상 감소하지 않거나 검증 성능이 포화될 때 학습 종료

## 최신 트렌드
- Second-order Optimization
- Adaptive Learning Rates