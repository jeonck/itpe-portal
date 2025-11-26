---
category: management-focus
certifications:
- information-management
difficulty: intermediate
id: sw-cost-estimation-001
importance: 4
keywords:
- 대가산정
- 기능점수
- FP
- IFPUG
- COSMIC
- LOC
- Man-Month
relatedTopics:
- pmbok-001
- sw-audit-001
subcategory: 프로젝트 관리
subjectCategories:
- SE
- PM
tags:
- '2025'
title: SW 대가산정 & 기능점수 (FP)
trends:
- 애자일 SW 대가산정
- AI/ML 프로젝트 산정
- 클라우드 프로젝트 산정
---

# 정의
소프트웨어 개발 프로젝트의 적정 비용을 산정하는 방법론으로, 기능점수(Function Point)를 기반으로 규모와 공수를 측정 방법.

## 특징
- 기능점수(FP): 사용자 관점의 기능 규모 측정 단위
- IFPUG FP: 내부논리파일(ILF), 외부연계파일(EIF), 입력(EI), 출력(EO), 조회(EQ)
- 복잡도: 단순, 보통, 복잡 (각 기능별 가중치 적용)
- 보정계수: 14개 일반시스템특성(GSC)으로 조정
- COSMIC FP: 데이터 이동 중심 측정 (Entry, Exit, Read, Write)
- 공수 산정: FP × 생산성 지수 = Man-Month
- LOC (Lines of Code): 코드 라인 수 기반 측정
- COCOMO: 비용 산정 모델 (Basic, Intermediate, Detailed)

## 절차
기능점수 기반 소프트웨어 대가산정은 다음 단계로 진행됩니다:

1. 요구사항 분석 및 기능 식별
   프로젝트 범위를 파악하고 측정 대상 기능을 식별:
   - 업무 프로세스 분석: 사용자 요구사항 명세서, 화면 설계서 검토
   - 애플리케이션 경계 정의: 측정 대상 시스템 범위 확정
   - 기능 목록 작성: 사용자 기능 단위로 분해

2. IFPUG 기능점수 측정
   5가지 기능 유형별로 기능을 분류하고 복잡도 평가:

   데이터 기능:
   - ILF (Internal Logical File, 내부논리파일): 시스템 내부에서 유지/관리하는 데이터 그룹
     예: 회원 테이블, 주문 테이블
     복잡도: 데이터 요소(DET) 및 레코드 타입(RET) 수로 판단
     - Low (단순): 3~7 FP
     - Average (보통): 10 FP
     - High (복잡): 15 FP

   - EIF (External Interface File, 외부연계파일): 외부 시스템에서 참조하는 데이터
     예: 공통코드 테이블 (타 시스템에서 관리)
     복잡도: Low 5 FP, Average 7 FP, High 10 FP

   트랜잭션 기능:
   - EI (External Input, 외부입력): 외부에서 데이터 입력, ILF 생성/수정/삭제
     예: 회원 등록, 주문 생성
     복잡도: Low 3 FP, Average 4 FP, High 6 FP

   - EO (External Output, 외부출력): 계산/가공 로직이 포함된 출력
     예: 매출 집계 리포트 (SUM, AVG 등 연산 포함)
     복잡도: Low 4 FP, Average 5 FP, High 7 FP

   - EQ (External Inquiry, 외부조회): 단순 조회 (계산 로직 없음)
     예: 회원 상세 조회
     복잡도: Low 3 FP, Average 4 FP, High 6 FP

   기능점수 합산:
   미조정 기능점수(UFP) = (ILF × 복잡도) + (EIF × 복잡도) + (EI × 복잡도) + (EO × 복잡도) + (EQ × 복잡도)

3. 보정계수 적용 (Value Adjustment Factor)
   14개 일반시스템특성(GSC)으로 프로젝트 특성 반영:
   - 데이터 통신, 분산 처리, 성능, 운영 환경 제약, 트랜잭션율, 온라인 데이터 입력, 사용자 효율성, 온라인 갱신, 복잡한 처리 로직, 재사용성, 설치 용이성, 운영 용이성, 다중 사이트, 변경 용이성
   - 각 항목: 0~5점 (총 0~70점)
   - VAF = 0.65 + (총점 × 0.01)
   - 조정 기능점수(FP) = UFP × VAF

4. 개발 공수 산정
   기능점수를 개발 Man-Month로 환산:
   - 생산성 지수 적용: 프로그래밍 언어, 개발 방법론, 팀 숙련도에 따라 FP당 공수 다름
   - 예: Java/Spring 기준 생산성 = 30 FP/MM
   - Man-Month = 조정 FP ÷ 생산성 지수
   - 예: 300 FP ÷ 30 FP/MM = 10 MM

5. 비용 산정
   공수에 단가를 곱하여 총 비용 계산:
   - 등급별 단가 적용: 고급(특급), 중급(고급), 초급(중급)
   - 예: 고급 1인, 중급 3인, 초급 6인 = 10 MM
   - 총 비용 = (고급 단가 × MM) + (중급 단가 × MM) + (초급 단가 × MM)
   - 간접비 추가: 교육, 출장, 장비 등

6. COSMIC 기능점수 (대안 방법)
   데이터 이동 중심 측정:
   - Entry: 외부에서 시스템으로 데이터 입력
   - Exit: 시스템에서 외부로 데이터 출력
   - Read: 영속 저장소에서 데이터 읽기
   - Write: 영속 저장소에 데이터 쓰기
   - 각 데이터 이동 = 1 CFP
   - 실시간 시스템, 임베디드 SW에 적합

## 최신 트렌드
- 애자일 SW 대가산정
- AI/ML 프로젝트 산정
- 클라우드 프로젝트 산정