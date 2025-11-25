---
id: code-analysis-obfuscation-001
title: 코드 분석 도구 & 난독화
category: fundamental
subcategory: 소프트웨어 공학
subjectCategories:
  - SE
  - IS
difficulty: intermediate
certifications:
  - information-management
  - computer-systems
keywords:
  - 정적 분석
  - 동적 분석
  - SAST
  - DAST
  - SonarQube
  - 난독화
  - ProGuard
importance: 4
relatedTopics:
  - test-001
  - security-solution-001
trends:
  - AI-Powered Code Analysis
  - IAST (Interactive Application Security Testing)
  - RASP (Runtime Application Self-Protection)
tags:
  - '2025'
---

# 정의
코드 품질 향상과 보안 취약점 발견을 위한 정적/동적 분석 도구와 코드 보호를 위한 난독화 기법을 다룹니다.

## 기술요소
- 정적 분석 (SAST - Static Application Security Testing)
  - 소스코드 분석 도구
    - SonarQube: 코드 품질, 기술부채, 보안 취약점 종합 분석
    - Checkmarx: 엔터프라이즈급 보안 취약점 탐지
    - Fortify: HP 제공, OWASP Top 10 취약점 탐지
    - PMD: Java 코드 품질 검사, 코딩 규칙 위반 탐지
    - ESLint: JavaScript/TypeScript 정적 분석, 코드 스타일 검사
  - 분석 항목
    - 보안 취약점: SQL Injection, XSS, CSRF, 하드코딩된 비밀번호
    - 코드 품질: 중복 코드, 긴 메서드, 높은 복잡도
    - 코딩 표준 위반: 네이밍 규칙, 주석 부족
    - 잠재적 버그: Null Pointer, 리소스 누수, Dead Code
  - 장점: 실행 없이 분석, 개발 초기 발견, CI/CD 통합 가능
  - 단점: False Positive (오탐) 많음, 런타임 동작 분석 불가
- 동적 분석 (DAST - Dynamic Application Security Testing)
  - 런타임 분석 도구
    - OWASP ZAP: 오픈소스 웹 애플리케이션 보안 스캐너
    - Burp Suite: 웹 애플리케이션 침투 테스트 도구
    - AppScan: IBM 제공, 자동화된 보안 테스트
  - 분석 방법
    - 블랙박스 테스트: 소스코드 없이 실행 중인 애플리케이션 테스트
    - 공격 시뮬레이션: SQL Injection, XSS 등 실제 공격 패턴 주입
    - 세션 관리 테스트: 인증/인가, 세션 하이재킹 취약점
  - 장점: 실제 런타임 동작 검증, False Positive 낮음
  - 단점: 실행 환경 필요, 코드 위치 파악 어려움
- 대화형 분석 (IAST - Interactive Application Security Testing)
  - 정적 + 동적 분석 결합: 애플리케이션 실행 중 코드 계측(Instrumentation)
  - 도구: Contrast Security, Seeker
  - 장점: 정확도 높음, 취약점 코드 위치 정확히 파악
  - 단점: 성능 오버헤드, 프로덕션 환경 적용 제한
- 코드 난독화 (Code Obfuscation)
  - 난독화 기법
    - 이름 난독화(Name Obfuscation): 변수, 메서드, 클래스명을 의미 없는 문자로 변경 (a, b, c)
    - 제어흐름 난독화(Control Flow Obfuscation): if-else를 복잡한 switch-case로 변환, 무의미한 분기 추가
    - 문자열 암호화(String Encryption): 하드코딩된 문자열을 암호화하여 저장, 런타임 복호화
    - 코드 가상화(Code Virtualization): 바이트코드를 커스텀 가상머신 명령어로 변환
    - Anti-Debugging: 디버거 감지 시 비정상 종료
  - 난독화 도구
    - ProGuard: Android Java 코드 난독화 및 최적화
    - R8: Android의 ProGuard 후속, 더 빠른 성능
    - JavaScript Obfuscator: JavaScript 코드 난독화
    - DexGuard: Android 앱 고급 난독화 (유료)
  - 목적: 리버스 엔지니어링 방지, 지적재산 보호
  - 한계: 완전한 보안 불가, 디버깅 어려움, 성능 저하 가능
- 런타임 보호 (RASP - Runtime Application Self-Protection)
  - 애플리케이션 내부에 보안 에이전트 임베딩
  - 런타임에 공격 탐지 및 차단 (예: SQL Injection 시도 시 쿼리 차단)
  - 도구: Contrast Protect, Imperva RASP
- Code Coverage 측정
  - 테스트 커버리지 도구
    - Jacoco: Java 코드 커버리지 측정
    - Istanbul (nyc): JavaScript/Node.js 커버리지
    - Coverage.py: Python 커버리지
  - 측정 지표: 구문 커버리지, 분기 커버리지, 경로 커버리지

## 특징
- 정적 분석(SAST): 소스코드/바이트코드 분석, 실행 없이 취약점 탐지
- 정적 분석 도구: SonarQube, Checkmarx, Fortify, PMD, ESLint
- 동적 분석(DAST): 실행 중 애플리케이션 분석, 런타임 취약점 발견
- 동적 분석 도구: OWASP ZAP, Burp Suite, AppScan
- 코드 난독화: 리버스 엔지니어링 방지, 변수/메서드 이름 변경, 제어흐름 복잡화
- 난독화 도구: ProGuard, R8(Android), JavaScript Obfuscator
- Code Coverage 측정: Jacoco, Istanbul

## 최신 트렌드
- AI-Powered Code Analysis
- IAST (Interactive Application Security Testing)
- RASP (Runtime Application Self-Protection)
