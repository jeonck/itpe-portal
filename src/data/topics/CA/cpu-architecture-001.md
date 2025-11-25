---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: cpu-architecture-001
importance: 5
keywords:
- 폰노이만
- 하버드
- 파이프라인
- 해저드
- 명령어 사이클
relatedTopics:
- cache-memory-001
- process-scheduling-001
subcategory: 컴퓨터 구조
subjectCategories:
- CA
title: 컴퓨터 구조
trends:
- RISC-V 오픈소스 아키텍처
- ARM 기반 서버/PC
- 이기종 컴퓨팅
- 뉴로모픽 칩
---

# 정의
컴퓨터 시스템의 하드웨어 구성과 동작 원리를 정의하는 체계로, CPU 구조와 명령어 처리 방식을 포함합니다.

## 특징
- 폰노이만 vs 하버드 아키텍처: 폰노이만은 명령어와 데이터가 같은 메모리/버스 사용(단순, 병목), 하버드는 명령어/데이터 메모리 분리(빠름, 복잡). 현대 CPU는 Modified Harvard (L1 캐시 분리, 메인 메모리 통합)
- 파이프라인: Fetch(인출) → Decode(해독) → Execute(실행) → Memory(메모리 접근) → Write-back(쓰기) 5단계를 동시 처리하여 처리량 향상
- 파이프라인 해저드(Hazard): 1) 데이터 해저드 - RAW(Read After Write), Forwarding으로 해결 2) 제어 해저드 - 분기 명령어, Branch Prediction으로 해결 3) 구조적 해저드 - 자원 충돌, 하드웨어 중복으로 해결
- 명령어 세트: CISC (복잡, x86), RISC (단순, ARM), VLIW (명시적 병렬)

# 정의
컴퓨터 시스템의 하드웨어 구성과 동작 원리를 정의하는 체계로, CPU 구조와 명령어 처리 방식을 포함합니다.

## 특징
- 폰노이만 vs 하버드 아키텍처: 폰노이만은 명령어와 데이터가 같은 메모리/버스 사용(단순, 병목), 하버드는 명령어/데이터 메모리 분리(빠름, 복잡). 현대 CPU는 Modified Harvard (L1 캐시 분리, 메인 메모리 통합)
- 파이프라인: Fetch(인출) → Decode(해독) → Execute(실행) → Memory(메모리 접근) → Write-back(쓰기) 5단계를 동시 처리하여 처리량 향상
- 파이프라인 해저드(Hazard): 1) 데이터 해저드 - RAW(Read After Write), Forwarding으로 해결 2) 제어 해저드 - 분기 명령어, Branch Prediction으로 해결 3) 구조적 해저드 - 자원 충돌, 하드웨어 중복으로 해결
- 명령어 세트: CISC (복잡, x86), RISC (단순, ARM), VLIW (명시적 병렬)