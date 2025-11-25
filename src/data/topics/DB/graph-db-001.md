---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: graph-db-001
importance: 4
keywords:
- Graph Database
- Neo4j
- Node
- Edge
- Cypher
- 관계 중심
relatedTopics:
- nosql-001
- data-modeling-001
subcategory: NoSQL
subjectCategories:
- DB
- DS
tags:
- '2025'
title: Graph DB (그래프 데이터베이스)
trends:
- Knowledge Graph
- Graph Neural Networks
- Fraud Detection
---

# 정의
노드(Node)와 간선(Edge)로 데이터를 모델링하여 복잡한 관계를 효율적으로 표현하고 탐색하는 NoSQL 데이터베이스입니다.

## 특징
- 데이터 모델: 노드(개체), 간선(관계), 속성(Property)
- 쿼리 언어: Cypher(Neo4j), Gremlin, SPARQL
- 주요 제품: Neo4j, Amazon Neptune, ArangoDB, JanusGraph
- 사용 사례: 소셜 네트워크, 추천 시스템, 지식 그래프, 사기 탐지
- 관계 탐색: 다단계 관계 쿼리, 최단 경로 찾기
- RDBMS와 차이: 조인 없이 관계 탐색, 스키마 유연성
- 성능: 관계 중심 쿼리에서 RDBMS보다 우수

## 기술요소
그래프 데이터베이스는 다음과 같은 핵심 기술 요소와 개념으로 구성됩니다.

-   **노드 (Node / Vertex)**:
    -   **정의**: 그래프의 기본 구성 요소로, 사람, 장소, 사물, 이벤트 등 실제 세계의 '개체'를 나타냅니다.
    -   **특징**: 고유한 식별자(ID)와 레이블(Label)을 가집니다. 레이블은 노드의 유형을 정의합니다 (예: Person, Product).
    -   **속성 (Property)**: 노드에 저장되는 키-값(key-value) 쌍의 데이터. 노드의 상세 정보를 표현합니다 (예: Person 노드의 name="Alice", age=30).

-   **간선 (Edge / Relationship)**:
    -   **정의**: 두 노드 간의 '관계'를 나타냅니다. 그래프 데이터베이스의 핵심으로, 관계를 통해 데이터가 연결됩니다.
    -   **특징**: 방향성(Directed)을 가질 수 있으며, 타입(Type)을 가집니다 (예: FOLLOWS, OWNS, WORKS_AT). 간선에도 속성을 가질 수 있습니다 (예: FOLLOWS 관계의 since='2020-01-01').
    -   **중요성**: 관계를 통해 데이터 탐색이 매우 효율적으로 이루어지며, RDBMS의 조인 연산 없이 직접적으로 연결된 데이터를 찾을 수 있습니다.

-   **속성 (Property)**:
    -   노드나 간선에 연결되어 해당 엔티티나 관계에 대한 메타데이터를 제공하는 키-값 쌍의 데이터. 데이터 모델의 유연성을 높입니다.

-   **쿼리 언어 (Query Language)**:
    -   그래프 데이터베이스에 특화된 쿼리 언어를 사용하여 노드, 간선 및 속성을 탐색하고 조작합니다.
    -   **Cypher**: Neo4j에서 사용되는 선언적 그래프 쿼리 언어. 그래프 패턴 매칭에 강점을 가집니다.
    -   **Gremlin**: Apache TinkerPop 프레임워크에서 사용되는 그래프 순회 언어.
    -   **SPARQL**: RDF(Resource Description Framework) 데이터를 쿼리하는 언어.

-   **그래프 알고리즘 (Graph Algorithms)**:
    -   **경로 찾기 (Pathfinding)**: 두 노드 간의 최단 경로, 모든 경로 등 (예: Dijkstra, A*).
    -   **중심성 분석 (Centrality)**: 그래프 내에서 중요한 노드를 식별 (예: Betweenness, Closeness, Eigenvector Centrality).
    -   **커뮤니티 탐지 (Community Detection)**: 서로 밀접하게 연결된 노드 그룹을 식별.

