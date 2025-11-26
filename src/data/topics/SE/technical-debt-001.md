---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: technical-debt-001
importance: 5
keywords:
- 기술부채
- 레거시 코드
- 리팩토링
- 코드 품질
- 유지보수성
relatedTopics:
- refactoring-001
- clean-code-001
- quality-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
tags:
- '2025'
title: 기술 부채 (Technical Debt)
trends:
- Technical Debt Quantification
- SonarQube Debt Ratio
- Continuous Refactoring
---

# 정의
단기 목표 달성을 위해 최적이 아닌 설계나 구현을 선택함으로써 미래에 추가 비용이 발생하는 현상으로, Ward Cunningham이 제안한 개념 기술.

## 절차
기술 부채는 다음과 같은 사이클로 발생하고 관리됩니다:

1. 기술 부채 발생
   다양한 원인으로 기술 부채가 축적됨:
   - 의도적 부채(Deliberate): 빠른 출시를 위해 의도적으로 간단한 구조 선택
     예: "일단 하드코딩으로 빠르게 배포하고 나중에 설정 파일로 분리하자"
   - 비의도적 부채(Inadvertent): 미숙한 설계, 기술 부족, 요구사항 오해
     예: 처음 개발할 때는 몰랐던 더 나은 패턴을 나중에 발견
   - 환경 변화: 기술 스택 노후화, 라이브러리 지원 종료
   - 시간 압박: 마감일에 쫓겨 품질을 희생

2. 부채 이자 누적 (Technical Debt Interest)
   방치된 부채로 인해 개발 생산성이 지속적으로 하락:
   - 새 기능 추가 시간 증가: 복잡한 코드로 인해 변경이 어려워짐
   - 버그 발생 빈도 증가: 테스트가 없거나 코드가 복잡하여 버그 증가
   - 코드 이해 시간 증가: 가독성이 떨어져 신규 개발자 온보딩 시간 증가
   - 리팩토링 비용 증가: 부채가 쌓일수록 개선 비용도 기하급수적 증가

3. 부채 측정 및 가시화
   기술 부채를 정량화하여 관리 가능한 상태로 만듦:
   - SonarQube Debt Ratio: 코드 품질 이슈를 시간 단위로 환산 (예: 3일 소요)
   - Code Climate: A~F 등급으로 코드 품질 평가
   - 복잡도 지표: Cyclomatic Complexity, 코드 중복률
   - 커버리지 부족: 테스트 커버리지 70% 미만 영역 식별

4. 부채 우선순위 결정
   모든 부채를 한 번에 해결할 수 없으므로 우선순위 설정:
   - 높은 우선순위: 자주 변경되는 코어 모듈의 부채
   - 중간 우선순위: 가끔 수정되는 기능의 부채
   - 낮은 우선순위: 거의 변경되지 않는 레거시 코드
   - 비용 대비 효과 분석: 개선 비용 vs 생산성 향상 효과

5. 부채 해소 (Technical Debt Repayment)
   지속적이고 계획적인 부채 해소 활동:
   - 보이스카우트 규칙: 코드를 건드릴 때마다 조금씩 개선
   - 리팩토링 스프린트: 주기적으로 부채 해소 전용 스프린트 배정
   - 20% 룰: 개발 시간의 20%를 기술 부채 해소에 할애
   - 테스트 작성: 레거시 코드에 테스트 추가 (Characterization Test)
   - 문서화: 기술 부채 목록과 해소 계획 문서화

6. 부채 예방
   새로운 부채 발생을 최소화:
   - 코드 리뷰: Pull Request 시 부채 발생 가능성 검토
   - 자동화된 품질 검사: CI/CD 파이프라인에 정적 분석 도구 통합
   - Definition of Done: 테스트 작성, 문서화 포함
   - 아키텍처 가드레일: 설계 원칙 위반 방지

## 특징
- 의도적 부채: 빠른 출시를 위한 의도적 결정 (Deliberate Technical Debt)
- 비의도적 부채: 미숙한 설계나 기술 부족으로 발생 (Inadvertent Technical Debt)
- 부채 유형: 코드 부채, 설계 부채, 테스트 부채, 문서 부채, 인프라 부채
- 부채 이자: 누적된 부채로 인한 개발 속도 저하, 버그 증가
- 부채 관리: 지속적 리팩토링, 코드 리뷰, 자동화된 테스트
- 부채 측정: SonarQube Debt Ratio, Code Climate
- 레거시 코드: 테스트가 없는 오래된 코드

## 최신 트렌드
- Technical Debt Quantification
- SonarQube Debt Ratio
- Continuous Refactoring
