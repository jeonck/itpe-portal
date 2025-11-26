---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: http-quic-001
importance: 5
keywords:
- HTTP/2
- HTTP/3
- QUIC
- Multiplexing
- Server Push
- UDP
relatedTopics:
- tcpip-001
- tcp-congestion-001
subcategory: 네트워크
subjectCategories:
- NW
tags:
- '2025'
title: HTTP/2 & HTTP/3 (QUIC)
trends:
- HTTP/3 채택 확산
- 0-RTT Connection
---

# 정의
HTTP/1. 1의 성능 한계를 극복하기 위해 멀티플렉싱을 제공하는 HTTP/2와, UDP 기반 QUIC 프로토콜을 사용하는 HTTP/3 기술.


## 동작원리
HTTP/2와 HTTP/3는 다음과 같은 메커니즘으로 성능을 향상시킵니다:

1. HTTP/2 동작 (TCP 기반)

바이너리 프레이밍 (Binary Framing)
- HTTP/1.1의 텍스트 기반 프로토콜을 바이너리로 변환
- 프레임 단위로 데이터 전송 (HEADERS, DATA 프레임 등)

멀티플렉싱 (Multiplexing)
1) 하나의 TCP 연결에서 여러 스트림(Stream) 생성
2) 각 스트림은 독립적인 요청/응답 처리
3) 스트림 ID로 구분하여 동시 전송
4) 우선순위 설정으로 중요한 리소스 먼저 전송

헤더 압축 (HPACK)
- 중복되는 헤더를 압축하여 전송량 감소
- 정적 테이블과 동적 테이블 사용

Server Push
1) 서버가 클라이언트 요청 예측
2) HTML 요청 시 CSS, JS 파일을 미리 푸시
3) RTT(Round Trip Time) 감소

HTTP/2 문제점:
- TCP Head-of-Line Blocking: 패킷 손실 시 모든 스트림 대기

2. HTTP/3 (QUIC) 동작 (UDP 기반)

QUIC 프로토콜 특징
- UDP 기반이지만 TCP처럼 신뢰성 제공
- 스트림 단위 재전송으로 HOL Blocking 해결

연결 수립 (0-RTT/1-RTT)
1) 첫 연결: 1-RTT (TLS 1.3 통합 핸드셰이크)
   - 클라이언트 → 서버: Client Hello + QUIC 파라미터
   - 서버 → 클라이언트: Server Hello + 인증서
   - 즉시 데이터 전송 가능

2) 재연결: 0-RTT (세션 재개)
   - 이전 세션 정보 활용
   - 핸드셰이크 없이 즉시 데이터 전송

스트림 독립성
- 각 스트림이 독립적으로 재전송
- 스트림 1의 패킷 손실이 스트림 2에 영향 없음

Connection Migration
- IP 주소/포트 변경 시에도 연결 유지
- 모바일 네트워크 전환 시 유용 (WiFi ↔ LTE)

암호화
- 기본적으로 TLS 1.3 암호화 적용
- 헤더 일부도 암호화

3. HTTP/1.1 → HTTP/2 → HTTP/3 비교

HTTP/1.1:
- 텍스트 기반, 한 연결에 하나의 요청/응답
- 여러 연결 필요 (보통 6개)

HTTP/2:
- 바이너리, 멀티플렉싱, HPACK 압축
- TCP HOL Blocking 문제

HTTP/3:
- UDP 기반 QUIC, HOL Blocking 해결
- 0-RTT 연결, Connection Migration

## 특징
- HTTP/2: 바이너리 프로토콜, 멀티플렉싱, 헤더 압축(HPACK), Server Push, TCP 기반
- Multiplexing: 하나의 TCP 연결로 여러 요청/응답 동시 처리, 스트림 ID로 구분
- Server Push: 서버가 클라이언트 요청 예측하여 리소스 미리 전송, RTT 감소
- HTTP/3: QUIC 프로토콜 사용, UDP 기반이지만 TCP처럼 신뢰성 제공
- QUIC 장점: Head-of-Line Blocking 완전 해결, 빠른 핸드셰이크(0-RTT/1-RTT), Connection Migration
- HTTP/2 문제: TCP Head-of-Line Blocking (패킷 손실 시 전체 스트림 지연)
- HTTP/3 채택: Google, Facebook, Cloudflare, 전체 웹의 약 25% (2025년)
- 사용 사례: 대규모 웹 서비스, 모바일 앱, 실시간 스트리밍

## 최신 트렌드
- HTTP/3 채택 확산
- 0-RTT Connection