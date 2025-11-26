---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: storage-raid-001
importance: 4
keywords:
- RAID
- SAN
- NAS
- DAS
- 스트라이핑
- 미러링
relatedTopics:
- virtual-memory-001
- kubernetes-001
subcategory: 컴퓨터 구조
subjectCategories:
- CA
title: 스토리지/RAID
trends:
- NVMe over Fabrics
- Software-Defined Storage
- 오브젝트 스토리지
- 스토리지 클래스 메모리
---

# 정의
RAID(Redundant Array of Independent Disks)는 여러 디스크를 하나로 묶어 성능과 안정성을 향상시키는 기술이며, 스토리지 아키텍처는 데이터 저장 방식을 정의 기술.

## 특징
- RAID 레벨: RAID 0(스트라이핑, 성능↑, 안정성×), RAID 1(미러링, 안정성↑, 용량 1/2), RAID 5(분산 패리티, 최소 3개 디스크, 1개 장애 허용), RAID 6(이중 패리티, 2개 장애 허용), RAID 10(1+0, 미러링+스트라이핑, 성능+안정성)
- SAN/NAS/DAS: DAS(Direct Attached Storage)는 서버 직접 연결, NAS(Network Attached Storage)는 파일 수준 공유(NFS, CIFS), SAN(Storage Area Network)은 블록 수준 공유(FC, iSCSI), 고성능
- 스토리지 계층: Hot(SSD/NVMe, 자주 접근), Warm(SAS/SATA, 보통), Cold(Tape/Object Storage, 보관용)
- 성능 지표: IOPS(Input/Output Operations Per Second), 처리량(Throughput), 지연시간(Latency), 가용성(Availability)

## 기술요소
스토리지 시스템은 데이터의 저장, 관리, 접근을 담당하며, RAID(Redundant Array of Independent Disks) 기술과 다양한 스토리지 아키텍처를 통해 성능과 안정성을 향상시킵니다.

-   **RAID (Redundant Array of Independent Disks) 기술**: 여러 개의 물리적 디스크를 묶어 하나의 논리적 디스크처럼 사용하는 기술로, 성능 향상, 데이터 안정성, 가용성 증대를 목표로 합니다.
    -   **RAID 0 (스트라이핑)**:
        -   **원리**: 데이터를 블록 단위로 분할하여 여러 디스크에 분산 저장(스트라이핑).
        -   **특징**: 읽기/쓰기 성능이 가장 빠르지만, 한 디스크라도 장애 발생 시 모든 데이터 손실(안정성 낮음). 패리티 없음.
    -   **RAID 1 (미러링)**:
        -   **원리**: 데이터를 두 개의 디스크에 동일하게 복사(미러링).
        -   **특징**: 읽기 성능 향상, 쓰기 성능 저하. 한 디스크 장애 시에도 데이터 보존(안정성 높음). 디스크 용량이 50%만 사용(비용 효율성 낮음).
    -   **RAID 5 (분산 패리티)**:
        -   **원리**: 데이터와 패리티 정보를 모든 디스크에 분산 저장. 최소 3개 디스크 필요.
        -   **특징**: 읽기 성능 좋음, 쓰기 성능은 패리티 계산으로 약간 저하. 1개의 디스크 장애 허용. 가장 널리 사용되는 RAID 레벨 중 하나.
    -   **RAID 6 (이중 패리티)**:
        -   **원리**: 두 개의 독립적인 패리티 정보를 디스크에 분산 저장. 최소 4개 디스크 필요.
        -   **특징**: RAID 5보다 안정성이 높고, 2개의 디스크 장애 허용. 쓰기 성능은 RAID 5보다 더 저하.
    -   **RAID 10 (RAID 1+0)**:
        -   **원리**: RAID 1(미러링)으로 디스크 쌍을 구성한 후, 이 쌍들을 다시 RAID 0(스트라이핑)으로 묶는 방식. 최소 4개 디스크 필요.
        -   **특징**: 높은 성능과 안정성을 동시에 제공. 디스크 용량의 50% 사용(비용 효율성 낮음).

-   **스토리지 아키텍처**:
    -   **DAS (Direct Attached Storage)**:
        -   **원리**: 서버에 저장 장치(HDD, SSD)를 직접 연결하는 방식.
        -   **특징**: 설치 및 구성이 간단하고 저렴. 확장성 및 공유 기능 제한적.
    -   **NAS (Network Attached Storage)**:
        -   **원리**: 전용 파일 서버가 네트워크를 통해 파일 단위로 데이터를 공유. (NFS, SMB/CIFS 프로토콜 사용).
        -   **특징**: 여러 클라이언트가 파일을 공유하기 용이. SAN 대비 성능은 낮음.
    -   **SAN (Storage Area Network)**:
        -   **원리**: 서버와 스토리지를 전용 네트워크(Fiber Channel, iSCSI)로 연결하여 블록 단위로 데이터를 공유.
        -   **특징**: 고성능, 고가용성. 대규모 데이터베이스, 가상화 환경에 적합.

-   **차세대 스토리지 기술**:
    -   **NVMe (Non-Volatile Memory Express)**: PCIe 기반의 고속 스토리지 인터페이스로, 기존 SATA/SAS 대비 훨씬 빠른 I/O 성능을 제공.
    -   **NVMe over Fabrics (NVMe-oF)**: NVMe 프로토콜을 네트워크(RDMA, TCP/IP)를 통해 확장하여 원격 스토리지에 대한 NVMe 성능을 제공.
    -   **Software-Defined Storage (SDS)**: 스토리지 하드웨어와 제어 평면을 분리하여 소프트웨어로 스토리지를 유연하게 관리하고 자동화하는 기술.
    -   **오브젝트 스토리지 (Object Storage)**: 데이터를 객체(Object) 단위로 저장하고 관리하는 스토리지. 비정형 데이터(이미지, 동영상 등) 저장에 적합. (AWS S3)

이러한 스토리지 및 RAID 기술들은 데이터의 안전성, 접근성, 성능 요구사항에 따라 적절히 조합되어 사용됩니다.