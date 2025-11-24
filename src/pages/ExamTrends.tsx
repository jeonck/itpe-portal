import { TrendingUp, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Topic {
  name: string;
  isTrend?: boolean;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  topics: Topic[];
}

export default function ExamTrends() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['SE']));

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const categories: Category[] = [
    {
      id: 'SE',
      title: 'SE (소프트웨어 공학)',
      subtitle: 'AI와 생산성 혁신',
      color: 'border-blue-500',
      topics: [
        { name: 'SDLC 모형 (애자일, 나선형, V-모델)' },
        { name: 'Scrum & Kanban' },
        { name: 'XP (eXtreme Programming)' },
        { name: 'DevOps & DevSecOps' },
        { name: 'CI/CD Pipeline' },
        { name: 'MSA (Microservices Architecture)' },
        { name: 'SRE (Site Reliability Engineering)' },
        { name: '플랫폼 엔지니어링 (Platform Engineering)', isTrend: true },
        { name: 'IDP (Internal Developer Platform)' },
        { name: 'ISO/IEC 25010 (품질 모델)' },
        { name: 'ISO/IEC/IEEE 29119 (테스팅)' },
        { name: '리팩토링 (Refactoring)' },
        { name: '디자인 패턴 (GoF, 아키텍처 패턴)' },
        { name: 'Clean Code & Clean Architecture' },
        { name: 'TDD / BDD / DDD (도메인 주도 설계)' },
        { name: 'API Gateway & Service Mesh' },
        { name: 'REST vs GraphQL vs gRPC' },
        { name: 'SW 안전성 (ISO 26262, 61508)' },
        { name: '정적/동적 분석 도구' },
        { name: '코드 난독화' },
        { name: '소프트웨어 가시화 (Visualization)' },
        { name: '기술 부채 (Technical Debt)' },
        { name: '카오스 엔지니어링 (Chaos Engineering)' },
        { name: 'Low-Code / No-Code' },
        { name: 'AI Coding Assistant (Copilot)', isTrend: true },
        { name: 'F/OSS (오픈소스) 거버넌스 & 라이선스' },
        { name: 'SPICE (ISO/IEC 15504) & CMMI' },
        { name: '감리 프레임워크 & 3단계 감리' },
        { name: 'SW 대가산정 (기능점수 - FP)' },
        { name: '요구공학 (추출, 분석, 명세, 검증)' },
      ],
    },
    {
      id: 'DB',
      title: 'DB (데이터베이스)',
      subtitle: 'AI를 위한 데이터 구조',
      color: 'border-green-500',
      topics: [
        { name: 'ERD & 정규화 (1~5NF, BCNF)' },
        { name: '반정규화 (De-normalization)' },
        { name: '트랜잭션 ACID & Isolation Level' },
        { name: '인덱스 (B-Tree, Bitmap, Clustered)' },
        { name: '쿼리 최적화 (Optimizer, Hint)' },
        { name: 'RDBMS vs NoSQL (CAP, PACELC)' },
        { name: 'Vector DB (임베딩 저장)', isTrend: true },
        { name: 'Graph DB (Neo4j)' },
        { name: 'Time-Series DB (시계열)' },
        { name: 'In-Memory DB (Redis)' },
        { name: '분산 DB (Sharding, Partitioning)' },
        { name: 'Data Warehouse (DW) & Mart' },
        { name: 'Data Lake & Lakehouse' },
        { name: 'Data Fabric & Data Mesh', isTrend: true },
        { name: 'CDC (Change Data Capture)' },
        { name: 'ETL vs ELT' },
        { name: '데이터 품질 (Dahama의 6원칙)' },
        { name: '데이터 거버넌스 & 메타데이터' },
        { name: '마이데이터 (MyData) & 데이터 3법' },
        { name: '빅데이터 플랫폼 (Hadoop, Spark)' },
        { name: 'Kafka & Event Streaming' },
        { name: '블록체인 데이터 저장 구조' },
        { name: '데이터 비식별화 (가명처리/익명처리)' },
        { name: 'SQL Injection 방어' },
        { name: 'DB 보안 (접근제어, 암호화)' },
        { name: '분산 트랜잭션 (2PC, Saga Pattern)' },
        { name: 'MVCC (다중 버전 동시성 제어)' },
        { name: '공공 데이터 개방 전략' },
        { name: '데이터 리터러시 (Data Literacy)' },
        { name: '생성형 AI를 위한 RAG 파이프라인', isTrend: true },
      ],
    },
    {
      id: 'NW',
      title: 'NW (네트워크)',
      subtitle: '초연결과 소프트웨어 정의',
      color: 'border-purple-500',
      topics: [
        { name: 'OSI 7 Layer & TCP/IP' },
        { name: 'IPv4 vs IPv6 (전환기술)' },
        { name: 'TCP Congestion Control (혼잡제어)' },
        { name: 'HTTP/2.0 & HTTP/3.0 (QUIC)' },
        { name: '5G (eMBB, URLLC, mMTC)' },
        { name: '6G & 테라헤르츠 통신', isTrend: true },
        { name: 'Network Slicing' },
        { name: 'MEC (Multi-access Edge Computing)' },
        { name: 'SDN (Software Defined NW)' },
        { name: 'NFV (Network Function Virtualization)' },
        { name: 'SD-WAN & SASE' },
        { name: 'WiFi 6E & WiFi 7' },
        { name: 'IoT 네트워크 (LoRa, SigFox, NB-IoT)' },
        { name: 'Matter (스마트홈 표준)' },
        { name: 'TSN (Time Sensitive Networking)' },
        { name: 'V2X (Vehicle to Everything)' },
        { name: 'CDN (Content Delivery Network)' },
        { name: 'VPN (IPSec, SSL)' },
        { name: 'DNS & DNS Security' },
        { name: 'L4 / L7 Switch & Load Balancing' },
        { name: 'Overlay Network (VXLAN)' },
        { name: 'SRv6 (Segment Routing IPv6)' },
        { name: '양자 암호 통신 (QKD, PQC)' },
        { name: '저궤도 위성 통신 (Starlink)' },
        { name: '망 중립성 & 제로 레이팅' },
        { name: 'NFC & UWB (Ultra Wide Band)' },
        { name: 'I2C, SPI, UART (임베디드 통신)' },
        { name: 'MQTT & CoAP' },
        { name: 'Open RAN (O-RAN)' },
        { name: '데이터센터 네트워크 (Spine-Leaf)' },
      ],
    },
    {
      id: 'IS',
      title: 'IS (정보보안)',
      subtitle: '제로 트러스트와 AI 보안',
      color: 'border-red-500',
      topics: [
        { name: 'CIA (기밀성, 무결성, 가용성)' },
        { name: '접근통제 (DAC, MAC, RBAC, ABAC)' },
        { name: '암호학 (대칭키, 공개키, 해시)' },
        { name: '전자서명 & PKI' },
        { name: 'Zero Trust Architecture', isTrend: true },
        { name: '공급망 보안 (SBOM)', isTrend: true },
        { name: '랜섬웨어 & APT 공격' },
        { name: 'DDoS & DRDoS' },
        { name: 'OWASP Top 10' },
        { name: 'ISMS-P 인증' },
        { name: '개인정보 영향평가 (PIA)' },
        { name: '생체 인증 (FIDO, Passkey)' },
        { name: 'SSO & OAuth 2.0 & OIDC' },
        { name: '블록체인 보안 (Smart Contract 취약점)' },
        { name: '클라우드 보안 (CASB, CSPM, CWPP)' },
        { name: 'AI Security (Adversarial Attack, Poisoning)', isTrend: true },
        { name: '양자 내성 암호 (PQC)' },
        { name: '동형 암호 (Homomorphic Encryption)' },
        { name: '차분 프라이버시 (Differential Privacy)' },
        { name: '디지털 포렌식 (절차, 원칙)' },
        { name: '사이버 레질리언스 (Cyber Resilience)' },
        { name: '보안 관제 (SIEM & SOAR)' },
        { name: 'OT/ICS 보안 (산업제어시스템)' },
        { name: '다크웹 & OSINT' },
        { name: '사회공학적 해킹 (Phishing, Smishing)' },
        { name: '네트워크 보안 (F/W, IPS, WAF, NAC)' },
        { name: '정보보호 최고책임자 (CISO)' },
        { name: 'DRM & DLP (내부정보 유출방지)' },
        { name: '망분리 & 망연계' },
        { name: '딥페이크 탐지 기술' },
      ],
    },
    {
      id: 'IM',
      title: 'IM (IT경영)',
      subtitle: 'AX와 ESG',
      color: 'border-yellow-500',
      topics: [
        { name: 'ISP & ISMP (정보화 전략 계획)' },
        { name: 'EA (Enterprise Architecture)' },
        { name: 'IT 거버넌스 (ISO 38500, COBIT)' },
        { name: 'ESG 경영 & Green IT' },
        { name: '디지털 트랜스포메이션 (DX) vs AX' },
        { name: 'ITSM & ITIL v4' },
        { name: 'SLA / SLM' },
        { name: 'BCP & DRP (업무연속성)' },
        { name: 'RTO / RPO' },
        { name: 'FinOps (클라우드 비용 최적화)', isTrend: true },
        { name: 'AI 거버넌스 & AI 윤리 (EU AI Act)', isTrend: true },
        { name: '스마트 팩토리 & 인더스트리 4.0/5.0' },
        { name: 'RPA (Robotic Process Automation)' },
        { name: 'BPM & PI (Process Innovation)' },
        { name: 'CRM & CEM (고객 경험)' },
        { name: 'SCM & VMI' },
        { name: 'ERP (확장형 ERP)' },
        { name: '스타트업 방법론 (Lean Startup, Pivot)' },
        { name: '디자인 씽킹 (Design Thinking)' },
        { name: '오픈 이노베이션' },
        { name: '특허권 & 지식재산권 (IP)' },
        { name: '규제 샌드박스' },
        { name: 'IT 투자 성과 평가 (ROI, NPV, IRR)' },
        { name: 'BSC (Balanced Score Card) & IT-BSC' },
        { name: '데이터 가치 평가' },
        { name: '디지털 플랫폼 정부 (DPG)' },
        { name: '공공 SW 사업 발주 제도' },
        { name: 'SW 분리발주 & 과업변경' },
        { name: 'IT 아웃소싱 & 인소싱' },
        { name: 'K-ESG 가이드라인' },
      ],
    },
    {
      id: 'PM',
      title: 'PM (프로젝트관리)',
      subtitle: '원칙과 가치 전달',
      color: 'border-indigo-500',
      topics: [
        { name: 'PMBOK 7판 (12원칙, 8성과영역)', isTrend: true },
        { name: '프로젝트 5대 프로세스 (착기실감종)' },
        { name: '10대 지식 영역 (통범일원품인 의위조이)' },
        { name: 'WBS (Work Breakdown Structure)' },
        { name: '일정 단축 (Crashing, Fast Tracking)' },
        { name: 'EVM (획득가치 관리 - SPI, CPI 계산)' },
        { name: 'CCM (Critical Chain Method)' },
        { name: '리스크 관리 (정량적/정성적 분석)' },
        { name: '의사소통 관리 & 이해관계자 관리' },
        { name: '애자일 프로젝트 관리 (Burn-down chart)' },
        { name: '하이브리드 프로젝트 관리' },
        { name: 'PMO (Project Management Office)' },
        { name: '감리 (정보시스템 감리기준)' },
        { name: '품질 보증(QA) vs 품질 통제(QC)' },
        { name: '형상 관리 (Configuration Mgt)' },
        { name: '변경 관리 (Change Control)' },
        { name: '요구사항 추적표 (RTM)' },
        { name: '기능점수(FP) 측정 및 검증' },
        { name: 'SW 사업 대가 산정 가이드' },
        { name: '제안요청서(RFP) & 제안서' },
        { name: '기술협상 & 계약 방식 (확정/실비)' },
        { name: '투입공수 방식 (Man-Month)' },
        { name: '갈등 관리 기법' },
        { name: '동기 부여 이론 (Maslow, Herzberg)' },
        { name: '리더십 이론 (서번트 리더십)' },
        { name: 'OKR (Objectives and Key Results)' },
        { name: '재무 타당성 분석 (BEP, Payback Period)' },
        { name: 'SW 안전성 검토 (감리 관점)' },
        { name: '프로젝트 종료 및 교훈 (Lesson Learned)' },
        { name: 'Code Review & Peer Review' },
      ],
    },
    {
      id: 'CA',
      title: 'CA (컴퓨터구조)',
      subtitle: 'AI 반도체와 고성능 컴퓨팅',
      color: 'border-pink-500',
      topics: [
        { name: '폰노이만 vs 하버드 구조' },
        { name: 'CISC vs RISC & RISC-V' },
        { name: '파이프라인 & 해저드 (구조, 데이터, 제어)' },
        { name: '슈퍼스칼라 & VLIW' },
        { name: '캐시 메모리 (매핑, 교체, 쓰기 정책)' },
        { name: '캐시 일관성 (Snooping, Directory, MESI)' },
        { name: '가상 메모리 & TLB' },
        { name: '인터럽트 (Interrupt) 처리 과정' },
        { name: 'DMA (Direct Memory Access)' },
        { name: 'I/O 제어 방식 (Programmed, Interrupt, DMA)' },
        { name: 'RAID (0, 1, 5, 6, 10)' },
        { name: 'SSD (FTL, Wear Leveling, TRIM)' },
        { name: 'GPU 구조 (CUDA, Tensor Core)' },
        { name: 'GPGPU' },
        { name: 'AI 반도체 (NPU, TPU, FPGA, ASIC)', isTrend: true },
        { name: 'HBM (High Bandwidth Memory)', isTrend: true },
        { name: 'PIM (Processing In Memory) & PNM' },
        { name: 'CXL (Compute Express Link)', isTrend: true },
        { name: '뉴로모픽 칩 (Neuromorphic Chip)' },
        { name: '양자 컴퓨터 (Qubit, 중첩, 얽힘)' },
        { name: '클라우드 컴퓨팅 아키텍처' },
        { name: 'HPC (High Performance Computing)' },
        { name: 'Flynn의 분류 (SISD, SIMD 등)' },
        { name: 'Amdahl의 법칙' },
        { name: '오류 검출 (Parity, Hamming, CRC)' },
        { name: '버스 시스템 (데이터, 주소, 제어 버스)' },
        { name: '멀티코어 vs 멀티프로세서' },
        { name: 'NUMA vs UMA' },
        { name: '스토리지 (DAS, NAS, SAN, SDS)' },
        { name: '엣지 디바이스 아키텍처' },
      ],
    },
    {
      id: 'OS',
      title: 'OS (운영체제)',
      subtitle: '클라우드와 임베디드 최적화',
      color: 'border-teal-500',
      topics: [
        { name: '프로세스 vs 스레드' },
        { name: 'PCB & TCB' },
        { name: '문맥 교환 (Context Switching)' },
        { name: 'CPU 스케줄링 (FCFS, RR, SJF, MLQ, MLFQ)' },
        { name: '동기화 (Mutex, Semaphore, Monitor)' },
        { name: '교착상태 (Deadlock) 4조건 및 해결' },
        { name: '은행원 알고리즘 (Banker\'s Algo)' },
        { name: '경쟁 상태 (Race Condition)' },
        { name: '메모리 관리 (Paging, Segmentation)' },
        { name: '페이지 교체 (LRU, LFU, NUR, OPT)' },
        { name: 'Thrashing & Working Set' },
        { name: '가상화 (Hypervisor Type 1/2)' },
        { name: '컨테이너 (Docker) & cgroups, namespace' },
        { name: 'Kubernetes (Pod, Node, Cluster)', isTrend: true },
        { name: '파일 시스템 (Inode, FAT, NTFS, EXT4)' },
        { name: 'LVM (Logical Volume Manager)' },
        { name: 'RTOS (Real-Time OS) 스케줄링' },
        { name: '우선순위 역전 (Priority Inversion)' },
        { name: '마이크로 커널 vs 모놀리식 커널' },
        { name: 'Unikernel' },
        { name: 'eBPF (extended Berkeley Packet Filter)', isTrend: true },
        { name: '분산 운영체제' },
        { name: '클라우드 OS (OpenStack)' },
        { name: '모바일 OS (Android Runtime)' },
        { name: 'System Call & API' },
        { name: '부팅 과정 (BIOS, UEFI, Kernel Load)' },
        { name: '쉘 (Shell) & 커널 (Kernel)' },
        { name: 'IPC (Pipe, Message Queue, Shared Memory)' },
        { name: '리눅스 파일 권한 (chmod, chown)' },
        { name: '서버리스 (Serverless) 컴퓨팅 모델' },
      ],
    },
    {
      id: 'AL',
      title: 'AL (알고리즘)',
      subtitle: 'AI 기초와 효율성',
      color: 'border-orange-500',
      topics: [
        { name: '시간복잡도 (Big-O) & 공간복잡도' },
        { name: '재귀 (Recursion) & 분할정복' },
        { name: '정렬 (Bubble, Selection, Insertion)' },
        { name: '고급 정렬 (Quick, Merge, Heap, Radix)' },
        { name: '이진 탐색 (Binary Search)' },
        { name: '해싱 (Hash Table, Collision 해결)' },
        { name: '스택 & 큐 & 덱' },
        { name: '연결 리스트 (Linked List)' },
        { name: '트리 (Binary Tree, BST, AVL, Red-Black)' },
        { name: '그래프 탐색 (BFS, DFS)' },
        { name: '최단 경로 (Dijkstra, Floyd-Warshall, Bellman-Ford)' },
        { name: 'MST (Kruskal, Prim)' },
        { name: '동적 계획법 (Dynamic Programming)' },
        { name: '탐욕 알고리즘 (Greedy)' },
        { name: '백트래킹 (Backtracking)' },
        { name: '문자열 검색 (KMP, Boyer-Moore)' },
        { name: '압축 알고리즘 (Huffman, LZW)' },
        { name: '유전 알고리즘 (Genetic Algorithm)' },
        { name: '머신러닝 학습 (지도/비지도/강화)' },
        { name: '경사하강법 (Gradient Descent)' },
        { name: '역전파 (Backpropagation)' },
        { name: 'CNN (Convolutional Neural Network)' },
        { name: 'RNN & LSTM' },
        { name: 'Transformer (Self-Attention)', isTrend: true },
        { name: 'BERT vs GPT 구조' },
        { name: 'Diffusion Model (확산 모델)' },
        { name: '군집화 (K-Means, DBSCAN)' },
        { name: '차원 축소 (PCA, LDA)' },
        { name: '앙상블 (Bagging, Boosting, Random Forest)' },
        { name: 'XAI (SHAP, LIME)' },
      ],
    },
    {
      id: 'DS',
      title: 'DS (디지털 서비스)',
      subtitle: '생성형 AI와 융합',
      color: 'border-cyan-500',
      topics: [
        { name: '생성형 AI (Generative AI)' },
        { name: 'LLM (Large Language Model) & sLLM' },
        { name: 'Prompt Engineering (Chain of Thought)' },
        { name: 'RAG (Retrieval-Augmented Generation)' },
        { name: 'Agentic AI (에이전트 AI)', isTrend: true },
        { name: '멀티모달 (Multi-modal) AI' },
        { name: '온디바이스 AI (On-device AI)', isTrend: true },
        { name: '메타버스 (Metaverse) & 공간 컴퓨팅' },
        { name: '디지털 트윈 (Digital Twin)' },
        { name: '클라우드 네이티브 (Cloud Native)' },
        { name: 'Baas / PaaS / IaaS / SaaS' },
        { name: 'XaaS (Everything as a Service)' },
        { name: '블록체인 & NFT & STO' },
        { name: 'Web 3.0 & DAO' },
        { name: '자율주행 (Level 0~5, LiDAR, Radar)' },
        { name: 'UAM (Urban Air Mobility)' },
        { name: '로보틱스 (AMR, 협동로봇)' },
        { name: '스마트 시티 & 스마트 그리드' },
        { name: '핀테크 & 테크핀' },
        { name: '간편 결제 & CBDC' },
        { name: 'OTT & 스트리밍 기술' },
        { name: 'AR / VR / MR / XR' },
        { name: '홀로그램' },
        { name: '헬스케어 IT (EHR, PACS, 원격의료)' },
        { name: '에듀테크 (EduTech)' },
        { name: '딥페이크 (Deepfake) & 워터마킹' },
        { name: 'AI 휴먼 (Digital Human)' },
        { name: '앰비언트 컴퓨팅 (Ambient Computing)' },
        { name: '양자 센싱 (Quantum Sensing)' },
        { name: '소버린 AI (Sovereign AI)' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="text-center space-y-4 py-4">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          2024~2025 출제 경향
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          기술사 시험 출제 경향
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          2024~2025년 IT 트렌드(AI 에이전트, 온디바이스 AI, 제로트러스트, ESG 등)와 최신 기출 경향을 반영하여 엄선했습니다.
          <br />
          이 리스트는 포털 내 '토픽 DB'의 기초 데이터로 바로 활용하실 수 있습니다.
        </p>
      </section>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-gray-600">최신 트렌드 토픽</span>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {categories.map((category) => {
          const isExpanded = expandedSections.has(category.id);
          return (
            <div
              key={category.id}
              className={`card border-l-4 ${category.color} overflow-hidden`}
            >
              {/* Header */}
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.subtitle}
                    <span className="ml-2 text-xs text-gray-500">
                      ({category.topics.length}개 토픽)
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  )}
                </div>
              </button>

              {/* Content */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {category.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span className="flex-1">{topic.name}</span>
                        {topic.isTrend && (
                          <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-sm text-gray-600">
          <Sparkles className="w-4 h-4 text-amber-500 inline mr-1" />
          표시된 토픽은 2024~2025년 최신 트렌드를 반영한 중요 출제 예상 주제입니다.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          최근 소공은 '개발 생산성'과 'AI 협업'이 핵심이며, Vector DB와 클라우드 네이티브 데이터 저장소가 대세입니다.
        </p>
      </div>
    </div>
  );
}
