---
id: ai-security-001
title: AI 보안 (Adversarial Attack, Poisoning)
category: digital-service
subcategory: AI 보안
subjectCategories:
  - IS
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - AI 보안
  - 적대적 공격
  - 데이터 오염
  - 모델 탈취
  - 프라이버시 침해
importance: 5
relatedTopics:
  - ai-deep-learning-001
  - encryption-001
trends:
  - AI 모델 방어 기술
  - Federated Learning 보안
  - XAI와 보안
---

# 정의
AI 보안은 인공지능 시스템 자체를 대상으로 하는 다양한 공격(적대적 공격, 데이터 오염 등)으로부터 AI 모델과 데이터를 보호하고, AI 시스템의 안전성과 신뢰성을 확보하는 분야입니다. AI 기술의 확산과 함께 그 중요성이 증대되고 있으며, '방어'를 넘어 'AI 악용 방지'가 핵심 과제로 부상하고 있습니다.

## 특징
- **적대적 공격 (Adversarial Attack)**: AI 모델이 잘못된 예측을 하도록 유도하기 위해 미세하게 조작된 입력 데이터를 생성하는 기법. 육안으로는 구별하기 어렵지만, AI 모델을 오작동시킵니다.
  - **회피 공격 (Evasion Attack)**: 모델의 예측을 회피하도록 입력 데이터를 조작. (예: 스팸 필터를 우회하는 스팸 메일)
  - **표적 공격 (Targeted Attack)**: 특정 클래스로 오분류되도록 입력 데이터를 조작. (예: 정지 표지판을 속도 제한 표지판으로 오인식)
- **데이터 오염 공격 (Data Poisoning Attack)**: AI 모델 학습 데이터에 악의적인 데이터를 주입하여 모델의 정확도를 저하시키거나 특정 의도를 가진 예측을 하도록 조작하는 기법.
- **모델 탈취 공격 (Model Extraction/Stealing)**: AI 모델의 파라미터나 구조를 복제하거나 재구성하여 유사한 성능을 내는 모델을 만들어내는 공격.
- **프라이버시 침해 공격**: AI 모델이 학습 데이터를 유출하거나 재구성하여 개인 정보를 알아내는 공격. (예: 멤버십 추론 공격)
- **방어 기술**: 적대적 학습(Adversarial Training), 입력 정화(Input Sanitization), 모델 앙상블(Model Ensembling), Secure Multi-Party Computation (SMC), Federated Learning 등.

