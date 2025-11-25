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
OS 수준 가상화로 프로세스와 리소스를 격리하여 애플리케이션을 독립적으로 실행하는 경량 기술입니다.

## 특징
- VM vs Container: VM은 전체 OS 포함(무겁고 느림), 컨테이너는 커널 공유(가볍고 빠름)
- namespace: 프로세스 격리 (PID, Network, Mount, UTS, IPC, User, Cgroup)
- cgroups (Control Groups): 리소스 제한 (CPU, 메모리, I/O, 네트워크)
- Docker: 이미지 기반 컨테이너 플랫폼, Dockerfile, 레이어 방식
- OCI (Open Container Initiative): 컨테이너 표준 (Image Spec, Runtime Spec)
- Container Runtime: containerd, CRI-O, runc
- Union File System: AUFS, OverlayFS, 레이어 공유로 저장 효율
- 사용 사례: 마이크로서비스, CI/CD, 개발 환경 일관성

## 최신 트렌드
- Rootless Container
- WebAssembly Container

# 정의
OS 수준 가상화로 프로세스와 리소스를 격리하여 애플리케이션을 독립적으로 실행하는 경량 기술입니다.

## 특징
- VM vs Container: VM은 전체 OS 포함(무겁고 느림), 컨테이너는 커널 공유(가볍고 빠름)
- namespace: 프로세스 격리 (PID, Network, Mount, UTS, IPC, User, Cgroup)
- cgroups (Control Groups): 리소스 제한 (CPU, 메모리, I/O, 네트워크)
- Docker: 이미지 기반 컨테이너 플랫폼, Dockerfile, 레이어 방식
- OCI (Open Container Initiative): 컨테이너 표준 (Image Spec, Runtime Spec)
- Container Runtime: containerd, CRI-O, runc
- Union File System: AUFS, OverlayFS, 레이어 공유로 저장 효율
- 사용 사례: 마이크로서비스, CI/CD, 개발 환경 일관성

## 최신 트렌드
- Rootless Container
- WebAssembly Container