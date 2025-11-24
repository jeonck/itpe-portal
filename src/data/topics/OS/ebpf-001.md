---
id: ebpf-001
title: eBPF (extended Berkeley Packet Filter)
category: technical-focus
subcategory: 운영체제
subjectCategories:
  - OS
  - NW
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - eBPF
  - BPF
  - Kernel Programming
  - Observability
  - Cilium
importance: 5
relatedTopics:
  - kernel-architecture-001
  - container-docker-001
trends:
  - eBPF 기반 네트워킹 (Cilium)
  - eBPF 보안 (Falco, Tetragon)
tags:
  - '2025'
---

# 정의
Linux 커널을 안전하게 확장할 수 있는 프로그래밍 기술로, 커널 재컴파일 없이 커널 공간에서 코드를 실행합니다.

## 특징
- 동작 원리: 사용자 공간에서 eBPF 프로그램 작성 → 검증(Verifier) → JIT 컴파일 → 커널 실행
- 안전성: Verifier가 무한 루프, 메모리 침범 등 검증, 샌드박스 환경
- 활용 영역: 네트워킹, 보안, 트레이싱, 모니터링, 성능 분석
- BPF Maps: 사용자-커널 간 데이터 공유, Array, Hash, LRU, Ring Buffer 등
- XDP (eXpress Data Path): 패킷이 NIC에서 바로 처리, DDoS 방어
- 도구: bpftrace, bpfcc, Cilium (CNI), Falco (보안), Pixie (APM)
- 사용 사례: Kubernetes 네트워킹, 성능 프로파일링, 침입 탐지

## 최신 트렌드
- eBPF 기반 네트워킹 (Cilium)
- eBPF 보안 (Falco, Tetragon)
