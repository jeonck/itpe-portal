---
id: serverless-001
title: Serverless
category: digital-service
subcategory: Cloud
subjectCategories:
  - DS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - FaaS
  - Lambda
  - Event-driven
  - Cold Start
importance: 4
relatedTopics:
  - msa-001
  - kubernetes-001
  - cloud-infra-001
trends:
  - Serverless Containers
  - Edge Functions
  - Serverless Framework
  - WASM 런타임
---

# 정의
서버 관리 없이 코드만 배포하여 실행하는 클라우드 컴퓨팅 모델로, 사용한 만큼만 과금되는 이벤트 기반 아키텍처입니다.

## 특징
- FaaS(Function as a Service): 함수 단위 실행. AWS Lambda, Azure Functions, Google Cloud Functions. 이벤트(HTTP, DB 변경, 메시지) 발생 시 자동 실행
- 장점: 인프라 관리 불필요, 자동 스케일링, 사용량 기반 과금(Idle 비용 없음), 빠른 개발/배포
- 단점: Cold Start(첫 실행 지연, 100ms~수 초), 실행 시간 제한(15분), 상태 비저장(Stateless), 벤더 종속성
- 활용 사례: API 백엔드, 이미지 처리, 데이터 파이프라인, Webhook, Cron 작업, IoT 데이터 처리
- BaaS(Backend as a Service): Firebase, Supabase. 인증, DB, 스토리지를 서비스로 제공
