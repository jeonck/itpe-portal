---
category: digital-service
certifications:
- information-management
difficulty: intermediate
id: xr-arvrmr-001
importance: 4
keywords:
- AR
- VR
- MR
- XR
- Spatial Computing
- Headset
relatedTopics:
- metaverse-001
- digital-twin-001
subcategory: New Tech
subjectCategories:
- DS
tags:
- '2025'
title: AR/VR/MR/XR
trends:
- Apple Vision Pro
- WebXR
---

# 정의
현실과 가상을 융합하는 확장현실 기술로, AR(증강현실), VR(가상현실), MR(혼합현실)을 포괄 기술.

## 특징
- AR (Augmented Reality): 현실에 가상 오버레이, 스마트폰, 스마트글래스 (포켓몬GO, AR 네비게이션)
- VR (Virtual Reality): 완전 가상 환경, HMD (헤드셋), Meta Quest, PSVR2
- MR (Mixed Reality): 현실+가상 상호작용, HoloLens, Magic Leap
- XR (Extended Reality): AR/VR/MR 통칭
- Spatial Computing: 공간 인식, 3D 인터페이스, Apple Vision Pro
- 핵심 기술: SLAM (위치 추적), Hand Tracking, Eye Tracking, Haptic Feedback
- 활용: 게임, 교육/훈련, 원격 협업, 의료(수술 시뮬레이션), 부동산
- WebXR: 웹 브라우저 기반 XR, A-Frame, Three.js

## 기술요소
AR/VR/MR을 포함하는 확장현실(XR) 기술은 사용자에게 몰입감 있는 경험을 제공하기 위해 다음과 같은 핵심 기술 요소들을 활용합니다.

-   **디스플레이 기술**:
    -   **HMD (Head-Mounted Display)**: 사용자 눈앞에 가상 또는 증강 현실 이미지를 투사하는 장치.
        -   **VR HMD**: 완전히 시야를 가려 가상 환경에 몰입시키는 헤드셋 (예: Meta Quest, HTC Vive).
        -   **AR/MR 글래스**: 투명 또는 반투명 렌즈를 통해 현실 세계 위에 가상 정보를 겹쳐 보여주는 장치 (예: Microsoft HoloLens, Magic Leap, Apple Vision Pro).
    -   **프로젝션 기술**: 소형 프로젝터를 이용하여 사용자 시야에 직접 이미지를 투사하는 방식.

-   **트래킹 기술 (Tracking Technology)**: 사용자 또는 객체의 위치와 방향을 감지하여 가상/현실 공간을 동기화합니다.
    -   **Inside-Out Tracking**: 외부 센서 없이 HMD 내장 카메라와 센서를 이용하여 사용자 위치 및 움직임 추적 (예: Meta Quest).
    -   **Outside-In Tracking**: 외부 센서(카메라)가 사용자의 위치와 움직임을 추적 (예: HTC Vive Base Stations).
    -   **SLAM (Simultaneous Localization And Mapping)**: 로봇이 이동하면서 주변 환경 지도를 만들고, 동시에 지도 상에서 자신의 현재 위치를 추정하는 기술. (ARKit, ARCore의 핵심 기술).
    -   **Eye Tracking (시선 추적)**: 사용자의 시선 방향을 감지하여 인터페이스 조작, 렌더링 최적화(Foveated Rendering) 등에 활용.
    -   **Hand Tracking (손 추적)**: 카메라나 센서를 통해 손의 움직임과 제스처를 인식하여 가상 객체와 상호작용.

-   **렌더링 기술**: 가상 콘텐츠를 실시간으로 생성하고 디스플레이에 출력합니다.
    -   **3D 엔진**: Unity, Unreal Engine과 같은 게임 엔진을 사용하여 고품질 3D 그래픽을 렌더링.
    -   **Cloud Rendering**: 고사양 그래픽 처리를 클라우드 서버에서 수행하고 결과를 스트리밍하여, 디바이스의 하드웨어 제약을 완화.
    -   **Foveated Rendering**: 시선 추적 기술과 연동하여 사용자가 보는 중심 시야는 고해상도로, 주변부는 저해상도로 렌더링하여 GPU 부하를 줄임.

-   **상호작용 기술**: 사용자가 가상/증강 현실 환경과 자연스럽게 소통할 수 있도록 합니다.
    -   **Haptic Feedback (햅틱 피드백)**: 진동, 압력 등을 통해 촉각 경험을 제공하여 몰입도를 높입니다.
    -   **음성 인식/합성**: 음성 명령을 통해 가상 환경을 제어하거나, 가상 캐릭터와 대화.
    -   **제스처 인식**: 손, 팔, 몸의 움직임을 인식하여 가상 객체를 조작.

-   **공간 컴퓨팅 (Spatial Computing)**:
    -   **정의**: 물리적 공간과 가상 공간의 데이터를 융합하여 상호작용하는 기술. 현실 세계의 객체, 공간, 사용자 행동을 디지털 데이터로 인식하고, 이를 기반으로 가상 콘텐츠를 배치하고 조작합니다.
    -   **활용**: Apple Vision Pro, Microsoft HoloLens와 같은 MR 기기에서 현실 공간에 가상 객체를 배치하고 상호작용.

-   **네트워크 및 데이터 전송**:
    -   **5G/6G**: XR 환경의 대용량 데이터(고해상도 영상, 3D 모델)를 저지연으로 전송하기 위한 필수적인 통신 인프라.
    -   **WebXR**: 웹 브라우저 기반으로 AR/VR 경험을 제공하는 표준 API.

이러한 기술 요소들은 XR 기기와 콘텐츠의 발전과 함께 더욱 현실적이고 몰입감 있는 경험을 제공하며, 메타버스 구현의 핵심 기반이 됩니다.