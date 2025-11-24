---
id: db-security-001
title: DB 보안 (접근제어 & 암호화)
category: fundamental
subcategory: 데이터베이스 보안
subjectCategories:
  - DB
  - IS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 데이터베이스 보안
  - 접근제어
  - 암호화
  - TDE
  - 감사 로그
  - DB 방화벽
importance: 5
relatedTopics:
  - sql-injection-001
  - encryption-001
  - auth-001
trends:
  - Zero Trust Database Security
  - Database Activity Monitoring (DAM)
tags:
  - '2025'
---

# 정의
데이터베이스의 기밀성, 무결성, 가용성을 보장하기 위한 접근제어, 암호화, 감사 등의 보안 대책입니다.

## 특징
- 접근제어: 사용자 인증, 권한 관리 (GRANT/REVOKE), 역할 기반 접근제어(RBAC)
- TDE (Transparent Data Encryption): 데이터 파일/백업 자동 암호화
- 컬럼 암호화: 민감 데이터 컬럼 암호화 (주민번호, 카드번호)
- 네트워크 암호화: SSL/TLS로 통신 구간 암호화
- 감사 로그: 모든 DB 활동 기록, 이상 행위 탐지
- DB 방화벽: SQL 트래픽 모니터링 및 차단
- 최소 권한 원칙: 필요한 최소 권한만 부여
- 데이터 마스킹: 운영 환경 외 민감 데이터 마스킹

## 최신 트렌드
- Zero Trust Database Security
- Database Activity Monitoring (DAM)
