---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: blockchain-001
importance: 4
keywords:
- 분산원장
- 합의 알고리즘
- 스마트 컨트랙트
- 암호화
relatedTopics:
- nft-001
- web3-001
- encryption-001
subcategory: Web/Service
subjectCategories:
- DS
- IS
title: 블록체인 (Blockchain)
trends:
- DeFi
- NFT
- CBDC
- Private Blockchain
---

# 정의
분산된 노드들이 공유하는 변경 불가능한 디지털 원장 기술로, 신뢰 없는 환경에서 거래의 투명성과 보안을 보장 기술.


## 특징
- 탈중앙화된 분산 시스템
- 블록 체인 구조로 변조 방지
- 합의 알고리즘 (PoW, PoS 등)
- 스마트 컨트랙트 실행

## 기술요소
블록체인은 데이터를 안전하고 투명하게 관리하기 위해 다음과 같은 핵심 기술 요소들을 결합합니다.

-   **블록 (Block)**:
    -   **정의**: 트랜잭션 데이터와 이전 블록의 해시 값을 포함하는 데이터 묶음.
    -   **구조**:
        -   **블록 헤더 (Block Header)**: 이전 블록 해시, 타임스탬프, 난스(Nonce), 머클 루트(Merkle Root) 등 메타데이터.
        -   **블록 바디 (Block Body)**: 실제 트랜잭션 데이터.
    -   **역할**: 데이터의 최소 저장 단위이며, 해시로 연결되어 체인을 형성.

-   **체인 (Chain)**:
    -   **정의**: 각 블록이 이전 블록의 해시 값을 포함하여 순차적으로 연결된 구조.
    -   **특징**: 한 번 생성된 블록은 변경할 수 없으며(불변성), 변경 시 이후 모든 블록의 해시 값이 변경되어 위변조가 불가능합니다(무결성).

-   **분산 원장 (Distributed Ledger)**:
    -   **정의**: 모든 참가자가 거래 기록을 공유하고 검증하는 분산된 데이터베이스.
    -   **특징**: 중앙 관리자가 없으며, 모든 참가자가 동일한 원장 사본을 가집니다(탈중앙화).

-   **암호화 기술**:
    -   **해시 함수 (Hash Function)**:
        -   블록 헤더의 해시 값 생성.
        -   트랜잭션 데이터의 무결성 검증(머클 트리).
        -   SHA-256과 같은 단방향 해시 함수 사용.
    -   **공개키 암호화 (Public Key Cryptography)**:
        -   사용자 인증 및 거래의 무결성, 부인 방지(전자서명).
        -   개인키(Private Key)로 거래에 서명하고, 공개키(Public Key)로 서명 검증.

-   **합의 알고리즘 (Consensus Mechanism)**:
    -   **정의**: 분산된 네트워크 참가자들이 거래의 유효성을 검증하고 블록을 생성하는 규칙에 동의하는 과정. 중앙 관리자 없이 데이터의 일관성과 신뢰성을 확보합니다.
    -   **주요 유형**:
        -   **PoW (Proof of Work, 작업 증명)**: 복잡한 연산(채굴)을 통해 블록을 생성할 권한을 얻는 방식. (예: 비트코인). 높은 보안성을 제공하지만 에너지 소모가 큼.
        -   **PoS (Proof of Stake, 지분 증명)**: 지분(코인 보유량)에 비례하여 블록 생성 및 검증 권한을 부여하는 방식. PoW 대비 에너지 효율적.
        -   **DPoS (Delegated Proof of Stake, 위임 지분 증명)**: PoS의 변형으로, 보유 지분을 통해 대표(Validator)를 선출하고 이들이 합의에 참여.
        -   **PBFT (Practical Byzantine Fault Tolerance)**: 비동기 분산 시스템에서 비잔틴 장애(일부 노드가 악의적으로 행동)를 허용하면서 합의에 도달.

-   **스마트 컨트랙트 (Smart Contract)**:
    -   **정의**: 블록체인 상에서 미리 정의된 조건에 따라 자동으로 실행되는 프로그램 코드.
    -   **특징**: 중개자 없이 투명하고, 위변조 불가능하며, 자율적으로 계약을 이행합니다. (예: 이더리움)

이러한 기술 요소들은 블록체인의 탈중앙화, 투명성, 불변성, 보안성을 보장하며 다양한 산업 분야에서 혁신적인 서비스 창출의 기반이 됩니다.

## 최신 트렌드
- DeFi
- NFT
- CBDC
- Private Blockchain