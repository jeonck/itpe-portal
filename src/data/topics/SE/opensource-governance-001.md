---
id: opensource-governance-001
title: 오픈소스 거버넌스 & 라이선스
category: management-focus
subcategory: IT 거버넌스
subjectCategories:
  - SE
  - IM
difficulty: intermediate
certifications:
  - information-management
keywords:
  - F/OSS
  - GPL
  - MIT
  - Apache
  - Copyleft
  - 오픈소스 라이선스
  - SBOM
importance: 4
relatedTopics:
  - agile-devops-001
trends:
  - SBOM (Software Bill of Materials)
  - OSS Supply Chain Security
  - OpenChain
tags:
  - '2025'
---

# 정의
자유/오픈소스 소프트웨어(F/OSS)의 사용, 배포, 기여 시 준수해야 할 라이선스 정책과 거버넌스 체계를 다룹니다.

## 동작원리
오픈소스 거버넌스는 다음과 같은 라이선스 컴플라이언스 프로세스로 동작합니다:

1. 오픈소스 사용 정책 수립
   조직의 오픈소스 사용 원칙과 가이드라인 정의:
   - 허용 라이선스: MIT, Apache 2.0, BSD (Permissive 라이선스)
   - 조건부 허용: LGPL (동적 링크만 허용)
   - 금지 라이선스: GPL v3, AGPL (Copyleft, 소스 공개 의무)
   - 라이선스 충돌 방지: GPL + Apache 조합 금지 등
   - 상업용 제품 배포 시 Copyleft 라이선스 사용 금지

2. 오픈소스 식별 및 스캔 (Detection)
   제품에 사용된 오픈소스 컴포넌트를 자동으로 탐지:
   - SCA 도구 사용: Black Duck, Snyk, FOSSA, FOSSology
   - 소스코드 스캔: 파일 헤더, 라이선스 텍스트 패턴 매칭
   - 의존성 분석: package.json, pom.xml, requirements.txt 파싱
   - 바이너리 스캔: 컴파일된 라이브러리에서 라이선스 추출
   - 스니펫 탐지: 복사-붙여넣기한 오픈소스 코드 조각 발견

3. SBOM (Software Bill of Materials) 생성
   사용된 오픈소스 목록과 라이선스 정보를 문서화:
   - SBOM 포맷: SPDX, CycloneDX (표준 형식)
   - 기록 항목: 컴포넌트명, 버전, 라이선스, 저작권자, 다운로드 URL
   - 의존성 트리: 직접 의존성과 전이적 의존성(Transitive Dependency) 구분
   - 예: React 16.8.0 → MIT License → Copyright (c) Facebook, Inc.

4. 라이선스 리스크 분석
   각 오픈소스 라이선스의 의무사항과 리스크 평가:

   GPL v2/v3 (Copyleft):
   - 의무: 파생 저작물 소스코드 공개, 동일 라이선스 적용
   - 리스크: 상업 제품에 사용 시 전체 소스 공개 의무 발생

   LGPL (Lesser GPL):
   - 의무: LGPL 라이브러리 자체 수정 시 소스 공개
   - 허용: 동적 링크(Dynamic Linking)는 소스 공개 불필요

   Apache 2.0 (Permissive):
   - 의무: 저작권 고지, LICENSE 파일 포함, 수정 내용 명시
   - 특허: 특허 보호 조항 포함 (특허 소송 시 라이선스 자동 종료)

   MIT (Permissive):
   - 의무: 저작권 고지 및 라이선스 전문 포함
   - 자유: 상업적 사용, 수정, 배포 자유

5. 컴플라이언스 검토 및 승인
   오픈소스 사용 승인 프로세스:
   - OSRB (Open Source Review Board) 구성: 법무팀, 개발팀, 보안팀
   - 검토 항목: 라이선스 충돌, 보안 취약점, 유지보수 상태
   - 승인 기준: 정책 준수, 라이선스 호환성, 보안 패치 최신성
   - 대체 컴포넌트 검토: 금지 라이선스의 경우 대체 라이브러리 탐색

6. 라이선스 의무사항 이행
   배포 시 라이선스 의무를 준수:
   - 오픈소스 고지문(OSS Notice) 작성: 제품 설명서 또는 About 화면에 포함
   - 소스코드 공개 준비: GPL/LGPL의 경우 소스코드 제공 방법 준비 (URL, CD)
   - LICENSE 파일 포함: 각 오픈소스의 라이선스 전문 포함
   - 수정 내용 명시: Apache 라이선스의 경우 NOTICE 파일에 수정 내역 기록

7. 보안 취약점 모니터링
   사용 중인 오픈소스의 보안 취약점 지속 관찰:
   - CVE 데이터베이스 모니터링: NVD, GitHub Security Advisories
   - 자동 알림: Dependabot, Snyk으로 취약점 발견 시 알림
   - 패치 적용: 취약점 발견 시 즉시 업데이트 또는 패치 적용

8. 공급망 보안 (Supply Chain Security)
   오픈소스 공급망 공격 방지:
   - 무결성 검증: SHA-256 체크섬, GPG 서명 확인
   - 신뢰된 저장소 사용: Maven Central, npm Registry 등 공식 저장소
   - Typosquatting 방지: 패키지명 오타로 인한 악성 라이브러리 설치 방지
   - SBOM 배포: 고객에게 SBOM 제공으로 투명성 확보

## 특징
- 주요 라이선스: GPL (v2, v3), LGPL, MIT, Apache 2.0, BSD
- Copyleft: 파생 저작물도 동일 라이선스 적용 (GPL, LGPL)
- Permissive: 상업적 이용 자유 (MIT, Apache, BSD)
- 라이선스 의무사항: 저작권 고지, 소스 공개, 특허 보호
- SBOM (Software Bill of Materials): 소프트웨어 구성 요소 목록
- 오픈소스 거버넌스: 사용 정책, 검토 프로세스, 컴플라이언스
- 도구: FOSSology, Black Duck, Snyk, FOSSA
- OpenChain: ISO/IEC 5230 오픈소스 컴플라이언스 표준

## 최신 트렌드
- SBOM (Software Bill of Materials)
- OSS Supply Chain Security
- OpenChain
