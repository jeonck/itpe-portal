---
id: blockchain-security-001
title: 블록체인 보안 (Smart Contract 취약점)
category: digital-service
subcategory: 블록체인
subjectCategories:
  - IS
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 블록체인 보안
  - 스마트 컨트랙트
  - 취약점
  - 재진입 공격
  - 프라이버시
importance: 4
relatedTopics:
  - blockchain-001
  - encryption-001
  - security-attack-001
trends:
  - DeFi 보안
  - NFT 보안
  - 블록체인 감사
---

# 정의
블록체인 보안은 블록체인 네트워크와 분산원장기술(DLT)의 고유한 특성을 보호하고, 스마트 컨트랙트의 취약점을 포함하여 다양한 공격으로부터 블록체인 기반 시스템을 안전하게 유지하는 분야입니다. 블록체인 자체의 암호화 기술과 분산 합의 메커니즘은 높은 수준의 보안을 제공하지만, 스마트 컨트랙트의 코드 오류나 구현상의 취약점은 치명적인 손실을 야기할 수 있습니다.

## 특징
- 블록체인 자체 보안 특성:
    - 분산 원장: 단일 실패 지점 없음, 데이터 위변조 어려움.
    - 암호화: 해시 함수, 공개키 암호화를 통한 데이터 무결성 및 인증.
    - 합의 알고리즘: 분산된 노드들이 데이터의 유효성을 검증하고 합의하여 이중 지불 방지.
- 블록체인 기반 시스템의 보안 위협:
    - 51% 공격: 특정 채굴 집단이 전체 네트워크 해시 파워의 51% 이상을 장악하여 이중 지불(Double Spending) 등 블록체인 조작 시도.
    - 프라이버시 침해: 블록체인의 투명성으로 인해 거래 내역이 공개되어 개인 정보 노출 가능성.
    - 스마트 컨트랙트 취약점:
        - 재진입 공격 (Reentrancy Attack): 컨트랙트가 외부 컨트랙트 호출 후 상태를 변경하기 전에 다시 호출되어 자금을 탈취하는 공격. (예: DAO 해킹)
        - 정수 오버플로우/언더플로우 (Integer Overflow/Underflow): 계산 결과가 자료형의 최대/최소값을 초과/미달하여 비정상적인 값이 되는 오류.
        - 프론트 러닝 (Front Running): 공격자가 다른 사용자의 트랜잭션을 미리 감지하고, 해당 트랜잭션보다 먼저 자신의 트랜잭션을 실행하여 이득을 취하는 행위.
        - 짧은 주소 공격 (Short Address Attack): 인자값(파라미터)이 불완전하게 전달되어 발생하는 취약점.
        - 시간 의존적 오류 (Timestamp Dependence): 블록체인 내 타임스탬프를 악용하여 조건부 실행을 조작.
    - 개인키 관리 미흡: 개인키 유출 시 자산 탈취 위험.
    - 오라클 공격 (Oracle Attack): 외부 데이터를 블록체인으로 가져오는 오라클의 정보가 위변조되거나 조작될 위험.
- 보안 대책: 스마트 컨트랙트 코드 감사, 정적/동적 분석, Formal Verification, 버그 바운티 프로그램, 다중서명 지갑, 하드웨어 지갑, 암호화 기술 적용(영지식 증명, 동형 암호) 등.

