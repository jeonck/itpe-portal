---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: sdn-nfv-001
importance: 5
keywords:
- SDN
- NFV
- OpenFlow
- 네트워크 가상화
- 중앙집중 제어
relatedTopics:
- sd-wan-001
- 5g-001
- cloud-infra-001
subcategory: 네트워크 가상화
subjectCategories:
- NW
- DS
tags:
- '2025'
title: SDN & NFV (소프트웨어 정의 네트워크)
trends:
- Intent-Based Networking
- Cloud-Native NFV
---

# 정의
네트워크를 소프트웨어로 제어하는 SDN과, 네트워크 기능을 가상화하는 NFV를 통해 유연하고 자동화된 네트워크를 구축 기술.

## 특징
- SDN: 제어 플레인과 데이터 플레인 분리로 중앙집중 네트워크 제어
- OpenFlow: SDN 프로토콜, Flow Table 기반 프로그래밍 가능한 스위치 제어
- SDN 컨트롤러: 중앙집중 네트워크 제어, 정책 기반 자동화, 실시간 트래픽 최적화
- NFV: 방화벽, 라우터 등 네트워크 기능을 소프트웨어(VM/컨테이너)로 구현
- 장점: 유연성, 자동화, 비용 절감(전용 하드웨어 불필요), 빠른 서비스 배포
- 사용 사례: 데이터센터 네트워크, 5G 코어 네트워크, SD-WAN, vCPE
- SDN + NFV 결합: SDN 컨트롤러가 NFV 인프라를 제어하여 End-to-End 자동화

## 기술요소
SDN과 NFV는 다음과 같은 계층 구조로 구성됩니다:

**SDN 아키텍처 (3계층)**

1. 애플리케이션 계층 (Application Layer)
   네트워크 자동화, 보안, QoS 등 비즈니스 로직을 구현합니다.
   - 트래픽 엔지니어링, 방화벽 정책, 로드 밸런싱

2. 제어 계층 (Control Plane)
   중앙집중식 SDN 컨트롤러가 네트워크 전체를 관리합니다.
   - SDN 컨트롤러: ONOS, OpenDaylight, Floodlight
   - Northbound API: RESTful API (애플리케이션과 통신)
   - Southbound API: OpenFlow, NETCONF (스위치 제어)

3. 데이터 계층 (Data Plane)
   실제 패킷을 전달하는 네트워크 장비입니다.
   - OpenFlow 스위치, OpenvSwitch
   - Flow Table 기반 패킷 포워딩

**NFV 아키텍처 (ETSI NFV MANO)**

1. VNF (Virtual Network Function)
   가상화된 네트워크 기능입니다.
   - vRouter, vFirewall, vIPS, vLB, vEPC

2. NFVI (NFV Infrastructure)
   VNF가 실행되는 하드웨어 및 가상화 계층입니다.
   - 컴퓨트: 서버, CPU, 메모리
   - 스토리지: SAN, NAS
   - 네트워크: 스위치, NIC
   - 가상화: KVM, VMware, Docker/Kubernetes

3. MANO (Management and Orchestration)
   VNF 라이프사이클과 리소스를 관리합니다.
   - NFVO: 네트워크 서비스 오케스트레이션
   - VNFM: VNF 생성, 확장, 종료 관리
   - VIM: 가상 리소스 관리 (OpenStack, Kubernetes)

## 최신 트렌드
- Intent-Based Networking
- Cloud-Native NFV