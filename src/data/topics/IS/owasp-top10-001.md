---
id: owasp-top10-001
title: OWASP Top 10 (웹 보안 취약점)
category: digital-service
subcategory: 웹 보안
subjectCategories:
  - IS
  - SE
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - OWASP Top 10
  - 웹 보안
  - 취약점
  - 웹 애플리케이션
  - 시큐어 코딩
importance: 5
relatedTopics:
  - security-attack-001
  - security-solution-001
  - sql-injection-001
trends:
  - API 보안 취약점
  - 서버리스 보안
  - AI 기반 취약점 분석
---

# 정의
OWASP(Open Web Application Security Project) Top 10은 웹 애플리케이션 보안에서 가장 중요하고 심각한 10가지 취약점 목록을 의미합니다. OWASP 재단에서 전 세계 웹 보안 전문가들의 경험과 데이터를 바탕으로 주기적으로 발표하며, 개발자와 보안 담당자들이 웹 애플리케이션의 보안을 강화하는 데 우선순위를 두고 집중해야 할 영역을 제시합니다.

## 특징
- 목표: 웹 애플리케이션 보안 취약점에 대한 인식을 높이고, 보안 개발 프로세스를 개선하여 안전한 웹 애플리케이션을 구축하도록 지원.
- 주요 10가지 취약점 (2021년 기준):
    1.  A01: 깨진 접근 제어 (Broken Access Control): 사용자 권한이 적절히 통제되지 않아 인가되지 않은 기능이나 데이터에 접근 가능. (예: URL 변조, 강제 브라우징)
    2.  A02: 암호화 실패 (Cryptographic Failures): 민감 정보를 저장하거나 전송할 때 부적절한 암호화 또는 암호화 부재. (예: 개인정보 평문 저장, 약한 암호화 알고리즘 사용)
    3.  A03: 주입 (Injection): SQL, NoSQL, OS 명령어 등 백엔드 시스템으로 전송되는 데이터에 악성 코드 삽입. (예: SQL Injection, OS Command Injection)
    4.  A04: 안전하지 않은 설계 (Insecure Design): 보안 제어가 누락되거나 부적절하게 설계된 애플리케이션 아키텍처 및 디자인. (예: 취약한 인증 흐름, 불충분한 로깅)
    5.  A05: 보안 설정 오류 (Security Misconfiguration): 기본 설정 취약, 불필요한 기능 활성화, 기본 계정/비밀번호 사용. (예: 디버그 모드 활성화, 패치되지 않은 서버)
    6.  A06: 취약하고 오래된 구성 요소 (Vulnerable and Outdated Components): 알려진 취약점을 가진 라이브러리, 프레임워크, 기타 소프트웨어 구성 요소 사용. (예: 오래된 OpenSSL 버전)
    7.  A07: 식별 및 인증 실패 (Identification and Authentication Failures): 사용자 인증 또는 세션 관리가 부적절. (예: 무차별 대입 공격, 세션 하이재킹)
    8.  A08: 소프트웨어 및 데이터 무결성 오류 (Software and Data Integrity Failures): CI/CD 파이프라인, 업데이트 메커니즘 등 소프트웨어 업데이트/데이터 무결성 검증 실패. (예: 악성코드 삽입된 업데이트)
    9.  A09: 보안 로깅 및 모니터링 실패 (Security Logging and Monitoring Failures): 보안 이벤트에 대한 로깅 및 모니터링 부재 또는 미흡. (예: 실패한 로그인 시도 로깅 안됨)
    10. A10: 서버 측 요청 위조 (Server-Side Request Forgery, SSRF): 공격자가 서버가 외부 자원에 임의의 요청을 보내도록 조작.

*   활용: 웹 애플리케이션 개발자, 보안 엔지니어, 침투 테스터가 보안 취약점을 이해하고 방어 전략을 수립하는 데 중요한 가이드라인으로 활용됩니다.
*   WAF (Web Application Firewall)와의 관계: WAF는 OWASP Top 10과 같은 웹 공격을 탐지하고 차단하는 데 특화된 보안 솔루션입니다.

