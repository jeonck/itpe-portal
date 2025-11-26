---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: distributed-os-001
importance: 4
keywords:
- Distributed OS
- OpenStack
- Cloud OS
- Cluster
- 분산 시스템
relatedTopics:
- cloud-infra-001
- virtualization-hypervisor-001
subcategory: 운영체제
subjectCategories:
- OS
- DS
tags:
- '2025'
title: 분산 운영체제 & 클라우드 OS
trends:
- Kubernetes as OS
- Serverless OS
---

# 정의
여러 컴퓨터를 하나의 통합된 시스템처럼 관리하는 운영체제와 클라우드 인프라를 관리하는 OS 플랫폼.


## 특징
- 투명성: 여러 노드를 단일 시스템처럼 추상화
- 확장성: 노드 추가로 수평 확장 가능
- 고가용성: 장애 발생 시 자동 복구
- 자원 공유: 분산된 컴퓨팅, 스토리지, 네트워크 자원 통합 관리

## 기술요소
- 분산 OS 커널: Amoeba, Plan 9, Google Borg (Kubernetes의 전신) - 여러 노드를 단일 시스템 이미지로 제공
- OpenStack 구성 요소:
  - Nova: 가상 머신 생성 및 관리 (컴퓨팅)
  - Neutron: 네트워크 가상화 및 관리
  - Cinder: 블록 스토리지 관리
  - Swift: 오브젝트 스토리지
  - Keystone: 인증 및 권한 관리
- Kubernetes: 컨테이너 오케스트레이션으로 클라우드 네이티브 OS 역할 수행
- 가상화 레이어: KVM, Xen, VMware로 하드웨어 자원 추상화
- 분산 파일 시스템: GFS, HDFS, Ceph로 데이터 분산 저장 및 복제
- 오케스트레이션: Heat(OpenStack), Ansible, Terraform으로 인프라 자동화

## 최신 트렌드
- Kubernetes as OS
- Serverless OS