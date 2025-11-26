---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: vector-db-001
importance: 5
keywords:
- Vector Database
- Embedding
- 임베딩
- 유사도 검색
- Pinecone
- Chroma
- Milvus
relatedTopics:
- rag-001
- llm-001
- ai-deep-learning-001
subcategory: AI & 데이터
subjectCategories:
- DB
- DS
tags:
- '2025'
title: Vector DB (벡터 데이터베이스)
trends:
- Multimodal Vector Search
- Hybrid Search (Vector + Keyword)
- Vector DB as a Service
---

# 정의
AI 모델이 생성한 고차원 벡터(임베딩)를 효율적으로 저장하고 유사도 기반 검색을 수행하는 특수 목적 데이터베이스로, RAG 및 의미 검색의 핵심 인프라 기술.

## 특징
- 임베딩 저장: 텍스트, 이미지, 오디오를 벡터로 변환하여 저장
- 유사도 검색: 코사인 유사도, 유클리드 거리, 내적 기반 검색
- 인덱싱: ANN(Approximate Nearest Neighbor) 알고리즘 (HNSW, IVF, PQ)
- 주요 제품: Pinecone, Weaviate, Milvus, Chroma, Qdrant, pgvector
- RAG 파이프라인: 문서 임베딩 → Vector DB 저장 → 유사 문서 검색 → LLM 컨텍스트
- Hybrid Search: 벡터 검색 + 키워드 검색 결합
- 멀티모달 검색: 이미지-텍스트 교차 검색

## 기술요소
벡터 데이터베이스는 다음과 같은 핵심 기술 요소들을 통해 고차원 벡터 데이터의 효율적인 저장 및 유사도 검색을 수행합니다.

-   **임베딩 모델 (Embedding Model)**:
    -   **역할**: 텍스트, 이미지, 오디오 등 다양한 형태의 데이터를 고차원 벡터 공간의 수치형 표현(임베딩)으로 변환합니다. 의미적으로 유사한 데이터는 벡터 공간에서 가까운 거리에 위치하게 됩니다.
    -   **예시**: OpenAI의 `text-embedding-ada-002`, Google의 `text-embedding-004`, Hugging Face의 범용 임베딩 모델, CLIP(이미지-텍스트).

-   **벡터 인덱싱 (Vector Indexing)**:
    -   **원리**: 대규모 벡터 데이터셋에서 유사한 벡터를 빠르게 찾아내기 위해 사용되는 색인 기술. 정확한 최근접 이웃(Exact Nearest Neighbor) 검색은 계산 비용이 매우 높으므로, 근사 최근접 이웃(Approximate Nearest Neighbor, ANN) 검색 알고리즘을 주로 사용합니다.
    -   **ANN 알고리즘**:
        -   **HNSW (Hierarchical Navigable Small World)**: 고차원 벡터 공간에서 효율적인 그래프 기반 탐색을 수행하는 알고리즘.
        -   **IVF (Inverted File Index)**: 벡터 공간을 클러스터로 나누어 검색 범위를 좁히는 알고리즘.
        -   **PQ (Product Quantization)**: 고차원 벡터를 저차원의 부분 벡터로 분할하여 압축하고 유사도를 계산하는 알고리즘.

-   **유사도 측정 지표 (Similarity Metrics)**:
    -   두 벡터 간의 유사도를 측정하는 방법. 검색의 정확도에 영향을 미칩니다.
    -   **코사인 유사도 (Cosine Similarity)**: 두 벡터가 가리키는 방향의 유사성을 측정. 텍스트 임베딩에서 주로 사용.
    -   **유클리드 거리 (Euclidean Distance)**: 두 벡터 공간상의 점 사이의 직선 거리. 거리가 짧을수록 유사.
    -   **내적 (Dot Product)**: 두 벡터의 크기와 방향을 고려한 유사도.

-   **데이터 관리 기능**:
    -   **CRUD 연산**: 벡터 데이터의 생성, 읽기, 업데이트, 삭제.
    -   **필터링**: 벡터 검색 결과에 대한 추가적인 메타데이터 기반 필터링 (예: 특정 저자가 쓴 문서 중 특정 주제에 대한 검색).
    -   **영속성**: 데이터가 메모리에 저장되더라도 재시작 시 손실되지 않도록 디스크에 저장하는 기능.
    -   **스케일링**: 분산 아키텍처를 통해 대규모 데이터와 높은 쿼리 처리량을 지원.

