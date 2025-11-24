---
id: digital-signature-pki-001
title: 전자서명 & PKI (Public Key Infrastructure)
category: digital-service
subcategory: 암호 기술
subjectCategories:
  - IS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 전자서명
  - PKI
  - 공개키 기반 구조
  - 인증서
  - CA
  - RA
importance: 5
relatedTopics:
  - cryptography-001
  - encryption-001
---

# 정의
전자서명은 공개키 암호 기술을 활용하여 전자 문서의 무결성, 송신자 인증, 부인 방지를 보장하는 기술입니다. PKI(Public Key Infrastructure)는 이러한 공개키 암호 시스템의 효율적이고 안전한 운영을 위한 인프라로, 공개키와 사용자 신원을 연결하는 디지털 인증서를 발행하고 관리합니다.

## 특징
- **전자서명 (Digital Signature)**:
    - **무결성**: 문서가 서명된 후 위변조되지 않았음을 확인.
    - **인증**: 서명자가 누구인지 신원을 확인.
    - **부인 방지**: 서명자가 나중에 서명 사실을 부인할 수 없도록 방지.
    - **원리**: 송신자가 개인키로 문서를 암호화(또는 해시값을 암호화)하여 서명하고, 수신자는 송신자의 공개키로 복호화하여 검증.
- **PKI (Public Key Infrastructure)**:
    - **구성 요소**:
        - **CA (Certification Authority)**: 인증 기관. 공개키와 소유자의 신원을 확인하고 디지털 인증서(공개키 인증서)를 발행.
        - **RA (Registration Authority)**: 등록 기관. CA를 대신하여 사용자 신원을 확인하고 인증서 발급을 CA에 요청.
        - **저장소 (Repository)**: 발행된 인증서를 저장하고 공개하는 곳.
        - **검증 시스템 (Validation System)**: 인증서의 유효성을 확인하는 시스템 (CRL, OCSP).
    - **디지털 인증서**: 공개키와 소유자 정보를 CA가 전자서명한 문서. X.509 표준을 따름.
    - **역할**: 공개키의 신뢰성을 보장하고, 키 관리 및 분배를 안전하게 수행.

