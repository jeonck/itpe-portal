---
category: digital-service
certifications:
- information-management
difficulty: intermediate
id: prompt-engineering-001
importance: 4
keywords:
- Prompt
- Few-shot
- Chain-of-Thought
- In-Context Learning
relatedTopics:
- llm-001
- rag-001
subcategory: AI/ML
subjectCategories:
- DS
title: Prompt Engineering
trends:
- Auto Prompt Optimization
- Prompt Compression
- Adversarial Prompting
- Constitutional AI
---

# 정의
LLM에 입력하는 프롬프트를 설계하고 최적화하여 원하는 출력을 얻는 기법으로, AI 활용의 핵심 스킬 기법.


## 특징
- Zero-shot Prompting: 예시 없이 지시만으로 작업 수행. 예: "다음 텍스트를 요약해줘: [텍스트]"
- Few-shot Prompting: 몇 개의 예시를 제공하여 패턴 학습. 예: "긍정: 좋아요 / 부정: 싫어요 / [새 문장]?"
- Chain-of-Thought (CoT): "단계별로 생각해보자" 추가로 추론 과정 유도. 복잡한 문제 해결에 효과적
- Role Prompting: 역할 부여. 예: "당신은 전문 Python 개발자입니다. 다음 코드를 리뷰해주세요"
- 주요 기법: 명확한 지시, 구조화(JSON/XML), 구분자(###, """) 사용, 출력 형식 지정, 제약 조건 명시

## 기술요소
프롬프트 엔지니어링은 LLM(거대 언어 모델)으로부터 원하는 응답을 얻기 위해 입력 프롬프트(지시문)를 설계하고 최적화하는 다양한 기술 요소를 포함합니다.

-   **프롬프팅 기법 (Prompting Techniques)**:
    -   **제로샷 프롬프팅 (Zero-shot Prompting)**: 모델에게 특정 태스크에 대한 예시를 전혀 제공하지 않고, 지시문만으로 작업을 수행하도록 요청하는 방식.
        -   **활용**: 모델의 일반화 능력을 테스트하거나, 새로운 태스크에 빠르게 적용할 때 사용.
    -   **퓨샷 프롬프팅 (Few-shot Prompting)**: 모델에게 몇 가지 예시(Input-Output 쌍)를 제공하여 모델이 태스크의 패턴을 이해하고 유사한 방식으로 응답하도록 유도하는 방식.
        -   **활용**: 특정 스타일, 형식, 뉘앙스를 요구하는 작업에 유용.
    -   **체인 오브 사운드 프롬프팅 (Chain-of-Thought, CoT Prompting)**: 모델에게 질문에 대한 최종 답변을 바로 요구하기보다, 문제를 단계별로 풀어나가도록 중간 추론 과정을 명시적으로 요구하는 방식.
        -   **효과**: 복잡한 추론 문제를 해결하는 데 있어 모델의 정확도를 크게 향상시킵니다. (예: "단계별로 생각해보자.", "Let's think step by step.")
    -   **CoT 변형**:
        -   **제로샷 CoT**: "단계별로 생각해보자."와 같은 간단한 문구를 프롬프트에 추가하여 모델이 자체적으로 추론 과정을 생성하도록 유도.
        -   **퓨샷 CoT**: 몇 가지 추론 예시를 포함하여 모델이 추론 과정을 모방하도록 유도.
    -   **역할 프롬프팅 (Role Prompting)**: 모델에 특정 역할(예: "당신은 전문 코딩 리뷰어입니다.")을 부여하여 해당 역할에 맞는 응답을 생성하도록 유도하는 방식.
    -   **Self-Reflection (자기 성찰)**: 모델이 자신의 응답을 스스로 평가하고 개선점을 찾아 다음 응답에 반영하도록 하는 기법.

-   **프롬프트 최적화 요소**:
    -   **명확성 및 구체성**: 모호한 지시 대신 명확하고 구체적인 지시문을 사용해야 합니다.
    -   **구조화 (Structuring)**: XML, JSON 등 특정 형식으로 출력을 요청하여 모델의 응답을 예측 가능하게 만듭니다.
    -   **구분자 (Delimiters)**: `###`, `"""` 등 특정 구분자를 사용하여 프롬프트의 각 섹션을 명확히 분리합니다.
    -   **제약 조건 (Constraints)**: 답변 길이, 사용 금지 단어 등 모델의 출력에 대한 제약 조건을 명시합니다.
    -   **페르소나 (Persona)**: 모델의 응답 스타일이나 톤앤매너를 설정합니다.

-   **In-Context Learning (ICL)**:
    -   **정의**: 모델이 외부의 파라미터 업데이트 없이, 주어진 프롬프트(맥락) 내의 예시를 통해 새로운 태스크를 학습하고 수행하는 능력.

프롬프트 엔지니어링은 LLM의 성능을 최대한 끌어내어 다양한 태스크를 효율적으로 수행하는 데 필수적인 기술이자 역량입니다.