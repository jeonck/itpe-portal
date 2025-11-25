---
category: digital-service
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: access-control-001
importance: 5
keywords:
- 접근통제
- DAC
- MAC
- RBAC
- ABAC
- 최소 권한
relatedTopics:
- auth-001
- zero-trust-architecture-001
subcategory: 접근통제
subjectCategories:
- IS
title: 접근통제 (Access Control)
---

# 정의
접근통제(Access Control)는 정보 자원(파일, 데이터베이스, 시스템 등)에 대해 인가된 사용자만이 접근하고 특정 작업을 수행할 수 있도록 제한하는 보안 메커니즘입니다. 사용자 신원 확인(인증) 후 접근 권한을 부여하며, 정보보호의 기밀성, 무결성, 가용성 보장에 핵심적인 역할을 합니다.

## 특징
- 접근통제 모델:
    - DAC (Discretionary Access Control): 재량적 접근통제. 객체의 소유자가 접근 권한을 임의로 부여하거나 변경할 수 있습니다. (예: Unix/Linux 파일 권한) 유연하지만 보안 관리 어려움.
    - MAC (Mandatory Access Control): 강제적 접근통제. 시스템 관리자가 미리 정해둔 보안 등급(레이블)에 따라 접근 권한을 부여하며, 사용자는 권한을 변경할 수 없습니다. (예: 군사, 정부 시스템) 높은 보안 수준, 낮은 유연성.
    - RBAC (Role-Based Access Control): 역할 기반 접근통제. 사용자에게 직접 권한을 부여하는 대신, 특정 역할(Role)에 권한을 부여하고, 사용자에게 역할을 할당합니다. (예: 관리자, 사용자, 개발자) 관리가 용이하고 확장성이 높음.
    - ABAC (Attribute-Based Access Control): 속성 기반 접근통제. 사용자, 객체, 환경의 다양한 속성(Attribute)을 기반으로 동적으로 접근 권한을 결정합니다. (예: 사용자 부서, 객체 민감도, 접근 시간) 가장 유연하고 세밀한 제어 가능.
- 최소 권한 원칙 (Principle of Least Privilege): 사용자나 시스템은 자신의 기능을 수행하는 데 필요한 최소한의 권한만을 가져야 한다는 보안 원칙.
- 분리 원칙 (Separation of Duties): 하나의 중요한 업무가 한 명의 사용자에게 집중되지 않도록 여러 사용자에게 분산하여 권한 남용 및 오류 방지.

## 기술요소
접근통제는 다양한 모델을 통해 구현되며, 각각 다른 방식의 통제 수준과 유연성을 제공합니다.

-   DAC (Discretionary Access Control, 재량적 접근통제):
    -   원리: 객체(파일, 데이터 등)의 소유자가 자신의 판단(재량)에 따라 해당 객체에 대한 접근 권한을 다른 사용자에게 부여하거나 변경할 수 있는 모델입니다.
    -   특징: 유연성이 높지만, 권한 부여가 분산되어 관리 복잡성이 증가하고 보안 정책 일관성 유지가 어렵습니다. 권한 전이(Propagation) 문제가 발생할 수 있습니다.
    -   구현: 접근통제 목록(ACL, Access Control List) 또는 권한 매트릭스(Access Control Matrix)를 사용합니다.
    -   예시: Unix/Linux 파일 시스템의 파일 권한(rwx).

-   MAC (Mandatory Access Control, 강제적 접근통제):
    -   원리: 시스템 관리자나 중앙 권한이 미리 정해둔 보안 등급(Security Label)에 따라 주체(사용자, 프로세스)와 객체(파일, 데이터)의 접근을 강제적으로 통제하는 모델입니다. 객체의 소유자라 할지라도 시스템 관리자에 의해 부여된 등급을 벗어나는 권한 변경은 불가능합니다.
    -   특징: 높은 보안 수준을 제공하며, 군사나 국가 기밀 정보 시스템과 같이 엄격한 보안이 요구되는 환경에 적합합니다. 하지만 유연성이 매우 낮습니다.
    -   구현: 보안 레이블(비밀, 극비 등)을 주체와 객체에 할당하고, 지배 규칙(예: 읽기는 하위 등급에서 상위 등급으로 가능, 쓰기는 상위 등급에서 하위 등급으로 가능)에 따라 접근을 제어합니다. (Bell-LaPadula 모델, Biba 모델)

-   RBAC (Role-Based Access Control, 역할 기반 접근통제):
    -   원리: 사용자에게 직접 권한을 부여하는 대신, 조직 내의 직무나 역할(Role)에 접근 권한을 할당하고, 사용자에게는 해당 역할을 부여하여 간접적으로 접근을 통제하는 모델입니다.
    -   특징: DAC와 MAC의 절충안으로, 관리가 용이하고 확장성이 높습니다. 사용자의 직무 변경 시 역할만 변경하면 되어 관리 효율성이 뛰어납니다.
    -   구현: 사용자 - 역할 - 권한의 3단계 구조를 가집니다.
    -   예시: 개발자, DBA, 인사 관리자 등의 역할에 따른 시스템 접근 권한.

-   ABAC (Attribute-Based Access Control, 속성 기반 접근통제):
    -   원리: 사용자, 객체, 환경(접근 시간, 위치 등)의 다양한 속성(Attribute)을 기반으로 실시간으로 접근 허용 여부를 동적으로 결정하는 모델입니다. 미리 정의된 정책(Policy)에 따라 접근을 제어합니다.
    -   특징: 가장 유연하고 세밀한(Granular) 접근 제어가 가능하며, 복잡하고 동적인 환경에 적합합니다. Zero Trust Architecture의 핵심 요소입니다.
    -   구현: XACML(eXtensible Access Control Markup Language)과 같은 정책 언어를 사용하여 규칙을 정의합니다.

-   최소 권한 원칙 (Principle of Least Privilege):
    -   사용자나 시스템은 자신의 기능을 수행하는 데 필요한 최소한의 권한만을 가져야 한다는 보안 원칙. 모든 접근통제 모델의 기본 전제.

이러한 기술 요소들은 조직의 보안 정책과 시스템의 특성에 맞춰 조합되거나 단독으로 사용되어 정보 자산을 보호합니다.