-   **통합 및 생태계**:
    -   **LLM 연동**: LLM(거대 언어 모델)과 RAG(검색 증강 생성) 파이프라인의 핵심 구성 요소.
    -   **LangChain, LlamaIndex**: 벡터 데이터베이스와의 연동을 쉽게 해주는 프레임워크.
    -   **클라우드 서비스**: AWS, Azure, Google Cloud 등 주요 클라우드 벤더에서 벡터 데이터베이스 서비스 제공.

이러한 기술 요소들을 통해 벡터 데이터베이스는 AI 애플리케이션의 성능과 정확도를 향상시키고, 새로운 형태의 검색 및 분석 기능을 가능하게 합니다.

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

## 기술요소
벡터 데이터베이스는 다음과 같은 핵심 기술 요소들을 통해 고차원 벡터 데이터의 효율적인 저장 및 유사도 검색을 수행합니다.

-   임베딩 모델 (Embedding Model):
    -   역할: 텍스트, 이미지, 오디오 등 다양한 형태의 데이터를 고차원 벡터 공간의 수치형 표현(임베딩)으로 변환합니다. 의미적으로 유사한 데이터는 벡터 공간에서 가까운 거리에 위치하게 됩니다.
    -   예시: OpenAI의 `text-embedding-ada-002`, Google의 `text-embedding-004`, Hugging Face의 범용 임베딩 모델, CLIP(이미지-텍스트).

-   벡터 인덱싱 (Vector Indexing):
    -   원리: 대규모 벡터 데이터셋에서 유사한 벡터를 빠르게 찾아내기 위해 사용되는 색인 기술. 정확한 최근접 이웃(Exact Nearest Neighbor) 검색은 계산 비용이 매우 높으므로, 근사 최근접 이웃(Approximate Nearest Neighbor, ANN) 검색 알고리즘을 주로 사용합니다.
    -   ANN 알고리즘:
        -   HNSW (Hierarchical Navigable Small World): 고차원 벡터 공간에서 효율적인 그래프 기반 탐색을 수행하는 알고리즘.
        -   IVF (Inverted File Index): 벡터 공간을 클러스터로 나누어 검색 범위를 좁히는 알고리즘.
        -   PQ (Product Quantization): 고차원 벡터를 저차원의 부분 벡터로 분할하여 압축하고 유사도를 계산하는 알고리즘.

-   유사도 측정 지표 (Similarity Metrics):
    -   두 벡터 간의 유사도를 측정하는 방법. 검색의 정확도에 영향을 미칩니다.
    -   코사인 유사도 (Cosine Similarity): 두 벡터가 가리키는 방향의 유사성을 측정. 텍스트 임베딩에서 주로 사용.
    -   유클리드 거리 (Euclidean Distance): 두 벡터 공간상의 점 사이의 직선 거리. 거리가 짧을수록 유사.
    -   내적 (Dot Product): 두 벡터의 크기와 방향을 고려한 유사도.

-   데이터 관리 기능:
    -   CRUD 연산: 벡터 데이터의 생성, 읽기, 업데이트, 삭제.
    -   필터링: 벡터 검색 결과에 대한 추가적인 메타데이터 기반 필터링 (예: 특정 저자가 쓴 문서 중 특정 주제에 대한 검색).
    -   영속성: 데이터가 메모리에 저장되더라도 재시작 시 손실되지 않도록 디스크에 저장하는 기능.
    -   스케일링: 분산 아키텍처를 통해 대규모 데이터와 높은 쿼리 처리량을 지원.

-   통합 및 생태계:
    -   LLM 연동: LLM(거대 언어 모델)과 RAG(검색 증강 생성) 파이프라인의 핵심 구성 요소.
    -   LangChain, LlamaIndex: 벡터 데이터베이스와의 연동을 쉽게 해주는 프레임워크.
    -   클라우드 서비스: AWS, Azure, Google Cloud 등 주요 클라우드 벤더에서 벡터 데이터베이스 서비스 제공.

이러한 기술 요소들을 통해 벡터 데이터베이스는 AI 애플리케이션의 성능과 정확도를 향상시키고, 새로운 형태의 검색 및 분석 기능을 가능하게 합니다.