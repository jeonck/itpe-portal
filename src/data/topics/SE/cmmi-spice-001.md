---
category: management-focus
certifications:
- information-management
difficulty: advanced
id: cmmi-spice-001
importance: 4
keywords:
- CMMI
- SPICE
- ISO/IEC 15504
- 프로세스 성숙도
- 성숙도 레벨
- 역량 레벨
relatedTopics:
- quality-001
- agile-devops-001
subcategory: 프로세스 성숙도
subjectCategories:
- SE
- IM
tags:
- '2025'
title: CMMI & SPICE (ISO/IEC 15504)
trends:
- CMMI v2.0
- Agile + CMMI
- Automotive SPICE
---

# 정의
소프트웨어 개발 프로세스의 성숙도를 평가하고 개선하는 국제 표준 모델로, CMMI(역량성숙도통합모델)와 SPICE(ISO/IEC 15504)가 대표적 기술.

## 특징
- CMMI 성숙도 레벨: Level 1(초기), Level 2(관리), Level 3(정의), Level 4(정량 관리), Level 5(최적화)
- CMMI 프로세스 영역: 프로젝트 관리, 엔지니어링, 지원, 프로세스 관리
- SPICE (ISO/IEC 15504): 프로세스 역량 평가 모델
- SPICE 역량 레벨: Level 0(불완전) ~ Level 5(최적화)
- Automotive SPICE: 자동차 산업 특화 SPICE
- CMMI v2.0: 애자일, DevOps 통합
- 프로세스 개선: PDCA(Plan-Do-Check-Act) 사이클
- 평가 방법: SCAMPI (CMMI), ISO/IEC 33002 (SPICE)

## 절차
CMMI와 SPICE는 다음과 같은 프로세스 성숙도 평가 및 개선 사이클로 수행됩니다:

1. 현재 프로세스 성숙도 평가 (Assessment)
   조직의 현재 프로세스 수준을 객관적으로 측정:
   - CMMI 평가 방법: SCAMPI (Standard CMMI Appraisal Method for Process Improvement)
     - Class A: 공식 평가 (3주 이상, 인터뷰, 문서 검토, 현장 관찰)
     - Class B/C: 간소화 평가 (자가 진단, 빠른 피드백)
   - SPICE 평가 방법: ISO/IEC 33002 기반
   - 증거 수집: 프로젝트 문서, 산출물, 인터뷰, 프로세스 관찰
   - 평가 범위: 전사 또는 특정 프로젝트 단위

2. 성숙도 레벨 판정
   수집된 증거를 바탕으로 조직의 성숙도 레벨 결정:

   CMMI 성숙도 레벨:
   - Level 1 (초기): 프로세스가 임의적이고 개인 역량에 의존
   - Level 2 (관리): 프로젝트 단위로 프로세스 관리 (요구사항 관리, 계획, 추적)
   - Level 3 (정의): 조직 표준 프로세스 정의 및 전사 적용
   - Level 4 (정량 관리): 프로세스 성과를 통계적으로 관리
   - Level 5 (최적화): 지속적인 프로세스 개선 문화

   SPICE 역량 레벨 (각 프로세스별로 평가):
   - Level 0 (불완전): 프로세스 목적 달성 실패
   - Level 1 (수행): 프로세스 목적은 달성하나 체계적이지 않음
   - Level 2 (관리): 프로세스가 계획되고 추적됨
   - Level 3 (확립): 조직 표준 프로세스 정의 및 사용
   - Level 4 (예측 가능): 정량적 목표 설정 및 달성
   - Level 5 (최적화): 지속적 프로세스 혁신

3. Gap 분석 및 개선 영역 도출
   목표 레벨과 현재 레벨 간 격차 분석:
   - 목표: Level 3 달성
   - 현재: Level 2
   - Gap: 조직 표준 프로세스 미정의, 프로세스 자산 라이브러리 부재
   - 우선순위: 핵심 프로세스 영역부터 개선 (예: 요구사항 관리, 형상 관리)

4. 프로세스 개선 계획 수립
   PDCA(Plan-Do-Check-Act) 사이클로 개선 계획 작성:
   - Plan: 개선 목표, 일정, 책임자, 예산 정의
   - 개선 프로세스 선정: 요구사항 관리, 품질 보증, 형상 관리 등
   - 마일스톤 설정: 6개월 내 Level 3 달성
   - 교육 계획: 프로세스 담당자 교육, 전사 인식 제고

5. 프로세스 정의 및 시범 적용 (Do)
   조직 표준 프로세스를 정의하고 파일럿 프로젝트에 적용:
   - 프로세스 문서화: 절차서, 체크리스트, 템플릿 작성
   - 프로세스 자산 라이브러리 구축: 재사용 가능한 산출물, 교훈
   - 파일럿 프로젝트 선정: 작은 프로젝트에서 시범 적용
   - 툴 도입: JIRA, Confluence, Git 등 프로세스 지원 도구

6. 모니터링 및 측정 (Check)
   프로세스 개선 효과를 정량적으로 측정:
   - 프로세스 준수율: 정의된 프로세스 준수 비율
   - 품질 지표: 결함 밀도, 재작업 비율
   - 일정 지표: 일정 준수율, 예측 정확도
   - 주기적 리뷰: 월간 프로세스 개선 회의

7. 지속적 개선 (Act)
   측정 결과를 바탕으로 프로세스 개선:
   - 문제점 식별: 프로세스 병목, 비효율
   - 프로세스 업데이트: 절차서 개정, 불필요한 단계 제거
   - 전사 확대: 파일럿 성공 시 전체 프로젝트로 확대 적용

8. 재평가 및 인증
   개선 완료 후 공식 재평가:
   - SCAMPI 재평가: 외부 평가기관의 공식 평가
   - 인증서 발급: CMMI Level 3 인증 취득
   - 벤치마킹: 동종 업계 대비 프로세스 성숙도 비교

## 최신 트렌드
- CMMI v2.0
- Agile + CMMI
- Automotive SPICE