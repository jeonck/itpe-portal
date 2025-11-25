---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: advanced
id: tcp-congestion-001
importance: 4
keywords:
- TCP
- Congestion Control
- Slow Start
- AIMD
- BBR
- CUBIC
relatedTopics:
- tcpip-001
- http-quic-001
subcategory: 네트워크
subjectCategories:
- NW
tags:
- '2025'
title: TCP Congestion Control (혼잡 제어)
trends:
- BBR v2
- TCP Prague
---

# 정의
네트워크 혼잡을 감지하고 전송 속도를 조절하여 패킷 손실을 최소화하고 처리량을 최적화하는 TCP 알고리즘입니다.

## 특징
- 목적: 네트워크 혼잡 방지, 공정한 대역폭 분배, 패킷 손실 최소화
- 혼잡 윈도우 (CWND): 한 번에 전송할 수 있는 세그먼트 수
- Slow Start: 지수 증가 (1 → 2 → 4 → 8...)
- Congestion Avoidance: 선형 증가 (AIMD - Additive Increase Multiplicative Decrease)
- Fast Retransmit: 3 duplicate ACK 수신 시 즉시 재전송
- Fast Recovery: 혼잡 발생 시 절반으로 감소
- CUBIC: Linux 기본 알고리즘, 3차 함수 기반
- BBR: Google 개발, Bottleneck Bandwidth and RTT 기반

## 최신 트렌드
- BBR v2
- TCP Prague

# 정의
네트워크 혼잡을 감지하고 전송 속도를 조절하여 패킷 손실을 최소화하고 처리량을 최적화하는 TCP 알고리즘입니다.

## 특징
- 목적: 네트워크 혼잡 방지, 공정한 대역폭 분배, 패킷 손실 최소화
- 혼잡 윈도우 (CWND): 한 번에 전송할 수 있는 세그먼트 수
- Slow Start: 지수 증가 (1 → 2 → 4 → 8...)
- Congestion Avoidance: 선형 증가 (AIMD - Additive Increase Multiplicative Decrease)
- Fast Retransmit: 3 duplicate ACK 수신 시 즉시 재전송
- Fast Recovery: 혼잡 발생 시 절반으로 감소
- CUBIC: Linux 기본 알고리즘, 3차 함수 기반
- BBR: Google 개발, Bottleneck Bandwidth and RTT 기반

## 최신 트렌드
- BBR v2
- TCP Prague