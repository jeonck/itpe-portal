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
RAID(Redundant Array of Independent Disks)는 여러 디스크를 하나로 묶어 성능과 안정성을 향상시키는 기술이며, 스토리지 아키텍처는 데이터 저장 방식을 정의합니다.

## 특징
- RAID 레벨: RAID 0(스트라이핑, 성능↑, 안정성×), RAID 1(미러링, 안정성↑, 용량 1/2), RAID 5(분산 패리티, 최소 3개 디스크, 1개 장애 허용), RAID 6(이중 패리티, 2개 장애 허용), RAID 10(1+0, 미러링+스트라이핑, 성능+안정성)
- SAN/NAS/DAS: DAS(Direct Attached Storage)는 서버 직접 연결, NAS(Network Attached Storage)는 파일 수준 공유(NFS, CIFS), SAN(Storage Area Network)은 블록 수준 공유(FC, iSCSI), 고성능
- 스토리지 계층: Hot(SSD/NVMe, 자주 접근), Warm(SAS/SATA, 보통), Cold(Tape/Object Storage, 보관용)
- 성능 지표: IOPS(Input/Output Operations Per Second), 처리량(Throughput), 지연시간(Latency), 가용성(Availability)

# 정의
RAID(Redundant Array of Independent Disks)는 여러 디스크를 하나로 묶어 성능과 안정성을 향상시키는 기술이며, 스토리지 아키텍처는 데이터 저장 방식을 정의합니다.

## 특징
- RAID 레벨: RAID 0(스트라이핑, 성능↑, 안정성×), RAID 1(미러링, 안정성↑, 용량 1/2), RAID 5(분산 패리티, 최소 3개 디스크, 1개 장애 허용), RAID 6(이중 패리티, 2개 장애 허용), RAID 10(1+0, 미러링+스트라이핑, 성능+안정성)
- SAN/NAS/DAS: DAS(Direct Attached Storage)는 서버 직접 연결, NAS(Network Attached Storage)는 파일 수준 공유(NFS, CIFS), SAN(Storage Area Network)은 블록 수준 공유(FC, iSCSI), 고성능
- 스토리지 계층: Hot(SSD/NVMe, 자주 접근), Warm(SAS/SATA, 보통), Cold(Tape/Object Storage, 보관용)
- 성능 지표: IOPS(Input/Output Operations Per Second), 처리량(Throughput), 지연시간(Latency), 가용성(Availability)