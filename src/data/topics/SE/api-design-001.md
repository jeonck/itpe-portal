---
id: api-design-001
title: API 설계 (REST / GraphQL / gRPC)
category: fundamental
subcategory: 소프트웨어 공학
subjectCategories:
  - SE
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - REST
  - GraphQL
  - gRPC
  - OpenAPI
  - Protocol Buffers
  - HTTP
importance: 5
relatedTopics:
  - msa-001
  - api-gateway-servicemesh-001
trends:
  - AsyncAPI
  - WebSocket & Server-Sent Events
  - API-First Development
tags:
  - '2025'
---

# 정의
시스템 간 통신을 위한 API 설계 방법론으로, REST(자원 중심), GraphQL(쿼리 기반), gRPC(고성능 RPC)의 특징과 적용 시나리오를 이해합니다.

## 특징
- REST: HTTP 메서드(GET, POST, PUT, DELETE), 자원 중심 URL, Stateless, HATEOAS
- REST 성숙도: Level 0(HTTP), Level 1(리소스), Level 2(HTTP 동사), Level 3(HATEOAS)
- GraphQL: 단일 엔드포인트, 클라이언트 주도 쿼리, Over/Under Fetching 해결
- GraphQL 기능: Query, Mutation, Subscription, Schema & Type System
- gRPC: Protocol Buffers 기반, HTTP/2, 양방향 스트리밍, 고성능
- gRPC 사용 사례: 마이크로서비스 간 통신, 모바일 클라이언트
- OpenAPI (Swagger): REST API 문서화 표준

## 최신 트렌드
- AsyncAPI
- WebSocket & Server-Sent Events
- API-First Development
