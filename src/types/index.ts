// 기술사 자격증 타입
export type CertificationType = 'information-management' | 'computer-systems';

// 도메인 카테고리
export type DomainCategory =
  | 'fundamental'           // 공통 필수
  | 'management-focus'      // 정보관리 집중
  | 'technical-focus'       // 컴퓨터시스템응용 집중
  | 'digital-service';      // 최신 기술 트렌드

// 과목 카테고리
export type SubjectCategory =
  | 'SE'  // Software Engineering (소프트웨어 공학)
  | 'DB'  // Database (데이터베이스)
  | 'NW'  // Network (네트워크)
  | 'IS'  // Information Security (정보보안)
  | 'IM'  // IT Management (IT경영)
  | 'PM'  // Project Management (프로젝트 관리)
  | 'CA'  // Computer Architecture (컴퓨터 구조)
  | 'OS'  // Operating System (운영체제)
  | 'AL'  // Algorithm (알고리즘)
  | 'DS'; // Digital Service (디지털 서비스)

// 토픽 난이도
export type DifficultyLevel = 'basic' | 'intermediate' | 'advanced';

// 토픽 인터페이스
export interface Topic {
  id: string;
  title: string;
  category: DomainCategory;
  subcategory: string;
  subjectCategories: SubjectCategory[]; // 과목 카테고리 (복수 가능)
  difficulty: DifficultyLevel;
  certifications: CertificationType[]; // 어느 기술사에 해당하는지
  keywords: string[];
  mnemonic?: string; // 암기 두음
  definition: string;
  characteristics: string[];
  diagram?: string; // 구성도 URL 또는 설명
  relatedTopics: string[]; // 연관 토픽 ID들
  importance: number; // 1-5 중요도
  trends?: string[]; // 최신 트렌드 정보
}

// 학습 로드맵 단계
export interface LearningStep {
  id: string;
  step: number;
  title: string;
  duration: string;
  goal: string;
  activities: string[];
  outputs: string[];
  tips: string[];
}

// 마인드맵 노드
export interface MindMapNode {
  id: string;
  label: string;
  type: 'domain' | 'category' | 'topic';
  data: {
    topicId?: string;
    description?: string;
    color?: string;
  };
}

// 마인드맵 엣지
export interface MindMapEdge {
  id: string;
  source: string;
  target: string;
  type?: string;
  label?: string;
}

// 타이머 모드
export type TimerMode = 'short' | 'long' | 'hundred_minutes'; // 10분, 25분 or 100분

// 타이머 상태
export interface TimerState {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  isPaused: boolean;
}
