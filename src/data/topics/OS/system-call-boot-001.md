---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: system-call-boot-001
importance: 5
keywords:
- System Call
- Kernel
- Shell
- BIOS
- UEFI
- Bootloader
relatedTopics:
- kernel-architecture-001
- process-thread-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: System Call & 부팅 과정
trends:
- Secure Boot
- Unified Kernel Image
---

# 정의
사용자 프로그램이 커널 기능을 요청하는 System Call과 컴퓨터가 전원 투입 후 OS를 메모리에 적재하는 부팅 과정 기술.


## 특징
- 사용자-커널 인터페이스: System Call로 커널 기능 요청
- 부팅 단계별 초기화: 하드웨어 → 부트로더 → 커널 → 서비스
- 모드 전환: 사용자 모드와 커널 모드 분리로 보안 보장
- 표준화: POSIX System Call, UEFI 표준

## 동작원리
- System Call 동작 과정:
  - 1) 응용 프로그램이 라이브러리 함수 호출 (예: read())
  - 2) 라이브러리가 Trap 명령(인터럽트)으로 커널 모드 전환
  - 3) 커널이 System Call 번호로 해당 핸들러 실행
  - 4) 결과를 레지스터/메모리에 저장 후 사용자 모드로 복귀
- 주요 System Call: open(), read(), write(), fork(), exec(), mmap(), ioctl()
- Shell vs Kernel: Shell(bash, zsh)은 사용자 인터페이스 제공, Kernel은 OS 핵심(자원 관리)

- 부팅 과정 (Boot Process):
  - 1) 전원 투입: CPU가 BIOS/UEFI ROM 주소로 점프
  - 2) BIOS/UEFI: POST(Power-On Self-Test) 하드웨어 점검, 초기화
  - 3) MBR/GPT 읽기: 부트 디스크의 첫 섹터에서 부트로더 위치 확인
  - 4) Bootloader 실행: GRUB이 커널 이미지 선택 및 로드
  - 5) Kernel 로드: 압축 해제, 메모리 초기화, 드라이버 로드, 루트 파일 시스템 마운트
  - 6) Init 프로세스: systemd(최신), SysVinit(레거시)가 서비스 시작
  - 7) 사용자 로그인: 디스플레이 매니저 또는 TTY 제공
- BIOS vs UEFI: BIOS(16비트, MBR, 2TB 제한), UEFI(32/64비트, GPT, Secure Boot, GUI)

## 최신 트렌드
- Secure Boot
- Unified Kernel Image