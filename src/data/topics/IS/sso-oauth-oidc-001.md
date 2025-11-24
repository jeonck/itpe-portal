---
id: sso-oauth-oidc-001
title: SSO & OAuth 2.0 & OIDC
category: digital-service
subcategory: 인증 기술
subjectCategories:
  - IS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - SSO
  - OAuth 2.0
  - OIDC
  - 인증
  - 권한 부여
  - 토큰
importance: 5
relatedTopics:
  - auth-001
  - cryptography-001
  - digital-signature-pki-001
trends:
  - CIAM (Customer Identity and Access Management)
  - 분산 신원 (Decentralized Identity)
  - API 보안 강화
---

# 정의
SSO(Single Sign-On)는 한 번의 로그인으로 여러 개의 애플리케이션이나 서비스에 접근할 수 있도록 하는 인증 방식입니다. OAuth 2.0은 사용자 대신 특정 서비스(클라이언트 애플리케이션)가 다른 서비스(리소스 서버)에 접근할 수 있도록 '권한을 위임'하는 프레임워크이며, OIDC(OpenID Connect)는 OAuth 2.0 위에 구축되어 사용자 '인증'을 위한 신원 레이어를 추가한 프로토콜입니다. 이들은 웹 및 모바일 환경에서 사용자 경험과 보안을 향상시키는 데 필수적인 기술입니다.

## 특징
- **SSO (Single Sign-On)**:
    - **목표**: 사용자 편의성 증대 및 보안 강화. 여러 서비스에 대한 로그인 과정을 한 번으로 통합.
    - **동작 방식**: 사용자가 한 서비스에 로그인하면, 인증 서버(IdP, Identity Provider)로부터 인증 토큰을 받아 다른 서비스(SP, Service Provider)에 접근할 때 이 토큰을 사용하여 재인증 없이 로그인.
    - **기술**: SAML(Security Assertion Markup Language), OAuth/OIDC 기반.
- **OAuth 2.0 (Open Authorization 2.0)**:
    - **목표**: 사용자 계정 정보(ID/PW)를 직접 노출하지 않고, 제3자 애플리케이션이 리소스 서버에 접근할 수 있도록 '권한을 위임'하는 표준. **인증(Authentication)이 아닌 권한 부여(Authorization) 프레임워크.**
    - **주요 용어**:
        - **리소스 소유자 (Resource Owner)**: 사용자.
        - **클라이언트 (Client)**: 사용자 대신 리소스에 접근하려는 애플리케이션.
        - **리소스 서버 (Resource Server)**: 사용자의 보호된 리소스(데이터)를 호스팅.
        - **인증 서버 (Authorization Server)**: 클라이언트에게 액세스 토큰(Access Token)을 발급.
    - **권한 부여 흐름 (Grant Type)**: 인가 코드 그랜트(Authorization Code Grant), 클라이언트 자격 증명 그랜트(Client Credentials Grant) 등.
    - **토큰**: 액세스 토큰(Access Token)을 통해 리소스 접근 권한 부여.
- **OIDC (OpenID Connect)**:
    - **목표**: OAuth 2.0 위에서 사용자의 '인증'을 처리하고, 사용자 신원 정보(ID)를 안전하게 교환하는 표준. **인증(Authentication) 프로토콜.**
    - **특징**:
        - **ID 토큰 (ID Token)**: JWT(JSON Web Token) 형식으로 사용자 정보(이름, 이메일 등)를 포함하여 클라이언트에 제공.
        - **OAuth 2.0 기반**: OAuth 2.0의 권한 부여 기능을 활용하여 사용자 인증 정보 교환.
        - **사용자 경험**: 구글, 페이스북, 네이버 등으로 로그인하는 소셜 로그인 서비스에 널리 활용.

