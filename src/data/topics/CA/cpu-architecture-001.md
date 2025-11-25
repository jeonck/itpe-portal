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

## 동작원리
CPU는 명령어 사이클과 파이프라인을 통해 명령어를 처리합니다:

명령어 사이클 (Instruction Cycle)
1) Fetch (인출): PC(Program Counter)가 가리키는 주소에서 명령어 가져옴
2) Decode (해독): 명령어 디코더가 명령어를 분석하여 제어 신호 생성
3) Execute (실행): ALU에서 연산 수행 또는 메모리 접근
4) Write-back (쓰기): 결과를 레지스터나 메모리에 저장
5) PC 업데이트: 다음 명령어 주소로 이동

5단계 파이프라인 동작
- 여러 명령어를 동시에 처리하여 처리량(Throughput) 향상
- 각 단계가 독립적으로 다른 명령어 처리
- 이상적으로 매 클럭마다 1개 명령어 완료 (CPI ≈ 1)

예시:
- 클럭 1: I1(Fetch)
- 클럭 2: I1(Decode), I2(Fetch)
- 클럭 3: I1(Execute), I2(Decode), I3(Fetch)
- 클럭 4: I1(Memory), I2(Execute), I3(Decode), I4(Fetch)
- 클럭 5: I1(Write), I2(Memory), I3(Execute), I4(Decode), I5(Fetch)

파이프라인 해저드 해결
- 데이터 해저드: Forwarding (Bypassing) - 이전 단계 결과를 직접 전달
- 제어 해저드: Branch Prediction - 분기 결과 예측 및 추측 실행
- 구조적 해저드: 하드웨어 자원 중복 (별도 명령어/데이터 캐시)