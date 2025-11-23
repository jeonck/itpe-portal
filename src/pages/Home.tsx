import { Link } from 'react-router-dom';
import { BookOpen, Map, Network, Timer, ArrowRight, Award, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: '토픽 위키',
      description: '1,000개 이상의 핵심 키워드를 체계적으로 정리한 지식 베이스',
      link: '/topics',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Map,
      title: '학습 로드맵',
      description: '0개월부터 합격까지, 단계별 학습 가이드와 전략',
      link: '/roadmap',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Network,
      title: '마인드맵',
      description: '토픽 간 연결을 시각화하여 체계적 이해 도모',
      link: '/mindmap',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Timer,
      title: '답안 작성 타이머',
      description: '10분/25분 타이머로 실전 연습 시간 관리',
      link: '/timer',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  const certifications = [
    {
      name: '정보관리기술사',
      code: 'Information Management',
      focus: 'IT 전략 기획, 정보시스템 감리, PM, SW공학',
      target: '기획자, PM, 감리원, 컨설턴트, SI 개발자',
      color: 'border-blue-500',
    },
    {
      name: '컴퓨터시스템응용기술사',
      code: 'Computer Systems Application',
      focus: '하드웨어 제어, 임베디드, 컴퓨터 구조, 알고리즘',
      target: '임베디드 개발자, 인프라 엔지니어, 시스템 아키텍트',
      color: 'border-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-6">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
          <Award className="w-4 h-4" />
          IT 업계 최고 자격증 준비
        </div>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          기술사 합격을 위한 <span className="text-primary-600">체계적인 학습 포털</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          정보관리기술사와 컴퓨터시스템응용기술사 준비를 위한
          <br />
          모든 학습 자료와 도구를 한 곳에서
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/topics" className="btn-primary flex items-center gap-2">
            토픽 위키 시작하기
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/roadmap" className="btn-secondary flex items-center gap-2">
            학습 로드맵 보기
            <Map className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">주요 기능</h2>
          <p className="text-sm text-gray-600">효율적인 학습을 위한 다양한 도구</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.link}
                className="card hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Certifications Comparison */}
      <section className="space-y-4">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">두 기술사의 차이</h2>
          <p className="text-sm text-gray-600">자신에게 맞는 기술사를 선택하세요</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div key={cert.code} className={`card border-l-4 ${cert.color}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{cert.code}</p>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                    <Target className="w-3 h-3" />
                    핵심 역량
                  </div>
                  <p className="text-xs text-gray-600 pl-5">{cert.focus}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-1">
                    <TrendingUp className="w-3 h-3" />
                    주요 대상
                  </div>
                  <p className="text-xs text-gray-600 pl-5">{cert.target}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">1,000+</div>
            <div className="text-sm text-primary-100">핵심 토픽</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">4단계</div>
            <div className="text-sm text-primary-100">학습 로드맵</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm text-primary-100">체계적 커리큘럼</div>
          </div>
        </div>
      </section>
    </div>
  );
}
