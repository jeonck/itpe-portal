---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: basic
id: osi-7layer-001
importance: 5
keywords:
- 물리
- 데이터링크
- 네트워크
- 전송
- 세션
- 표현
- 응용
relatedTopics:
- tcpip-001
- routing-001
- network-protocol-001
subcategory: 네트워크
subjectCategories:
- NW
title: OSI 7 Layer
---

# 정의
네트워크 통신을 7개의 계층으로 구분하여 표준화한 참조 모델.

## 특징
- 계층별 독립성과 모듈화: 각 계층은 독립적으로 동작하며 변경이 다른 계층에 영향 없음
- 표준화된 인터페이스: 계층 간 명확한 인터페이스 정의
- 계층 간 명확한 역할 분담: 각 계층은 특정 기능만 수행
- 문제 해결 및 디버깅 용이: 계층별로 문제 원인 추적 가능
- TCP/IP 모델과 비교: OSI 7계층 vs TCP/IP 4계층 (응용/전송/인터넷/네트워크 인터페이스)

## 기술요소
OSI 7계층은 다음과 같이 구성됩니다:

1. 물리 계층 (Physical Layer)
   전기 신호, 케이블, 허브 등 물리적 전송 매체를 담당합니다.
   - 비트 스트림 전송, 신호 변환
   - 장비: 리피터, 허브

2. 데이터링크 계층 (Data Link Layer)
   동일 네트워크 내 노드 간 데이터 전송과 오류 검출을 담당합니다.
   - MAC 주소 기반 통신, 프레임 단위
   - 프로토콜: Ethernet, PPP
   - 장비: 스위치, 브리지

3. 네트워크 계층 (Network Layer)
   서로 다른 네트워크 간 패킷 라우팅을 담당합니다.
   - IP 주소 기반 통신, 패킷 단위
   - 프로토콜: IP, ICMP, OSPF, BGP
   - 장비: 라우터, L3 스위치

4. 전송 계층 (Transport Layer)
   종단 간 신뢰성 있는 데이터 전송을 담당합니다.
   - 포트 번호 기반 통신, 세그먼트 단위
   - 프로토콜: TCP, UDP
   - 기능: 흐름 제어, 혼잡 제어, 오류 복구

5. 세션 계층 (Session Layer)
   응용 프로그램 간 세션 수립, 유지, 종료를 담당합니다.
   - 세션 관리, 동기화, 체크포인트
   - 프로토콜: NetBIOS, RPC

6. 표현 계층 (Presentation Layer)
   데이터 형식 변환, 암호화, 압축을 담당합니다.
   - 인코딩, 암호화, 압축
   - 형식: JPEG, MPEG, SSL/TLS

7. 응용 계층 (Application Layer)
   사용자에게 네트워크 서비스를 제공합니다.
   - 프로토콜: HTTP, FTP, SMTP, DNS
   - 사용자 인터페이스, 애플리케이션 서비스