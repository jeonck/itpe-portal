---
category: digital-service
certifications:
- information-management
difficulty: advanced
id: agentic-ai-001
importance: 5
keywords:
- Agentic AI
- AI Agent
- Autonomous AI
- Multi-Agent
- Tool Use
- Function Calling
relatedTopics:
- llm-001
- rag-001
- prompt-engineering-001
subcategory: AI/ML
subjectCategories:
- DS
tags:
- '2025'
title: Agentic AI (에이전트 AI)
trends:
- Multi-Agent System
- AI Agent Framework (LangGraph, AutoGen)
---

# 정의
자율적으로 목표를 설정하고, 계획을 수립하며, 도구를 사용하여 복잡한 작업을 수행하는 AI 시스템.

## 특징
- 자율성 (Autonomy): 최소한의 인간 개입으로 작업 수행
- 계획 수립 (Planning): 목표 달성을 위한 단계별 계획, ReAct, Plan-and-Execute
- 도구 사용 (Tool Use): Function Calling, API 호출, 외부 도구 활용
- 기억 (Memory): 대화 이력, 장기 기억(Vector DB), 작업 상태 유지
- Multi-Agent System: 여러 에이전트 협업, 역할 분담, 상호작용
- 주요 패턴: ReAct (Reasoning + Acting), Chain-of-Thought, Self-Reflection
- 프레임워크: LangChain, LangGraph, AutoGen, CrewAI
- 사용 사례: 고객 지원, 데이터 분석, 코드 생성, 업무 자동화

## 동작원리
Agentic AI(에이전트 AI)는 자율적으로 목표를 달성하기 위해 다음과 같은 동작 원리를 따릅니다.

1.  **목표 설정 (Goal Setting)**:
    -   초기 프롬프트나 사용자의 지시를 바탕으로 에이전트가 달성해야 할 구체적인 목표를 정의합니다.
    -   복잡한 목표의 경우, 이를 더 작고 관리 가능한 하위 목표(Sub-goals)로 분해합니다.

2.  **계획 수립 (Planning)**:
    -   설정된 목표를 달성하기 위한 단계별 실행 계획(Plan)을 수립합니다.
    -   **ReAct (Reasoning and Acting)** 패턴: LLM이 "생각(Thought)"을 통해 다음 "행동(Action)"을 결정하고, 그 행동의 "관찰(Observation)"을 바탕으로 다시 생각하여 계획을 수정하고 발전시킵니다.
    -   **Plan-and-Execute**: 먼저 전체적인 실행 계획을 세우고, 각 단계를 순차적으로 실행하면서 필요에 따라 계획을 수정합니다.

3.  **도구 사용 (Tool Use / Function Calling)**:
    -   계획 실행 과정에서 필요한 정보를 얻거나 특정 작업을 수행하기 위해 외부 도구(Tools)를 활용합니다.
    -   **Function Calling**: LLM이 특정 함수(API 호출, 검색 엔진 사용, 코드 실행, 데이터베이스 조회 등)를 호출해야 할 때, 그 함수의 이름과 인자를 결정하여 호출합니다.
    -   **외부 데이터 소스 연동**: 검색 엔진, 데이터베이스, 웹 API 등을 통해 실시간 정보를 획득하거나 데이터를 처리합니다.

4.  **기억 관리 (Memory Management)**:
    -   에이전트는 작업 수행 과정에서 얻은 정보와 대화 이력을 기억하여 일관된 행동을 유지하고 학습합니다.
    -   **단기 기억 (Short-Term Memory)**: 현재 대화나 작업 세션에 필요한 정보를 유지합니다. (컨텍스트 윈도우 내의 프롬프트)
    -   **장기 기억 (Long-Term Memory)**: 과거의 경험, 학습 내용, 중요한 정보 등을 벡터 데이터베이스(Vector DB) 등에 저장하여 필요할 때 검색(Retrieval)하여 활용합니다. (RAG, Retrieval Augmented Generation의 핵심)

5.  **실행 및 관찰 (Execution and Observation)**:
    -   수립된 계획에 따라 도구를 사용하거나 직접 행동을 실행합니다.
    -   실행 결과(Observation)를 다시 관찰하고, 이 관찰을 바탕으로 다음 행동을 결정하거나 계획을 수정합니다.

6.  **자기 성찰 및 개선 (Self-Reflection and Refinement)**:
    -   자신의 행동과 그 결과를 평가하고, 목표 달성에 실패했거나 개선의 여지가 있는 경우, 이를 바탕으로 계획이나 전략을 수정하여 다음 시도에 반영합니다.
    -   **Chain-of-Thought (CoT)**: 복잡한 추론 과정을 단계별로 분해하여 사고 과정을 명시적으로 기록하고 개선합니다.

이러한 동작 원리들은 LLM(Large Language Model)의 강력한 언어 이해 및 생성 능력을 바탕으로 에이전트가 복잡한 환경에서 자율적으로 문제를 해결할 수 있도록 돕습니다.