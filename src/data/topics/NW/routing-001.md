---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: routing-001
importance: 5
keywords:
- OSPF
- BGP
- 거리 벡터
- 링크 상태
- AS
relatedTopics:
- osi-7layer-001
- tcpip-001
- network-security-001
subcategory: 네트워크
subjectCategories:
- NW
title: 라우팅 프로토콜 (Routing Protocol)
---

# 정의
네트워크에서 최적의 경로를 찾아 패킷을 전달하기 위한 프로토콜로, 내부/외부 라우팅 프로토콜로 구분됩니다 기술.


## 동작원리
라우팅 프로토콜은 다음과 같은 방식으로 최적 경로를 찾아 패킷을 전달합니다:

**1. 거리 벡터 (Distance Vector) 방식**
각 라우터가 인접 라우터로부터 거리 정보를 받아 라우팅 테이블을 업데이트합니다.

RIP (Routing Information Protocol) 동작:
1) 각 라우터가 자신의 라우팅 테이블을 인접 라우터에게 주기적으로 전송 (30초마다)
2) 받은 정보를 바탕으로 Bellman-Ford 알고리즘으로 최단 경로 계산
3) 거리 = 홉 수 (최대 15홉, 16홉은 무한대로 간주)
4) 라우팅 테이블 업데이트 후 다시 전파

특징:
- 장점: 구현 간단, 설정 쉬움
- 단점: 느린 수렴(Convergence), Count-to-Infinity 문제

**2. 링크 상태 (Link State) 방식**
각 라우터가 전체 네트워크 토폴로지를 파악하여 최적 경로를 계산합니다.

OSPF (Open Shortest Path First) 동작:
1) 각 라우터가 LSA(Link State Advertisement)를 플러딩하여 링크 상태 정보 전파
2) 모든 라우터가 동일한 LSDB(Link State Database)를 구축
3) Dijkstra의 SPF(Shortest Path First) 알고리즘으로 최단 경로 트리 생성
4) 토폴로지 변경 시에만 업데이트 전송

OSPF 주요 개념:
- Area: 네트워크를 여러 영역으로 분할하여 확장성 향상 (Area 0: Backbone)
- DR/BDR: 브로드캐스트 네트워크에서 대표 라우터 선출
- 메트릭: Cost (대역폭 기반, 100Mbps/인터페이스 대역폭)

특징:
- 장점: 빠른 수렴, 계층적 설계, VLSM/CIDR 지원
- 단점: 복잡한 설정, 높은 CPU/메모리 사용

**3. 경로 벡터 (Path Vector) 방식**
AS(Autonomous System) 간 라우팅을 위한 방식입니다.

BGP (Border Gateway Protocol) 동작:
1) eBGP: AS 간 라우팅 정보 교환
2) iBGP: AS 내부 라우터 간 BGP 정보 공유
3) 경로 속성(Path Attributes)을 기반으로 최적 경로 선택:
   - AS_PATH: 경유하는 AS 목록 (짧을수록 우선)
   - NEXT_HOP: 다음 홉 주소
   - LOCAL_PREF: 로컬 우선순위 (높을수록 우선)
   - MED: 외부로 나가는 경로 선호도

4) 정책 기반 라우팅: 관리자 정책에 따라 경로 제어

특징:
- 인터넷의 핵심 라우팅 프로토콜
- AS_PATH로 루프 방지
- 정책 기반 라우팅 가능

**4. 라우팅 테이블 구축 및 패킷 전달**
1) 라우팅 프로토콜이 최적 경로를 계산하여 라우팅 테이블에 저장
2) 패킷 수신 시 목적지 IP 주소를 라우팅 테이블과 비교 (Longest Prefix Match)
3) 다음 홉(Next Hop) 주소로 패킷 포워딩
4) TTL(Time To Live) 감소, 0이 되면 패킷 폐기

## 특징
- 거리 벡터: RIP, 홉 수 기반, Bellman-Ford 알고리즘, 주기적 업데이트, 느린 수렴
- 링크 상태: OSPF, 전체 토폴로지 인식, Dijkstra 알고리즘, 빠른 수렴
- BGP: AS 간 라우팅, Path Vector 방식, 정책 기반 라우팅, 인터넷 백본
- OSPF: Area 개념, DR/BDR, Cost 메트릭, VLSM 지원
- 라우팅 메트릭: 홉 수(RIP), 대역폭(OSPF), 지연, 신뢰성, 비용
- IGP vs EGP: IGP(AS 내부, RIP/OSPF), EGP(AS 간, BGP)
- Static vs Dynamic: 정적 라우팅(수동 설정) vs 동적 라우팅(자동 계산)