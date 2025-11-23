# 기술사 학습 포털

정보관리기술사와 컴퓨터시스템응용기술사 합격을 위한 체계적인 학습 포털입니다.

## 주요 기능

### 1. 토픽 위키
- 1,000개 이상의 핵심 키워드를 체계적으로 정리
- 카테고리별, 난이도별, 기술사별 필터링
- 토픽 간 연관관계 표시
- 상세한 정의, 특징, 키워드 정보 제공

### 2. 학습 로드맵
- 4단계 학습 가이드
  - Step 1: 기본 토픽 탑재 (0~6개월)
  - Step 2: 심화 및 내재화 (6~12개월)
  - Step 3: 실전 모의고사 (시험 3개월 전)
  - Step 4: 파이널 & 멘탈 관리 (시험 1개월 전)
- 단계별 활동, 산출물, 학습 팁 제공

### 3. 마인드맵
- 토픽 간 연결을 시각화
- 카테고리별 필터링
- 인터랙티브한 노드 탐색
- 계층 관계와 연관 관계 구분

### 4. 타이머
- 1교시 용어형: 10분
- 2~4교시 논술형: 25분
- 실전과 동일한 조건에서 시간 관리 연습
- 작성 팁 제공

## 기술 스택

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Visualization**: @xyflow/react (마인드맵)
- **Icons**: Lucide React

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 프로젝트 구조

```
itpe-portal/
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   └── Layout.tsx    # 메인 레이아웃
│   ├── pages/            # 페이지 컴포넌트
│   │   ├── Home.tsx      # 홈 페이지
│   │   ├── TopicWiki.tsx # 토픽 위키
│   │   ├── Roadmap.tsx   # 학습 로드맵
│   │   ├── MindMap.tsx   # 마인드맵
│   │   └── Timer.tsx     # 타이머
│   ├── data/             # JSON 데이터
│   │   ├── topics.json   # 토픽 데이터
│   │   └── roadmap.json  # 로드맵 데이터
│   ├── types/            # TypeScript 타입 정의
│   │   └── index.ts
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 엔트리 포인트
└── public/               # 정적 파일
```

## 데이터 추가하기

### 토픽 추가

`src/data/topics.json` 파일에 새로운 토픽을 추가할 수 있습니다:

```json
{
  "id": "unique-id",
  "title": "토픽 제목",
  "category": "fundamental",
  "subcategory": "카테고리명",
  "difficulty": "intermediate",
  "certifications": ["information-management", "computer-systems"],
  "keywords": ["키워드1", "키워드2"],
  "definition": "정의",
  "characteristics": ["특징1", "특징2"],
  "relatedTopics": ["related-id-1", "related-id-2"],
  "importance": 5,
  "trends": ["최신 트렌드 정보"]
}
```

### 로드맵 수정

`src/data/roadmap.json` 파일에서 학습 로드맵을 수정할 수 있습니다.

## 카테고리 분류

- **fundamental**: 공통 필수 (소프트웨어 공학, 데이터베이스, 네트워크, 정보보안)
- **management-focus**: 정보관리 집중 (IT 경영, 프로젝트 관리)
- **technical-focus**: 컴퓨터시스템 집중 (컴퓨터 구조, 운영체제, 알고리즘)
- **digital-service**: 최신 트렌드 (AI/ML, Cloud, Web/Service)

## 난이도

- **basic**: 기초
- **intermediate**: 중급
- **advanced**: 고급

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.
# itpe-portal
