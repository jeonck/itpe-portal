---
id: autonomous-driving-001
title: 자율주행
category: digital-service
subcategory: New Tech
subjectCategories:
  - DS
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - 자율주행
  - Level 0-5
  - Sensor Fusion
  - LIDAR
  - V2X
importance: 4
relatedTopics:
  - ai-deep-learning-001
  - edge-computing-001
  - embedded-rtos-001
trends:
  - End-to-End Learning
  - HD Map-Free
  - Vision Transformer
  - Software-Defined Vehicle
---

# 정의
센서, AI, 제어 시스템을 통합하여 인간 개입 없이 차량이 스스로 주행하는 기술로, SAE 레벨 0~5로 구분됩니다.

## 특징
- SAE 자율주행 레벨: Level 0(자동화 없음), Level 1(운전자 보조, 크루즈 컨트롤), Level 2(부분 자동화, 차선 유지+속도 조절), Level 3(조건부 자동화, 특정 상황에서 자율주행), Level 4(고도 자동화, 특정 구역 완전 자율), Level 5(완전 자동화, 모든 상황)
- 센서 융합(Sensor Fusion): 카메라(이미지), LIDAR(3D 거리), RADAR(속도, 악천후), 초음파(근거리), GPS/IMU(위치/자세). 다중 센서 데이터 통합으로 정확도 향상
- 핵심 기술: 인지(Perception, 객체 탐지/추적, CNN), 판단(Planning, 경로 계획, 강화학습), 제어(Control, 조향/가속/제동, PID)
- V2X(Vehicle-to-Everything): V2V(차량 간), V2I(인프라), V2P(보행자), V2N(네트워크) 통신으로 협력 주행. 5G, DSRC
- 과제: 엣지 케이스 처리, 법적 책임, 윤리적 판단(트롤리 딜레마), 보안(해킹), 고비용
