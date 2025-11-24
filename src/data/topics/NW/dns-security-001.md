---
id: dns-security-001
title: DNS Security (DNSSEC, DoH, DoT)
category: digital-service
subcategory: 네트워크 보안
subjectCategories:
  - NW
  - IS
difficulty: intermediate
certifications:
  - information-management
  - information-security
keywords:
  - DNS
  - DNSSEC
  - DoH
  - DoT
  - DNS over HTTPS
  - DNS over TLS
  - DNS 보안
importance: 4
relatedTopics:
  - security-solution-001
  - http-quic-001
trends:
  - DNS over HTTPS (DoH) 확산
  - DNS Filtering
tags:
  - '2025'
---

# 정의
DNS 쿼리와 응답의 무결성, 기밀성, 인증을 보장하기 위한 보안 기술로 DNSSEC, DoH, DoT 등이 있습니다.

## 특징
- DNS 취약점: Cache Poisoning, Spoofing, DDoS, 스누핑
- DNSSEC: DNS 응답 서명으로 위변조 방지, 공개키 암호화
- DoT (DNS over TLS): TLS로 DNS 쿼리 암호화 (포트 853)
- DoH (DNS over HTTPS): HTTPS로 DNS 쿼리 암호화 (포트 443)
- DoH vs DoT: DoH는 HTTPS 트래픽처럼 보여 우회 어려움
- DNS Filtering: 악성 도메인 차단, 유해 콘텐츠 필터링
- Public DNS: Cloudflare (1.1.1.1), Google (8.8.8.8), Quad9
- 사용 사례: 프라이버시 보호, 중간자 공격 방지, 콘텐츠 필터링

## 최신 트렌드
- DNS over HTTPS (DoH) 확산
- DNS Filtering
