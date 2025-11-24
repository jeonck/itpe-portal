---
id: access-control-001
title: 접근통제 (Access Control)
category: digital-service
subcategory: 접근통제
subjectCategories:
  - IS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 접근통제
  - DAC
  - MAC
  - RBAC
  - ABAC
  - 최소 권한
importance: 5
relatedTopics:
  - auth-001
  - zero-trust-architecture-001
---

# 정의
접근통제(Access Control)는 정보 자원(파일, 데이터베이스, 시스템 등)에 대해 인가된 사용자만이 접근하고 특정 작업을 수행할 수 있도록 제한하는 보안 메커니즘입니다. 사용자 신원 확인(인증) 후 접근 권한을 부여하며, 정보보호의 기밀성, 무결성, 가용성 보장에 핵심적인 역할을 합니다.

## 특징
- **접근통제 모델**:
    - **DAC (Discretionary Access Control)**: 재량적 접근통제. 객체의 소유자가 접근 권한을 임의로 부여하거나 변경할 수 있습니다. (예: Unix/Linux 파일 권한) 유연하지만 보안 관리 어려움.
    - **MAC (Mandatory Access Control)**: 강제적 접근통제. 시스템 관리자가 미리 정해둔 보안 등급(레이블)에 따라 접근 권한을 부여하며, 사용자는 권한을 변경할 수 없습니다. (예: 군사, 정부 시스템) 높은 보안 수준, 낮은 유연성.
    - **RBAC (Role-Based Access Control)**: 역할 기반 접근통제. 사용자에게 직접 권한을 부여하는 대신, 특정 역할(Role)에 권한을 부여하고, 사용자에게 역할을 할당합니다. (예: 관리자, 사용자, 개발자) 관리가 용이하고 확장성이 높음.
    - **ABAC (Attribute-Based Access Control)**: 속성 기반 접근통제. 사용자, 객체, 환경의 다양한 속성(Attribute)을 기반으로 동적으로 접근 권한을 결정합니다. (예: 사용자 부서, 객체 민감도, 접근 시간) 가장 유연하고 세밀한 제어 가능.
- **최소 권한 원칙 (Principle of Least Privilege)**: 사용자나 시스템은 자신의 기능을 수행하는 데 필요한 최소한의 권한만을 가져야 한다는 보안 원칙.
- **분리 원칙 (Separation of Duties)**: 하나의 중요한 업무가 한 명의 사용자에게 집중되지 않도록 여러 사용자에게 분산하여 권한 남용 및 오류 방지.

