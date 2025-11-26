---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: bigdata-platform-001
importance: 5
keywords:
- Hadoop
- Spark
- MapReduce
- HDFS
- YARN
- RDD
relatedTopics:
- data-lake-lakehouse-001
- kafka-streaming-001
- distributed-db-001
subcategory: 빅데이터
subjectCategories:
- DB
- DS
tags:
- '2025'
title: 빅데이터 플랫폼 (Hadoop & Spark)
trends:
- Cloud-Native Big Data
- Databricks
---

# 정의
대용량 데이터를 분산 처리하는 오픈소스 프레임워크로, Hadoop(배치 처리)과 Spark(실시간/배치 통합)가 핵심 프레임워크.

## 특징
- Hadoop: HDFS(분산 저장) + MapReduce(분산 처리) + YARN(리소스 관리)
- HDFS: 블록 단위 분산 저장, Replication을 통한 고가용성
- MapReduce: Map(분할) → Shuffle → Reduce(집계) 패러다임
- Spark: 인메모리 연산, RDD(Resilient Distributed Dataset), DAG 최적화
- Spark 구성: Spark SQL, Spark Streaming, MLlib, GraphX
- Spark vs Hadoop: Spark가 100배 빠름 (메모리 활용)
- Ecosystem: Hive(SQL), Pig, HBase, Kafka
- 클라우드: EMR, Dataproc, Databricks

## 기술요소
- **Hadoop Ecosystem**:
  - **HDFS (Hadoop Distributed File System)**:
    - **NameNode**: 파일 시스템의 메타데이터(디렉토리 구조, 파일 블록 위치) 관리, 클라이언트 요청 처리. 단일 장애점(SPOF) 문제로 HA(고가용성) 구성 필수.
    - **DataNode**: 실제 데이터 블록을 저장하고 읽기/쓰기 요청 처리. 여러 대의 서버로 구성되어 데이터 분산 저장.
  - **YARN (Yet Another Resource Negotiator)**:
    - **ResourceManager**: 클러스터의 모든 리소스(CPU, 메모리)를 관리하고 애플리케이션에 할당.
    - **NodeManager**: 각 노드에서 애플리케이션 컨테이너를 실행하고 리소스 사용량 모니터링.
  - **MapReduce**: 분산 처리 프레임워크. Map(데이터 분할 및 가공)과 Reduce(집계 및 결과 생성) 단계로 구성.
- **Spark Ecosystem**:
  - **Spark Driver**: Spark 애플리케이션의 메인 프로세스, DAG 스케줄러, 태스크 스케줄러 포함.
  - **Spark Executor**: 워커 노드에서 실제 연산을 수행하는 프로세스.
  - **RDD (Resilient Distributed Dataset)**: Spark의 핵심 추상화, 불변(Immutable)의 분산 컬렉션, 내결함성(Fault-tolerance) 제공.
  - **DAG Scheduler**: RDD 변환(Transformation)을 DAG(Directed Acyclic Graph)로 변환하여 최적화.
  - **Catalyst Optimizer**: Spark SQL 쿼리를 최적화하는 엔진.
- **주변 도구**:
  - **Hive**: HDFS에 저장된 데이터를 위한 데이터 웨어하우스 시스템, SQL과 유사한 HiveQL 제공.
  - **HBase**: HDFS 기반의 NoSQL 데이터베이스, 대규모 데이터에 대한 실시간 임의 접근 가능.
  - **Kafka**: 고성능 분산 메시징 시스템, 스트리밍 데이터 처리.
