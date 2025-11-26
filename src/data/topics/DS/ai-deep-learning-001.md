---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: ai-deep-learning-001
importance: 5
keywords:
- CNN
- RNN
- Transformer
- XAI
- 신경망
relatedTopics:
- llm-001
- data-structures-001
subcategory: AI/ML
subjectCategories:
- DS
title: AI/딥러닝
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

## 기술요소
AI 및 딥러닝은 다양한 인공 신경망 아키텍처를 기반으로 하며, 각 아키텍처는 특정 데이터 유형 및 문제 해결에 최적화되어 있습니다.

-   **CNN (Convolutional Neural Network, 합성곱 신경망)**:
    -   **특징**: 이미지 처리 분야에서 탁월한 성능을 보입니다. 인접한 픽셀 간의 공간적 상관관계를 학습하는 데 효과적입니다.
    -   **주요 계층**:
        -   **합성곱 계층 (Convolutional Layer)**: 필터(커널)를 사용하여 이미지의 특징(엣지, 텍스처 등)을 추출합니다. 파라미터 공유(Weight Sharing)를 통해 학습 파라미터 수를 줄입니다.
        -   **풀링 계층 (Pooling Layer)**: 추출된 특징 맵의 크기를 줄여(다운샘플링) 계산량을 감소시키고, 특징의 불변성(Translation Invariance)을 높입니다. (Max Pooling, Average Pooling)
        -   **완전 연결 계층 (Fully Connected Layer)**: 풀링 계층에서 추출된 고수준 특징을 기반으로 최종 분류나 회귀를 수행합니다.
    -   **활용**: 이미지 분류, 객체 탐지, 이미지 생성 등.

-   **RNN (Recurrent Neural Network, 순환 신경망)**:
    -   **특징**: 시퀀스 데이터(시계열, 자연어 등) 처리에 특화되어 있으며, 내부적으로 '기억'을 가지고 이전 단계의 정보를 다음 단계로 전달하는 순환 구조를 가집니다.
    -   **문제점**: 장기 의존성 문제(Long-Term Dependency Problem)와 기울기 소실/폭주(Vanishing/Exploding Gradient) 문제로 인해 긴 시퀀스의 정보를 학습하기 어렵습니다.
    -   **변형**:
        -   **LSTM (Long Short-Term Memory)**: 셀 상태(Cell State)와 게이트(Input, Forget, Output Gate)를 통해 장기 의존성 문제를 해결하고 효율적인 정보 흐름을 제어합니다.
        -   **GRU (Gated Recurrent Unit)**: LSTM의 간소화된 버전으로, 업데이트 게이트와 리셋 게이트를 사용하여 비슷한 효과를 얻으면서도 계산량이 적습니다.
    -   **활용**: 자연어 처리(번역, 텍스트 생성), 음성 인식, 시계열 예측 등.

-   **Transformer (트랜스포머)**:
    -   **특징**: RNN의 순환 구조를 제거하고 '어텐션 메커니즘(Attention Mechanism)'만을 사용하여 시퀀스 데이터의 장기 의존성 문제를 효과적으로 해결합니다. 병렬 처리가 가능하여 학습 속도가 빠릅니다.
    -   **주요 구성 요소**:
        -   **멀티 헤드 어텐션 (Multi-Head Attention)**: 입력 시퀀스 내의 각 단어가 다른 단어들과 얼마나 관련이 있는지를 학습하여 중요한 정보에 더 집중합니다. 여러 개의 어텐션 헤드를 병렬로 사용하여 다양한 관점에서 관계를 파악합니다.
        -   **위치 임베딩 (Positional Encoding)**: RNN과 달리 순환 구조가 없으므로, 단어의 순서 정보를 학습하기 위해 각 단어의 임베딩에 위치 정보를 추가합니다.
        -   **인코더-디코더 구조**: 인코더는 입력 시퀀스를 처리하고, 디코더는 인코더의 출력을 바탕으로 출력 시퀀스를 생성합니다.
    -   **활용**: 자연어 처리(BERT, GPT), 컴퓨터 비전(ViT), 멀티모달 학습 등.

-   **XAI (eXplainable AI, 설명 가능한 AI)**:
    -   **목표**: 딥러닝 모델의 복잡한 결정 과정을 인간이 이해할 수 있는 형태로 설명하는 기술.
    -   **기법**: LIME, SHAP, Grad-CAM 등. (자세한 내용은 XAI 토픽 참조)

이러한 딥러닝 아키텍처들은 AI 분야의 발전을 이끌며 다양한 실생활 문제 해결에 기여하고 있습니다.