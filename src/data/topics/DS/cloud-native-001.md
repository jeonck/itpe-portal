---
category: digital-service
certifications:
- information-management
difficulty: advanced
id: cloud-native-001
importance: 5
keywords:
- Cloud Native
- Microservices
- Container
- Kubernetes
- DevOps
- 12-Factor App
relatedTopics:
- kubernetes-001
- serverless-001
- msa-001
subcategory: Cloud/Infra
subjectCategories:
- DS
tags:
- '2025'
title: 클라우드 네이티브 (Cloud Native)
trends:
- Platform Engineering
- FinOps
---

# 정의
클라우드 환경에서 동적이고 확장 가능한 애플리케이션을 구축하고 실행하기 위한 설계 방식과 문화입니다.

## 특징
- 핵심 원칙: 마이크로서비스, 컨테이너화, 동적 오케스트레이션, DevOps/CI/CD
- 12-Factor App: 코드베이스, 의존성, 설정, 백엔드 서비스 등 베스트 프랙티스
- 컨테이너: Docker, 경량, 이식성, 불변 인프라
- 오케스트레이션: Kubernetes, 자동 배포, 확장, 복구
- 서비스 메시: Istio, Linkerd, 트래픽 관리, 보안, 관찰성
- Observability: 로깅(ELK), 메트릭(Prometheus), 트레이싱(Jaeger)
- Infrastructure as Code: Terraform, Helm, GitOps (ArgoCD, Flux)
- 사용 사례: SaaS 애플리케이션, 대규모 웹 서비스, 금융 플랫폼

## 기술요소
클라우드 네이티브 아키텍처는 다음 기술 요소들을 기반으로 애플리케이션의 민첩성, 확장성, 탄력성을 극대화합니다.

-   **마이크로서비스 아키텍처 (MSA, Microservices Architecture)**:
    -   **원칙**: 하나의 큰 애플리케이션을 작고 독립적인 서비스들로 분리하여 개발, 배포, 운영합니다.
    -   **장점**: 각 서비스는 독립적으로 개발 및 배포될 수 있어 민첩성이 높고, 특정 서비스의 장애가 전체 시스템에 미치는 영향을 최소화합니다.

-   **컨테이너 (Container)**:
    -   **기술**: Docker와 같은 컨테이너 기술을 사용하여 애플리케이션과 그 종속성(라이브러리, 런타임 등)을 패키징합니다.
    -   **특징**: 경량화되어 빠르고 효율적이며, 개발, 테스트, 운영 환경 간의 일관성을 보장합니다(불변 인프라).

-   **컨테이너 오케스트레이션 (Container Orchestration)**:
    -   **기술**: Kubernetes(쿠버네티스)는 컨테이너화된 애플리케이션의 배포, 확장, 관리, 자동 복구 등을 자동화하는 핵심 플랫폼입니다.
    -   **기능**:
        -   **자동 배포 및 롤백**: 새로운 버전 배포 및 문제 발생 시 이전 버전으로 자동 롤백.
        -   **자동 스케일링**: 트래픽 부하에 따라 컨테이너 수를 자동으로 조절.
        -   **자체 복구 (Self-healing)**: 장애 발생 컨테이너를 자동으로 재시작하거나 교체.
        -   **서비스 디스커버리 및 로드 밸런싱**: 서비스 간 통신을 위한 엔드포인트 관리 및 트래픽 분산.

-   **서비스 메시 (Service Mesh)**:
    -   **기술**: 마이크로서비스 간의 통신을 제어하고 가시성을 확보하는 인프라 계층 (예: Istio, Linkerd, Envoy).
    -   **기능**: 트래픽 관리(라우팅, 서킷 브레이커), 보안(인증, 암호화), 관찰성(모니터링, 로깅, 트레이싱) 등을 애플리케이션 코드 변경 없이 제공합니다.

-   **CI/CD (Continuous Integration/Continuous Delivery/Deployment)**:
    -   **원칙**: 코드 변경 사항을 주기적으로 빌드, 테스트, 배포하는 자동화된 파이프라인.
    -   **도구**: Jenkins, GitLab CI/CD, GitHub Actions, ArgoCD, Flux 등.
    -   **GitOps**: Git 리포지토리를 통해 인프라 및 애플리케이션 배포를 관리하는 방식.

-   **관찰성 (Observability)**:
    -   **기술**: 시스템의 상태를 이해하기 위해 로깅, 메트릭, 트레이싱 데이터를 수집하고 분석하는 능력.
    -   **도구**:
        -   **로깅**: Elasticsearch, Logstash, Kibana (ELK Stack).
        -   **메트릭**: Prometheus, Grafana.
        -   **트레이싱**: Jaeger, Zipkin.

-   **Infrastructure as Code (IaC)**:
    -   **원칙**: 서버, 데이터베이스, 네트워크 등 인프라를 코드로 정의하고 관리하여 자동화된 프로비저닝 및 일관성을 확보합니다.
    -   **도구**: Terraform, Ansible, CloudFormation, Helm.

이러한 기술 요소들은 클라우드 네이티브 애플리케이션의 설계, 개발, 배포 및 운영 전반에 걸쳐 유기적으로 통합되어 작동합니다.

