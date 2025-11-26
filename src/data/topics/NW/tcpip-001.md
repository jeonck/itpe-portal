---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: tcpip-001
importance: 5
keywords:
- 3-way Handshake
- 흐름제어
- 혼잡제어
- UDP
- 신뢰성
relatedTopics:
- osi-7layer-001
- routing-001
- http-001
subcategory: 네트워크
subjectCategories:
- NW
title: TCP / IP
---

# 정의
인터넷의 핵심 프로토콜로, 연결 지향적이고 신뢰성 있는 데이터 전송을 보장하는 TCP와 네트워크 계층의 IP로 구성됩니다 기술.

## 동작원리
TCP/IP는 다음과 같은 메커니즘으로 동작합니다:

**1. 연결 수립 (3-way Handshake)**
신뢰성 있는 연결을 수립하는 과정입니다:

1) 클라이언트 → 서버: SYN (연결 요청)
   - 클라이언트가 초기 시퀀스 번호(ISN)와 함께 SYN 패킷 전송

2) 서버 → 클라이언트: SYN-ACK (연결 수락)
   - 서버가 자신의 ISN과 함께 SYN-ACK 응답

3) 클라이언트 → 서버: ACK (연결 확인)
   - 클라이언트가 ACK를 보내며 연결 완료

**2. 데이터 전송 및 신뢰성 보장**

순서 보장 (Sequence Number)
- 각 세그먼트에 순서 번호를 부여하여 순서대로 재조립합니다.
- 순서가 틀린 패킷은 버퍼에 저장 후 재정렬합니다.

확인 응답 (ACK)
- 수신자가 받은 데이터에 대해 ACK를 전송합니다.
- ACK를 받지 못하면 타임아웃 후 재전송합니다.

체크섬 (Checksum)
- 전송 중 데이터 손상 여부를 검증합니다.

**3. 흐름 제어 (Flow Control)**
수신자 버퍼 오버플로우를 방지합니다:

슬라이딩 윈도우 (Sliding Window)
- 수신자가 rwnd(receive window)를 송신자에게 알립니다.
- 송신자는 rwnd 크기만큼만 데이터를 전송합니다.
- ACK를 받으면 윈도우를 이동하여 추가 전송합니다.

**4. 혼잡 제어 (Congestion Control)**
네트워크 혼잡을 방지하여 전체 처리량을 최적화합니다:

Slow Start
- cwnd(congestion window)를 1부터 시작하여 지수적으로 증가합니다.
- 1 → 2 → 4 → 8 → 16...

Congestion Avoidance
- ssthresh(slow start threshold)에 도달하면 선형적으로 증가합니다.

Fast Retransmit
- 3개의 중복 ACK를 받으면 타임아웃 전에 즉시 재전송합니다.

Fast Recovery
- 패킷 손실 발생 시 cwnd를 절반으로 줄이고 선형 증가합니다.

**5. 연결 종료 (4-way Handshake)**
양방향 연결을 안전하게 종료합니다:

1) 클라이언트 → 서버: FIN (종료 요청)
2) 서버 → 클라이언트: ACK (종료 확인)
3) 서버 → 클라이언트: FIN (서버 종료)
4) 클라이언트 → 서버: ACK (최종 확인)

## 특징
- 연결 지향: 3-way Handshake로 연결 수립, 4-way Handshake로 종료
- 신뢰성 보장: 순서 번호, ACK, 재전송, 체크섬
- 흐름 제어: 슬라이딩 윈도우로 수신 버퍼 오버플로우 방지
- 혼잡 제어: Slow Start, Congestion Avoidance, Fast Retransmit/Recovery
- 전이중 통신: 양방향 동시 데이터 전송
- TCP vs UDP: TCP(신뢰성/순서 보장, 연결 지향, 느림) vs UDP(빠른 속도, 비연결, 실시간 스트리밍)
- IP 역할: 네트워크 계층에서 패킷 라우팅 및 주소 지정
- 포트 번호: 프로세스 식별 (0-65535)