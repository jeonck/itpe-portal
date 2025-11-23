---
id: prompt-engineering-001
title: Prompt Engineering
category: digital-service
subcategory: AI/ML
subjectCategories:
  - DS
difficulty: intermediate
certifications:
  - information-management
keywords:
  - Prompt
  - Few-shot
  - Chain-of-Thought
  - In-Context Learning
importance: 4
relatedTopics:
  - llm-001
  - rag-001
trends:
  - Auto Prompt Optimization
  - Prompt Compression
  - Adversarial Prompting
  - Constitutional AI
---

# 정의
LLM에 입력하는 프롬프트를 설계하고 최적화하여 원하는 출력을 얻는 기법으로, AI 활용의 핵심 스킬입니다.

## 특징
- Zero-shot Prompting: 예시 없이 지시만으로 작업 수행. 예: "다음 텍스트를 요약해줘: [텍스트]"
- Few-shot Prompting: 몇 개의 예시를 제공하여 패턴 학습. 예: "긍정: 좋아요 / 부정: 싫어요 / [새 문장]?"
- Chain-of-Thought (CoT): "단계별로 생각해보자" 추가로 추론 과정 유도. 복잡한 문제 해결에 효과적
- Role Prompting: 역할 부여. 예: "당신은 전문 Python 개발자입니다. 다음 코드를 리뷰해주세요"
- 주요 기법: 명확한 지시, 구조화(JSON/XML), 구분자(###, """) 사용, 출력 형식 지정, 제약 조건 명시
