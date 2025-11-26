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
클라우드 컴퓨팅의 핵심 기술인 가상화와 컨테이너화를 통해 물리 자원을 효율적으로 활용하고 격리된 실행 환경을 제공 기술.


## 특징
- 가상화(Virtualization): 물리 서버를 여러 가상 머신(VM)으로 분할. Hypervisor가 핵심: Type 1(Bare-metal, KVM, Xen, VMware ESXi, 직접 하드웨어 제어, 고성능), Type 2(Hosted, VirtualBox, VMware Workstation, OS 위에서 실행, 편리)
- Container vs VM: VM은 하드웨어 가상화(독립 OS, 무거움, 강한 격리), Container는 OS 가상화(커널 공유, 가벼움, 빠른 시작). Container는 namespaces(격리), cgroups(자원 제한) 사용
- Docker: 컨테이너 플랫폼. Image(읽기 전용 템플릿), Container(실행 인스턴스), Dockerfile(빌드 스크립트), Registry(이미지 저장소). 계층화된 파일시스템(Union FS)으로 효율적 저장
- K8s(Kubernetes): 컨테이너 오케스트레이션. Pod(최소 배포 단위), Service(로드 밸런싱), Deployment(배포 관리), Auto Scaling, Self-healing

## 기술요소
클라우드 인프라는 물리적 자원을 추상화하고 효율적으로 관리하기 위해 다양한 기술 요소들을 활용합니다.

-   **가상화 (Virtualization)**:
    -   **정의**: 하나의 물리적 하드웨어 리소스(서버, 스토리지, 네트워크 등)를 논리적으로 여러 개의 가상 리소스로 분할하여 활용하는 기술.
    -   **Hypervisor (하이퍼바이저)**:
        -   **역할**: 물리 하드웨어 위에 가상 머신(VM)을 생성하고 관리하는 소프트웨어 계층.
        -   **Type 1 (Bare-metal Hypervisor)**: 물리 하드웨어에 직접 설치되어 VM을 생성. 높은 성능과 효율성. (예: VMware ESXi, KVM, Xen)
        -   **Type 2 (Hosted Hypervisor)**: 기존 운영체제 위에 애플리케이션 형태로 설치되어 VM을 생성. 편리하지만 성능 오버헤드 발생. (예: VirtualBox, VMware Workstation)
    -   **가상 머신 (VM, Virtual Machine)**: 하이퍼바이저를 통해 생성된 독립적인 운영체제 환경. 하드웨어 전체를 가상화하여 게스트 OS가 완벽히 독립적으로 동작.

-   **컨테이너 (Container)**:
    -   **정의**: 애플리케이션과 그 실행에 필요한 모든 환경(코드, 런타임, 시스템 도구, 라이브러리 등)을 패키징하는 경량의 가상화 기술.
    -   **주요 기술**:
        -   **Namespace**: 프로세스, 네트워크, 파일 시스템 등 리소스를 격리하여 컨테이너가 독립적인 환경을 가지도록 합니다.
        -   **cgroups (Control Groups)**: CPU, 메모리, I/O 등 컨테이너가 사용할 수 있는 시스템 자원을 제한합니다.
    -   **장점**: VM 대비 빠른 시작 시간, 적은 오버헤드, 높은 자원 활용률, 높은 이식성.

-   **컨테이너 플랫폼**:
    -   **Docker (도커)**: 컨테이너를 생성, 배포, 관리하는 데 사용되는 오픈소스 플랫폼.
        -   **Dockerfile**: 컨테이너 이미지를 생성하기 위한 스크립트.
        -   **Docker Image**: 애플리케이션 실행에 필요한 모든 것을 포함하는 읽기 전용 템플릿.
        -   **Docker Container**: 도커 이미지의 실행 인스턴스.
        -   **Docker Registry**: 도커 이미지를 저장하고 공유하는 공간.
    -   **Kubernetes (쿠버네티스, K8s)**: 컨테이너화된 워크로드와 서비스를 자동으로 배포, 스케일링, 관리하는 오픈소스 시스템 (컨테이너 오케스트레이션).
        -   **Pod**: 쿠버네티스에서 배포되는 최소 단위로, 하나 이상의 컨테이너를 포함.
        -   **Deployment**: Pod의 복제본 수를 관리하고 롤링 업데이트, 롤백 등을 자동화.
        -   **Service**: Pod 그룹에 대한 안정적인 네트워크 엔드포인트(로드 밸런싱)를 제공.
        -   **ReplicaSet**: 지정된 수의 Pod 복제본을 항상 유지.

-   **소프트웨어 정의 네트워킹 (SDN, Software-Defined Networking)**:
    -   네트워크의 제어부(Control Plane)와 데이터 전달부(Data Plane)를 분리하여 네트워크를 소프트웨어로 유연하게 제어. (SDN 토픽 참조)

-   **스토리지 가상화**:
    -   여러 물리적 스토리지 장치를 통합하여 하나의 논리적인 스토리지 풀로 제공하고, 이를 가상 머신이나 컨테이너에 할당. (SAN, NAS)

이러한 기술 요소들은 클라우드 환경에서 자원의 효율적인 활용, 유연한 확장성, 안정적인 서비스 제공을 가능하게 합니다.