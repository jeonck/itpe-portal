import { useState } from 'react';
import { FileText, Clock, CheckCircle, Lightbulb, BookOpen } from 'lucide-react';

type ExamType = 'first' | 'second';

export default function AnswerExamples() {
  const [selectedType, setSelectedType] = useState<ExamType>('first');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">답안 작성 가이드</h1>
        <p className="text-gray-600">
          합격을 위한 체계적인 답안 구조와 작성 전략
        </p>
      </div>

      {/* Introduction */}
      <div className="card bg-blue-50 border-l-4 border-blue-500">
        <p className="text-sm text-gray-700 leading-relaxed">
          정보관리기술사 및 컴퓨터시스템응용기술사 시험에서 <strong>답안의 구조(목차 잡기)</strong>와{' '}
          <strong>가독성(편집)</strong>은 지식의 깊이만큼이나 합격의 당락을 결정하는 중요한 요소입니다.
          채점관은 수많은 답안지를 짧은 시간에 검토하므로, "한눈에 들어오는 논리적 구조"가 필수적입니다.
        </p>
      </div>

      {/* Type Selector */}
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedType('first')}
          className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all ${
            selectedType === 'first'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            <span>1교시형 (용어형)</span>
          </div>
          <div className="text-sm mt-1 opacity-90">100분 / 10문제 / 문제당 10분</div>
        </button>
        <button
          onClick={() => setSelectedType('second')}
          className={`flex-1 px-6 py-4 rounded-lg font-medium transition-all ${
            selectedType === 'second'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            <span>2교시형 (서술형)</span>
          </div>
          <div className="text-sm mt-1 opacity-90">100분 / 4문제 / 문제당 25분</div>
        </button>
      </div>

      {/* Content */}
      {selectedType === 'first' ? <FirstExamContent /> : <SecondExamContent />}

      {/* Tips Section */}
      <TipsSection />
    </div>
  );
}

function FirstExamContent() {
  return (
    <div className="space-y-6">
      {/* Structure */}
      <section className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3단 구성 (기-승-결)</h2>
        <p className="text-gray-600 mb-4">
          가장 표준적이고 안정적인 구조입니다. 문제당 <strong>10분, 1.0~1.2페이지</strong>가 기준입니다.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">I. 정의 및 특징 (Why & What)</h3>
            <p className="text-sm text-gray-700">
              해당 토픽의 정의를 명확한 키워드로 제시하고 주요 특징을 언급합니다.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">II. 주요 구성도 및 기술요소 (How)</h3>
            <p className="text-sm text-gray-700">
              <strong>(핵심)</strong> 개념도(그림)를 그리고, 세부 기술요소를 표로 정리합니다.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">III. 비교 또는 고려사항 (Insight)</h3>
            <p className="text-sm text-gray-700">
              유사 기술과의 비교, 혹은 도입 시 고려사항, 활용 방안 등으로 마무리합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="card bg-gray-50">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary-600" />
          <h2 className="text-xl font-bold text-gray-900">작성 예시: 디지털 트윈 (Digital Twin)</h2>
        </div>

        <div className="bg-white p-6 rounded-lg space-y-6 border border-gray-200">
          <div>
            <div className="font-bold text-gray-900 mb-2">문) 디지털 트윈(Digital Twin)에 대해 설명하시오.</div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-700 mb-2">I. 현실과 가상의 동기화, 디지털 트윈의 개요</h4>
              <div className="pl-4 space-y-2 text-sm">
                <p><strong>가. 정의:</strong> 현실 세계의 기계, 장비, 사물 등을 컴퓨터 속 가상 세계에 구현하여, 실시간 시뮬레이션을 통해 결과를 예측하는 기술</p>
                <p><strong>나. 핵심 특징:</strong> 실시간 동기화(Real-time), 모의실험(Simulation), 최적화(Optimization)</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-green-700 mb-2">II. 디지털 트윈의 개념도 및 핵심 기술요소</h4>
              <div className="pl-4 space-y-3 text-sm">
                <p><strong>가. 디지털 트윈의 개념도</strong></p>
                <div className="bg-gray-100 p-4 rounded text-center text-xs text-gray-500">
                  [물리적 자산 ⇄ 데이터 수집/제어 ⇄ 가상 모델]<br/>
                  (Sensors → Data → AI/ML → Simulation → Actuator)
                </div>

                <p><strong>나. 핵심 기술요소</strong></p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2">구분</th>
                        <th className="border border-gray-300 px-3 py-2">기술 요소</th>
                        <th className="border border-gray-300 px-3 py-2">설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">모델링</td>
                        <td className="border border-gray-300 px-3 py-2">3D 모델링, CAD</td>
                        <td className="border border-gray-300 px-3 py-2">현실 객체의 형상 및 속성 가상화</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">연결/수집</td>
                        <td className="border border-gray-300 px-3 py-2">IoT 센서, 5G</td>
                        <td className="border border-gray-300 px-3 py-2">실시간 데이터 수집 및 초저지연 전송</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">분석/예측</td>
                        <td className="border border-gray-300 px-3 py-2">AI/ML, Big Data</td>
                        <td className="border border-gray-300 px-3 py-2">수집 데이터 분석 및 시뮬레이션 수행</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">제어/인터페이스</td>
                        <td className="border border-gray-300 px-3 py-2">AR/VR, Actuator</td>
                        <td className="border border-gray-300 px-3 py-2">결과 시각화 및 물리적 피드백 제어</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-purple-700 mb-2">III. 디지털 트윈과 메타버스의 비교 및 활용 방안</h4>
              <div className="pl-4 space-y-2 text-sm">
                <p><strong>가. 메타버스와의 비교:</strong> (디지털 트윈) 현실 모사/산업용 vs (메타버스) 가상 확장/소셜·경제용</p>
                <p><strong>나. 활용:</strong> 스마트 팩토리 공정 최적화, 재난 안전 시뮬레이션 등 도시 관제 적용 확대.</p>
              </div>
            </div>
          </div>

          <div className="text-right text-sm font-bold text-gray-500">끝.</div>
        </div>
      </section>
    </div>
  );
}

function SecondExamContent() {
  return (
    <div className="space-y-6">
      {/* Structure */}
      <section className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4단 구성 (기-승-전-결)</h2>
        <p className="text-gray-600 mb-4">
          서론과 결론을 통해 수험자의 통찰력을 보여주는 구조입니다. 문제당 <strong>25분, 3.0~3.5페이지</strong>가 기준입니다.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">I. 서론 (배경 및 필요성)</h3>
            <p className="text-sm text-gray-700">
              왜 이 기술/문제가 중요한가? (현황, 문제점, 필요성)
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">II. 개념 및 아키텍처 (전체 그림)</h3>
            <p className="text-sm text-gray-700">
              전체적인 메커니즘이나 표준 아키텍처를 도식화.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">III. 세부 기술 및 절차 (상세 내용)</h3>
            <p className="text-sm text-gray-700">
              문제에서 묻는 핵심 질문에 대한 구체적 답변 (2~3개 세부 목차로 분리 가능).
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-gray-900 mb-2">IV. 결론 (제언 및 발전 방향)</h3>
            <p className="text-sm text-gray-700">
              기술사의 시각(Insight), 표준화 동향, 향후 전망, 감리/PM 관점의 고려사항.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="card bg-gray-50">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary-600" />
          <h2 className="text-xl font-bold text-gray-900">작성 예시: 설명 가능한 AI (XAI)</h2>
        </div>

        <div className="bg-white p-6 rounded-lg space-y-6 border border-gray-200">
          <div>
            <div className="font-bold text-gray-900 mb-2">
              문) AI 도입이 확산됨에 따라 발생하는 윤리적 문제점과 이를 해결하기 위한 기술적 방안인 설명 가능한 AI(XAI)에 대해 설명하시오.
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-bold text-blue-700 mb-2">I. AI의 확산에 따른 역기능, AI 윤리의 부각</h4>
              <div className="pl-4 space-y-2">
                <p><strong>1. 배경:</strong> 알고리즘 편향성, 딥페이크 범죄, 책임 소재 불분명 등 사회적 문제 대두</p>
                <p><strong>2. 필요성:</strong> 신뢰할 수 있는 인공지능(Trustworthy AI) 구현을 위한 기술적/제도적 장치 필요</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-green-700 mb-2">II. AI 윤리 가이드라인 및 주요 위협요소</h4>
              <div className="pl-4 space-y-2">
                <p><strong>1. AI 윤리 3대 원칙:</strong> 인간의 존엄성 원칙, 사회의 공공선 원칙, 기술의 합목적성 원칙</p>
                <p><strong>2. 주요 위협 사례:</strong> (채용) 성별/인종 차별 데이터 학습, (자율주행) 트롤리 딜레마 등</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-orange-700 mb-2">III. AI 신뢰성 확보를 위한 기술적 해결책, XAI</h4>
              <div className="pl-4 space-y-3">
                <p><strong>1. XAI의 개념:</strong> AI의 판단 근거를 사람이 이해할 수 있는 형태로 제공하는 기술</p>

                <p><strong>2. XAI 동작 메커니즘</strong></p>
                <div className="bg-gray-100 p-4 rounded text-center text-xs text-gray-500">
                  [Black Box 모델 → 해석기(Interpreter) → 설명 모델 → 사용자 이해]
                </div>

                <p><strong>3. XAI 주요 구현 기법</strong></p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2">구분</th>
                        <th className="border border-gray-300 px-3 py-2">기법</th>
                        <th className="border border-gray-300 px-3 py-2">설명 및 특징</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">모델 자체</td>
                        <td className="border border-gray-300 px-3 py-2">Decision Tree</td>
                        <td className="border border-gray-300 px-3 py-2">의사결정 과정을 트리 구조로 명확히 시각화</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">사후 설명</td>
                        <td className="border border-gray-300 px-3 py-2">LIME, SHAP</td>
                        <td className="border border-gray-300 px-3 py-2">복잡한 모델의 입출력 관계를 근사하여 기여도 산출</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">시각화</td>
                        <td className="border border-gray-300 px-3 py-2">Layer-wise RP</td>
                        <td className="border border-gray-300 px-3 py-2">딥러닝 레이어별 기여도를 히트맵으로 표현</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-purple-700 mb-2">IV. AI 윤리 확보를 위한 제언 및 향후 전망</h4>
              <div className="pl-4 space-y-2">
                <p><strong>1. 거버넌스 측면:</strong> 기업 내 'AI 윤리 위원회' 설치 및 데이터 편향성 정기 감사(Audit) 의무화</p>
                <p><strong>2. 기술적 측면:</strong> XAI 뿐만 아니라 차분 프라이버시(Differential Privacy) 등 프라이버시 보호 기술 병행 적용</p>
                <p><strong>3. 맺음말:</strong> 기술적 완성도와 윤리적 정당성을 동시에 갖춘 '책임감 있는 AI' 생태계 조성 필요.</p>
              </div>
            </div>
          </div>

          <div className="text-right text-sm font-bold text-gray-500">끝.</div>
        </div>
      </section>
    </div>
  );
}

function TipsSection() {
  const tips = [
    {
      icon: CheckCircle,
      title: '두괄식 작성',
      description: '모든 단락의 첫 문장이나 목차명에 핵심 키워드를 노출하십시오. 채점관은 목차 위주로 읽습니다.',
      color: 'text-blue-600',
    },
    {
      icon: FileText,
      title: '가시성 (그림 + 표)',
      description: '1교시는 최소 1개, 2교시는 2~3개의 그림/도식 필수. 3단 분리 표(구분-내용-설명)를 적극 활용하세요.',
      color: 'text-green-600',
    },
    {
      icon: Lightbulb,
      title: '정량적 표현',
      description: '"성능 향상됨" 보다는 "처리 속도 30% 향상", "가용성 99.999% 보장" 등 수치화된 표현을 사용하세요.',
      color: 'text-orange-600',
    },
  ];

  return (
    <section className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <h2 className="text-2xl font-bold mb-4">합격을 부르는 답안 작성 핵심 Tip</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div key={tip.title} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5" />
                <h3 className="font-bold">{tip.title}</h3>
              </div>
              <p className="text-sm text-white/90">{tip.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
        <h3 className="font-bold mb-2">글씨체와 필압</h3>
        <p className="text-sm text-white/90">
          너무 잘 쓸 필요는 없으나, <strong>크고 진하게</strong> (1.6mm 볼펜 사용) 써서 가독성을 높여야 합니다.
          표 안의 글자는 좌우 여백을 주어 답답하지 않게 작성하세요.
        </p>
      </div>
    </section>
  );
}
