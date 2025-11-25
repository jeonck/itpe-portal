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
HTTP/1.1의 성능 한계를 극복하기 위해 멀티플렉싱을 제공하는 HTTP/2와, UDP 기반 QUIC 프로토콜을 사용하는 HTTP/3입니다.

## 특징
- HTTP/2: 바이너리 프로토콜, 멀티플렉싱, 헤더 압축(HPACK), Server Push
- Multiplexing: 하나의 연결로 여러 요청/응답 동시 처리
- Server Push: 클라이언트 요청 없이 리소스 전송
- HTTP/3: QUIC 프로토콜 사용 (UDP 기반)
- QUIC 장점: Head-of-Line Blocking 해결, 빠른 핸드셰이크 (0-RTT)
- HTTP/2 문제: TCP Head-of-Line Blocking (패킷 손실 시 전체 스트림 지연)
- HTTP/3 채택: Google, Facebook, Cloudflare

## 최신 트렌드
- HTTP/3 채택 확산
- 0-RTT Connection

# 정의
HTTP/1.1의 성능 한계를 극복하기 위해 멀티플렉싱을 제공하는 HTTP/2와, UDP 기반 QUIC 프로토콜을 사용하는 HTTP/3입니다.

## 특징
- HTTP/2: 바이너리 프로토콜, 멀티플렉싱, 헤더 압축(HPACK), Server Push
- Multiplexing: 하나의 연결로 여러 요청/응답 동시 처리
- Server Push: 클라이언트 요청 없이 리소스 전송
- HTTP/3: QUIC 프로토콜 사용 (UDP 기반)
- QUIC 장점: Head-of-Line Blocking 해결, 빠른 핸드셰이크 (0-RTT)
- HTTP/2 문제: TCP Head-of-Line Blocking (패킷 손실 시 전체 스트림 지연)
- HTTP/3 채택: Google, Facebook, Cloudflare

## 최신 트렌드
- HTTP/3 채택 확산
- 0-RTT Connection