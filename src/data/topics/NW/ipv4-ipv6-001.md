---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: ipv4-ipv6-001
importance: 5
keywords:
- IPv4
- IPv6
- NAT
- 듀얼 스택
- 터널링
- 주소 고갈
relatedTopics:
- tcpip-001
- routing-001
subcategory: 네트워크
subjectCategories:
- NW
tags:
- '2025'
title: IPv4 vs IPv6 (주소 고갈 & 전환)
trends:
- IPv6 단독 스택
- Segment Routing over IPv6
---

# 정의
32비트 주소 공간의 IPv4 고갈 문제를 해결하기 위해 128비트 주소를 사용하는 IPv6로 전환하는 과정과 기술을 다룹니다 기술.


## 동작원리
IPv4에서 IPv6로 전환하는 다음 3가지 메커니즘이 사용됩니다:

1. 듀얼 스택 (Dual Stack)
IPv4와 IPv6를 동시에 운영합니다:

- 네트워크 장비에 IPv4와 IPv6 주소를 모두 할당
- 애플리케이션이 목적지에 따라 적절한 프로토콜 선택
- 목적지가 IPv6 지원 → IPv6 사용
- 목적지가 IPv4만 지원 → IPv4 사용

장점: 가장 안정적, 점진적 전환 가능
단점: 두 프로토콜 모두 관리 필요, 리소스 소비

2. 터널링 (Tunneling)
IPv6 패킷을 IPv4 네트워크를 통해 전송합니다:

6to4 터널링
- IPv6 패킷을 IPv4 패킷으로 캡슐화
- IPv4 네트워크를 통과 후 다시 IPv6로 역캡슐화
- 자동 터널링: 6to4 주소 체계 사용 (2002::/16)

Teredo 터널링
- NAT 뒤의 IPv6 호스트를 지원
- UDP 포트 3544 사용
- Windows에 내장

ISATAP (Intra-Site Automatic Tunnel Addressing Protocol)
- 기업 내부 IPv6 전환에 사용

3. 변환 (Translation)
IPv6와 IPv4 간 프로토콜 변환을 수행합니다:

NAT64
- IPv6 전용 호스트가 IPv4 서버에 접속 가능
- IPv6 패킷을 IPv4로 변환 (헤더 매핑)
- DNS64와 함께 사용

DNS64
- IPv4 전용 서버의 A 레코드를 AAAA 레코드로 합성
- 예: 192.0.2.1 → 64:ff9b::192.0.2.1

464XLAT
- 모바일 네트워크에서 주로 사용
- IPv4 앱이 IPv6 전용 네트워크에서 동작

4. IPv6 Auto Configuration (SLAAC)
IPv6는 자동 주소 설정을 지원합니다:

1) 라우터가 Router Advertisement (RA) 메시지 전송
2) 호스트가 네트워크 프리픽스 수신 (예: 2001:db8::/64)
3) 호스트가 MAC 주소 기반 Interface ID 생성 (EUI-64)
4) 프리픽스 + Interface ID = 완전한 IPv6 주소
5) DAD (Duplicate Address Detection)로 중복 검사

## 특징
- IPv4: 32비트 (43억 개), 점으로 구분된 10진수 (192.168.0.1)
- IPv6: 128비트 (340언데실리온 개), 콜론으로 구분된 16진수 (2001:db8::1)
- IPv4 고갈: NAT, CIDR로 일시적 해결, 2011년 IANA 주소 고갈
- IPv6 장점: 주소 풍부, 헤더 간소화 (40바이트 고정), IPSec 필수, Auto Configuration (SLAAC)
- 전환 기술: 듀얼 스택 (IPv4/IPv6 동시), 터널링 (6to4, Teredo), 변환 (NAT64/DNS64)
- IPv6 주소 종류: Unicast, Multicast, Anycast (Broadcast 없음)
- 채택 현황: 모바일(T-Mobile, Verizon 100%), IoT, 전세계 평균 40%
- IPv6 헤더: Next Header 체인, 라우터가 분할 안 함 (호스트만 분할)

## 최신 트렌드
- IPv6 단독 스택
- Segment Routing over IPv6