-   **스키마 유연성**: NoSQL의 한 유형으로 스키마가 유연하여 데이터 모델 변경이 용이합니다.

이러한 기술 요소들을 통해 그래프 데이터베이스는 복잡하게 연결된 데이터를 직관적으로 모델링하고, 관계 중심의 쿼리를 매우 효율적으로 처리할 수 있습니다.

# 정의
노드(Node)와 간선(Edge)로 데이터를 모델링하여 복잡한 관계를 효율적으로 표현하고 탐색하는 NoSQL 데이터베이스입니다.

## 특징
- 데이터 모델: 노드(개체), 간선(관계), 속성(Property)
- 쿼리 언어: Cypher(Neo4j), Gremlin, SPARQL
- 주요 제품: Neo4j, Amazon Neptune, ArangoDB, JanusGraph
- 사용 사례: 소셜 네트워크, 추천 시스템, 지식 그래프, 사기 탐지
- 관계 탐색: 다단계 관계 쿼리, 최단 경로 찾기
- RDBMS와 차이: 조인 없이 관계 탐색, 스키마 유연성
- 성능: 관계 중심 쿼리에서 RDBMS보다 우수

## 기술요소
그래프 데이터베이스는 다음과 같은 핵심 기술 요소와 개념으로 구성됩니다.

-   노드 (Node / Vertex):
    -   정의: 그래프의 기본 구성 요소로, 사람, 장소, 사물, 이벤트 등 실제 세계의 '개체'를 나타냅니다.
    -   특징: 고유한 식별자(ID)와 레이블(Label)을 가집니다. 레이블은 노드의 유형을 정의합니다 (예: Person, Product).
    -   속성 (Property): 노드에 저장되는 키-값(key-value) 쌍의 데이터. 노드의 상세 정보를 표현합니다 (예: Person 노드의 name="Alice", age=30).

-   간선 (Edge / Relationship):
    -   정의: 두 노드 간의 '관계'를 나타냅니다. 그래프 데이터베이스의 핵심으로, 관계를 통해 데이터가 연결됩니다.
    -   특징: 방향성(Directed)을 가질 수 있으며, 타입(Type)을 가집니다 (예: FOLLOWS, OWNS, WORKS_AT). 간선에도 속성을 가질 수 있습니다 (예: FOLLOWS 관계의 since='2020-01-01').
    -   중요성: 관계를 통해 데이터 탐색이 매우 효율적으로 이루어지며, RDBMS의 조인 연산 없이 직접적으로 연결된 데이터를 찾을 수 있습니다.

-   속성 (Property):
    -   노드나 간선에 연결되어 해당 엔티티나 관계에 대한 메타데이터를 제공하는 키-값 쌍의 데이터. 데이터 모델의 유연성을 높입니다.

-   쿼리 언어 (Query Language):
    -   그래프 데이터베이스에 특화된 쿼리 언어를 사용하여 노드, 간선 및 속성을 탐색하고 조작합니다.
    -   Cypher: Neo4j에서 사용되는 선언적 그래프 쿼리 언어. 그래프 패턴 매칭에 강점을 가집니다.
    -   Gremlin: Apache TinkerPop 프레임워크에서 사용되는 그래프 순회 언어.
    -   SPARQL: RDF(Resource Description Framework) 데이터를 쿼리하는 언어.

-   그래프 알고리즘 (Graph Algorithms):
    -   경로 찾기 (Pathfinding): 두 노드 간의 최단 경로, 모든 경로 등 (예: Dijkstra, A*).
    -   중심성 분석 (Centrality): 그래프 내에서 중요한 노드를 식별 (예: Betweenness, Closeness, Eigenvector Centrality).
    -   커뮤니티 탐지 (Community Detection): 서로 밀접하게 연결된 노드 그룹을 식별.

-   스키마 유연성: NoSQL의 한 유형으로 스키마가 유연하여 데이터 모델 변경이 용이합니다.

이러한 기술 요소들을 통해 그래프 데이터베이스는 복잡하게 연결된 데이터를 직관적으로 모델링하고, 관계 중심의 쿼리를 매우 효율적으로 처리할 수 있습니다.