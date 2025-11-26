---
category: digital-service
certifications:
- computer-systems
difficulty: advanced
id: autonomous-driving-001
importance: 4
keywords:
- 자율주행
- Level 0-5
- Sensor Fusion
- LIDAR
- V2X
relatedTopics:
- ai-deep-learning-001
- edge-computing-001
- embedded-rtos-001
subcategory: New Tech
subjectCategories:
- DS
title: 자율주행
trends:
- End-to-End Learning
- HD Map-Free
- Vision Transformer
- Software-Defined Vehicle
---

# 정의
센서, AI, 제어 시스템을 통합하여 인간 개입 없이 차량이 스스로 주행하는 기술로, SAE 레벨 0~5로 구분됩니다 기술.

## 특징
- SAE 자율주행 레벨: Level 0(자동화 없음), Level 1(운전자 보조, 크루즈 컨트롤), Level 2(부분 자동화, 차선 유지+속도 조절), Level 3(조건부 자동화, 특정 상황에서 자율주행), Level 4(고도 자동화, 특정 구역 완전 자율), Level 5(완전 자동화, 모든 상황)
- 센서 융합(Sensor Fusion): 카메라(이미지), LIDAR(3D 거리), RADAR(속도, 악천후), 초음파(근거리), GPS/IMU(위치/자세). 다중 센서 데이터 통합으로 정확도 향상
- 핵심 기술: 인지(Perception, 객체 탐지/추적, CNN), 판단(Planning, 경로 계획, 강화학습), 제어(Control, 조향/가속/제동, PID)
- V2X(Vehicle-to-Everything): V2V(차량 간), V2I(인프라), V2P(보행자), V2N(네트워크) 통신으로 협력 주행. 5G, DSRC
- 과제: 엣지 케이스 처리, 법적 책임, 윤리적 판단(트롤리 딜레마), 보안(해킹), 고비용

## 기술요소
자율주행 기술은 차량이 주변 환경을 인지하고, 주행 상황을 판단하며, 최종적으로 차량을 제어하는 세 가지 핵심 기능의 기술 요소들로 구성됩니다.

-   **인지 (Perception) 기술**: 차량 주변 환경의 정보를 수집하고 이해하는 기술.
    -   **센서 (Sensors)**:
        -   **카메라 (Camera)**: 도로 표지판, 차선, 차량, 보행자 등 시각 정보 획득. 객체 인식, 차선 유지 보조 등에 활용. (Convolutional Neural Network, CNN 기반 영상 처리)
        -   **LIDAR (Light Detection And Ranging)**: 레이저를 발사하여 주변 객체까지의 거리와 형태를 3D 포인트 클라우드 데이터로 정밀하게 측정. 야간, 악천후에도 강점.
        -   **RADAR (Radio Detection And Ranging)**: 전파를 발사하여 거리, 속도, 각도를 측정. 악천후(비, 안개)에도 강하며, 장거리 객체 감지에 유리.
        -   **초음파 센서 (Ultrasonic Sensor)**: 근거리 객체 감지, 주차 보조 시스템 등.
        -   **GPS/IMU (Global Positioning System / Inertial Measurement Unit)**: 차량의 정밀한 위치, 속도, 가속도, 자세 정보 획득.
    -   **센서 융합 (Sensor Fusion)**: 여러 종류의 센서로부터 얻은 데이터를 통합하고 분석하여 환경 인지의 정확도와 신뢰도를 향상시킵니다. (칼만 필터, 딥러닝 기반 융합)

-   **판단 (Decision Making / Planning) 기술**: 인지된 정보를 바탕으로 안전하고 효율적인 주행 전략 및 경로를 수립하는 기술.
    -   **경로 계획 (Path Planning)**: 현재 위치에서 목표 지점까지의 최적 경로를 계산. (A* 알고리즘, RRT)
    -   **행동 예측 (Behavior Prediction)**: 주변 차량, 보행자의 미래 행동을 예측.
    -   **의사 결정 (Decision Making)**: 다양한 주행 상황(차선 변경, 좌회전, 우회전, 정지 등)에서 가장 적절한 행동을 결정. (강화 학습, 규칙 기반 시스템)
    -   **HD 맵 (High Definition Map)**: 차선 정보, 도로 경계, 표지판 등 고정밀 지리 정보를 제공하여 인지 및 판단의 정확도를 높입니다.

-   **제어 (Control) 기술**: 판단 기술에서 결정된 주행 전략에 따라 차량의 조향, 가속, 제동 시스템을 정밀하게 조작하는 기술.
    -   **조향 제어 (Steering Control)**: 차량의 방향을 조절. (PID 제어, LQR 제어)
    -   **속도 제어 (Speed Control)**: 가속 및 감속을 통해 목표 속도 유지. (Adaptive Cruise Control, ACC)
    -   **제동 제어 (Braking Control)**: 정밀한 제동을 통해 안전 거리 유지 및 정지.

-   **통신 (Communication) 기술**:
    -   **V2X (Vehicle-to-Everything)**: 차량 간(V2V), 차량-인프라(V2I), 차량-보행자(V2P), 차량-네트워크(V2N) 통신을 통해 주변 환경 정보를 실시간으로 공유하고 협력 주행을 가능하게 합니다. (5G, DSRC, C-V2X)

-   **고성능 컴퓨팅 플랫폼**:
    -   자율주행의 복잡한 연산(AI 추론, 센서 데이터 처리)을 실시간으로 수행하기 위한 고성능 프로세서(GPU, FPGA, ASIC) 및 온디바이스 AI 칩.

이러한 기술 요소들이 유기적으로 결합되어 자율주행 차량은 주변 환경을 스스로 인지하고, 안전하게 판단하며, 정확하게 제어하여 운전자의 개입 없이 주행할 수 있게 됩니다.