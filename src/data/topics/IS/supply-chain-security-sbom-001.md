---
id: supply-chain-security-sbom-001
title: 공급망 보안 (SBOM)
category: digital-service
subcategory: 공급망 보안
subjectCategories:
  - IS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 공급망 보안
  - SBOM
  - 소프트웨어 자재 명세서
  - 오픈소스 보안
importance: 4
relatedTopics:
  - security-attack-001
  - sdlc-001
trends:
  - 국가별 SBOM 의무화
  - SBOM 교환 표준 (SPDX, CycloneDX)
  - 자동화된 SBOM 생성 및 분석
---

# 정의
공급망 보안은 소프트웨어 개발 및 배포 과정 전반에 걸쳐 발생하는 보안 위협으로부터 시스템을 보호하는 것을 목표로 합니다. 특히, SBOM(Software Bill of Materials)은 소프트웨어를 구성하는 모든 구성 요소(오픈소스, 상용 라이브러리, 의존성 등)의 목록을 제공하여 소프트웨어 공급망의 투명성을 확보하고 잠재적 취약점을 관리하는 데 필수적인 도구입니다.

## 특징
- **소프트웨어 공급망 공격**: 개발 환경, 빌드 시스템, 배포 파이프라인 등을 통해 악성코드를 주입하거나 취약점을 악용하는 공격.
- **SBOM (Software Bill of Materials)**: 소프트웨어 구성 요소의 명세서로, 마치 제품의 성분표와 같습니다. 구성 요소의 이름, 버전, 라이선스, 해시 값 등을 포함합니다.
- **투명성 확보**: SBOM을 통해 소프트웨어에 포함된 모든 구성 요소를 파악하고, 알려진 취약점 유무를 신속하게 확인할 수 있습니다.
- **취약점 관리**: SBOM 정보를 기반으로 소프트웨어에 포함된 오픈소스 및 라이브러리의 취약점을 식별하고 패치 우선순위를 결정합니다.
- **컴플라이언스**: 특정 산업이나 국가에서는 SBOM 제출을 의무화하고 있습니다 (예: 미국 행정명령).

