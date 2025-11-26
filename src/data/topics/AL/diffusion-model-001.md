---
category: technical-focus
certifications:
- information-management
difficulty: advanced
id: diffusion-model-001
importance: 5
keywords:
- Diffusion Model
- DDPM
- Stable Diffusion
- Denoising
- Generative Model
relatedTopics:
- ai-deep-learning-001
- cnn-001
subcategory: 알고리즘
subjectCategories:
- AL
- DS
tags:
- '2025'
title: Diffusion Model (확산 모델)
trends:
- Latent Diffusion
- Video Diffusion
---

# 정의
노이즈를 점진적으로 제거하여 고품질 데이터를 생성하는 확률적 생성 모델.

## 특징
- Forward Process: 데이터에 점진적으로 노이즈 추가, q(xₜ|xₜ₋₁)
- Reverse Process: 노이즈에서 데이터 복원, pθ(xₜ₋₁|xₜ), 신경망 학습
- DDPM (Denoising Diffusion Probabilistic Models): 기본 확산 모델
- U-Net: 노이즈 예측 네트워크, Skip Connection
- Score Matching: 데이터 분포의 기울기(Score) 학습
- Stable Diffusion: Latent Space에서 확산, 효율적, Text-to-Image
- CLIP: 텍스트-이미지 임베딩, 프롬프트 조건부 생성
- 장점: 고품질, 안정적 학습, 단점: 느린 생성 속도
- 활용: DALL-E 2, Midjourney, Stable Diffusion, 이미지/오디오/비디오 생성

## 최신 트렌드
- Latent Diffusion
- Video Diffusion