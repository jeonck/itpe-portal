import { CheckCircle2, Circle, Clock, Target, Lightbulb, FileText } from 'lucide-react';
import roadmapData from '../data/roadmap.json';
import type { LearningStep } from '../types';

export default function Roadmap() {
  const steps = roadmapData as LearningStep[];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">학습 로드맵</h1>
        <p className="text-gray-600">
          기술사 합격까지의 체계적인 학습 가이드입니다. 최소 1년에서 3년의 기간이 소요됩니다.
        </p>
      </div>

      {/* Overview */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200">
        <div className="flex items-start gap-4">
          <Target className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">합격 로드맵 개요</h3>
            <p className="text-gray-700 mb-3">
              기술사 시험은 IT 전 영역을 다루는 극한의 필기 시험입니다.
              총 400분간 A4 용지 약 14~16장 이상을 수기로 작성해야 하며,
              체계적인 준비가 필수입니다.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold text-primary-600 mb-1">1교시</div>
                <div className="text-gray-600">용어형 (10문제)</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold text-primary-600 mb-1">2~4교시</div>
                <div className="text-gray-600">논술형 (각 4문제)</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold text-primary-600 mb-1">필기 합격률</div>
                <div className="text-gray-600">1~10%</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="font-bold text-primary-600 mb-1">실기 합격률</div>
                <div className="text-gray-600">50~60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step indicator */}
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg z-10 relative">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-200 md:hidden" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  {/* Step Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <span className="flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Target className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">{step.goal}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Activities */}
                    <div className="card bg-white">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        주요 활동
                      </h3>
                      <ul className="space-y-2">
                        {step.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <Circle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outputs */}
                    <div className="card bg-white">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        산출물
                      </h3>
                      <ul className="space-y-2">
                        {step.outputs.map((output, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <Circle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tips */}
                  {step.tips.length > 0 && (
                    <div className="mt-4 card bg-yellow-50 border border-yellow-200">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                        학습 팁
                      </h3>
                      <ul className="space-y-2">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Tips */}
      <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">합격을 위한 핵심 전략</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="font-bold text-green-700 mb-2">1. 서브노트 완성</div>
            <p className="text-sm text-gray-600">
              자신만의 요약 노트를 만들어 최소 10회 이상 반복하세요.
              암기가 아닌 이해 중심으로 작성합니다.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="font-bold text-green-700 mb-2">2. 필속 훈련</div>
            <p className="text-sm text-gray-600">
              100분 안에 3~4페이지를 작성하는 연습이 필수입니다.
              실전과 동일한 조건에서 모의고사를 진행하세요.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="font-bold text-green-700 mb-2">3. 최신 트렌드</div>
            <p className="text-sm text-gray-600">
              AI, 클라우드, 디지털 전환 등 최신 이슈를 꾸준히 정리하세요.
              매회 시험에서 가장 비중이 높습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
