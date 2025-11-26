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
DDoS(Distributed Denial of Service) 공격은 여러 대의 공격 시스템을 분산적으로 활용하여 특정 서버나 네트워크에 과도한 트래픽을 발생시켜 정상적인 서비스 제공을 방해하는 행위입니다. DRDoS(Distributed Reflection Denial of Service)는 DDoS의 한 형태로, 공격자가 위조된 IP 주소를 사용하여 다수의 정상적인 서버(리플렉터)에 요청을 보내고, 이 서버들이 증폭된 응답을 피해 서버로 보내도록 유도하는 공격 기법.

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

## 기술요소
DDoS 및 DRDoS 공격은 다양한 방식으로 서비스 가용성을 침해하며, 이에 대응하기 위한 기술 요소 또한 다양합니다.

-   **DDoS 공격 유형별 기술 요소**:
    -   **대역폭 고갈 공격 (Volumetric Attacks)**:
        -   **UDP Flooding**: 대량의 UDP 패킷을 특정 포트로 전송하여 네트워크 대역폭을 소진시키고 서버 자원을 고갈시킵니다.
        -   **ICMP Flooding**: 대량의 ICMP(Ping) 패킷을 전송하여 네트워크 대역폭 및 서버 자원을 마비시킵니다.
        -   **DNS Amplification**: DRDoS의 일종으로, 위조된 출발지 IP를 사용하여 대량의 DNS 요청을 DNS 서버에 보내고, DNS 서버의 증폭된 응답이 피해 서버로 향하게 합니다.
    -   **자원 고갈 공격 (Protocol Attacks)**:
        -   **SYN Flooding**: TCP 3-way Handshake의 취약점을 이용하여 서버의 SYN-RECEIVED 큐를 가득 채워 정상적인 연결을 방해합니다.
        -   **Slowloris**: HTTP 연결을 느리게 유지하여 웹 서버의 최대 동시 연결 수를 소모시켜 서비스 가용성을 저해합니다.
    -   **애플리케이션 계층 공격 (Application Layer Attacks)**:
        -   **HTTP Flooding**: HTTP GET/POST 요청을 대량으로 보내 웹 애플리케이션의 자원(CPU, DB, 세션)을 고갈시킵니다.
        -   **Cache Busting**: 캐시된 콘텐츠를 무력화하는 고유한 URL 요청을 지속적으로 보내 서버에 직접 부하를 유발합니다.

-   **DDoS 방어 기술 요소**:
    -   **Anti-DDoS 솔루션**:
        -   **트래픽 필터링**: 비정상적인 트래픽 패턴을 분석하여 공격 트래픽을 식별하고 차단합니다.
        -   **이상 탐지 시스템 (Anomaly Detection System)**: 정상적인 트래픽 패턴을 학습하여 평소와 다른 비정상적인 트래픽을 탐지합니다.
        -   **세션 기반 공격 방어**: SYN Flooding과 같은 세션 기반 공격에 대해 세션 테이블 관리 및 초기화 등의 방어를 수행합니다.
    -   **CDN (Contents Delivery Network)**:
        -   콘텐츠를 사용자 근처의 엣지 서버에 분산 저장하여 트래픽을 분산시키고, DDoS 공격 시 공격 트래픽을 흡수하여 원본 서버에 도달하는 부하를 줄입니다.
    -   **네트워크 장비 설정**:
        -   **ACL (Access Control List)**: 특정 IP 주소나 포트에서의 트래픽을 차단하거나 허용하는 규칙을 라우터나 방화벽에 설정.
        -   **Rate Limit**: 특정 IP 주소나 사용자의 초당 요청 수를 제한하여 과도한 트래픽 유입을 방지.
    -   **클라우드 기반 DDoS 방어 서비스**:
        -   AWS Shield, Azure DDoS Protection, Google Cloud Armor와 같은 클라우드 벤더의 서비스를 활용하여 대규모 DDoS 공격에 대한 방어를 위임합니다.
    -   **WAF (Web Application Firewall)**: HTTP/HTTPS 기반의 애플리케이션 계층 공격(예: Slowloris, HTTP Flooding)에 대한 방어를 수행합니다.

