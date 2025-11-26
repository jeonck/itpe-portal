---
category: digital-service
certifications:
- information-management
difficulty: intermediate
id: iot-network-001
importance: 4
keywords:
- IoT
- LoRa
- LoRaWAN
- NB-IoT
- Zigbee
- LPWAN
- 저전력
relatedTopics:
- 5g-001
- wireless-001
subcategory: 무선 통신
subjectCategories:
- NW
- DS
tags:
- '2025'
title: IoT 네트워크 (LoRa, NB-IoT, Zigbee)
trends:
- LoRaWAN 확산
- Matter 표준
---

# 정의
저전력, 광역 통신을 목표로 하는 IoT 전용 네트워크 기술로, LoRa, NB-IoT, Zigbee 등이 대표적 기술.

## 특징
- LPWAN (Low Power Wide Area Network): 저전력, 장거리, 저속, 대규모 IoT 디바이스
- LoRa: 비면허 대역 (ISM 915MHz/868MHz), 장거리 (도시 2~5km, 교외 15km), CSS 변조
- LoRaWAN: LoRa 기반 프로토콜, Class A/B/C, Star 토폴로지, 게이트웨이 방식
- NB-IoT: 3GPP 표준, 면허 대역 (LTE), 통신사 인프라 활용, PSM/eDRX
- Zigbee: IEEE 802.15.4, 2.4GHz, 짧은 거리 (10~100m), 메쉬 네트워크, AODV 라우팅
- 사용 사례: 스마트 미터, 자산 추적, 농업 센서, 스마트 시티, 환경 모니터링
- Matter: IoT 통합 표준 (Apple, Google, Amazon 등 주도), 상호 운용성
- 비교: WiFi (고속 고전력), Bluetooth (저전력 근거리), Cellular (광역 고비용)

## 동작원리
IoT 네트워크는 다음과 같은 방식으로 저전력 광역 통신을 제공합니다:

1. LoRa/LoRaWAN 동작

물리 계층 (LoRa)
- CSS (Chirp Spread Spectrum) 변조 방식 사용
- 주파수를 시간에 따라 변화시켜 신호 전송 (Chirp)
- 노이즈에 강하고 장거리 전송 가능 (최대 15km)

LoRaWAN 프로토콜 동작
1) End Device (센서) → Gateway: LoRa로 데이터 전송
2) Gateway → Network Server: 인터넷/LTE로 전송
3) Network Server → Application Server: 데이터 라우팅

Class 구분:
- Class A: 상향링크 후에만 수신 창 (가장 저전력)
- Class B: 주기적인 수신 창
- Class C: 항상 수신 대기 (높은 전력 소비)

2. NB-IoT (Narrowband IoT) 동작

LTE 기반 IoT 전용 표준
- LTE 주파수 대역의 200kHz 대역폭 사용
- 통신사 기지국 인프라 활용

동작 모드:
1) PSM (Power Saving Mode): 대부분 시간 동안 슬립
2) eDRX (Extended Discontinuous Reception): 긴 주기로 깨어남
3) 데이터 전송 시에만 활성화

장점:
- 건물 침투력 우수 (MCL 164dB)
- 10년 이상 배터리 수명

3. Zigbee 동작 (메쉬 네트워크)

IEEE 802.15.4 기반 저전력 무선 통신
- 2.4GHz 대역 사용
- 짧은 거리 (10~100m)

메쉬 네트워크 토폴로지:
1) 코디네이터 (Coordinator): 네트워크 생성 및 관리
2) 라우터 (Router): 데이터 중계
3) 엔드 디바이스 (End Device): 센서/액추에이터

AODV (Ad-hoc On-Demand Distance Vector) 라우팅
- 목적지까지 최적 경로를 동적으로 찾음
- 한 노드 장애 시 다른 경로로 우회

사용 사례: 스마트 홈 (Philips Hue, 삼성 SmartThings)

4. LPWAN 특징 비교

전력 소비:
- LoRa: 매우 낮음 (10년 배터리)
- NB-IoT: 낮음 (10년 배터리)
- Zigbee: 낮음 (2~3년 배터리)

거리:
- LoRa: 최대 15km (도시 2~5km)
- NB-IoT: 10km 이상 (기지국 커버리지)
- Zigbee: 10~100m (메쉬로 확장)

데이터 속도:
- LoRa: 0.3~50 kbps
- NB-IoT: 최대 250 kbps
- Zigbee: 250 kbps

## 최신 트렌드
- LoRaWAN 확산
- Matter 표준