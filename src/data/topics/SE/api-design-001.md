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

## 기술요소
- REST 핵심 구성요소
  - 자원(Resource): URI로 표현되는 시스템 객체 (예: /users/{id})
  - HTTP 메서드: GET(조회), POST(생성), PUT(수정), DELETE(삭제)
  - 표현(Representation): JSON, XML 등의 데이터 형식
  - Stateless: 서버가 클라이언트 상태를 저장하지 않음
  - HATEOAS: 응답에 다음 가능한 액션 링크 포함
- GraphQL 핵심 구성요소
  - Schema Definition Language (SDL): 타입 시스템 정의
  - Query: 데이터 조회, 필요한 필드만 선택적 요청
  - Mutation: 데이터 생성/수정/삭제 작업
  - Subscription: 실시간 데이터 변경 알림 (WebSocket 기반)
  - Resolver: 각 필드의 실제 데이터 가져오기 로직
- gRPC 핵심 구성요소
  - Protocol Buffers (Protobuf): 직렬화 포맷, IDL(Interface Definition Language)
  - HTTP/2: 멀티플렉싱, 헤더 압축, 양방향 스트리밍 지원
  - Service Definition: .proto 파일로 서비스 인터페이스 정의
  - Streaming: Unary, Server Streaming, Client Streaming, Bidirectional Streaming
  - Code Generation: Protobuf 컴파일러로 다양한 언어의 클라이언트/서버 코드 자동 생성
- API 문서화 및 관리 도구
  - OpenAPI (Swagger): REST API 명세 표준, Swagger UI로 대화형 문서화
  - AsyncAPI: 비동기 API (WebSocket, Kafka 등) 문서화 표준
  - Postman/Insomnia: API 테스트 및 문서화 도구

## 최신 트렌드
- AsyncAPI
- WebSocket & Server-Sent Events
- API-First Development
