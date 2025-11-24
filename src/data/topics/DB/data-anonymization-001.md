---
id: data-anonymization-001
title: 데이터 비식별화 (가명처리 & 익명처리)
category: management-focus
subcategory: 데이터 보안
subjectCategories:
  - DB
  - IS
  - IM
difficulty: intermediate
certifications:
  - information-management
keywords:
  - 비식별화
  - 가명처리
  - 익명처리
  - K-익명성
  - L-다양성
  - 마스킹
importance: 5
relatedTopics:
  - mydata-001
  - db-security-001
  - data-governance-001
trends:
  - Differential Privacy
  - Synthetic Data
tags:
  - '2025'
---

# 정의
개인을 식별할 수 없도록 데이터를 처리하여 프라이버시를 보호하면서 데이터 활용성을 유지하는 기법입니다.

## 특징
- 가명처리: 추가 정보 없이 개인 식별 불가, 재식별 가능
- 익명처리: 재식별 불가능, 개인정보보호법 제외
- 4단계 프로세스: 사전검토 → 비식별 조치 → 적정성 평가 → 사후관리
- 비식별 기법: 가명화, 총계처리, 데이터 삭제, 범주화, 마스킹
- K-익명성: 동일 속성 조합 최소 K명 이상
- L-다양성: 민감 속성 최소 L개 다양한 값
- T-근접성: 민감 속성 분포가 전체와 유사
- Differential Privacy: 개인 기여 정보 보호

## 최신 트렌드
- Differential Privacy
- Synthetic Data
