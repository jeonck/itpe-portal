---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: security-attack-001
importance: 5
keywords:
- DDoS
- Ransomware
- APT
- SQL Injection
- XSS
- CSRF
relatedTopics:
- encryption-001
- security-solution-001
- auth-001
subcategory: 정보보안
subjectCategories:
- IS
title: 공격 기법 (Cyber Attack)
trends:
- AI 기반 공격
- Supply Chain Attack
- Zero-day Exploit
---

# 정의
정보 시스템의 기밀성, 무결성, 가용성을 침해하기 위한 다양한 사이버 공격 기법들입니다.

## 특징
- DDoS (Distributed Denial of Service): 분산 서비스 거부 공격. 여러 대의 시스템을 이용해 특정 서버나 네트워크에 과도한 트래픽을 유발하여 서비스 가용성을 침해.
- Ransomware: 데이터 암호화 후 금전 요구. 사용자 또는 조직의 데이터를 암호화하여 접근을 제한하고, 해제를 조건으로 금전(랜섬)을 요구하는 악성코드 공격.
- APT (Advanced Persistent Threat): 지능형 지속 위협. 특정 목표를 설정, 다양한 공격 기법과 제로데이 취약점을 활용하여 장기간 은밀하게 정보를 탈취하거나 시스템을 파괴.
- SQL Injection: DB 쿼리 조작을 통한 정보 탈취. 사용자 입력 값에 악의적인 SQL 코드를 삽입하여 데이터베이스를 비정상적으로 조작.
- XSS (Cross-Site Scripting): 웹 페이지에 악성 스크립트 삽입. 웹 애플리케이션에 악성 스크립트를 주입하여 사용자의 브라우저에서 실행되도록 유도, 정보 탈취나 세션 하이재킹.
- CSRF (Cross-Site Request Forgery): 요청 위조. 사용자가 의도하지 않은 요청을 강제로 실행시키는 공격. (예: 로그인된 사용자의 세션을 이용한 자금 이체 요청)
- 제로데이 공격 (Zero-day Attack): 알려지지 않은 취약점을 이용한 공격. 보안 패치가 나오기 전의 취약점을 이용하는 공격으로 방어가 어려움.

## 최신 트렌드
- AI 기반 공격
- Supply Chain Attack
- Zero-day Exploit

## 기술요소
다양한 사이버 공격 기법들은 정보 시스템의 취약점을 악용하여 기밀성, 무결성, 가용성을 침해합니다. 이에 대응하기 위한 방어 원리와 기술 요소들이 존재합니다.

-   **공격 벡터 (Attack Vectors)**: 공격자가 시스템에 침투하거나 공격을 수행하기 위해 사용하는 경로 및 방법.
    -   **네트워크 기반 공격**:
        -   **포트 스캔 (Port Scan)**: 열려 있는 포트를 탐색하여 서비스 및 OS 정보를 파악.
        -   **서비스 거부 공격 (DoS/DDoS)**: 트래픽 과부하를 통해 서비스 가용성을 침해.
        -   **스니핑 (Sniffing)**: 네트워크 상의 데이터 패킷을 엿들어 정보를 탈취.
        -   **세션 하이재킹 (Session Hijacking)**: 세션 가로채기를 통해 사용자 권한을 탈취.
    -   **시스템 기반 공격**:
        -   **버퍼 오버플로우 (Buffer Overflow)**: 프로그램의 버퍼 영역을 초과하는 데이터를 입력하여 비정상적인 코드 실행.
        -   **루트킷 (Rootkit)**: 시스템에 침투 후 자신의 존재를 숨기고 관리자 권한을 유지.
        -   **백도어 (Backdoor)**: 시스템에 인증을 우회할 수 있는 비밀 통로를 미리 만들어 둠.
        -   **취약점 스캔/익스플로잇**: 시스템/소프트웨어의 알려진 취약점을 찾아 공격 코드를 실행.
    -   **웹 기반 공격**:
        -   **SQL Injection, XSS, CSRF**: 웹 애플리케이션의 취약점을 이용한 공격. (자세한 내용은 해당 토픽 참조)
        -   **파일 업로드 취약점**: 웹 서버에 악성 파일을 업로드하여 실행.
        -   **디렉토리 탐색 (Directory Traversal)**: 웹 서버의 디렉토리 구조를 탐색하여 비인가 파일 접근.
    -   **사회 공학적 공격**:
        -   **피싱 (Phishing), 스미싱 (Smishing)**: 사용자 심리를 이용한 정보 탈취. (자세한 내용은 해당 토픽 참조)
        -   **보이스 피싱 (Voice Phishing)**: 음성 통화를 이용한 기만 공격.

-   **방어 원리 및 기술 요소**:
    -   **보안 계층화 (Defense in Depth)**: 단일 보안 기술에 의존하지 않고, 여러 계층에 다양한 보안 솔루션을 적용하여 공격 성공 확률을 낮춥니다.
    -   **최소 권한 원칙 (Principle of Least Privilege)**: 사용자, 시스템, 애플리케이션에 필요한 최소한의 접근 권한만 부여.
    -   **지속적인 취약점 관리**: 정기적인 취약점 분석 및 패치 적용.
    -   **보안 솔루션**:
        -   **방화벽 (Firewall)**, **IPS (Intrusion Prevention System)**, **WAF (Web Application Firewall)**: 네트워크 및 웹 트래픽 통제.
        -   **안티바이러스/EDR (Endpoint Detection and Response)**: 악성코드 탐지 및 엔드포인트 보호.
        -   **SIEM (Security Information and Event Management)**: 로그 통합 분석 및 위협 탐지.
        -   **APT 방어 솔루션**: 지능형 지속 위협 탐지 및 차단.
    -   **보안 인식 교육**: 사용자의 보안 의식 강화.

이러한 공격 기법과 방어 기술에 대한 이해는 정보 시스템을 안전하게 보호하고 침해 사고에 효과적으로 대응하는 데 필수적입니다.
