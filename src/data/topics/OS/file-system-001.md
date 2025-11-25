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
디스크에 파일을 저장, 관리, 검색하는 체계로, 메타데이터와 데이터 블록을 효율적으로 구조화합니다.

## 특징
- Inode (Index Node): Unix/Linux 파일 메타데이터 (권한, 소유자, 크기, 블록 주소), 파일명은 디렉토리에 저장
- FAT (File Allocation Table): MS-DOS/Windows, 간단한 구조, 플래시 메모리 호환
- NTFS (New Technology FS): Windows, 저널링, ACL, 압축/암호화, 대용량 지원
- EXT4 (Extended FS): Linux 표준, 저널링, Extent 기반, 최대 1EB 지원
- Journaling: 메타데이터 변경 사항을 로그에 기록, 시스템 장애 시 복구 빠름
- VFS (Virtual File System): OS가 다양한 파일 시스템을 통합 인터페이스로 제공
- 최신 FS: Btrfs (CoW, 스냅샷), ZFS (데이터 무결성), XFS (대용량)

## 최신 트렌드
- Copy-on-Write FS (Btrfs, ZFS)
- F2FS (Flash-Friendly)

# 정의
디스크에 파일을 저장, 관리, 검색하는 체계로, 메타데이터와 데이터 블록을 효율적으로 구조화합니다.

## 특징
- Inode (Index Node): Unix/Linux 파일 메타데이터 (권한, 소유자, 크기, 블록 주소), 파일명은 디렉토리에 저장
- FAT (File Allocation Table): MS-DOS/Windows, 간단한 구조, 플래시 메모리 호환
- NTFS (New Technology FS): Windows, 저널링, ACL, 압축/암호화, 대용량 지원
- EXT4 (Extended FS): Linux 표준, 저널링, Extent 기반, 최대 1EB 지원
- Journaling: 메타데이터 변경 사항을 로그에 기록, 시스템 장애 시 복구 빠름
- VFS (Virtual File System): OS가 다양한 파일 시스템을 통합 인터페이스로 제공
- 최신 FS: Btrfs (CoW, 스냅샷), ZFS (데이터 무결성), XFS (대용량)

## 최신 트렌드
- Copy-on-Write FS (Btrfs, ZFS)
- F2FS (Flash-Friendly)