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

## 동작원리
TCP 혼잡 제어는 다음과 같은 알고리즘으로 네트워크 혼잡을 방지합니다:

**1. Slow Start (느린 시작)**
연결 초기에 전송 속도를 점진적으로 증가시킵니다:

1) cwnd (congestion window) = 1 MSS (Maximum Segment Size)
2) ACK 받을 때마다 cwnd를 2배로 증가 (지수 증가)
   - 1 → 2 → 4 → 8 → 16 → 32...
3) ssthresh (slow start threshold)에 도달하면 Congestion Avoidance로 전환
4) 패킷 손실 발생 시 ssthresh = cwnd / 2로 설정

**2. Congestion Avoidance (혼잡 회피)**
네트워크 용량에 근접하면 조심스럽게 증가합니다:

AIMD (Additive Increase Multiplicative Decrease)
- Additive Increase: RTT마다 cwnd += 1 MSS (선형 증가)
- Multiplicative Decrease: 패킷 손실 시 cwnd = cwnd / 2 (절반 감소)

**3. Fast Retransmit (빠른 재전송)**
타임아웃 전에 손실된 패킷을 재전송합니다:

1) 수신자가 순서가 틀린 패킷 받으면 마지막 순서 ACK 중복 전송
2) 송신자가 3개의 중복 ACK (3 duplicate ACK) 수신
3) 타임아웃 기다리지 않고 즉시 재전송
4) 빠른 복구로 성능 저하 최소화

**4. Fast Recovery (빠른 복구)**
패킷 손실 후 빠르게 복구합니다:

1) Fast Retransmit 발생 시 진입
2) ssthresh = cwnd / 2
3) cwnd = ssthresh + 3 MSS (중복 ACK 3개)
4) 새로운 ACK 받으면 Congestion Avoidance로 전환
5) Slow Start를 건너뛰어 빠른 복구

**5. CUBIC (Linux 기본 알고리즘)**
고속 네트워크에 최적화된 알고리즘입니다:

3차 함수 기반 윈도우 증가
- W(t) = C × (t - K)³ + W_max
- W_max: 마지막 손실 시점의 cwnd
- 손실 지점에 빠르게 도달 후 조심스럽게 탐색

특징:
- RTT와 무관하게 동작 (공정성 향상)
- 빠른 대역폭 활용
- 고속 장거리 네트워크에 효과적

**6. BBR (Bottleneck Bandwidth and RTT)**
Google이 개발한 혼잡 제어 알고리즘입니다:

동작 원리:
1) Bottleneck Bandwidth 측정: 최대 전송 속도 파악
2) RTT_min 측정: 최소 왕복 시간 측정
3) 최적 전송률 = BtlBw × RTT_min
4) 패킷 손실이 아닌 대역폭과 RTT 기반 제어

4단계 사이클:
- STARTUP: 대역폭 빠르게 탐색 (2배씩 증가)
- DRAIN: 큐 비우기
- PROBE_BW: 대역폭 주기적 탐색
- PROBE_RTT: RTT 측정

특징:
- 패킷 손실 없이도 혼잡 감지
- 낮은 지연시간
- 높은 처리량

## 특징
- 목적: 네트워크 혼잡 방지, 공정한 대역폭 분배, 패킷 손실 최소화, 처리량 최적화
- 혼잡 윈도우 (CWND): 한 번에 전송할 수 있는 세그먼트 수, 동적으로 조절
- Slow Start: 지수 증가 (1 → 2 → 4 → 8...), ssthresh까지
- Congestion Avoidance: 선형 증가 (AIMD), RTT마다 +1 MSS
- Fast Retransmit: 3 duplicate ACK 수신 시 타임아웃 전에 즉시 재전송
- Fast Recovery: 혼잡 발생 시 cwnd 절반으로 감소, Slow Start 건너뛰기
- CUBIC: Linux 기본 알고리즘, 3차 함수 기반, RTT 독립적, 고속 네트워크 최적화
- BBR: Google 개발, Bottleneck Bandwidth와 RTT 기반, 패킷 손실 아닌 대역폭 측정

## 최신 트렌드
- BBR v2
- TCP Prague
