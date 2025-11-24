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

## 최신 트렌드
- Open Table Formats
- Data Lakehouse Architecture
