---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: advanced
id: safety-standard-001
importance: 4
keywords:
- ISO 26262
- IEC 61508
- Functional Safety
- ASIL
- SIL
- V-Model
relatedTopics:
- test-001
- quality-001
- sdlc-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
tags:
- '2025'
title: SW 안전성 표준 (ISO 26262 / IEC 61508)
trends:
- SOTIF (Safety Of The Intended Functionality)
- ISO 21434 (Automotive Cybersecurity)
- AI Safety Standards
---

# 정의
안전 필수 시스템에서 소프트웨어의 기능 안전성(Functional Safety)을 보장하기 위한 국제 표준으로, 자동차(ISO 26262)와 산업 일반(IEC 61508)에 적용 기술.

## 특징
- IEC 61508: 산업 전반의 기능 안전 기본 표준, SIL(Safety Integrity Level) 1~4 등급
- ISO 26262: 자동차 전기/전자 시스템 안전 표준, IEC 61508 파생
- ASIL(Automotive Safety Integrity Level): QM, A, B, C, D (D가 최고 등급)
- V-Model 기반 개발: 요구사항-설계-구현-검증 대응
- Hazard Analysis & Risk Assessment (HARA)
- Safety Case: 안전성 입증 문서
- 정적/동적 분석, 코드 리뷰, 추적성 관리

## 절차
ISO 26262는 V-Model 기반의 체계적인 안전성 보장 프로세스를 따릅니다:

1. Hazard Analysis & Risk Assessment (HARA)
   시스템 레벨에서 위험 요소를 식별하고 안전 등급을 결정:
   - Hazard 식별: 시스템 오작동으로 발생 가능한 위험 상황 도출
     예: "전동 파워 스티어링(EPS) 고장 시 조향 불가"
   - Severity (심각도) 평가: S0(부상 없음) ~ S3(생명 위협)
   - Exposure (노출 빈도) 평가: E0(매우 낮음) ~ E4(매우 높음)
   - Controllability (제어 가능성) 평가: C0(제어 가능) ~ C3(제어 불가)
   - ASIL 등급 결정: QM(안전 무관), ASIL A, B, C, D (D가 최고 등급)
     예: EPS 고장 → S3, E4, C3 → ASIL D

2. Safety Goals 및 Functional Safety Requirements 정의
   ASIL 등급에 따라 안전 목표와 요구사항 수립:
   - Safety Goal: "EPS 시스템은 조향 기능을 항상 제공해야 한다"
   - Functional Safety Requirement: "EPS ECU는 이중화된 센서로 고장 감지"
   - Technical Safety Requirement: "센서 값 불일치 시 100ms 이내 Fail-Safe 모드 전환"

3. V-Model 좌측: 설계 단계
   안전 요구사항을 시스템 → SW 아키텍처 → 상세 설계로 분해:
   - System Design: 하드웨어와 소프트웨어 안전 메커니즘 설계
   - SW Architecture Design: ASIL 분해(Decomposition), 자유도 from 간섭(Freedom from Interference)
   - SW Unit Design: 각 모듈의 안전 기능 상세 설계
   - 추적성 매트릭스: 요구사항 → 설계 항목 간 매핑

4. V-Model 하단: 구현 및 검증
   ASIL 등급에 따른 코딩 기준과 정적/동적 분석:
   - 코딩 표준 준수: MISRA C (자동차), CERT C (산업)
   - 정적 분석: 코드 복잡도, 데이터 흐름 분석, 미사용 변수 검출
   - 동적 분석: 메모리 누수, 버퍼 오버플로우 런타임 검사
   - 코드 리뷰: ASIL D의 경우 독립적인 리뷰어 필수

5. V-Model 우측: 테스트 단계
   각 설계 단계에 대응하는 테스트 수행:
   - SW Unit Test: 각 함수의 모든 분기 커버리지 100% (ASIL D)
   - SW Integration Test: 모듈 간 인터페이스 및 데이터 흐름 검증
   - SW Safety Test: 안전 메커니즘 동작 검증 (Fault Injection Test)
   - System Test: 전체 시스템 레벨 안전 요구사항 검증

6. Safety Case 작성 및 인증
   안전성을 입증하는 문서 패키지 작성:
   - Safety Plan, Safety Analysis, Verification Report
   - 추적성 매트릭스: 요구사항 → 설계 → 구현 → 테스트 완전 추적
   - 독립 평가: 제3자 인증 기관의 심사 (TÜV, SGS 등)

## 최신 트렌드
- SOTIF (Safety Of The Intended Functionality)
- ISO 21434 (Automotive Cybersecurity)
- AI Safety Standards