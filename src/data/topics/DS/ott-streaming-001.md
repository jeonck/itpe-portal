---
category: digital-service
certifications:
- information-management
difficulty: intermediate
id: ott-streaming-001
importance: 4
keywords:
- OTT
- Streaming
- CDN
- ABR
- Video Codec
- Live Streaming
relatedTopics:
- cdn-001
- cloud-infra-001
subcategory: Media
subjectCategories:
- DS
tags:
- '2025'
title: OTT & 스트리밍 기술
trends:
- FAST (Free Ad-Supported TV)
- Interactive Content
---

# 정의
인터넷을 통해 영상 콘텐츠를 실시간으로 전송하는 OTT(Over-The-Top) 서비스와 스트리밍 기술.


## 특징
- OTT: 인터넷 기반 동영상 서비스, Netflix, YouTube, Disney+, Tving
- 스트리밍 프로토콜: HLS (HTTP Live Streaming), DASH, RTMP (실시간)
- ABR (Adaptive Bitrate): 네트워크 상황에 따라 화질 자동 조정
- Video Codec: H.264 (AVC), H.265 (HEVC), AV1 (오픈소스, 고효율)
- CDN: 전 세계 엣지 서버에 콘텐츠 분산, 지연시간 감소
- Live Streaming: 실시간 방송, 낮은 지연(Low Latency), WebRTC
- DRM (Digital Rights Management): 콘텐츠 보호, Widevine, FairPlay
- AI 활용: 추천 알고리즘, 콘텐츠 제작, 자막 생성

## 기술요소
OTT(Over-The-Top) 서비스와 스트리밍 기술은 인터넷을 통해 고품질의 영상 콘텐츠를 효율적으로 전송하기 위해 다양한 기술 요소들을 활용합니다.

-   **비디오 코덱 (Video Codec)**:
    -   **정의**: 영상 데이터를 압축하고 복원하는 기술. 압축 효율이 높을수록 동일한 화질에서 더 작은 파일 크기, 또는 동일한 파일 크기에서 더 높은 화질을 제공합니다.
    -   **주요 코덱**:
        -   **H.264 (AVC, Advanced Video Coding)**: 현재 가장 널리 사용되는 비디오 코덱 중 하나.
        -   **H.265 (HEVC, High Efficiency Video Coding)**: H.264보다 약 2배의 압축 효율을 제공하며, 4K, 8K 등 고해상도 영상에 적합.
        -   **AV1 (AOMedia Video 1)**: 구글, 넷플릭스 등 AOMedia에서 개발한 오픈소스, 로열티 프리 코덱. H.265보다 압축 효율이 뛰어나며, 고화질 스트리밍에 활용.

-   **스트리밍 프로토콜**:
    -   **정의**: 영상 데이터를 효율적이고 안정적으로 사용자에게 전달하기 위한 통신 규약.
    -   **주요 프로토콜**:
        -   **HLS (HTTP Live Streaming)**: Apple에서 개발한 HTTP 기반 스트리밍 프로토콜. 작은 조각(Chunk)의 영상 파일을 HTTP 서버에서 제공. 대부분의 웹 브라우저 및 모바일 기기에서 지원.
        -   **MPEG-DASH (Dynamic Adaptive Streaming over HTTP)**: ISO 표준으로, HLS와 유사하게 HTTP 기반의 적응형 스트리밍을 제공.
        -   **RTMP (Real-Time Messaging Protocol)**: Adobe에서 개발한 프로토콜로, 과거에는 라이브 스트리밍에 널리 사용되었으나, 현재는 HTML5 지원 문제로 점차 HTTP 기반 프로토콜로 대체되는 추세.
        -   **WebRTC (Web Real-Time Communication)**: 웹 브라우저 간에 플러그인 없이 실시간 음성, 영상 통신을 가능하게 하는 기술. 저지연(Low Latency) 라이브 스트리밍에 활용.

-   **ABR (Adaptive Bitrate, 적응형 비트레이트) 스트리밍**:
    -   **원리**: 사용자의 네트워크 대역폭 및 디바이스 성능에 따라 영상의 해상도와 비트레이트를 자동으로 조절하여 끊김 없는 시청 경험을 제공합니다.
    -   **기술**: 여러 비트레이트와 해상도로 인코딩된 영상 세그먼트(Chunk)를 미리 준비하고, 플레이어가 네트워크 상황에 맞춰 최적의 세그먼트를 선택하여 재생.

-   **CDN (Contents Delivery Network, 콘텐츠 전송 네트워크)**:
    -   **원리**: 영상 콘텐츠를 전 세계에 분산된 엣지 서버(PoP, Point of Presence)에 캐싱하여 사용자에게 물리적으로 가장 가까운 서버에서 콘텐츠를 전송.
    -   **효과**: 지연 시간 감소, 트래픽 분산, 원본 서버의 부하 경감.

-   **DRM (Digital Rights Management)**:
    -   **정의**: 디지털 콘텐츠의 불법 복제 및 유통을 방지하고 저작권을 보호하는 기술.
    -   **주요 DRM**: Google Widevine, Apple FairPlay, Microsoft PlayReady 등. 콘텐츠 암호화 및 라이선스 관리를 통해 콘텐츠 사용을 제어.

-   **인코딩 및 트랜스코딩**:
    -   **인코딩**: 원본 영상 파일을 특정 코덱을 사용하여 압축된 디지털 형식으로 변환.
    -   **트랜스코딩**: 인코딩된 영상을 다양한 해상도, 비트레이트, 코덱으로 재변환하여 여러 디바이스 및 네트워크 환경에 맞춰 제공.

이러한 기술 요소들이 통합되어 시청자에게 고품질의 영상 콘텐츠를 안정적이고 효율적으로 전달하는 OTT 서비스와 스트리밍 환경을 구축합니다.