---
id: sql-injection-001
title: SQL Injection 방어
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
  - SQL Injection
  - Prepared Statement
  - Parameterized Query
  - ORM
  - OWASP Top 10
importance: 5
relatedTopics:
  - db-security-001
  - security-attack-001
trends:
  - WAF (Web Application Firewall)
  - Runtime Application Self-Protection
tags:
  - '2025'
---

# 정의
악의적인 SQL 쿼리를 주입하여 DB를 조작하는 공격 기법과 이를 방어하는 보안 대책입니다.

## 특징
- 공격 원리: 사용자 입력을 SQL 쿼리에 직접 결합, 쿼리 구조 변경
- 공격 유형: Union-based, Error-based, Blind SQL Injection
- OWASP Top 10: 1위 위험 (Injection)
- Prepared Statement: 쿼리 구조와 데이터 분리, 플레이스홀더 사용
- Parameterized Query: 파라미터 바인딩으로 안전한 쿼리 실행
- ORM 사용: Hibernate, JPA, Django ORM으로 자동 이스케이프
- 입력 검증: Whitelist 기반 검증, 특수문자 필터링
- 최소 권한 원칙: DB 계정 권한 최소화
- WAF: 웹 방화벽으로 패턴 탐지 및 차단

## 최신 트렌드
- WAF (Web Application Firewall)
- Runtime Application Self-Protection
