---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: auth-001
importance: 5
keywords:
- SSO
- OAuth 2.0
- IAM
- MFA
- SAML
- JWT
relatedTopics:
- encryption-001
- security-solution-001
- zero-trust-001
subcategory: 정보보안
subjectCategories:
- IS
title: 인증/권한 (Authentication/Authorization)
trends:
- Passwordless
- FIDO2
- Biometric Authentication
- Decentralized Identity
---

# 정의
사용자 신원을 확인하고(인증) 자원에 대한 접근 권한을 관리하는(권한 부여) 보안 메커니즘.

## 특징
- SSO (Single Sign-On): 한 번의 인증으로 여러 시스템 접근
- OAuth 2.0: 권한 부여 프레임워크, Access Token 기반
- IAM (Identity and Access Management): 통합 신원 및 접근 관리
- MFA (Multi-Factor Authentication): 다중 인증 요소 (지식, 소유, 생체)
- SAML, JWT: 인증 토큰 표준

## 기술요소
인증(Authentication) 및 권한(Authorization)을 위한 주요 기술 요소들은 다음과 같습니다.

-   인증 (Authentication): 사용자 신원 확인
    -   지식 기반 인증: 사용자만 아는 정보 (비밀번호, PIN).
    -   소유 기반 인증: 사용자만 가진 것 (OTP 생성기, 스마트카드, 휴대폰).
    -   생체 기반 인증: 사용자 고유의 생체 정보 (지문, 얼굴, 홍채).
    -   다중 인증 (MFA, Multi-Factor Authentication): 두 가지 이상의 인증 요소를 조합하여 보안 강화. (예: 비밀번호 + OTP).
    -   패스워드 없는 인증 (Passwordless Authentication): FIDO, 패스키(Passkey) 등을 활용하여 비밀번호 없이 인증.

-   권한 (Authorization): 접근 권한 관리
    -   IAM (Identity and Access Management):
        -   정의: 사용자의 디지털 신원을 관리하고, 해당 신원에 기반하여 기업의 IT 자원(애플리케이션, 데이터 등)에 대한 접근 권한을 중앙 집중적으로 제어하는 시스템 또는 프레임워크.
        -   기능: 사용자 계정 관리, 인증, 권한 부여, 감사 및 로깅, SSO 연동.
    -   OAuth 2.0 (Open Authorization 2.0):
        -   정의: 사용자 계정 정보를 직접 노출하지 않고, 제3자 애플리케이션(클라이언트)이 사용자 대신 리소스 서버(Protected Resource)의 특정 리소스에 접근할 수 있도록 권한을 위임하는 표준 프레임워크.
        -   핵심: 인증(Authentication)이 아닌 권한 부여(Authorization)를 목적으로 합니다.
        -   주요 용어: Resource Owner(사용자), Client(클라이언트 애플리케이션), Authorization Server(인증 서버), Resource Server(리소스 서버).
        -   토큰: Access Token을 발행하여 클라이언트에게 리소스 접근 권한을 부여.
    -   OIDC (OpenID Connect):
        -   정의: OAuth 2.0 프로토콜 위에 구축된 단순한 아이덴티티 레이어로, 클라이언트가 최종 사용자의 신원을 인증(Authentication)하고, 기본 프로필 정보를 안전하게 획득할 수 있도록 합니다.
        -   핵심: OAuth 2.0이 권한 부여에 집중하는 반면, OIDC는 사용자 인증을 목적으로 합니다.
        -   토큰: ID Token(JWT 형식)을 발행하여 사용자의 인증 정보(ID)를 클라이언트에 전달.

-   SSO (Single Sign-On):
    -   정의: 한 번의 사용자 인증으로 여러 독립적인 애플리케이션이나 서비스에 접속할 수 있도록 하는 인증 방식.
    -   기술: SAML(Security Assertion Markup Language), OAuth/OIDC 기반.

이러한 기술 요소들은 사용자 편의성을 높이면서도 보안 수준을 강화하여 정보 시스템을 안전하게 보호합니다.

## 최신 트렌드
- Passwordless
- FIDO2
- Biometric Authentication
- Decentralized Identity
