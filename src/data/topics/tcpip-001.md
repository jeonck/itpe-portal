---
id: tcpip-001
title: TCP / IP
category: fundamental
subcategory: 네트워크
subjectCategories:
  - NW
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 3-way Handshake
  - 흐름제어
  - 혼잡제어
  - UDP
  - 신뢰성
importance: 5
relatedTopics:
  - osi-7layer-001
  - routing-001
  - http-001
---

# 정의
인터넷의 핵심 프로토콜로, 연결 지향적이고 신뢰성 있는 데이터 전송을 보장하는 TCP와 네트워크 계층의 IP로 구성됩니다.

## 특징
- 3-way Handshake: SYN → SYN-ACK → ACK (연결 수립)
- 4-way Handshake: FIN → ACK → FIN → ACK (연결 종료)
- 흐름 제어: 슬라이딩 윈도우, 수신 버퍼 관리
- 혼잡 제어: Slow Start, Congestion Avoidance, Fast Retransmit
- TCP vs UDP: 신뢰성/순서 보장 vs 빠른 속도/실시간

