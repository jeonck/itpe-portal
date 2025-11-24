---
id: cloud-computing-architecture-001
title: 클라우드 컴퓨팅 아키텍처
category: digital-service
subcategory: 클라우드 컴퓨팅
subjectCategories:
  - CA
  - DS
difficulty: intermediate
certifications:
  - computer-systems
keywords:
  - 클라우드 아키텍처
  - IaaS
  - PaaS
  - SaaS
  - 배포 모델
  - 책임 공유 모델
importance: 5
relatedTopics:
  - cloud-infra-001
  - msa-001
trends:
  - 클라우드 네이티브
  - 멀티 클라우드
  - 엣지 클라우드
---

# 정의
클라우드 컴퓨팅 아키텍처는 컴퓨팅 자원(서버, 스토리지, 네트워크, 애플리케이션 등)을 인터넷을 통해 서비스 형태로 제공하는 클라우드 컴퓨팅 환경의 전체적인 구조와 구성 요소를 의미합니다. 이는 주로 서비스 모델(IaaS, PaaS, SaaS)과 배포 모델(Public, Private, Hybrid Cloud)로 구분되며, 자원의 가상화, 분산 처리, 확장성, 유연성 등을 핵심 가치로 합니다.

## 특징
- 클라우드 서비스 모델: 클라우드 서비스 제공자가 관리하는 범위와 사용자가 관리하는 범위에 따라 구분됩니다.
    - IaaS (Infrastructure as a Service):
        - 제공: 가상 머신, 스토리지, 네트워크 등 기본적인 컴퓨팅 인프라.
        - 관리 책임: OS, 미들웨어, 애플리케이션, 데이터를 사용자가 관리.
        - 예시: AWS EC2, Azure VM, Google Compute Engine.
    - PaaS (Platform as a Service):
        - 제공: 운영체제, 미들웨어, 개발 도구 등 애플리케이션 개발 및 실행 플랫폼.
        - 관리 책임: 애플리케이션과 데이터를 사용자가 관리. 인프라는 CSP 책임.
        - 예시: AWS Elastic Beanstalk, Azure App Service, Google App Engine.
    - SaaS (Software as a Service):
        - 제공: 소프트웨어 애플리케이션.
        - 관리 책임: 모든 것을 CSP가 관리. 사용자는 소프트웨어 사용만.
        - 예시: Gmail, Microsoft 365, Salesforce.
- 클라우드 배포 모델: 클라우드 인프라가 어디에 위치하고 누가 소유하며 접근하는지에 따라 구분됩니다.
    - Public Cloud: 불특정 다수의 사용자가 인터넷을 통해 공유하는 클라우드. (AWS, Azure, GCP)
    - Private Cloud: 특정 조직만을 위해 구축 및 운영되는 클라우드. (온프레미스 또는 외부 호스팅)
    - Hybrid Cloud: Public Cloud와 Private Cloud를 결합하여 워크로드를 유연하게 이동하며 사용하는 환경.
    - Multi-Cloud: 둘 이상의 퍼블릭 클라우드 벤더의 서비스를 함께 사용하는 전략.
- 클라우드 책임 공유 모델 (Shared Responsibility Model): 클라우드 서비스 모델에 따라 CSP와 사용자 간의 보안 책임이 달라지는 모델. (자세한 내용은 클라우드 보안 토픽 참조)
- 클라우드 네이티브 (Cloud Native): 클라우드 컴퓨팅 모델의 장점을 최대한 활용하여 애플리케이션을 설계하고 구축하는 접근 방식. (마이크로서비스, 컨테이너, DevOps, CI/CD 등)

