---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: kernel-architecture-001
importance: 4
keywords:
- Monolithic Kernel
- Microkernel
- Unikernel
- Hybrid Kernel
- Kernel Architecture
relatedTopics:
- process-thread-001
- virtualization-hypervisor-001
subcategory: 운영체제
subjectCategories:
- OS
tags:
- '2025'
title: 커널 아키텍처 (모놀리식 vs 마이크로 vs Unikernel)
trends:
- Unikernel
- Rust Kernel
---

# 정의
운영체제 커널의 설계 방식으로, 기능의 배치와 통신 방식에 따라 모놀리식, 마이크로, Unikernel로 분류됩니다 방식.


## 특징
- Monolithic Kernel (모놀리식): 모든 OS 서비스가 커널 공간에서 실행, 빠름, 복잡
- 예시: Linux, Unix, FreeBSD
- 장점: 성능 우수 (직접 호출), 단점: 오류 시 전체 시스템 장애
- Microkernel (마이크로): 최소 기능만 커널에, 나머지는 사용자 공간, 안정적
- 예시: Minix, QNX, L4
- 장점: 모듈성, 안정성, 단점: IPC 오버헤드
- Hybrid Kernel: 절충안, Windows NT, macOS (XNU)
- Unikernel: 단일 주소 공간, 애플리케이션과 OS 통합, 클라우드/엣지 최적화
- 장점: 빠른 부팅, 작은 크기, 보안, 단점: 범용성 부족

## 최신 트렌드
- Unikernel
- Rust Kernel