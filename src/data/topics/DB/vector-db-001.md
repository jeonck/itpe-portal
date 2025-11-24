---
id: vector-db-001
title: Vector DB (벡터 데이터베이스)
category: digital-service
subcategory: AI & 데이터
subjectCategories:
  - DB
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - Vector Database
  - Embedding
  - 임베딩
  - 유사도 검색
  - Pinecone
  - Chroma
  - Milvus
importance: 5
relatedTopics:
  - rag-001
  - llm-001
  - ai-deep-learning-001
trends:
  - Multimodal Vector Search
  - Hybrid Search (Vector + Keyword)
  - Vector DB as a Service
tags:
  - '2025'
---

# 정의
AI 모델이 생성한 고차원 벡터(임베딩)를 효율적으로 저장하고 유사도 기반 검색을 수행하는 특수 목적 데이터베이스로, RAG 및 의미 검색의 핵심 인프라입니다.

## 특징
- 임베딩 저장: 텍스트, 이미지, 오디오를 벡터로 변환하여 저장
- 유사도 검색: 코사인 유사도, 유클리드 거리, 내적 기반 검색
- 인덱싱: ANN(Approximate Nearest Neighbor) 알고리즘 (HNSW, IVF, PQ)
- 주요 제품: Pinecone, Weaviate, Milvus, Chroma, Qdrant, pgvector
- RAG 파이프라인: 문서 임베딩 → Vector DB 저장 → 유사 문서 검색 → LLM 컨텍스트
- Hybrid Search: 벡터 검색 + 키워드 검색 결합
- 멀티모달 검색: 이미지-텍스트 교차 검색

## 최신 트렌드
- Multimodal Vector Search
- Hybrid Search (Vector + Keyword)
- Vector DB as a Service
