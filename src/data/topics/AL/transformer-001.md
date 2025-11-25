---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: transformer-001
importance: 5
keywords:
- Transformer
- Self-Attention
- Multi-Head Attention
- Positional Encoding
- Encoder-Decoder
relatedTopics:
- llm-001
- bert-gpt-001
- rnn-lstm-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: Transformer (Self-Attention)
trends:
- Efficient Transformers
- Sparse Attention
---

# 정의
Self-Attention 메커니즘으로 시퀀스 전체의 관계를 병렬로 학습하는 혁신적인 신경망 아키텍처입니다.

## 특징
- "Attention is All You Need" (2017), RNN 없이 순차 데이터 처리
- Self-Attention: 입력 시퀀스 내 모든 위치 간 관계 계산
- Query, Key, Value: Attention(Q, K, V) = softmax(QKᵀ/√d)V
- Multi-Head Attention: 여러 Attention을 병렬로, 다양한 관점 학습
- Positional Encoding: 위치 정보 추가 (sin/cos 함수)
- Encoder-Decoder: Encoder (입력 이해), Decoder (출력 생성)
- Feed-Forward Network: Position-wise, 각 위치 독립적으로 처리
- Layer Normalization, Residual Connection: 학습 안정화
- 장점: 병렬 처리, 장거리 의존성, 단점: 메모리 많이 소비 (O(n²))
- 활용: BERT, GPT, T5, Vision Transformer, 번역, 요약, 생성

## 동작원리

Transformer는 Self-Attention으로 시퀀스 전체 관계를 병렬로 학습합니다:

**1. Self-Attention**
- Q, K, V 생성: Q = X×W_Q, K = X×W_K, V = X×W_V
- Attention Score: Score = Q×K^T / √d_k
- Attention Weights: softmax(Score)
- Output: Attention_Weights × V

**2. Multi-Head Attention**
- 8개 head 병렬 수행: 다양한 관점 학습
- Concat 후 선형 변환

**3. Positional Encoding**
- PE(pos,2i) = sin(pos/10000^(2i/d))
- 입력 임베딩에 더해 위치 정보 부여

**4. Encoder 구조**
```
Input + PE → Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm (× N층)
```

**5. Decoder 구조**
```
Output → Masked Self-Attention → Cross-Attention (Encoder) → FFN (× N층)
```

**6. FFN (Feed-Forward)**
- Position-wise 독립 처리
- FFN(x) = ReLU(x×W_1)×W_2

**7. Masked Attention**
- 미래 토큰 masking (-∞)
- Auto-regressive 생성

## 최신 트렌드
- Efficient Transformers
- Sparse Attention

