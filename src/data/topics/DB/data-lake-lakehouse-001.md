---
id: data-lake-lakehouse-001
title: Data Lake & Lakehouse
category: digital-service
subcategory: 데이터 아키텍처
subjectCategories:
  - DB
  - DS
difficulty: advanced
certifications:
  - information-management
keywords:
  - Data Lake
  - Lakehouse
  - Delta Lake
  - Apache Iceberg
  - Parquet
  - S3
importance: 5
relatedTopics:
  - dw-dm-etl-001
  - bigdata-platform-001
trends:
  - Open Table Formats
  - Data Lakehouse Architecture
tags:
  - '2025'
---

# 정의
원시 데이터를 비정형 그대로 저장하는 Data Lake와, DW의 ACID 트랜잭션 기능을 결합한 Lakehouse 아키텍처를 통해 분석 유연성과 데이터 품질을 동시에 확보합니다.

## 특징
- Data Lake: 모든 형식의 원시 데이터 저장 (정형, 반정형, 비정형)
- 저장소: S3, ADLS, HDFS, Parquet/ORC 파일 포맷
- Data Lakehouse: Data Lake + DW 기능 (ACID, Schema Enforcement, Time Travel)
- 주요 기술: Delta Lake, Apache Iceberg, Apache Hudi
- Schema-on-Read: 읽을 때 스키마 적용 (유연성)
- 메타데이터 관리: AWS Glue, Hive Metastore
- 사용 사례: 빅데이터 분석, ML/AI 데이터 준비, 로그 저장
- DW와 비교: 유연성 높음, 비용 낮음, 쿼리 성능 상대적 낮음

## 기술요소
- **Data Lake**:
  - **분산 스토리지**: HDFS(Hadoop Distributed File System), AWS S3, Azure Data Lake Storage (ADLS) 등 대용량의 다양한 데이터를 저장할 수 있는 확장 가능한 스토리지 시스템.
  - **파일 포맷**:
    - **Parquet**: 컬럼 기반의 저장 형식으로, 높은 압축률과 빠른 쿼리 성능 제공. 주로 분석 워크로드에 사용.
    - **ORC (Optimized Row Columnar)**: Parquet과 유사한 컬럼 기반 형식.
    - **JSON, CSV**: 반정형, 정형 데이터 저장.
  - **데이터 카탈로그**: 데이터 레이크에 저장된 데이터의 메타데이터(스키마, 위치, 소유자)를 관리하여 데이터 검색 및 관리를 용이하게 합니다 (예: Hive Metastore, AWS Glue Data Catalog).
  - **분산 처리 엔진**: Spark, Presto, Hive 등 데이터 레이크에 저장된 데이터를 분석하기 위한 엔진.

- **Data Lakehouse**:
  - **트랜잭션 레이어 (Transaction Layer)**: 데이터 레이크 위에 ACID 트랜잭션(원자성, 일관성, 격리성, 지속성)을 제공하는 레이어. 이는 데이터 웨어하우스의 신뢰성을 데이터 레이크에 부여합니다.
  - **오픈 테이블 포맷 (Open Table Formats)**:
    - **Delta Lake**: Databricks가 개발한 오픈소스 스토리지 레이어로, Parquet 파일 위에 ACID 트랜잭션, 스키마 관리, 데이터 버전 관리(Time Travel) 기능을 제공.
    - **Apache Iceberg**: Hadoop 기반의 대규모 테이블 관리를 위한 오픈 테이블 포맷으로, 유연한 스키마 변경, 숨겨진 파티셔닝(Hidden Partitioning) 등의 기능 제공.
    - **Apache Hudi**: 증분 처리 및 업데이트/삭제를 지원하는 오픈 테이블 포맷.
  - **스키마 관리 (Schema Enforcement)**: 데이터의 스키마를 정의하고 변경 사항을 관리하여 데이터 품질을 유지합니다.
  - **데이터 버전 관리 (Time Travel)**: 과거 특정 시점의 데이터로 돌아가거나, 변경 이력을 추적할 수 있는 기능.
  - **통합 API**: 데이터 레이크에 저장된 데이터에 대해 SQL, 배치, 스트리밍, 머신러닝 등 다양한 워크로드를 지원하는 통합 인터페이스.

이러한 기술 요소들을 통해 데이터 레이크는 분석 유연성과 확장성을 유지하면서 데이터 웨어하우스의 신뢰성과 성능을 확보할 수 있게 됩니다.
