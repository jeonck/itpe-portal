---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: bert-gpt-001
importance: 5
keywords:
- BERT
- GPT
- Masked LM
- Autoregressive
- Bidirectional
- Decoder-only
relatedTopics:
- transformer-001
- llm-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: BERT vs GPT 구조
trends:
- Instruction Tuning
- RLHF
---

# 정의
Transformer 기반의 두 대표적인 사전 학습 모델로, 양방향(BERT)과 단방향(GPT) 언어 이해 방식의 차이를 가집니다 방식.

## 특징
- BERT (Bidirectional Encoder Representations from Transformers): Encoder-only, 양방향
- BERT 학습: Masked Language Model (MLM), 일부 단어 가림 → 예측
- Next Sentence Prediction (NSP): 두 문장 연속성 예측
- BERT 활용: 질의응답, 감정 분석, 개체명 인식 (Fine-tuning)
- GPT (Generative Pre-trained Transformer): Decoder-only, 단방향 (왼→오)
- GPT 학습: Autoregressive LM, 이전 토큰으로 다음 토큰 예측
- GPT 활용: 텍스트 생성, 대화, Zero-shot/Few-shot Learning
- 차이점: BERT는 이해(Understanding), GPT는 생성(Generation)
- GPT-3/4: 대규모 파라미터, In-Context Learning, Prompt Engineering
- 최신: Instruction Tuning, RLHF (Reinforcement Learning from Human Feedback)

## 동작원리
- BERT 내부 동작: 1) 입력 토큰을 임베딩 벡터로 변환 (Token + Position + Segment Embedding) → 2) 양방향 Transformer Encoder 레이어 통과 (Self-Attention으로 문맥 양방향 참조) → 3) MLM에서 [MASK] 토큰 예측, NSP에서 [CLS] 토큰으로 문장 관계 분류 → 4) 사전학습 후 downstream 태스크에 Fine-tuning
- GPT 내부 동작: 1) 입력 토큰을 임베딩 (Token + Position Embedding) → 2) Masked Self-Attention을 사용하는 Decoder 레이어 통과 (왼쪽 토큰만 참조, 오른쪽 마스킹) → 3) 각 위치에서 다음 토큰 확률 분포 계산 → 4) Autoregressive 방식으로 한 토큰씩 생성
- BERT Attention 메커니즘: 양방향 Self-Attention으로 모든 토큰이 서로를 참조하여 문맥 이해
- GPT Attention 메커니즘: Causal Masking으로 현재 위치 이전 토큰만 참조하여 순차 생성
- Fine-tuning vs Prompting: BERT는 태스크별 Fine-tuning 필요, GPT는 Prompt로 In-Context Learning 가능
- RLHF 동작: 1) Pre-training → 2) Supervised Fine-tuning → 3) Reward Model 학습 (인간 선호도 학습) → 4) PPO로 강화학습 최적화

## 최신 트렌드
- Instruction Tuning
- RLHF