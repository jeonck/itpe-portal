---
category: fundamental
certifications:
- information-management
- computer-systems
difficulty: intermediate
id: agile-devops-001
importance: 5
keywords:
- Scrum
- XP
- Kanban
- CI/CD
- 파이프라인
- 스프린트
relatedTopics:
- sdlc-001
- kubernetes-001
- test-001
subcategory: 소프트웨어 공학
subjectCategories:
- SE
title: Agile / DevOps
trends:
- SAFe (Scaled Agile Framework)
- GitOps
- Platform Engineering
- FinOps
---

# 정의
변화에 빠르게 대응하는 Agile 방법론과 개발-운영 통합을 통한 DevOps 문화로, 지속적 개선과 자동화를 추구합니다.

## 동작원리
DevOps의 CI/CD 파이프라인은 다음과 같은 단계로 동작합니다:

1. 코드 커밋 (Commit)
   개발자가 Git에 코드를 푸시하면 자동으로 파이프라인이 트리거됩니다.

2. 지속적 통합 (Continuous Integration)
   - 소스 코드 빌드 (컴파일)
   - 단위 테스트 자동 실행
   - 코드 품질 분석 (SonarQube 등)
   - 정적 분석 및 보안 스캔

3. 지속적 배포 (Continuous Deployment)
   - 컨테이너 이미지 빌드 (Docker)
   - 아티팩트 저장소에 업로드
   - 통합 테스트 실행 (Staging 환경)
   - 운영 환경으로 자동 배포

4. 모니터링 및 피드백
   - 애플리케이션 성능 모니터링
   - 로그 수집 및 분석
   - 이슈 발견 시 롤백 또는 긴급 패치

이 과정은 하루에도 수십 번 반복되며, 피드백 루프를 통해 지속적으로 개선됩니다.

## 특징
- Agile: Scrum (스프린트, 데일리 스탠드업), XP (페어 프로그래밍), Kanban (시각화, WIP 제한)
- DevOps: CI/CD 파이프라인, 인프라의 코드화(IaC), 자동화된 테스트
- 짧은 반복 주기와 지속적 배포
- 개발-운영-비즈니스 간 협업 문화
- 자동화를 통한 품질 향상 및 배포 속도 개선

## 최신 트렌드
- SAFe (Scaled Agile Framework)
- GitOps
- Platform Engineering
- FinOps

# 정의
변화에 빠르게 대응하는 Agile 방법론과 개발-운영 통합을 통한 DevOps 문화로, 지속적 개선과 자동화를 추구합니다.

## 동작원리
DevOps의 CI/CD 파이프라인은 다음과 같은 단계로 동작합니다:

1. 코드 커밋 (Commit)
   개발자가 Git에 코드를 푸시하면 자동으로 파이프라인이 트리거됩니다.

2. 지속적 통합 (Continuous Integration)
   - 소스 코드 빌드 (컴파일)
   - 단위 테스트 자동 실행
   - 코드 품질 분석 (SonarQube 등)
   - 정적 분석 및 보안 스캔

3. 지속적 배포 (Continuous Deployment)
   - 컨테이너 이미지 빌드 (Docker)
   - 아티팩트 저장소에 업로드
   - 통합 테스트 실행 (Staging 환경)
   - 운영 환경으로 자동 배포

4. 모니터링 및 피드백
   - 애플리케이션 성능 모니터링
   - 로그 수집 및 분석
   - 이슈 발견 시 롤백 또는 긴급 패치

이 과정은 하루에도 수십 번 반복되며, 피드백 루프를 통해 지속적으로 개선됩니다.

## 특징
- Agile: Scrum (스프린트, 데일리 스탠드업), XP (페어 프로그래밍), Kanban (시각화, WIP 제한)
- DevOps: CI/CD 파이프라인, 인프라의 코드화(IaC), 자동화된 테스트
- 짧은 반복 주기와 지속적 배포
- 개발-운영-비즈니스 간 협업 문화
- 자동화를 통한 품질 향상 및 배포 속도 개선

## 최신 트렌드
- SAFe (Scaled Agile Framework)
- GitOps
- Platform Engineering
- FinOps