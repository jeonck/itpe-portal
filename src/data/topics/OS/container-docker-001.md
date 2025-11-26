---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: container-docker-001
importance: 5
keywords:
- Docker
- Container
- cgroups
- namespace
- OCI
- containerd
relatedTopics:
- kubernetes-001
- virtualization-hypervisor-001
subcategory: 운영체제
subjectCategories:
- OS
- DS
tags:
- '2025'
title: 컨테이너 (Docker, cgroups, namespace)
trends:
- Rootless Container
- WebAssembly Container
---

# 정의
OS 수준 가상화로 프로세스와 리소스를 격리하여 애플리케이션을 독립적으로 실행하는 경량 기술.


## 특징
- 경량성: VM 대비 커널 공유로 빠른 시작과 적은 리소스 사용
- 격리성: 프로세스와 리소스를 독립적으로 분리
- 이식성: 어디서나 동일하게 실행 가능
- 효율성: 레이어 방식으로 저장 공간 절약

## 기술요소
- namespace: 프로세스 격리 기술 (PID, Network, Mount, UTS, IPC, User, Cgroup namespace로 독립적 실행 환경 제공)
- cgroups (Control Groups): 리소스 제한 및 모니터링 (CPU, 메모리, I/O, 네트워크 사용량 제어)
- Docker Engine: 이미지 기반 컨테이너 플랫폼, Dockerfile로 이미지 빌드, 레이어 방식으로 효율적 저장
- OCI (Open Container Initiative): 컨테이너 표준 규격 (Image Spec, Runtime Spec, Distribution Spec)
- Container Runtime: containerd(Docker 런타임), CRI-O(Kubernetes 최적화), runc(저수준 런타임)
- Union File System: AUFS, OverlayFS로 레이어 공유 및 Copy-on-Write 구현
- 컨테이너 네트워킹: Bridge, Host, Overlay 네트워크 모드
- 볼륨 관리: Bind Mount, Volume, tmpfs로 데이터 영속성 제공

## 최신 트렌드
- Rootless Container
- WebAssembly Container