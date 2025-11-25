---
category: digital-service
certifications:
- computer-systems
difficulty: advanced
id: pim-pnm-001
importance: 5
keywords:
- PIM
- PNM
- Processing In Memory
- Processing Near Memory
- 메모리 병목
- AI 반도체
relatedTopics:
- hbm-001
- ai-semiconductor-001
- cache-memory-001
subcategory: 고성능 메모리
subjectCategories:
- CA
- DS
title: PIM (Processing In Memory) & PNM
trends:
- CXL과의 결합
- AI/빅데이터 가속화
- 저전력 고성능 컴퓨팅
---

# 정의
PIM(Processing In Memory)은 중앙 처리 장치(CPU)와 메모리 간의 빈번한 데이터 이동으로 발생하는 병목 현상(폰노이만 병목)을 해결하기 위해 메모리 내부 또는 메모리 근처에서 연산을 수행하는 차세대 컴퓨팅 아키텍처입니다. PNM(Processing Near Memory)은 PIM의 한 형태로, 연산 유닛을 메모리 칩 가까이에 배치하여 데이터 이동 거리를 줄이는 기술을 포함합니다. AI 및 빅데이터 처리와 같이 대용량 데이터의 병렬 연산이 많은 작업에서 성능과 에너지 효율을 획기적으로 향상시킬 수 있습니다.

## 특징
- 폰노이만 병목 (Von Neumann Bottleneck): CPU와 메모리가 분리되어 있어 데이터 처리 시 CPU와 메모리 간의 데이터 이동이 빈번하게 발생하고, 이로 인해 전체 시스템 성능 저하 및 에너지 소모 증가를 야기하는 현상.
- PIM (Processing In Memory):
    - 원리: 연산 유닛(프로세싱 코어)을 메모리 칩 내부에 직접 통합하여 데이터를 이동시키지 않고 메모리에서 바로 연산을 수행합니다.
    - 장점: 데이터 이동 거리 최소화, 병목 현상 해소, 에너지 효율 극대화, 병렬 처리 성능 향상.
    - 단점: 메모리 구조 변경의 복잡성, 범용 컴퓨팅에 적용의 어려움, 프로그래밍 모델의 변화 요구.
    - 활용: AI 추론, 빅데이터 분석, 그래프 연산 등 특정 데이터 중심 작업에 특화.
    - 예시: 삼성 HBM-PIM (HBM 내부에 AI 연산 기능 통합).
- PNM (Processing Near Memory):
    - 원리: PIM과 유사하게 메모리 근처에 연산 유닛을 배치하여 데이터 이동 거리를 줄입니다. PIM보다는 연산 유닛이 메모리 칩 외부, 또는 칩 패키지 내부에 더 가깝게 위치합니다.
    - 장점: PIM 대비 구현 복잡도가 낮고, 기존 메모리 아키텍처와의 호환성 확보 용이.
- HBM (High Bandwidth Memory)과의 연계: PIM/PNM 기술은 HBM과 결합될 때 시너지 효과를 낼 수 있습니다. HBM의 고대역폭 특성 위에 PIM/PNM의 인메모리 연산 기능을 더해 AI 가속기 성능을 극대화합니다.
- CXL (Compute Express Link)과의 관계: CXL은 CPU와 가속기, 메모리 간의 고속 인터페이스 표준으로, PIM/PNM과 같은 차세대 메모리 기술을 더욱 효율적으로 활용할 수 있는 기반을 제공합니다.

# 정의
PIM(Processing In Memory)은 중앙 처리 장치(CPU)와 메모리 간의 빈번한 데이터 이동으로 발생하는 병목 현상(폰노이만 병목)을 해결하기 위해 메모리 내부 또는 메모리 근처에서 연산을 수행하는 차세대 컴퓨팅 아키텍처입니다. PNM(Processing Near Memory)은 PIM의 한 형태로, 연산 유닛을 메모리 칩 가까이에 배치하여 데이터 이동 거리를 줄이는 기술을 포함합니다. AI 및 빅데이터 처리와 같이 대용량 데이터의 병렬 연산이 많은 작업에서 성능과 에너지 효율을 획기적으로 향상시킬 수 있습니다.

## 특징
- 폰노이만 병목 (Von Neumann Bottleneck): CPU와 메모리가 분리되어 있어 데이터 처리 시 CPU와 메모리 간의 데이터 이동이 빈번하게 발생하고, 이로 인해 전체 시스템 성능 저하 및 에너지 소모 증가를 야기하는 현상.
- PIM (Processing In Memory):
    - 원리: 연산 유닛(프로세싱 코어)을 메모리 칩 내부에 직접 통합하여 데이터를 이동시키지 않고 메모리에서 바로 연산을 수행합니다.
    - 장점: 데이터 이동 거리 최소화, 병목 현상 해소, 에너지 효율 극대화, 병렬 처리 성능 향상.
    - 단점: 메모리 구조 변경의 복잡성, 범용 컴퓨팅에 적용의 어려움, 프로그래밍 모델의 변화 요구.
    - 활용: AI 추론, 빅데이터 분석, 그래프 연산 등 특정 데이터 중심 작업에 특화.
    - 예시: 삼성 HBM-PIM (HBM 내부에 AI 연산 기능 통합).
- PNM (Processing Near Memory):
    - 원리: PIM과 유사하게 메모리 근처에 연산 유닛을 배치하여 데이터 이동 거리를 줄입니다. PIM보다는 연산 유닛이 메모리 칩 외부, 또는 칩 패키지 내부에 더 가깝게 위치합니다.
    - 장점: PIM 대비 구현 복잡도가 낮고, 기존 메모리 아키텍처와의 호환성 확보 용이.
- HBM (High Bandwidth Memory)과의 연계: PIM/PNM 기술은 HBM과 결합될 때 시너지 효과를 낼 수 있습니다. HBM의 고대역폭 특성 위에 PIM/PNM의 인메모리 연산 기능을 더해 AI 가속기 성능을 극대화합니다.
- CXL (Compute Express Link)과의 관계: CXL은 CPU와 가속기, 메모리 간의 고속 인터페이스 표준으로, PIM/PNM과 같은 차세대 메모리 기술을 더욱 효율적으로 활용할 수 있는 기반을 제공합니다.