---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: sso-oauth-oidc-001
importance: 5
keywords:
- SSO
- OAuth 2.0
- OIDC
- 인증
- 권한 부여
- 토큰
relatedTopics:
- auth-001
- cryptography-001
- digital-signature-pki-001
subcategory: 인증 기술
subjectCategories:
- IS
title: SSO & OAuth 2.0 & OIDC
trends:
- CIAM (Customer Identity and Access Management)
- 분산 신원 (Decentralized Identity)
- API 보안 강화
---

# 정의
SSO(Single Sign-On)는 한 번의 로그인으로 여러 개의 애플리케이션이나 서비스에 접근할 수 있도록 하는 인증 방식입니다. OAuth 2. 0은 사용자 대신 특정 서비스(클라이언트 애플리케이션)가 다른 서비스(리소스 서버)에 접근할 수 있도록 '권한을 위임'하는 프레임워크이며, OIDC(OpenID Connect)는 OAuth 2. 0 위에 구축되어 사용자 '인증'을 위한 신원 레이어를 추가한 프로토콜입니다. 이들은 웹 및 모바일 환경에서 사용자 경험과 보안을 향상시키는 데 필수적인 기술.

## 특징
- SSO (Single Sign-On):
    - 목표: 사용자 편의성 증대 및 보안 강화. 여러 서비스에 대한 로그인 과정을 한 번으로 통합.
    - 동작 방식: 사용자가 한 서비스에 로그인하면, 인증 서버(IdP, Identity Provider)로부터 인증 토큰을 받아 다른 서비스(SP, Service Provider)에 접근할 때 이 토큰을 사용하여 재인증 없이 로그인.
    - 기술: SAML(Security Assertion Markup Language), OAuth/OIDC 기반.
- OAuth 2.0 (Open Authorization 2.0):
    - 목표: 사용자 계정 정보(ID/PW)를 직접 노출하지 않고, 제3자 애플리케이션이 리소스 서버에 접근할 수 있도록 '권한을 위임'하는 표준. 인증(Authentication)이 아닌 권한 부여(Authorization) 프레임워크.
    - 주요 용어:
        - 리소스 소유자 (Resource Owner): 사용자.
        - 클라이언트 (Client): 사용자 대신 리소스에 접근하려는 애플리케이션.
        - 리소스 서버 (Resource Server): 사용자의 보호된 리소스(데이터)를 호스팅.
        - 인증 서버 (Authorization Server): 클라이언트에게 액세스 토큰(Access Token)을 발급.
    - 권한 부여 흐름 (Grant Type): 인가 코드 그랜트(Authorization Code Grant), 클라이언트 자격 증명 그랜트(Client Credentials Grant) 등.
    - 토큰: 액세스 토큰(Access Token)을 통해 리소스 접근 권한 부여.
- OIDC (OpenID Connect):
    - 목표: OAuth 2.0 위에서 사용자의 '인증'을 처리하고, 사용자 신원 정보(ID)를 안전하게 교환하는 표준. 인증(Authentication) 프로토콜.
    - 특징:
        - ID 토큰 (ID Token): JWT(JSON Web Token) 형식으로 사용자 정보(이름, 이메일 등)를 포함하여 클라이언트에 제공.
        - OAuth 2.0 기반: OAuth 2.0의 권한 부여 기능을 활용하여 사용자 인증 정보 교환.
        - 사용자 경험: 구글, 페이스북, 네이버 등으로 로그인하는 소셜 로그인 서비스에 널리 활용.

## 기술요소
SSO, OAuth 2.0, OIDC는 각각 다른 목표를 가지고 있지만 상호 보완적으로 작동하여 사용자 인증 및 권한 부여를 위한 통합적인 솔루션을 제공합니다.

-   **SSO (Single Sign-On)**:
    -   **목표**: 단일 인증으로 여러 서비스에 접근하여 사용자 편의성을 높이고, 여러 비밀번호를 관리해야 하는 부담을 줄입니다.
    -   **기술 구현**:
        -   **SAML (Security Assertion Markup Language)**: XML 기반의 표준으로, 주로 기업 환경에서 웹 애플리케이션 간의 SSO 구현에 사용됩니다. 브라우저 기반의 SSO 흐름을 지원합니다.
        -   **세션 관리**: 사용자가 인증 서버에서 인증을 완료하면, 해당 세션을 기반으로 서비스 제공자(SP)들이 사용자를 신뢰할 수 있도록 합니다.
-   **OAuth 2.0 (Open Authorization 2.0)**:
    -   **목표**: 사용자 대신 클라이언트 애플리케이션이 리소스 서버에 접근할 수 있는 '권한'을 안전하게 위임하는 메커니즘. 사용자 계정 정보(ID/PW)를 클라이언트에게 직접 노출하지 않습니다.
    -   **주요 구성 요소**:
        -   **인가 코드 그랜트 (Authorization Code Grant)**: 가장 안전하고 널리 사용되는 권한 부여 흐름. 클라이언트가 사용자를 인증 서버로 리다이렉트하여 인가 코드(Authorization Code)를 받고, 이 코드를 통해 액세스 토큰을 교환합니다.
        -   **액세스 토큰 (Access Token)**: 리소스 서버에 접근할 수 있는 권한을 나타내는 문자열. 유효 기간이 있으며, 클라이언트가 리소스에 접근할 때 이 토큰을 사용합니다.
        -   **리프레시 토큰 (Refresh Token)**: 액세스 토큰의 만료 시, 사용자 재인증 없이 새로운 액세스 토큰을 발급받는 데 사용됩니다. 보안을 위해 액세스 토큰보다 긴 유효 기간을 가집니다.
-   **OIDC (OpenID Connect)**:
    -   **목표**: OAuth 2.0 프레임워크 위에서 사용자의 신원을 **인증**하고, 신원 정보를 JSON Web Token (JWT) 형태의 **ID 토큰**으로 제공합니다.
    -   **ID 토큰 (ID Token)**: JWT(JSON Web Token) 형식으로 사용자 정보(이름, 이메일, 사용자 ID 등)를 포함하며, 디지털 서명되어 무결성과 인증을 보장합니다. 클라이언트가 사용자를 인증하고 해당 정보를 얻는 데 사용됩니다.
    -   **엔드포인트**:
        -   **인가 엔드포인트 (Authorization Endpoint)**: 사용자 인증 및 동의를 처리하고 인가 코드를 발행.
        -   **토큰 엔드포인트 (Token Endpoint)**: 인가 코드를 액세스 토큰 및 ID 토큰으로 교환.
        -   **사용자 정보 엔드포인트 (UserInfo Endpoint)**: ID 토큰에 포함되지 않은 추가적인 사용자 프로필 정보 제공.
-   **JWT (JSON Web Token)**:
    -   **정의**: 웹 환경에서 정보를 안전하게 주고받기 위해 정의된 JSON 기반의 토큰 표준. 헤더, 페이로드, 서명 세 부분으로 구성되며, 디지털 서명되어 위변조를 방지합니다.

이러한 기술 요소들은 모바일 앱, 웹 서비스, API 등 다양한 분산 환경에서 사용자의 편리성과 보안을 동시에 만족시키며 인증 및 권한 관리를 구현하는 데 필수적.