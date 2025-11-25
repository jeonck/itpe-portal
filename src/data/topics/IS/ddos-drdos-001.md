---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: ddos-drdos-001
importance: 5
keywords:
- DDoS
- DRDoS
- 서비스 거부
- 좀비 PC
- 봇넷
relatedTopics:
- security-attack-001
- security-solution-001
subcategory: 공격 기법
subjectCategories:
- IS
title: DDoS & DRDoS (분산 서비스 거부 공격)
trends:
- IoT Botnet
- HTTP/3 기반 DDoS
- AI 기반 DDoS 공격 방어
---

# 정의
DDoS(Distributed Denial of Service) 공격은 여러 대의 공격 시스템을 분산적으로 활용하여 특정 서버나 네트워크에 과도한 트래픽을 발생시켜 정상적인 서비스 제공을 방해하는 행위입니다. DRDoS(Distributed Reflection Denial of Service)는 DDoS의 한 형태로, 공격자가 위조된 IP 주소를 사용하여 다수의 정상적인 서버(리플렉터)에 요청을 보내고, 이 서버들이 증폭된 응답을 피해 서버로 보내도록 유도하는 공격입니다.

## 특징
- DDoS (Distributed Denial of Service):
    - 목표: 서비스 가용성 침해.
    - 공격 방식:
        - 대역폭 고갈 공격: 대량의 트래픽을 전송하여 네트워크 대역폭을 소모 (UDP Flooding, ICMP Flooding).
        - 자원 고갈 공격: 서버의 자원(CPU, 메모리, 세션)을 소모 (SYN Flooding, HTTP Flooding, Slowloris).
    - 봇넷 (Botnet): 악성코드에 감염된 다수의 좀비 PC를 원격에서 제어하여 공격에 활용합니다.
- DRDoS (Distributed Reflection Denial of Service):
    - 리플렉터 (Reflector): DNS 서버, NTP 서버, SNMP 서버 등 공개된 서버를 이용하여 공격 트래픽을 증폭시킵니다.
    - IP 주소 위조 (IP Spoofing): 공격자는 자신의 IP를 숨기고 피해자의 IP를 발신지로 위조하여 리플렉터에 요청을 보냅니다.
    - 증폭 (Amplification): 리플렉터 서버가 공격자의 요청보다 훨씬 큰 응답을 생성하여 피해자에게 보내는 기법.
- 방어 대책:
    - Anti-DDoS 솔루션: 트래픽 필터링, 이상 트래픽 탐지 및 차단.
    - CDN (Contents Delivery Network): 트래픽 분산 및 캐싱.
    - 네트워크 장비 설정: ACL, Rate Limit 등.
    - 클라우드 기반 방어 서비스: AWS Shield, Azure DDoS Protection.

# 정의
DDoS(Distributed Denial of Service) 공격은 여러 대의 공격 시스템을 분산적으로 활용하여 특정 서버나 네트워크에 과도한 트래픽을 발생시켜 정상적인 서비스 제공을 방해하는 행위입니다. DRDoS(Distributed Reflection Denial of Service)는 DDoS의 한 형태로, 공격자가 위조된 IP 주소를 사용하여 다수의 정상적인 서버(리플렉터)에 요청을 보내고, 이 서버들이 증폭된 응답을 피해 서버로 보내도록 유도하는 공격입니다.

## 특징
- DDoS (Distributed Denial of Service):
    - 목표: 서비스 가용성 침해.
    - 공격 방식:
        - 대역폭 고갈 공격: 대량의 트래픽을 전송하여 네트워크 대역폭을 소모 (UDP Flooding, ICMP Flooding).
        - 자원 고갈 공격: 서버의 자원(CPU, 메모리, 세션)을 소모 (SYN Flooding, HTTP Flooding, Slowloris).
    - 봇넷 (Botnet): 악성코드에 감염된 다수의 좀비 PC를 원격에서 제어하여 공격에 활용합니다.
- DRDoS (Distributed Reflection Denial of Service):
    - 리플렉터 (Reflector): DNS 서버, NTP 서버, SNMP 서버 등 공개된 서버를 이용하여 공격 트래픽을 증폭시킵니다.
    - IP 주소 위조 (IP Spoofing): 공격자는 자신의 IP를 숨기고 피해자의 IP를 발신지로 위조하여 리플렉터에 요청을 보냅니다.
    - 증폭 (Amplification): 리플렉터 서버가 공격자의 요청보다 훨씬 큰 응답을 생성하여 피해자에게 보내는 기법.
- 방어 대책:
    - Anti-DDoS 솔루션: 트래픽 필터링, 이상 트래픽 탐지 및 차단.
    - CDN (Contents Delivery Network): 트래픽 분산 및 캐싱.
    - 네트워크 장비 설정: ACL, Rate Limit 등.
    - 클라우드 기반 방어 서비스: AWS Shield, Azure DDoS Protection.