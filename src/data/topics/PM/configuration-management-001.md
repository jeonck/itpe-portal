---
category: management-focus
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: configuration-management-001
importance: 5
keywords:
- 형상 관리
- SCM
- 형상 식별
- 형상 통제
- 형상 감사
- 형상 기록
relatedTopics:
- quality-001
- sdlc-001
subcategory: 프로젝트 품질 관리
subjectCategories:
- PM
- SE
title: 형상 관리 (Configuration Management)
trends:
- DevOps와 형상 관리
- Git 기반 형상 관리
- 자동화된 형상 관리
---

# 정의
형상 관리(Configuration Management)는 소프트웨어 및 시스템의 전체 생명주기 동안 생성되는 산출물(코드, 문서, 설계도 등)의 변경 사항을 체계적으로 식별, 통제, 기록 및 감사하여 일관성과 무결성을 유지하는 활동입니다. SCM(Software Configuration Management)은 소프트웨어 개발에 특화된 형상 관리를 의미.

## 특징
- 목표: 프로젝트 산출물의 무결성 유지, 변경 이력 관리, 버전 관리, 병행 개발 지원, 재사용성 증대.
- 주요 활동:
    1.  형상 식별 (Configuration Identification): 관리 대상이 되는 형상 항목(Configuration Item, CI)을 정의하고 각 항목에 고유한 식별자(버전, 리비전)를 부여합니다. (예: 소스 코드 파일, 설계 문서, 테스트 케이스)
    2.  형상 통제 (Configuration Control): 식별된 형상 항목에 대한 변경 요청을 평가하고 승인/거부하며, 승인된 변경 사항을 통제된 방식으로 적용합니다. (변경 통제 위원회, Change Control Board, CCB)
    3.  형상 기록 (Configuration Status Accounting): 형상 항목의 현재 상태, 변경 내역, 과거 버전 등 모든 정보를 기록하고 보고합니다.
    4.  형상 감사 (Configuration Audit): 형상 항목이 요구사항 및 표준에 부합하는지, 그리고 형상 기록이 실제 상태와 일치하는지 확인합니다.
- 기준선 (Baseline): 특정 시점에 공식적으로 검토 및 합의되고 승인된 형상 항목의 집합으로, 이후의 변경을 위한 참조점 역할을 합니다. (예: 요구사항 기준선, 설계 기준선, 제품 기준선)
- 버전 관리 시스템 (Version Control System, VCS): Git, SVN 등 소스 코드 및 문서의 변경 이력을 추적하고 관리하는 도구. 형상 관리의 핵심 도구.
- 병행 개발 지원: 여러 개발자가 동시에 동일한 파일을 작업할 때 발생할 수 있는 충돌을 관리하고 통합을 지원합니다.
- 재사용성 증대: 잘 관리된 형상 항목은 다른 프로젝트에서 재사용될 수 있어 개발 효율성을 높입니다.

# 정의
형상 관리(Configuration Management)는 소프트웨어 및 시스템의 전체 생명주기 동안 생성되는 산출물(코드, 문서, 설계도 등)의 변경 사항을 체계적으로 식별, 통제, 기록 및 감사하여 일관성과 무결성을 유지하는 활동입니다. SCM(Software Configuration Management)은 소프트웨어 개발에 특화된 형상 관리를 의미합니다.

## 특징
- 목표: 프로젝트 산출물의 무결성 유지, 변경 이력 관리, 버전 관리, 병행 개발 지원, 재사용성 증대.
- 주요 활동:
    1.  형상 식별 (Configuration Identification): 관리 대상이 되는 형상 항목(Configuration Item, CI)을 정의하고 각 항목에 고유한 식별자(버전, 리비전)를 부여합니다. (예: 소스 코드 파일, 설계 문서, 테스트 케이스)
    2.  형상 통제 (Configuration Control): 식별된 형상 항목에 대한 변경 요청을 평가하고 승인/거부하며, 승인된 변경 사항을 통제된 방식으로 적용합니다. (변경 통제 위원회, Change Control Board, CCB)
    3.  형상 기록 (Configuration Status Accounting): 형상 항목의 현재 상태, 변경 내역, 과거 버전 등 모든 정보를 기록하고 보고합니다.
    4.  형상 감사 (Configuration Audit): 형상 항목이 요구사항 및 표준에 부합하는지, 그리고 형상 기록이 실제 상태와 일치하는지 확인합니다.
- 기준선 (Baseline): 특정 시점에 공식적으로 검토 및 합의되고 승인된 형상 항목의 집합으로, 이후의 변경을 위한 참조점 역할을 합니다. (예: 요구사항 기준선, 설계 기준선, 제품 기준선)
- 버전 관리 시스템 (Version Control System, VCS): Git, SVN 등 소스 코드 및 문서의 변경 이력을 추적하고 관리하는 도구. 형상 관리의 핵심 도구.
- 병행 개발 지원: 여러 개발자가 동시에 동일한 파일을 작업할 때 발생할 수 있는 충돌을 관리하고 통합을 지원합니다.
- 재사용성 증대: 잘 관리된 형상 항목은 다른 프로젝트에서 재사용될 수 있어 개발 효율성을 높입니다.