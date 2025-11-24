---
id: biometric-authentication-001
title: 생체 인증 (FIDO, Passkey)
category: digital-service
subcategory: 인증 기술
subjectCategories:
  - IS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 생체 인증
  - FIDO
  - Passkey
  - 패스워드 없는 인증
  - MFA
  - 핀테크 보안
importance: 5
relatedTopics:
  - auth-001
  - encryption-001
trends:
  - 온디바이스 AI 인증
  - 블록체인 기반 분산 신원
  - 양자 내성 FIDO
---

# 정의
생체 인증(Biometric Authentication)은 지문, 얼굴, 홍채, 음성 등 개인 고유의 신체적, 행동적 특징을 활용하여 사용자 신원을 확인하는 기술입니다. FIDO(Fast IDentity Online)는 빠르고 안전하며 편리한 패스워드 없는 인증 표준을 제공하며, 패스키(Passkey)는 FIDO 기술을 기반으로 사용자 계정 정보 없이 웹사이트나 앱에 로그인할 수 있도록 하는 차세대 인증 기술입니다.

## 특징
- 생체 인식 기술:
    - 지문: 스마트폰, 노트북 등 광범위하게 활용. 높은 편의성.
    - 얼굴: Face ID 등. 복잡한 알고리즘으로 위변조 방지.
    - 홍채/정맥: 보안성이 매우 높음. 특수 장비 필요.
    - 음성/서명: 행동적 특징을 기반으로 하는 생체 인식.
- FIDO (Fast IDentity Online):
    - 목표: 온라인 환경에서 패스워드 없이 안전하고 편리한 인증 방식을 제공하는 글로벌 표준.
    - 원리: 사용자의 생체 정보(지문, 얼굴 등)는 디바이스 내에 안전하게 저장되며, 공개키 암호 방식을 사용하여 서버에는 생체 정보 자체가 아닌 공개키만 저장됩니다.
    - 장점:
        - 보안성: 개인 생체 정보가 서버에 저장되지 않아 유출 위험이 적고, 피싱/스미싱 공격에 강함.
        - 편의성: 복잡한 비밀번호를 기억할 필요 없이 간단한 생체 인증으로 로그인.
        - 표준화: 다양한 디바이스와 서비스에 걸쳐 호환되는 표준 제공.
    - 주요 프로토콜:
        - UAF (Universal Authentication Framework): 패스워드 없는 인증.
        - U2F (Universal 2nd Factor): 2단계 인증.
        - FIDO2: 웹 표준(WebAuthn)을 기반으로 UAF와 U2F를 통합.
- 패스키 (Passkey):
    - 개념: FIDO2 표준을 기반으로 구축된, 비밀번호를 완전히 대체할 수 있는 새로운 인증 방식.
    - 특징:
        - 사용자 계정 정보(ID/PW) 없이 디바이스의 생체 인식 또는 화면 잠금 해제로 로그인.
        - 특정 웹사이트/앱에 고유하게 연결되어 피싱 공격에 강력.
        - 여러 디바이스에서 동기화되어 편리하게 사용 가능 (예: 스마트폰으로 PC 로그인).
        - Google, Apple, Microsoft 등 주요 기술 기업들이 적극 지원.
- MFA (다중 인증)와의 연관성: 생체 인증은 비밀번호를 대체하거나, 2단계 인증의 한 요소로 활용되어 MFA를 강화합니다.

