---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: network-security-001
importance: 5
keywords:
- 방화벽
- IPS
- WAF
- NAC
- 네트워크 보안
- 침입 탐지
- 접근 제어
relatedTopics:
- security-solution-001
- osi-7layer-001
- access-control-001
subcategory: 네트워크 보안
subjectCategories:
- IS
- NW
title: 네트워크 보안 (F/W, IPS, WAF, NAC)
trends:
- SASE (Secure Access Service Edge)
- Zero Trust Network Access (ZTNA)
- AI 기반 침입 탐지
---

# 정의
네트워크 보안은 데이터가 전송되는 네트워크 인프라와 자원을 무단 접근, 오용, 변경, 파괴로부터 보호하기 위한 일련의 정책, 절차, 기술을 의미합니다. 다양한 네트워크 보안 솔루션이 계층별로 존재하며, 방화벽(Firewall), 침입 방지 시스템(IPS), 웹 방화벽(WAF), 네트워크 접근 제어(NAC)는 네트워크 경계 및 내부 트래픽을 통제하고 위협을 탐지 및 차단하는 대표적인 기술.

## 특징
- 방화벽 (Firewall):
    - 역할: 네트워크 경계에서 내부 네트워크로 유입되거나 외부로 나가는 트래픽을 모니터링하고 제어하는 보안 시스템.
    - 방식:
        - 패킷 필터링: IP 주소, 포트 번호 등을 기반으로 패킷 허용/차단.
        - 상태 기반 검사 (Stateful Inspection): 세션 정보를 기억하여 정상적인 연결의 패킷만 허용.
        - 애플리케이션 계층 게이트웨이: 특정 애플리케이션 프로토콜에 대한 심층 검사.
- IPS (Intrusion Prevention System, 침입 방지 시스템):
    - 역할: 네트워크 트래픽을 실시간으로 분석하여 비정상적인 침입 시도를 탐지하고 자동으로 차단하는 보안 시스템.
    - 방식:
        - 시그니처 기반: 알려진 공격 패턴(시그니처)과 일치하는 트래픽 차단.
        - 행위 기반: 정상적인 네트워크/시스템 행위를 학습하여 벗어나는 행위 탐지 및 차단.
- WAF (Web Application Firewall, 웹 방화벽):
    - 역할: 웹 애플리케이션으로 향하는 HTTP/HTTPS 트래픽을 전문적으로 분석하여 SQL Injection, XSS, CSRF 등과 같은 웹 기반 공격을 탐지하고 차단.
    - 특징: OWASP Top 10 취약점 대응에 특화. 7계층(애플리케이션 계층)에서 동작.
- NAC (Network Access Control, 네트워크 접근 제어):
    - 역할: 네트워크에 접속하는 모든 단말(PC, 모바일, IoT 장치 등)의 보안 정책 준수 여부를 확인하고, 인가된 단말만 네트워크에 접근하도록 통제하는 솔루션.
    - 기능: 사용자 인증, 장치 인증, 보안 검역(백신, OS 패치 여부 확인), 네트워크 세그먼트 할당.
- 관계: 이들 솔루션은 상호 보완적으로 작동하여 다계층적인 네트워크 보안을 제공합니다. 방화벽이 1~4계층 트래픽을 제어한다면, WAF는 7계층 웹 공격에 특화되고, IPS는 다양한 침입을 방지하며, NAC는 내부 네트워크 접근을 통제합니다.

## 기술요소
- [TODO: 기술요소 내용을 여기에 작성하세요.]