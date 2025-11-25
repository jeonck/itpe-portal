---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: cloud-infra-001
importance: 5
keywords:
- 가상화
- Hypervisor
- Container
- Docker
- KVM
- VMware
relatedTopics:
- kubernetes-001
- msa-001
- storage-raid-001
subcategory: 클라우드 컴퓨팅
subjectCategories:
- DS
- CA
title: 클라우드 인프라
trends:
- eBPF 기반 네트워킹
- WebAssembly 런타임
- Confidential Computing
- Serverless Containers
---

# 정의
클라우드 컴퓨팅의 핵심 기술인 가상화와 컨테이너화를 통해 물리 자원을 효율적으로 활용하고 격리된 실행 환경을 제공합니다.

## 특징
- 가상화(Virtualization): 물리 서버를 여러 가상 머신(VM)으로 분할. Hypervisor가 핵심: Type 1(Bare-metal, KVM, Xen, VMware ESXi, 직접 하드웨어 제어, 고성능), Type 2(Hosted, VirtualBox, VMware Workstation, OS 위에서 실행, 편리)
- Container vs VM: VM은 하드웨어 가상화(독립 OS, 무거움, 강한 격리), Container는 OS 가상화(커널 공유, 가벼움, 빠른 시작). Container는 namespaces(격리), cgroups(자원 제한) 사용
- Docker: 컨테이너 플랫폼. Image(읽기 전용 템플릿), Container(실행 인스턴스), Dockerfile(빌드 스크립트), Registry(이미지 저장소). 계층화된 파일시스템(Union FS)으로 효율적 저장
- K8s(Kubernetes): 컨테이너 오케스트레이션. Pod(최소 배포 단위), Service(로드 밸런싱), Deployment(배포 관리), Auto Scaling, Self-healing

# 정의
클라우드 컴퓨팅의 핵심 기술인 가상화와 컨테이너화를 통해 물리 자원을 효율적으로 활용하고 격리된 실행 환경을 제공합니다.

## 특징
- 가상화(Virtualization): 물리 서버를 여러 가상 머신(VM)으로 분할. Hypervisor가 핵심: Type 1(Bare-metal, KVM, Xen, VMware ESXi, 직접 하드웨어 제어, 고성능), Type 2(Hosted, VirtualBox, VMware Workstation, OS 위에서 실행, 편리)
- Container vs VM: VM은 하드웨어 가상화(독립 OS, 무거움, 강한 격리), Container는 OS 가상화(커널 공유, 가벼움, 빠른 시작). Container는 namespaces(격리), cgroups(자원 제한) 사용
- Docker: 컨테이너 플랫폼. Image(읽기 전용 템플릿), Container(실행 인스턴스), Dockerfile(빌드 스크립트), Registry(이미지 저장소). 계층화된 파일시스템(Union FS)으로 효율적 저장
- K8s(Kubernetes): 컨테이너 오케스트레이션. Pod(최소 배포 단위), Service(로드 밸런싱), Deployment(배포 관리), Auto Scaling, Self-healing