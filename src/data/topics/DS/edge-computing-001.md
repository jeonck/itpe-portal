---
id: edge-computing-001
title: Edge Computing
category: digital-service
subcategory: Cloud
subjectCategories:
  - DS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - Edge
  - Fog Computing
  - CDN
  - 5G
  - IoT
importance: 4
relatedTopics:
  - cloud-infra-001
  - serverless-001
  - autonomous-driving-001
trends:
  - Edge AI
  - 5G MEC
  - WebAssembly at Edge
  - Confidential Edge Computing
---

# 정의
데이터가 생성되는 네트워크 엣지(사용자 근처)에서 데이터 처리와 분석을 수행하여 지연시간을 최소화하는 분산 컴퓨팅 패러다임입니다.

## 특징
- Cloud vs Edge: Cloud는 중앙 집중(높은 지연, 대용량 처리), Edge는 분산 처리(낮은 지연, 실시간 응답, 대역폭 절약)
- 계층 구조: Device(IoT, 센서) → Edge(게이트웨이, Edge 서버) → Fog(지역 데이터센터) → Cloud(중앙)
- 핵심 특성: 저지연(1~10ms), 실시간 처리, 오프라인 동작, 프라이버시 보호(로컬 처리), 대역폭 절감
- 활용 사례: 자율주행(실시간 판단), AR/VR(저지연 렌더링), 산업 IoT(설비 모니터링), 스마트시티(CCTV 분석), CDN(콘텐츠 캐싱)
- 기술 스택: K3s(경량 K8s), KubeEdge, AWS IoT Greengrass, Azure IoT Edge, Cloudflare Workers
