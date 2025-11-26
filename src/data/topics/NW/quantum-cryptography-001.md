---
category: digital-service
certifications:
- information-management
difficulty: advanced
id: quantum-cryptography-001
importance: 3
keywords:
- Quantum Cryptography
- QKD
- Quantum Key Distribution
- 양자 암호
- 양자 통신
- Post-Quantum
relatedTopics:
- security-solution-001
- quantum-computing-001
subcategory: 네트워크 보안
subjectCategories:
- NW
- IS
- DS
tags:
- '2025'
title: 양자 암호 통신 (QKD)
trends:
- 양자 내성 암호 (PQC)
- 양자 인터넷
---

# 정의
양자역학 원리를 활용하여 도청이 불가능한 암호키를 분배하는 차세대 보안 통신 기술.

## 동작원리
양자 암호 통신은 양자역학 원리를 활용하여 도청 불가능한 키 분배를 제공합니다:

1. BB84 프로토콜 동작 (가장 널리 사용)

1단계: 양자 상태 전송
- Alice가 무작위 비트 (0 또는 1)를 생성
- 무작위 기저 (Rectilinear: +, Diagonal: ×) 선택
- 편광된 광자(Photon)로 전송
  - + 기저: 0→↑, 1→→
  - × 기저: 0→↗, 1→↖

2단계: Bob의 측정
- Bob도 무작위 기저로 광자 측정
- 기저가 일치하면 정확한 값 측정
- 기저가 불일치하면 무작위 값 측정

3단계: 기저 공개 및 키 생성
- Alice와 Bob이 사용한 기저를 공개 채널로 공유
- 기저가 일치한 비트만 유지 → Sifted Key
- 불일치 비트는 폐기

4단계: 도청 검출
- Sifted Key의 일부를 공개 비교
- 오류율이 threshold 이상이면 도청 의심
- 하이젠베르크 불확정성 원리: 도청자(Eve)가 측정하면 양자 상태 변화

5단계: Privacy Amplification
- 오류 정정 및 프라이버시 증폭
- 최종 안전한 비밀키 생성
- 대칭키 암호 (AES)에 사용

2. E91 프로토콜 (양자 얽힘 기반)

양자 얽힘 (Quantum Entanglement) 활용:
1) 얽힌 광자 쌍 생성 (EPR Pair)
2) 한 쪽은 Alice, 다른 쪽은 Bob에게 전송
3) 각자 무작위 기저로 측정
4) 측정 결과가 상관관계를 가짐 (Bell Inequality 위배)
5) 도청 시 상관관계 변화로 감지

3. 양자 키 분배 (QKD) 시스템 구성

송신부 (Alice)
- 광자 발생기: 약한 레이저 펄스 또는 단일 광자
- 편광기: 양자 상태 인코딩

전송 채널
- 광섬유: 도시 간 연결 (최대 100km)
- 자유 공간: 위성 통신 (수천 km)

수신부 (Bob)
- 광자 검출기: APD (Avalanche Photo Diode)
- 편광 분석기: 양자 상태 측정

4. 양자 컴퓨팅 위협과 PQC

양자 컴퓨터 위협:
- Shor 알고리즘: RSA, ECC 등 공개키 암호 해독 가능
- 현재 암호화된 데이터를 저장 후 나중에 해독 (Harvest Now, Decrypt Later)

PQC (Post-Quantum Cryptography):
- 양자 컴퓨터로도 해독 어려운 암호
- NIST 표준: CRYSTALS-Kyber (키 교환), CRYSTALS-Dilithium (전자서명)
- 격자 기반 암호 (Lattice-based), 해시 기반

QKD vs PQC:
- QKD: 물리적 보안 (하드웨어 필요)
- PQC: 수학적 보안 (소프트웨어 업데이트)

## 특징
- QKD (Quantum Key Distribution): 양자 상태(광자)로 암호키 안전 분배
- 핵심 원리: 양자 중첩, 양자 얽힘, 하이젠베르크 불확정성 원리
- 보안성: 도청 시 양자 상태 붕괴/변화로 즉시 감지, 무조건적 보안
- 프로토콜: BB84 (편광 기반), E91 (양자 얽힘), B92 (2상태)
- 양자 컴퓨팅 위협: Shor 알고리즘으로 RSA, ECC 등 공개키 암호 해독 가능
- PQC (Post-Quantum Cryptography): 양자 컴퓨터 공격 대비 암호 (격자 기반, 해시 기반)
- 상용화: 한국 (KT), 중국 (양자 위성 墨子號), 유럽 (OpenQKD), 실험 네트워크 구축
- 사용 사례: 금융 거래, 국방 통신, 정부 기관, 데이터센터 간 연결

## 최신 트렌드
- 양자 내성 암호 (PQC)
- 양자 인터넷