이러한 기술 요소들을 통해 DDoS 및 DRDoS 공격으로부터 서비스의 가용성을 보호할 수 있습니다.

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

## 기술요소
DDoS 및 DRDoS 공격은 다양한 방식으로 서비스 가용성을 침해하며, 이에 대응하기 위한 기술 요소 또한 다양합니다.

-   **DDoS 공격 유형별 기술 요소**:
    -   **대역폭 고갈 공격 (Volumetric Attacks)**:
        -   **UDP Flooding**: 대량의 UDP 패킷을 특정 포트로 전송하여 네트워크 대역폭을 소진시키고 서버 자원을 고갈시킵니다.
        -   **ICMP Flooding**: 대량의 ICMP(Ping) 패킷을 전송하여 네트워크 대역폭 및 서버 자원을 마비시킵니다.
        -   **DNS Amplification**: DRDoS의 일종으로, 위조된 출발지 IP를 사용하여 대량의 DNS 요청을 DNS 서버에 보내고, DNS 서버의 증폭된 응답이 피해 서버로 향하게 합니다.
    -   **자원 고갈 공격 (Protocol Attacks)**:
        -   **SYN Flooding**: TCP 3-way Handshake의 취약점을 이용하여 서버의 SYN-RECEIVED 큐를 가득 채워 정상적인 연결을 방해합니다.
        -   **Slowloris**: HTTP 연결을 느리게 유지하여 웹 서버의 최대 동시 연결 수를 소모시켜 서비스 가용성을 저해합니다.
    -   **애플리케이션 계층 공격 (Application Layer Attacks)**:
        -   **HTTP Flooding**: HTTP GET/POST 요청을 대량으로 보내 웹 애플리케이션의 자원(CPU, DB, 세션)을 고갈시킵니다.
        -   **Cache Busting**: 캐시된 콘텐츠를 무력화하는 고유한 URL 요청을 지속적으로 보내 서버에 직접 부하를 유발합니다.

-   **DDoS 방어 기술 요소**:
    -   **Anti-DDoS 솔루션**:
        -   **트래픽 필터링**: 비정상적인 트래픽 패턴을 분석하여 공격 트래픽을 식별하고 차단합니다.
        -   **이상 탐지 시스템 (Anomaly Detection System)**: 정상적인 트래픽 패턴을 학습하여 평소와 다른 비정상적인 트래픽을 탐지합니다.
        -   **세션 기반 공격 방어**: SYN Flooding과 같은 세션 기반 공격에 대해 세션 테이블 관리 및 초기화 등의 방어를 수행합니다.
    -   **CDN (Contents Delivery Network)**:
        -   콘텐츠를 사용자 근처의 엣지 서버에 분산 저장하여 트래픽을 분산시키고, DDoS 공격 시 공격 트래픽을 흡수하여 원본 서버에 도달하는 부하를 줄입니다.
    -   **네트워크 장비 설정**:
        -   **ACL (Access Control List)**: 특정 IP 주소나 포트에서의 트래픽을 차단하거나 허용하는 규칙을 라우터나 방화벽에 설정.
        -   **Rate Limit**: 특정 IP 주소나 사용자의 초당 요청 수를 제한하여 과도한 트래픽 유입을 방지.
    -   **클라우드 기반 DDoS 방어 서비스**:
        -   AWS Shield, Azure DDoS Protection, Google Cloud Armor와 같은 클라우드 벤더의 서비스를 활용하여 대규모 DDoS 공격에 대한 방어를 위임합니다.
    -   **WAF (Web Application Firewall)**: HTTP/HTTPS 기반의 애플리케이션 계층 공격(예: Slowloris, HTTP Flooding)에 대한 방어를 수행합니다.

이러한 기술 요소들을 통해 DDoS 및 DRDoS 공격으로부터 서비스의 가용성을 보호할 수 있습니다.