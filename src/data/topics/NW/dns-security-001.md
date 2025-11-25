---
category: digital-service
certifications:
- information-management
- information-security
difficulty: intermediate
id: dns-security-001
importance: 4
keywords:
- DNS
- DNSSEC
- DoH
- DoT
- DNS over HTTPS
- DNS over TLS
- DNS 보안
relatedTopics:
- security-solution-001
- http-quic-001
subcategory: 네트워크 보안
subjectCategories:
- NW
- IS
tags:
- '2025'
title: DNS Security (DNSSEC, DoH, DoT)
trends:
- DNS over HTTPS (DoH) 확산
- DNS Filtering
---

# 정의
DNS 쿼리와 응답의 무결성, 기밀성, 인증을 보장하기 위한 보안 기술로 DNSSEC, DoH, DoT 등이 있습니다.

## 동작원리
DNS 보안 기술은 다음과 같은 방식으로 동작합니다:

**1. DNSSEC (DNS Security Extensions) 동작**
DNS 응답의 무결성과 인증을 보장합니다:

1단계: Zone Signing
- DNS 레코드를 Zone Signing Key (ZSK)로 서명
- RRSIG (Resource Record Signature) 생성

2단계: Trust Chain 구축
- Key Signing Key (KSK)로 ZSK를 서명
- DS (Delegation Signer) 레코드를 상위 도메인에 등록
- 루트 DNS까지 신뢰 체인(Chain of Trust) 형성

3단계: DNS 쿼리 및 검증
- 클라이언트가 DNS 쿼리 전송
- DNS 서버가 응답과 함께 RRSIG 반환
- 클라이언트가 공개키로 서명 검증
- 서명이 유효하면 응답 신뢰, 무효하면 거부

특징:
- 위변조 방지: 공개키 암호화로 DNS 응답 검증
- 한계: 암호화 미제공 (쿼리 내용은 평문)

**2. DoT (DNS over TLS) 동작**
TLS로 DNS 쿼리를 암호화하여 프라이버시를 보호합니다:

1) 클라이언트 → DNS 서버: TCP 포트 853으로 연결
2) TLS Handshake: 서버 인증서 검증, 세션 키 생성
3) 암호화된 DNS 쿼리 전송
4) 암호화된 DNS 응답 수신
5) TLS 세션 유지 또는 종료

특징:
- 전용 포트(853) 사용으로 DNS 트래픽 식별 가능
- 방화벽에서 차단 가능

**3. DoH (DNS over HTTPS) 동작**
HTTPS로 DNS 쿼리를 암호화하여 프라이버시와 우회성을 제공합니다:

1) 클라이언트 → DNS 서버: HTTPS 연결 (포트 443)
2) TLS Handshake: 서버 인증서 검증
3) HTTP/2 또는 HTTP/3로 DNS 쿼리 전송 (POST 또는 GET)
4) JSON 또는 DNS wire format으로 응답
5) 일반 HTTPS 트래픽과 동일하게 보임

특징:
- HTTPS 포트(443) 사용으로 일반 웹 트래픽과 구분 불가
- 방화벽 우회 용이, 검열 회피
- 브라우저 내장 지원 (Firefox, Chrome)

**4. DNS Filtering 동작**
악성 도메인과 유해 콘텐츠를 차단합니다:

1) 클라이언트가 DNS 쿼리 전송
2) DNS 서버가 도메인을 블랙리스트/화이트리스트와 비교
3) 차단 대상이면 NXDOMAIN 또는 다른 IP 반환
4) 허용 대상이면 정상 IP 반환

사용 사례:
- 악성 도메인 차단 (피싱, 멀웨어)
- 유해 콘텐츠 필터링 (자녀 보호)
- 광고 차단

## 특징
- DNS 취약점: Cache Poisoning(응답 위조), Spoofing(가짜 DNS 서버), DDoS, 스누핑(쿼리 감청)
- DNSSEC: DNS 응답 전자서명으로 위변조 방지, 공개키 암호화, Trust Chain
- DoT (DNS over TLS): TLS로 DNS 쿼리 암호화, 전용 포트 853, 프라이버시 보호
- DoH (DNS over HTTPS): HTTPS로 DNS 쿼리 암호화, 포트 443, 일반 웹 트래픽과 구분 불가
- DoH vs DoT: DoH는 HTTPS처럼 보여 방화벽 우회 용이, 검열 회피
- DNS Filtering: 악성 도메인 차단, 유해 콘텐츠 필터링, 블랙리스트 기반
- Public DNS: Cloudflare (1.1.1.1, 프라이버시 중시), Google (8.8.8.8), Quad9 (보안 중시)
- 사용 사례: 프라이버시 보호, 중간자 공격(MITM) 방지, 콘텐츠 필터링, 검열 우회

## 최신 트렌드
- DNS over HTTPS (DoH) 확산
- DNS Filtering
