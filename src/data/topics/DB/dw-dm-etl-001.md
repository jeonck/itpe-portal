---
id: dw-dm-etl-001
title: DW / DM / ETL
category: fundamental
subcategory: 데이터베이스
subjectCategories:
  - DB
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 데이터 웨어하우스
  - Star Schema
  - Snowflake Schema
  - ETL
  - OLAP
importance: 5
relatedTopics:
  - db-normalization-001
  - big-data-001
  - bi-001
trends:
  - ELT (Cloud DW)
  - Real-time DW
  - Data Lakehouse
---

# 정의
의사결정 지원을 위한 데이터 통합 저장소(DW), 특정 주제 영역 데이터(DM), 그리고 데이터 추출-변환-적재 프로세스(ETL)를 포괄합니다.

## 특징
- 데이터 웨어하우스: 주제 지향적, 통합적, 시간 가변적, 비휘발적
- Star Schema: 중앙 팩트 테이블과 주변 차원 테이블
- Snowflake Schema: 차원 테이블이 정규화된 구조
- ETL: Extract (추출), Transform (변환), Load (적재)
- OLAP: 다차원 분석, Drill-down/Roll-up, Slice/Dice

## 절차
DW(Data Warehouse), DM(Data Mart) 구축을 위한 핵심 프로세스인 ETL(Extract, Transform, Load)은 다음과 같은 절차로 수행됩니다.

1.  **추출 (Extract)**:
    -   **목표**: 원천 시스템(OLTP 데이터베이스, 파일 시스템, 외부 API 등)으로부터 데이터를 추출합니다.
    -   **방법**:
        -   **전체 추출 (Full Extraction)**: 원천 시스템의 모든 데이터를 한 번에 추출합니다. 초기 로딩 시 사용.
        -   **증분 추출 (Incremental Extraction)**: 마지막 추출 이후 변경된 데이터만을 추출합니다. CDC(Change Data Capture) 기술 활용.
    -   **고려 사항**: 원천 시스템의 부하 최소화, 데이터 일관성 유지.

2.  **변환 (Transform)**:
    -   **목표**: 추출된 데이터를 데이터 웨어하우스의 목적에 맞게 정제하고 가공합니다.
    -   **방법**:
        -   **정제 (Cleansing)**: 데이터 오류 수정, 결측치 처리(제거, 대체), 중복 데이터 제거.
        -   **표준화 (Standardization)**: 데이터 형식, 단위 등을 통일.
        -   **통합 (Integration)**: 여러 원천 시스템의 데이터를 통합하고, 데이터 간의 관계를 설정.
        -   **변형 (Transformation)**: 집계, 요약, 파생 값 계산, 코드 변환 등 분석에 용이한 형태로 가공. (예: 주소를 시/군/구 단위로 분리, 매출액 합계 계산)
    -   **고려 사항**: 데이터 품질 확보, 비즈니스 규칙 적용, 변환 규칙 관리.

3.  **적재 (Load)**:
    -   **목표**: 변환된 데이터를 데이터 웨어하우스 또는 데이터 마트에 최종적으로 저장합니다.
    -   **방법**:
        -   **초기 로딩 (Initial Load)**: 데이터 웨어하우스 구축 초기 또는 대규모 데이터 이관 시 모든 데이터를 한 번에 적재.
        -   **증분 로딩 (Incremental Load)**: 주기적으로 변경된 데이터만을 데이터 웨어하우스에 반영.
    -   **고려 사항**:
        -   **데이터 일관성**: 적재 과정 중 데이터 무결성 유지.
        -   **성능**: 대용량 데이터의 효율적인 적재를 위한 최적화 (인덱스 재구성, 벌크 로딩).
        -   **장애 복구**: 적재 실패 시 롤백 또는 재시작 기능.

이러한 ETL 절차는 데이터 웨어하우스 구축의 핵심이며, 데이터의 품질과 분석 시스템의 성능에 직접적인 영향을 미칩니다. 최근에는 클라우드 환경에서 ELT(Extract, Load, Transform) 방식이나 실시간 스트리밍 처리가 각광받고 있습니다.
