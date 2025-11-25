---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: advanced
id: cloud-security-001
importance: 5
keywords:
- 클라우드 보안
- CASB
- CSPM
- CWPP
- 클라우드 보안 모델
- 책임 공유 모델
relatedTopics:
- cloud-infra-001
- zero-trust-architecture-001
- security-solution-001
subcategory: 클라우드 보안
subjectCategories:
- IS
- DS
title: 클라우드 보안 (CASB, CSPM, CWPP)
trends:
- CNAPP (Cloud Native Application Protection Platform)
- SASE (Secure Access Service Edge)
- 클라우드 워크로드 보안 자동화
---

# 정의
클라우드 보안은 클라우드 환경에서 데이터, 애플리케이션, 인프라를 안전하게 보호하는 일련의 기술, 정책, 절차를 의미합니다. 클라우드 컴퓨팅의 특성상 전통적인 온프레미스 환경과는 다른 보안 위협과 도전 과제가 존재하며, CASB, CSPM, CWPP와 같은 전문화된 솔루션들이 클라우드 환경의 복잡한 보안 요구사항을 충족시키기 위해 활용됩니다.

## 특징
- 클라우드 책임 공유 모델 (Shared Responsibility Model):
    - 클라우드 서비스 제공자 (CSP): 클라우드 '자체'의 보안(Security *of* the Cloud). 물리적 시설, 네트워크, 하이퍼바이저 등 클라우드 인프라의 보안을 책임.
    - 클라우드 사용자 (고객): 클라우드 '내부'의 보안(Security *in* the Cloud). 데이터, 애플리케이션, 운영체제, 네트워크 구성 등 클라우드 상에 배포된 자산의 보안을 책임.
- 주요 클라우드 보안 위협:
    - 설정 오류(Misconfiguration), 접근 제어 실패, 악성 코드, 계정 탈취, API 남용, 데이터 유출, 취약한 인터페이스.
- 클라우드 보안 솔루션:
    - CASB (Cloud Access Security Broker): 클라우드 애플리케이션(SaaS)과 사용자 간의 보안 정책 적용 및 가시성 확보. 데이터 보호, 위협 방지, 가시성, 규제 준수 기능을 제공. (예: Shadow IT 탐지, DLP, 접근 제어)
    - CSPM (Cloud Security Posture Management): 클라우드 인프라(IaaS, PaaS)의 보안 설정 오류를 지속적으로 모니터링하고 규제 준수 여부를 평가. (예: 보안 취약점 스캔, 규정 준수 감사, IAM 정책 검토)
    - CWPP (Cloud Workload Protection Platform): 클라우드 워크로드(VM, 컨테이너, 서버리스 함수)에 대한 실시간 보호. 안티바이러스, 방화벽, 침입 방지, 취약점 관리, 무결성 모니터링 기능 제공.
- 기타 클라우드 보안 기술:
    - CNAPP (Cloud Native Application Protection Platform): CASB, CSPM, CWPP, CIEM(클라우드 인프라 권한 관리), IaC(코드형 인프라) 보안 등을 통합한 클라우드 네이티브 보안 플랫폼.
    - 클라우드 DLP (Data Loss Prevention): 클라우드 환경에서의 데이터 유출 방지.
    - 클라우드 WAF (Web Application Firewall): 클라우드 기반 웹 애플리케이션 방화벽.

# 정의
클라우드 보안은 클라우드 환경에서 데이터, 애플리케이션, 인프라를 안전하게 보호하는 일련의 기술, 정책, 절차를 의미합니다. 클라우드 컴퓨팅의 특성상 전통적인 온프레미스 환경과는 다른 보안 위협과 도전 과제가 존재하며, CASB, CSPM, CWPP와 같은 전문화된 솔루션들이 클라우드 환경의 복잡한 보안 요구사항을 충족시키기 위해 활용됩니다.

## 특징
- 클라우드 책임 공유 모델 (Shared Responsibility Model):
    - 클라우드 서비스 제공자 (CSP): 클라우드 '자체'의 보안(Security *of* the Cloud). 물리적 시설, 네트워크, 하이퍼바이저 등 클라우드 인프라의 보안을 책임.
    - 클라우드 사용자 (고객): 클라우드 '내부'의 보안(Security *in* the Cloud). 데이터, 애플리케이션, 운영체제, 네트워크 구성 등 클라우드 상에 배포된 자산의 보안을 책임.
- 주요 클라우드 보안 위협:
    - 설정 오류(Misconfiguration), 접근 제어 실패, 악성 코드, 계정 탈취, API 남용, 데이터 유출, 취약한 인터페이스.
- 클라우드 보안 솔루션:
    - CASB (Cloud Access Security Broker): 클라우드 애플리케이션(SaaS)과 사용자 간의 보안 정책 적용 및 가시성 확보. 데이터 보호, 위협 방지, 가시성, 규제 준수 기능을 제공. (예: Shadow IT 탐지, DLP, 접근 제어)
    - CSPM (Cloud Security Posture Management): 클라우드 인프라(IaaS, PaaS)의 보안 설정 오류를 지속적으로 모니터링하고 규제 준수 여부를 평가. (예: 보안 취약점 스캔, 규정 준수 감사, IAM 정책 검토)
    - CWPP (Cloud Workload Protection Platform): 클라우드 워크로드(VM, 컨테이너, 서버리스 함수)에 대한 실시간 보호. 안티바이러스, 방화벽, 침입 방지, 취약점 관리, 무결성 모니터링 기능 제공.
- 기타 클라우드 보안 기술:
    - CNAPP (Cloud Native Application Protection Platform): CASB, CSPM, CWPP, CIEM(클라우드 인프라 권한 관리), IaC(코드형 인프라) 보안 등을 통합한 클라우드 네이티브 보안 플랫폼.
    - 클라우드 DLP (Data Loss Prevention): 클라우드 환경에서의 데이터 유출 방지.
    - 클라우드 WAF (Web Application Firewall): 클라우드 기반 웹 애플리케이션 방화벽.