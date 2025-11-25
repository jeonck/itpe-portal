---
category: management-focus
certifications:
- information-management
- computer-systems
difficulty: advanced
id: function-point-analysis-001
importance: 4
keywords:
- 기능점수
- FP
- IFPUG
- SW 원가 산정
- 소프트웨어 규모 측정
relatedTopics:
- sw-cost-estimation-001
- pmbok-10-knowledge-areas-001
subcategory: SW 원가 산정
subjectCategories:
- PM
- SE
title: 기능점수(FP) 측정 및 검증
trends:
- 애자일 환경에서의 FP
- 자동화된 FP 측정 도구
- 데이터 기반 SW 규모 예측
---

# 정의
기능점수(FP, Function Point)는 소프트웨어의 기능적 요구사항을 기반으로 소프트웨어의 규모를 객관적으로 측정하는 방법론입니다. IFPUG(International Function Point Users Group)에서 정의한 표준화된 절차에 따라 소프트웨어 기능을 사용자 관점에서 측정하며, 이를 통해 SW 개발 프로젝트의 원가, 일정, 생산성 등을 추정하는 데 활용됩니다.

## 특징
- 사용자 관점 측정: 소프트웨어가 사용자에게 제공하는 기능(입력, 출력, 조회, 파일 등)을 중심으로 규모를 측정합니다. 특정 기술이나 구현 방식에 독립적입니다.
- 측정 요소:
    - 내부 논리 파일 (Internal Logical File, ILF): 시스템 내부에서 관리되는 데이터 그룹.
    - 외부 연계 파일 (External Interface File, EIF): 다른 시스템에서 참조되는 데이터 그룹.
    - 외부 입력 (External Input, EI): 시스템 경계를 통해 들어오는 데이터 또는 제어 정보.
    - 외부 출력 (External Output, EO): 시스템 경계를 통해 나가는 데이터 또는 제어 정보.
    - 외부 조회 (External Inquiry, EQ): 입력과 출력의 조합으로, 데이터 검색 및 표시.
- 측정 절차 (IFPUG 표준):
    1.  측정 유형 결정: 개발 프로젝트 FP 또는 개선 프로젝트 FP.
    2.  측정 범위 식별: 대상 애플리케이션 경계 설정.
    3.  기능 유형 식별 및 복잡도 산정: 위 5가지 기능 유형을 식별하고, 데이터 요소 및 참조 유형에 따라 복잡도(단순/보통/복잡)를 산정.
    4.  미조정 기능점수 (UFP, Unadjusted Function Point) 산정: 각 기능 유형별 복잡도 점수에 가중치를 적용하여 합산.
    5.  일반 시스템 특성 (General System Characteristics, GSC) 평가: 14가지 일반 시스템 특성(예: 분산 처리, 성능, 보안 등)에 대해 0~5점 척도로 평가하여 가치 조정 계수(VAF, Value Adjustment Factor) 산정.
    6.  조정 기능점수 (AFP, Adjusted Function Point) 산정: `AFP = UFP * VAF`
- 활용:
    - SW 개발 원가 산정: AFP를 기반으로 라인 오브 코드(LOC) 또는 개발 공수(Man-Month)를 예측.
    - 생산성 측정: `AFP / 투입 공수` 또는 `AFP / 개발 비용`.
    - SW 품질 평가: FP당 결함 수.
- 장점: 개발 언어나 기술에 독립적, 사용자 관점 측정, 표준화된 절차.
- 단점: 초기에 요구사항이 명확해야 함, 측정자의 숙련도에 따라 결과 편차 발생 가능.

# 정의
기능점수(FP, Function Point)는 소프트웨어의 기능적 요구사항을 기반으로 소프트웨어의 규모를 객관적으로 측정하는 방법론입니다. IFPUG(International Function Point Users Group)에서 정의한 표준화된 절차에 따라 소프트웨어 기능을 사용자 관점에서 측정하며, 이를 통해 SW 개발 프로젝트의 원가, 일정, 생산성 등을 추정하는 데 활용됩니다.

## 특징
- 사용자 관점 측정: 소프트웨어가 사용자에게 제공하는 기능(입력, 출력, 조회, 파일 등)을 중심으로 규모를 측정합니다. 특정 기술이나 구현 방식에 독립적입니다.
- 측정 요소:
    - 내부 논리 파일 (Internal Logical File, ILF): 시스템 내부에서 관리되는 데이터 그룹.
    - 외부 연계 파일 (External Interface File, EIF): 다른 시스템에서 참조되는 데이터 그룹.
    - 외부 입력 (External Input, EI): 시스템 경계를 통해 들어오는 데이터 또는 제어 정보.
    - 외부 출력 (External Output, EO): 시스템 경계를 통해 나가는 데이터 또는 제어 정보.
    - 외부 조회 (External Inquiry, EQ): 입력과 출력의 조합으로, 데이터 검색 및 표시.
- 측정 절차 (IFPUG 표준):
    1.  측정 유형 결정: 개발 프로젝트 FP 또는 개선 프로젝트 FP.
    2.  측정 범위 식별: 대상 애플리케이션 경계 설정.
    3.  기능 유형 식별 및 복잡도 산정: 위 5가지 기능 유형을 식별하고, 데이터 요소 및 참조 유형에 따라 복잡도(단순/보통/복잡)를 산정.
    4.  미조정 기능점수 (UFP, Unadjusted Function Point) 산정: 각 기능 유형별 복잡도 점수에 가중치를 적용하여 합산.
    5.  일반 시스템 특성 (General System Characteristics, GSC) 평가: 14가지 일반 시스템 특성(예: 분산 처리, 성능, 보안 등)에 대해 0~5점 척도로 평가하여 가치 조정 계수(VAF, Value Adjustment Factor) 산정.
    6.  조정 기능점수 (AFP, Adjusted Function Point) 산정: `AFP = UFP * VAF`
- 활용:
    - SW 개발 원가 산정: AFP를 기반으로 라인 오브 코드(LOC) 또는 개발 공수(Man-Month)를 예측.
    - 생산성 측정: `AFP / 투입 공수` 또는 `AFP / 개발 비용`.
    - SW 품질 평가: FP당 결함 수.
- 장점: 개발 언어나 기술에 독립적, 사용자 관점 측정, 표준화된 절차.
- 단점: 초기에 요구사항이 명확해야 함, 측정자의 숙련도에 따라 결과 편차 발생 가능.