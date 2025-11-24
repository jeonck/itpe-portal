---
id: requirements-traceability-matrix-001
title: 요구사항 추적표 (RTM)
category: management-focus
subcategory: 프로젝트 범위 관리
subjectCategories:
  - PM
  - SE
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - RTM
  - 요구사항 추적표
  - 요구사항 관리
  - 추적성
  - 프로젝트 품질
importance: 4
relatedTopics:
  - pmbok-10-knowledge-areas-001
  - quality-001
trends:
  - 애자일 요구사항 관리 도구
  - ALM (Application Lifecycle Management)
  - AI 기반 요구사항 추적 분석
---

# 정의
요구사항 추적표(RTM, Requirements Traceability Matrix)는 프로젝트 생애주기 동안 요구사항과 다른 프로젝트 산출물(설계 요소, 코드, 테스트 케이스, 비즈니스 목표 등) 간의 양방향 연결을 문서화하는 표입니다. 이를 통해 요구사항이 프로젝트의 모든 단계에서 일관되게 구현되고 검증되었는지 확인할 수 있으며, 변경 발생 시 그 영향을 파악하고 관리하는 데 중요한 도구로 활용됩니다.

## 특징
- **목표**:
    - 요구사항의 누락 방지 및 일관성 유지.
    - 요구사항 변경 시 영향도 분석.
    - 테스트 케이스가 모든 요구사항을 커버하는지 검증.
    - 프로젝트 산출물의 품질 및 무결성 확보.
- **주요 내용**:
    - **요구사항 ID**: 각 요구사항의 고유 식별자.
    - **요구사항 내용**: 요구사항의 상세 설명.
    - **추적 대상**:
        - **상위 추적 (Upstream Traceability)**: 요구사항이 어디로부터 왔는지 (비즈니스 목표, 상위 요구사항, 사용자 스토리 등).
        - **하위 추적 (Downstream Traceability)**: 요구사항이 어떻게 구현되고 검증되는지 (설계 요소, 코드 모듈, 테스트 케이스, 사용자 매뉴얼 등).
    - **상태**: 요구사항의 현재 상태 (초안, 승인, 구현 중, 테스트 완료 등).
    - **변경 관리 정보**: 변경 이력, 변경 승인자 등.
- **RTM의 중요성**:
    - **품질 보증**: 모든 요구사항이 올바르게 구현되었고, 테스트되었음을 보장합니다.
    - **변경 관리**: 요구사항 변경 요청 발생 시, 해당 변경이 어떤 설계, 코드, 테스트에 영향을 미치는지 신속하게 파악하여 효과적인 변경 관리를 지원합니다.
    - **리스크 감소**: 요구사항 누락이나 불일치로 인한 프로젝트 실패 위험을 줄입니다.
    - **커뮤니케이션 향상**: 이해관계자들 간에 요구사항에 대한 공통된 이해를 돕습니다.
- **도구**: Jira, Confluence, DOORS, Excel 등 다양한 도구를 활용하여 RTM을 관리할 수 있습니다.

