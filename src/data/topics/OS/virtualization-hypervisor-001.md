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
물리적 하드웨어 위에 가상 머신(VM)을 생성하여 여러 OS를 독립적으로 실행할 수 있게 하는 기술과 이를 관리하는 Hypervisor 기술.


## 특징
- 하드웨어 추상화: 물리 서버를 여러 VM으로 분할
- 격리성: 각 VM은 독립된 OS와 애플리케이션 실행
- 자원 효율: 서버 통합으로 하드웨어 활용률 향상
- 유연성: 스냅샷, 복제, 마이그레이션 지원

## 기술요소
- Type 1 Hypervisor (Bare-Metal):
  - 하드웨어 위에 직접 실행, OS 없이 동작
  - 성능 우수: 오버헤드 최소화
  - 예시: VMware ESXi, Xen, KVM (커널 모듈), Hyper-V
  - 용도: 데이터센터, 클라우드 인프라 (AWS, Azure)
- Type 2 Hypervisor (Hosted):
  - 호스트 OS 위에서 애플리케이션처럼 실행
  - 성능 낮음: OS 계층 추가 오버헤드
  - 예시: VirtualBox, VMware Workstation, Parallels Desktop
  - 용도: 개발/테스트 환경, 개인용
- 가상화 기술:
  - 전가상화 (Full Virtualization): 게스트 OS 수정 불필요, Binary Translation 또는 HW 지원
  - 반가상화 (Paravirtualization): 게스트 OS 수정, Hypercall로 직접 호출, 성능 향상
  - 하드웨어 지원: Intel VT-x, AMD-V로 네이티브 수준 성능
- Live Migration: 실행 중인 VM을 다른 호스트로 무중단 이동, 메모리 상태 복사
- 스냅샷: VM 상태 저장 및 복원, 백업 및 테스트

## 최신 트렌드
- Confidential Computing
- Nested Virtualization