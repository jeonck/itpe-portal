---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: serverless-001
importance: 4
keywords:
- FaaS
- Lambda
- Event-driven
- Cold Start
relatedTopics:
- msa-001
- kubernetes-001
- cloud-infra-001
subcategory: Cloud
subjectCategories:
- DS
title: Serverless
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



## 기술요소

서버리스(Serverless) 아키텍처는 개발자가 서버 관리 없이 애플리케이션을 구축하고 실행할 수 있도록 하는 다양한 기술 요소들을 활용합니다.



-   **FaaS (Function as a Service)**:

    -   **정의**: 애플리케이션 코드를 '함수' 단위로 배포하고, 이벤트가 발생할 때만 해당 함수가 실행되도록 하는 컴퓨팅 모델.

    -   **주요 플랫폼**: AWS Lambda, Azure Functions, Google Cloud Functions.

    -   **기능**: 코드 실행 환경, 이벤트 트리거(HTTP 요청, 데이터베이스 변경, 메시지 큐 등), 자동 확장(Auto-scaling).

    -   **운영**: 클라우드 제공자가 서버 프로비저닝, 패치, 스케일링 등 모든 인프라 관리를 담당.



-   **이벤트 기반 아키텍처 (Event-driven Architecture)**:

    -   **원리**: 함수가 특정 이벤트에 의해 트리거(실행)되는 방식. 서버리스의 핵심 작동 방식.

    -   **이벤트 소스**: API Gateway(HTTP 요청), S3(객체 생성/변경), SQS/Kafka(메시지), DynamoDB/Cosmos DB(데이터 변경), CloudWatch(스케줄링) 등.

    -   **장점**: 시스템 구성 요소 간의 느슨한 결합(Loose Coupling), 높은 확장성, 실시간 처리.



-   **BaaS (Backend as a Service)**:

    -   **정의**: 개발에 필요한 백엔드 기능(인증, 데이터베이스, 스토리지, 푸시 알림 등)을 API 형태로 제공하는 클라우드 서비스.

    -   **주요 플랫폼**: Google Firebase, AWS Amplify, Supabase.

    -   **기능**: 사용자 인증, 실시간 데이터베이스, 파일 스토리지, 클라우드 함수(FaaS와 연계).

    -   **장점**: 백엔드 개발 및 운영 부담 경감, 빠른 서비스 출시.



-   **컨테이너 기반 서버리스 (Serverless Containers)**:

    -   **정의**: 일반적인 컨테이너 이미지를 사용하여 서버리스 함수를 배포하고 실행하는 모델. FaaS의 제약(언어 런타임, 패키지 크기)을 극복.

    -   **기술**: AWS Fargate, Google Cloud Run, Azure Container Apps.

    -   **장점**: 언어 및 런타임 제약 완화, 기존 컨테이너 환경과의 호환성.



-   **자동 확장 (Auto-scaling)**:

    -   **원리**: 트래픽 부하나 이벤트 발생량에 따라 자동으로 컴퓨팅 리소스(함수 인스턴스)를 늘리거나 줄이는 기능.

    -   **효과**: 서비스 중단 없이 안정적인 성능 유지, 비용 효율성 증대.



-   **상태 비저장 (Stateless)**:

    -   **원리**: 각 함수 호출은 이전 호출의 상태를 기억하지 않는 독립적인 실행 단위.

    -   **장점**: 확장 및 복구가 용이.

    -   **제약**: 상태 유지가 필요한 경우 외부 저장소(DB, 캐시, 스토리지)를 활용해야 합니다.



-   **코드 최적화 및 경량 런타임**:

    -   **Cold Start (콜드 스타트)**: 함수가 처음 호출되거나 오랫동안 사용되지 않아 유휴 상태였을 때, 실행 환경을 초기화하는 데 필요한 시간으로 발생하는 지연 현상.

    -   **WASM (WebAssembly)** 런타임: 작고 빠르며 안전한 샌드박스 환경을 제공하여 서버리스 함수의 실행 효율을 높입니다. (Edge Functions, Cloudflare Workers 등).



이러한 기술 요소들은 서버리스 아키텍처가 개발자가 인프라 관리 부담 없이 비즈니스 로직 개발에 집중하고, 비용 효율적인 방식으로 서비스를 운영할 수 있도록 지원합니다.

