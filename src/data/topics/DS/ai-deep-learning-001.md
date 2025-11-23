---
id: ai-deep-learning-001
title: AI/딥러닝
category: digital-service
subcategory: AI/ML
subjectCategories:
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - CNN
  - RNN
  - Transformer
  - XAI
  - 신경망
importance: 5
relatedTopics:
  - llm-001
  - data-structures-001
trends:
  - Foundation Models
  - Diffusion Models
  - Neural Architecture Search
  - TinyML
---

# 정의
인공 신경망을 다층으로 쌓아 복잡한 패턴을 학습하는 기계학습 기법으로, 이미지, 음성, 텍스트 등 다양한 데이터 처리에 활용됩니다.

## 특징
- CNN(Convolutional Neural Network): 합성곱 계층으로 이미지 특징 추출, 파라미터 공유로 효율적. 구조: Conv → Pooling → FC. 활용: 이미지 분류(ResNet, VGG), 객체 탐지(YOLO, R-CNN)
- RNN(Recurrent Neural Network): 순차 데이터 처리, 이전 상태 기억. 문제: Gradient Vanishing. 해결: LSTM(Long Short-Term Memory), GRU(Gated Recurrent Unit). 활용: 시계열, 번역
- Transformer: Self-Attention으로 전체 시퀀스 병렬 처리, RNN 대체. 구조: Multi-Head Attention, Positional Encoding. 활용: NLP(BERT, GPT), Vision(ViT), 멀티모달
- XAI(eXplainable AI): AI 결정 과정 설명. 기법: LIME(로컬 근사), SHAP(Shapley 값), Grad-CAM(시각화), Attention 가중치. 필요성: 의료, 금융 등 고위험 분야
