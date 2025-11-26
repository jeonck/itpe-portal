---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: rnn-lstm-001
importance: 5
keywords:
- RNN
- LSTM
- GRU
- Sequence Model
- Time Series
- NLP
relatedTopics:
- transformer-001
- ai-deep-learning-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: RNN & LSTM (순환 신경망)
trends:
- Transformer 대체
- Bidirectional RNN
---

# 정의
시퀀스 데이터의 시간적 의존성을 학습하기 위한 순환 신경망 기반 자연어 및 시계열 처리 기술 기술.

## 특징
- RNN (Recurrent Neural Network): 이전 상태를 현재 입력에 반영, 순환 구조
- 문제점: Vanishing Gradient (기울기 소실), Long-term Dependency 학습 어려움
- LSTM (Long Short-Term Memory): Cell State와 Gate로 장기 의존성 해결
- LSTM Gates: Forget Gate (잊기), Input Gate (입력), Output Gate (출력)
- GRU (Gated Recurrent Unit): LSTM 단순화, 2개 Gate, 빠름
- Bidirectional RNN: 양방향 처리, 과거+미래 정보 활용
- Seq2Seq: Encoder-Decoder 구조, 기계 번역, 챗봇
- Attention Mechanism: 중요한 부분 집중, Transformer의 기초
- 활용: 언어 모델, 번역, 음성 인식, 주가 예측, 비디오 분석

## 동작원리

**1. RNN 기본**
- h_t = tanh(W_h × h_(t-1) + W_x × x_t)
- 이전 상태 h_(t-1)과 현재 입력 x_t 결합
- Vanishing Gradient: 긴 시퀀스에서 초기 정보 소실

**2. LSTM Gate 메커니즘**
- Forget Gate: f_t = σ(W_f×[h_(t-1), x_t]), 무엇을 잊을지
- Input Gate: i_t = σ(W_i×[h_(t-1), x_t]), 무엇을 저장할지
- Cell State: C_t = f_t⊙C_(t-1) + i_t⊙tanh(W_C×[h_(t-1), x_t])
- Output Gate: o_t = σ(W_o×[h_(t-1), x_t]), h_t = o_t⊙tanh(C_t)
- Cell State로 장기 기억 유지, Gate로 정보 흐름 제어

**3. GRU**
- Reset/Update Gate 2개
- h_t = (1-z_t)⊙h_(t-1) + z_t⊙tanh(W×[r_t⊙h_(t-1), x_t])

**4. Bidirectional RNN**
- Forward (과거→현재) + Backward (미래→현재)
- 출력 = [Forward; Backward] Concat

## 최신 트렌드
- Transformer 대체
- Bidirectional RNN