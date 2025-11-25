---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: virtualization-hypervisor-001
importance: 5
keywords:
- Virtualization
- Hypervisor
- Type 1
- Type 2
- KVM
- VMware
- Xen
relatedTopics:
- cloud-infra-001
- kubernetes-001
subcategory: 운영체제
subjectCategories:
- OS
- DS
tags:
- '2025'
title: 가상화 & Hypervisor (Type 1/2)
trends:
- Confidential Computing
- Nested Virtualization
---

# 정의
물리적 하드웨어 위에 가상 머신(VM)을 생성하여 여러 OS를 독립적으로 실행할 수 있게 하는 기술과 이를 관리하는 Hypervisor입니다.

## 특징
- Type 1 (Bare-Metal): 하드웨어 직접 실행, 성능 우수, 데이터센터용
- 예시: VMware ESXi, Xen, KVM, Hyper-V
- Type 2 (Hosted): 호스트 OS 위에 실행, 개발/테스트용, 성능 낮음
- 예시: VirtualBox, VMware Workstation, Parallels
- 가상화 기술: 전가상화 (Full), 반가상화 (Para), 하드웨어 지원 (Intel VT-x, AMD-V)
- 장점: 자원 효율, 격리성, 이식성, 스냅샷, 마이그레이션
- Live Migration: 실행 중인 VM을 다른 호스트로 무중단 이동
- 사용 사례: 클라우드 컴퓨팅, 서버 통합, 개발 환경

## 최신 트렌드
- Confidential Computing
- Nested Virtualization
