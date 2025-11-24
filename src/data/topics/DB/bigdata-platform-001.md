---
id: bigdata-platform-001
title: 빅데이터 플랫폼 (Hadoop & Spark)
category: digital-service
subcategory: 빅데이터
subjectCategories:
  - DB
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Hadoop
  - Spark
  - MapReduce
  - HDFS
  - YARN
  - RDD
importance: 5
relatedTopics:
  - data-lake-lakehouse-001
  - kafka-streaming-001
  - distributed-db-001
trends:
  - Cloud-Native Big Data
  - Databricks
tags:
  - '2025'
---

# 정의
대용량 데이터를 분산 처리하는 오픈소스 프레임워크로, Hadoop(배치 처리)과 Spark(실시간/배치 통합)가 핵심입니다.

## 특징
- Hadoop: HDFS(분산 저장) + MapReduce(분산 처리) + YARN(리소스 관리)
- HDFS: 블록 단위 분산 저장, Replication을 통한 고가용성
- MapReduce: Map(분할) → Shuffle → Reduce(집계) 패러다임
- Spark: 인메모리 연산, RDD(Resilient Distributed Dataset), DAG 최적화
- Spark 구성: Spark SQL, Spark Streaming, MLlib, GraphX
- Spark vs Hadoop: Spark가 100배 빠름 (메모리 활용)
- Ecosystem: Hive(SQL), Pig, HBase, Kafka
- 클라우드: EMR, Dataproc, Databricks

## 최신 트렌드
- Cloud-Native Big Data
- Databricks
