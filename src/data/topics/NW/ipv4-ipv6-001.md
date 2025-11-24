---
id: ipv4-ipv6-001
title: IPv4 vs IPv6 (주소 고갈 & 전환)
category: fundamental
subcategory: 네트워크
subjectCategories:
  - NW
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - IPv4
  - IPv6
  - NAT
  - 듀얼 스택
  - 터널링
  - 주소 고갈
importance: 5
relatedTopics:
  - tcpip-001
  - routing-001
trends:
  - IPv6 단독 스택
  - Segment Routing over IPv6
tags:
  - '2025'
---

# 정의
32비트 주소 공간의 IPv4 고갈 문제를 해결하기 위해 128비트 주소를 사용하는 IPv6로 전환하는 과정과 기술을 다룹니다.

## 특징
- IPv4: 32비트 (43억 개), 점으로 구분된 10진수 (192.168.0.1)
- IPv6: 128비트 (340간 개), 콜론으로 구분된 16진수 (2001:db8::1)
- IPv4 고갈: NAT, CIDR로 일시적 해결
- IPv6 장점: 주소 풍부, 헤더 간소화, IPSec 필수, Auto Configuration
- 전환 기술: 듀얼 스택 (IPv4/IPv6 동시), 터널링 (6to4, Teredo), 변환 (NAT64)
- IPv6 주소 종류: Unicast, Multicast, Anycast (Broadcast 없음)
- 채택 현황: 모바일, IoT에서 활발, 전세계 40% 수준

## 최신 트렌드
- IPv6 단독 스택
- Segment Routing over IPv6
