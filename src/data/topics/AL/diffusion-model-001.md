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
노이즈를 점진적으로 제거하여 고품질 데이터를 생성하는 확률적 생성 모델 기술.

## 특징
- 확률적 생성 모델: 점진적 노이즈 제거 방식
- 고품질 생성: GAN 대비 안정적이고 다양한 결과물
- 조건부 생성: 텍스트, 이미지 등 다양한 조건 활용
- 활용 분야: 이미지/오디오/비디오 생성, DALL-E 2, Midjourney

## 동작원리
- Forward Process (확산 과정): 원본 데이터에 점진적으로 가우시안 노이즈 추가, q(xₜ|xₜ₋₁)로 표현
- Reverse Process (역확산 과정): 노이즈에서 데이터 복원, pθ(xₜ₋₁|xₜ)를 신경망으로 학습
- DDPM (Denoising Diffusion Probabilistic Models): 마르코프 체인 기반 확산 모델
- U-Net 아키텍처: 노이즈 예측 네트워크, Skip Connection으로 세부 정보 보존
- Score Matching: 데이터 분포의 기울기(Score) 학습으로 생성 품질 향상
- Latent Diffusion: Latent Space에서 확산 수행하여 계산 효율 개선
- CLIP 통합: 텍스트-이미지 임베딩으로 프롬프트 기반 조건부 생성

## 최신 트렌드
- Latent Diffusion
- Video Diffusion