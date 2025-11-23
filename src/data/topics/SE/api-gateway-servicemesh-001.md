---
id: api-gateway-servicemesh-001
title: API Gateway & Service Mesh
category: digital-service
subcategory: Cloud
subjectCategories:
  - SE
  - DS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - API Gateway
  - Service Mesh
  - Istio
  - Envoy
  - Kong
  - Sidecar Pattern
importance: 5
relatedTopics:
  - msa-001
  - kubernetes-001
  - api-design-001
trends:
  - Ambient Mesh
  - eBPF-based Service Mesh
  - Multi-Cloud Service Mesh
tags:
  - '2025'
---

# 정의
MSA 환경에서 API 라우팅/보안/모니터링을 담당하는 API Gateway와 서비스 간 통신을 관리하는 Service Mesh를 통해 분산 시스템의 복잡도를 관리합니다.

## 특징
- API Gateway: 외부 요청의 단일 진입점, 라우팅, 인증/인가, Rate Limiting, 캐싱
- API Gateway 제품: Kong, AWS API Gateway, NGINX, Apigee
- Service Mesh: 서비스 간 통신 관리 인프라 계층
- Service Mesh 기능: 트래픽 관리, 보안(mTLS), 관찰성, 복원력(Circuit Breaker, Retry)
- Sidecar Pattern: 각 서비스에 프록시(Envoy) 배포
- 제품: Istio, Linkerd, Consul Connect
- 데이터 플레인 vs 컨트롤 플레인

## 최신 트렌드
- Ambient Mesh
- eBPF-based Service Mesh
- Multi-Cloud Service Mesh
