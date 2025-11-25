---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: api-gateway-servicemesh-001
importance: 5
keywords:
- API Gateway
- Service Mesh
- Istio
- Envoy
- Kong
- Sidecar Pattern
relatedTopics:
- msa-001
- kubernetes-001
- api-design-001
subcategory: Cloud
subjectCategories:
- SE
- DS
tags:
- '2025'
title: API Gateway & Service Mesh
trends:
- Ambient Mesh
- eBPF-based Service Mesh
- Multi-Cloud Service Mesh
---

# 정의
MSA 환경에서 API 라우팅/보안/모니터링을 담당하는 API Gateway와 서비스 간 통신을 관리하는 Service Mesh를 통해 분산 시스템의 복잡도를 관리합니다.

## 기술요소
- API Gateway 계층: 외부 클라이언트 요청의 단일 진입점, North-South 트래픽 처리
- Service Mesh 계층: 서비스 간 내부 통신 관리, East-West 트래픽 처리
- 데이터 플레인(Data Plane): Envoy 프록시 기반의 실제 트래픽 전달 계층
- 컨트롤 플레인(Control Plane): Istio Pilot, Citadel 등의 정책 및 설정 관리 계층
- Sidecar Proxy: 각 서비스 Pod에 배치되는 경량 프록시 (Envoy)
- 서비스 레지스트리: 동적 서비스 디스커버리 및 헬스 체크
- mTLS (Mutual TLS): 서비스 간 암호화 통신 및 상호 인증
- Circuit Breaker: 장애 전파 방지를 위한 회로 차단 메커니즘

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

# 정의
MSA 환경에서 API 라우팅/보안/모니터링을 담당하는 API Gateway와 서비스 간 통신을 관리하는 Service Mesh를 통해 분산 시스템의 복잡도를 관리합니다.

## 기술요소
- API Gateway 계층: 외부 클라이언트 요청의 단일 진입점, North-South 트래픽 처리
- Service Mesh 계층: 서비스 간 내부 통신 관리, East-West 트래픽 처리
- 데이터 플레인(Data Plane): Envoy 프록시 기반의 실제 트래픽 전달 계층
- 컨트롤 플레인(Control Plane): Istio Pilot, Citadel 등의 정책 및 설정 관리 계층
- Sidecar Proxy: 각 서비스 Pod에 배치되는 경량 프록시 (Envoy)
- 서비스 레지스트리: 동적 서비스 디스커버리 및 헬스 체크
- mTLS (Mutual TLS): 서비스 간 암호화 통신 및 상호 인증
- Circuit Breaker: 장애 전파 방지를 위한 회로 차단 메커니즘

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