---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: file-system-001
importance: 5
keywords:
- File System
- Inode
- FAT
- NTFS
- EXT4
- Journaling
relatedTopics:
- virtual-memory-001
- storage-raid-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: 파일 시스템 (Inode, FAT, NTFS, EXT4)
trends:
- Copy-on-Write FS (Btrfs, ZFS)
- F2FS (Flash-Friendly)
---

# 정의
디스크에 파일을 저장, 관리, 검색하는 체계로, 메타데이터와 데이터 블록을 효율적으로 구조화 기술.


## 특징
- Inode (Index Node): Unix/Linux 파일 메타데이터 (권한, 소유자, 크기, 블록 주소), 파일명은 디렉토리에 저장
- FAT (File Allocation Table): MS-DOS/Windows, 간단한 구조, 플래시 메모리 호환
- NTFS (New Technology FS): Windows, 저널링, ACL, 압축/암호화, 대용량 지원
- EXT4 (Extended FS): Linux 표준, 저널링, Extent 기반, 최대 1EB 지원
- Journaling: 메타데이터 변경 사항을 로그에 기록, 시스템 장애 시 복구 빠름
- VFS (Virtual File System): OS가 다양한 파일 시스템을 통합 인터페이스로 제공
- 최신 FS: Btrfs (CoW, 스냅샷), ZFS (데이터 무결성), XFS (대용량)

## 동작원리
파일 시스템은 파일 접근과 메타데이터 관리를 다음과 같이 수행합니다:

EXT4 파일 읽기 과정
1) 파일 열기: open("/home/user/file.txt")
2) 디렉토리 탐색
   - 루트 디렉토리(/) Inode 읽기
   - /home 디렉토리 엔트리에서 "home"의 Inode 번호 찾기
   - /home/user 엔트리에서 "user"의 Inode 번호 찾기
   - 최종적으로 "file.txt"의 Inode 번호 획득
3) Inode 읽기
   - Inode 테이블에서 해당 Inode 로드
   - 파일 크기, 권한, 블록 주소 확인
4) 데이터 블록 읽기
   - Direct Block: 직접 블록 주소 (12개)
   - Indirect Block: 간접 블록 (1단계, 2단계, 3단계)
   - Extent (EXT4): 연속된 블록을 범위로 표현
5) 데이터 반환

Inode 구조
- 메타데이터: 크기, 소유자, 권한, 타임스탬프
- 블록 포인터:
  - 12개 Direct Block (48KB)
  - 1개 Single Indirect (최대 4MB)
  - 1개 Double Indirect (최대 4GB)
  - 1개 Triple Indirect (최대 4TB)

Journaling 동작 (저널링)
1) 파일 쓰기 요청
2) Journal에 트랜잭션 기록
   - Begin Transaction
   - 변경할 메타데이터/데이터 기록
   - Commit Transaction
3) 실제 파일 시스템에 반영
4) Journal에서 트랜잭션 삭제
5) 장애 발생 시: Journal 재생(Replay)으로 복구

FAT32 동작
- FAT 테이블: 각 클러스터의 다음 클러스터 번호 저장
- 파일 읽기: FAT 체인 따라가기
  - 예: 클러스터 2 → FAT[2]=3 → FAT[3]=4 → FAT[4]=EOF

## 최신 트렌드
- Copy-on-Write FS (Btrfs, ZFS)
- F2FS (Flash-Friendly)