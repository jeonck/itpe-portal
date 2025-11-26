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
- 3단계 권한 구조: User(소유자), Group(그룹), Others(기타)
- 3가지 권한 타입: Read(r), Write(w), Execute(x)
- 숫자/기호 표기: 8진수 또는 기호로 권한 표현
- 보안 기반: 파일 시스템 수준의 접근 제어

## 기능
- 기본 권한 구조: -rwxr-xr-- (파일 타입 + User(rwx) + Group(r-x) + Others(r--))
- 숫자 모드: r=4, w=2, x=1로 합산 (예: 755 = rwxr-xr-x, 644 = rw-r--r--)
- chmod (Change Mode): 권한 변경
  - 숫자 모드: chmod 755 file.txt
  - 기호 모드: chmod u+x script.sh, chmod g-w file.txt
- chown (Change Owner): 소유자/그룹 변경
  - chown user:group file.txt
  - chown -R user:group directory/
- umask: 파일 생성 시 기본 권한 마스크 (예: umask 022 → 파일 644, 디렉토리 755)
- 특수 권한:
  - SUID (Set User ID, 4000): 실행 시 소유자 권한으로 실행
  - SGID (Set Group ID, 2000): 실행 시 그룹 권한, 디렉토리에서 파일 상속
  - Sticky Bit (1000): /tmp처럼 소유자만 파일 삭제 가능
- ACL (Access Control List): getfacl, setfacl로 사용자별 세밀한 권한 제어

## 최신 트렌드
- SELinux
- AppArmor