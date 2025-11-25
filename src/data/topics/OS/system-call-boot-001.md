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
사용자 프로그램이 커널 기능을 요청하는 System Call과 컴퓨터가 전원 투입 후 OS를 메모리에 적재하는 부팅 과정입니다.

## 특징
- System Call: 사용자 모드 → 커널 모드 전환, open(), read(), write(), fork(), exec()
- 동작: 라이브러리 함수 호출 → Trap (인터럽트) → 커널 처리 → 결과 반환
- Shell vs Kernel: Shell은 사용자 인터페이스(bash, zsh), Kernel은 OS 핵심
- 부팅 과정: 1) 전원 → 2) BIOS/UEFI (하드웨어 초기화) → 3) MBR/GPT 읽기 → 4) Bootloader (GRUB) → 5) Kernel 로드 → 6) Init (systemd) → 7) 사용자 로그인
- BIOS vs UEFI: BIOS(레거시, 16비트, MBR), UEFI(최신, 32/64비트, GPT, Secure Boot)
- Kernel Load: 압축 해제, 메모리 초기화, 드라이버 로드
- Init System: SysVinit, Upstart, systemd (최신, 병렬 시작)

## 최신 트렌드
- Secure Boot
- Unified Kernel Image