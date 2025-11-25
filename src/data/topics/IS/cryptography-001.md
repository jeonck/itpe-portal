---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: cryptography-001
importance: 5
keywords:
- 대칭키 암호
- 공개키 암호
- 해시 함수
- 기밀성
- 무결성
- 인증
relatedTopics:
- encryption-001
- pqc-001
- homomorphic-encryption-001
subcategory: 암호 기술
subjectCategories:
- IS
title: 암호학 (Cryptography)
---

# 정의
암호학은 정보의 기밀성, 무결성, 인증, 부인 방지 등의 보안 목표를 달성하기 위해 수학적 알고리즘과 원리를 사용하는 학문입니다. 데이터를 안전하게 보호하고 통신하는 데 필수적인 기반 기술입니다.

## 특징
- 대칭키 암호 (Symmetric-key Cryptography):
    - 암호화와 복호화에 동일한 암호키를 사용합니다.
    - 속도가 빠르며, 대용량 데이터 암호화에 적합합니다.
    - 키 배송 및 관리가 어렵다는 단점이 있습니다.
    - 알고리즘: AES (Advanced Encryption Standard), DES, SEED 등.
- 공개키 암호 (Public-key Cryptography) / 비대칭키 암호:
    - 암호화와 복호화에 서로 다른 한 쌍의 키(공개키, 개인키)를 사용합니다.
    - 공개키는 누구나 알 수 있으며, 개인키는 소유자만 가집니다.
    - 키 배송 문제가 해결되며, 디지털 서명, 키 교환 등에 사용됩니다.
    - 속도가 느려 대용량 데이터 암호화에는 적합하지 않습니다.
    - 알고리즘: RSA, ECC (Elliptic Curve Cryptography) 등.
- 해시 함수 (Hash Function):
    - 임의 길이의 데이터를 고정된 길이의 메시지 다이제스트(해시 값)로 변환하는 단방향 함수입니다.
    - 데이터의 무결성을 검증하고, 비밀번호 저장 등에 사용됩니다.
    - 특징: 단방향성, 충돌 회피성, 눈사태 효과.
    - 알고리즘: SHA-256, SHA-3 (Keccak) 등.
- 기타 암호 기술: 디지털 서명, 키 교환 프로토콜 (Diffie-Hellman), PKI 등.

# 정의
암호학은 정보의 기밀성, 무결성, 인증, 부인 방지 등의 보안 목표를 달성하기 위해 수학적 알고리즘과 원리를 사용하는 학문입니다. 데이터를 안전하게 보호하고 통신하는 데 필수적인 기반 기술입니다.

## 특징
- 대칭키 암호 (Symmetric-key Cryptography):
    - 암호화와 복호화에 동일한 암호키를 사용합니다.
    - 속도가 빠르며, 대용량 데이터 암호화에 적합합니다.
    - 키 배송 및 관리가 어렵다는 단점이 있습니다.
    - 알고리즘: AES (Advanced Encryption Standard), DES, SEED 등.
- 공개키 암호 (Public-key Cryptography) / 비대칭키 암호:
    - 암호화와 복호화에 서로 다른 한 쌍의 키(공개키, 개인키)를 사용합니다.
    - 공개키는 누구나 알 수 있으며, 개인키는 소유자만 가집니다.
    - 키 배송 문제가 해결되며, 디지털 서명, 키 교환 등에 사용됩니다.
    - 속도가 느려 대용량 데이터 암호화에는 적합하지 않습니다.
    - 알고리즘: RSA, ECC (Elliptic Curve Cryptography) 등.
- 해시 함수 (Hash Function):
    - 임의 길이의 데이터를 고정된 길이의 메시지 다이제스트(해시 값)로 변환하는 단방향 함수입니다.
    - 데이터의 무결성을 검증하고, 비밀번호 저장 등에 사용됩니다.
    - 특징: 단방향성, 충돌 회피성, 눈사태 효과.
    - 알고리즘: SHA-256, SHA-3 (Keccak) 등.
- 기타 암호 기술: 디지털 서명, 키 교환 프로토콜 (Diffie-Hellman), PKI 등.