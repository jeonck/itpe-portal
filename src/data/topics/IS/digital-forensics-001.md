---
id: digital-forensics-001
title: 디지털 포렌식 (절차, 원칙)
category: digital-service
subcategory: 침해사고 대응
subjectCategories:
  - IS
difficulty: advanced
certifications:
  - information-management
  - computer-systems
keywords:
  - 디지털 포렌식
  - 증거 보전
  - 침해사고 분석
  - 무결성
  - 정당성
  - 신뢰성
importance: 4
relatedTopics:
  - security-attack-001
  - cyber-resilience-001
trends:
  - 클라우드 포렌식
  - 모바일 포렌식
  - AI 기반 포렌식 분석
---

# 정의
디지털 포렌식(Digital Forensics)은 사이버 범죄나 보안 침해 사고 발생 시, 디지털 기기 및 저장 매체(컴퓨터, 스마트폰, 서버 등)에 남아있는 전자적 증거를 과학적이고 법률적인 절차와 방법론에 따라 수집, 분석, 보존하여 법정에서 효력을 갖도록 하는 기술 및 절차를 의미합니다. 이는 침해 사고의 원인 규명, 범인 추적, 피해 규모 산정 등에 활용됩니다.

## 특징
- **목표**: 침해 사고의 진실 규명, 전자적 증거의 확보 및 분석, 법적 증거 능력 확보.
- **디지털 포렌식의 5대 원칙**:
    1.  **정당성의 원칙 (Principle of Legitimacy)**: 모든 포렌식 과정은 법적 절차와 규정을 준수해야 합니다 (압수수색 영장 등).
    2.  **재현의 원칙 (Principle of Reproducibility)**: 동일한 조건과 절차를 반복했을 때 항상 동일한 결과가 도출되어야 합니다.
    3.  **무결성의 원칙 (Principle of Integrity)**: 증거가 수집, 분석, 보존되는 전 과정에서 원본의 변경이나 훼손이 없었음을 보장해야 합니다. (해시 값 사용)
    4.  **연계 보관성의 원칙 (Principle of Chain of Custody)**: 증거물이 최초 획득 시점부터 최종 분석 결과가 법정에 제출될 때까지의 모든 취급 이력을 명확히 기록하고 보존해야 합니다.
    5.  **신속성의 원칙 (Principle of Rapidity)**: 휘발성 증거가 소실되기 전에 신속하게 증거를 확보하고 분석해야 합니다.
- **디지털 포렌식 절차**:
    1.  **준비 단계 (Preparation)**: 포렌식 도구 준비, 인력 구성, 법적 절차 검토.
    2.  **식별 단계 (Identification)**: 전자적 증거의 존재 여부 및 위치, 유형 파악.
    3.  **수집 및 획득 단계 (Collection & Acquisition)**: 증거의 무결성을 보존하며 원본을 훼손하지 않는 방식으로 정확하게 증거를 수집 및 확보 (디스크 이미징, 메모리 덤프 등).
    4.  **분석 단계 (Analysis)**: 수집된 증거를 복구, 필터링, 검색, 검토하여 의미 있는 정보를 추출하고 사건의 개요를 파악.
    5.  **보고서 작성 (Reporting)**: 분석 결과와 결론을 명확하고 객관적으로 작성하여 제출.
- **주요 대상**: 컴퓨터 하드디스크, 메모리, 모바일 폰, 네트워크 트래픽, 클라우드 데이터 등.
- **활용**: 사이버 범죄 수사, 기업 내부 감사, 침해 사고 대응, 지적재산권 분쟁 등.

