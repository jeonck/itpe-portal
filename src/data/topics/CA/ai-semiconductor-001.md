---
category: digital-service
certifications:
- computer-systems
difficulty: advanced
id: ai-semiconductor-001
importance: 5
keywords:
- AI 반도체
- NPU
- TPU
- FPGA
- ASIC
- AI 가속기
relatedTopics:
- gpu-architecture-001
- ai-deep-learning-001
subcategory: AI 가속기
subjectCategories:
- CA
- DS
title: AI 반도체 (NPU, TPU, FPGA, ASIC)
trends:
- 온디바이스 AI 칩
- 저전력 AI 반도체
- 시스템 반도체 경쟁 심화
---

# 정의
AI 반도체는 인공지능(AI) 연산에 특화되어 고성능, 저전력, 병렬 처리를 효율적으로 수행하도록 설계된 반도체입니다. CPU나 GPU와 같은 범용 프로세서의 한계를 극복하고 AI 모델의 학습 및 추론 속도를 가속화하여 AI 기술의 발전과 상용화를 이끄는 핵심 하드웨어 기술입니다. NPU, TPU, FPGA, ASIC 등이 대표적인 AI 반도체 유형입니다.

## 동작원리
AI 반도체는 다음과 같은 방식으로 AI 연산을 가속화합니다:

행렬 연산 가속 (Matrix Multiplication Acceleration)
- AI 모델의 핵심 연산인 행렬 곱셈을 전용 하드웨어로 처리
- Systolic Array: 2D 배열 형태의 PE(Processing Element)로 구성
- 각 PE가 곱셈-덧셈(MAC, Multiply-Accumulate) 연산 수행
- 데이터가 배열을 통해 흐르며 병렬 처리

TPU의 Systolic Array 동작
1) 가중치(Weight)를 각 PE에 미리 로드
2) 입력 데이터가 위에서 아래로 흐름
3) 부분 합(Partial Sum)이 왼쪽에서 오른쪽으로 전파
4) 최종 결과가 오른쪽 끝에서 출력

데이터 재사용 (Data Reuse)
- 온칩 메모리(SRAM)에 데이터 캐싱
- 외부 메모리 접근 최소화 (전력 소비 감소)
- Weight Stationary, Output Stationary 등 최적화 기법

저정밀도 연산 (Low-Precision Computing)
- FP32 대신 INT8, FP16, BF16 사용
- 정밀도는 낮지만 추론 성능은 유지
- 하드웨어 비용 및 전력 소비 대폭 감소

## 특징
- 목표: AI 모델 학습(Training) 및 추론(Inference)의 효율성 극대화 (속도, 전력 효율).
- NPU (Neural Processing Unit):
    - 특징: 인간 뇌의 신경망 구조를 모방하여 대규모 병렬 연산에 최적화된 프로세서. 모바일 기기 등 엣지 디바이스에 내장되어 온디바이스 AI 구현에 활용.
    - 예시: 스마트폰 AP에 내장된 NPU, 삼성 NPU, 퀄컴 AI 엔진.
- TPU (Tensor Processing Unit):
    - 특징: 구글(Google)이 자사의 텐서플로우(TensorFlow) 등 딥러닝 워크로드 가속화를 위해 개발한 전용 AI 가속기. 행렬 연산에 특화된 구조.
    - 예시: Google Cloud TPU, Google 데이터센터.
- FPGA (Field-Programmable Gate Array):
    - 특징: 프로그래머가 직접 하드웨어 로직을 재구성(프로그래밍)할 수 있는 반도체. 특정 AI 모델이나 알고리즘에 맞춰 하드웨어 구조를 최적화할 수 있어 유연성이 높음.
    - 장점: 개발 비용이 ASIC보다 저렴하고, 변경에 유연.
    - 단점: ASIC보다 성능 및 전력 효율이 낮고, 개발 난이도가 높음.
- ASIC (Application-Specific Integrated Circuit):
    - 특징: 특정 AI 애플리케이션 또는 알고리즘에 최적화하여 설계 및 제작된 주문형 반도체.
    - 장점: 특정 목적에 대해 최고의 성능과 전력 효율 제공.
    - 단점: 개발 비용과 시간이 매우 많이 들고, 설계 변경이 불가능하여 유연성이 낮음.
- GPU (Graphics Processing Unit):
    - 범용 AI 반도체로 여전히 딥러닝 학습 및 추론에 널리 사용. 대규모 병렬 연산에 강점.
- 주요 연산: 행렬 곱셈, 컨볼루션 연산 등 AI 모델의 핵심 연산 가속화.
- 추진 방향: 경량화, 저전력화, 온디바이스 AI 구현, 고도화된 AI 모델 지원.