---
category: technical-focus
certifications:
- computer-systems
difficulty: intermediate
id: linux-file-permissions-001
importance: 5
keywords:
- Linux
- chmod
- chown
- File Permissions
- ACL
- umask
relatedTopics:
- file-system-001
- system-call-boot-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: Linux 파일 권한 (chmod, chown, ACL)
trends:
- SELinux
- AppArmor
---

# 정의
Linux/Unix 시스템에서 파일과 디렉토리에 대한 접근 권한을 관리하는 보안 메커니즘.


## 특징
- 권한 구조: User(소유자), Group(그룹), Others(기타), rwx (읽기/쓰기/실행)
- 표기: -rwxr-xr-- (파일 타입 + User(rwx) + Group(r-x) + Others(r--))
- 숫자 모드: r=4, w=2, x=1, 예: chmod 755 (rwxr-xr-x)
- chmod (Change Mode): 권한 변경, chmod 644 file.txt, chmod u+x script.sh
- chown (Change Owner): 소유자 변경, chown user:group file.txt
- umask: 기본 권한 마스크, 파일 생성 시 기본 권한 결정 (예: 022)
- 특수 권한: SUID (Set User ID), SGID (Set Group ID), Sticky Bit
- ACL (Access Control List): 세밀한 권한 제어, getfacl, setfacl
- 보안: SELinux (Mandatory Access Control), AppArmor

## 최신 트렌드
- SELinux
- AppArmor