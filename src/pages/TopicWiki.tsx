import { useState, useMemo } from 'react';
import { Search, Filter, Tag, BookOpen, Star, TrendingUp } from 'lucide-react';
import topicsData from '../data/topics.json';
import type { Topic, TopicMetadata, DomainCategory, SubjectCategory, DifficultyLevel, CertificationType } from '../types';

export default function TopicWiki() {
  const topics = topicsData as TopicMetadata[];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DomainCategory | 'all' | '2025'>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [selectedCertification, setSelectedCertification] = useState<CertificationType | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isLoadingTopic, setIsLoadingTopic] = useState(false);

  const categories: { value: DomainCategory | 'all' | '2025'; label: string; color: string }[] = [
    { value: 'all', label: '전체', color: 'bg-gray-100 text-gray-700' },
    { value: 'fundamental', label: '공통 필수', color: 'bg-blue-100 text-blue-700' },
    { value: 'management-focus', label: '정보관리 집중', color: 'bg-green-100 text-green-700' },
    { value: 'technical-focus', label: '컴퓨터시스템 집중', color: 'bg-purple-100 text-purple-700' },
    { value: 'digital-service', label: '최신 트렌드', color: 'bg-orange-100 text-orange-700' },
    { value: '2025', label: '2025 신규', color: 'bg-pink-100 text-pink-700' },
  ];

  const subjects: { value: SubjectCategory | 'all'; label: string }[] = [
    { value: 'all', label: '전체' },
    { value: 'SE', label: 'SE (소프트웨어공학)' },
    { value: 'DB', label: 'DB (데이터베이스)' },
    { value: 'NW', label: 'NW (네트워크)' },
    { value: 'IS', label: 'IS (정보보안)' },
    { value: 'IM', label: 'IM (IT경영)' },
    { value: 'PM', label: 'PM (프로젝트관리)' },
    { value: 'CA', label: 'CA (컴퓨터구조)' },
    { value: 'OS', label: 'OS (운영체제)' },
    { value: 'AL', label: 'AL (알고리즘)' },
    { value: 'DS', label: 'DS (디지털 서비스)' },
  ];

  const difficulties: { value: DifficultyLevel | 'all'; label: string }[] = [
    { value: 'all', label: '전체' },
    { value: 'basic', label: '기초' },
    { value: 'intermediate', label: '중급' },
    { value: 'advanced', label: '고급' },
  ];

  const certifications: { value: CertificationType | 'all'; label: string }[] = [
    { value: 'all', label: '전체' },
    { value: 'information-management', label: '정보관리' },
    { value: 'computer-systems', label: '컴퓨터시스템' },
  ];

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesSearch =
        searchQuery === '' ||
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
        topic.definition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === '2025' ? topic.tags?.includes('2025') : topic.category === selectedCategory);
      const matchesSubject = selectedSubject === 'all' || (topic.subjectCategories && topic.subjectCategories.includes(selectedSubject));
      const matchesDifficulty = selectedDifficulty === 'all' || topic.difficulty === selectedDifficulty;
      const matchesCertification =
        selectedCertification === 'all' || topic.certifications.includes(selectedCertification);

      return matchesSearch && matchesCategory && matchesSubject && matchesDifficulty && matchesCertification;
    });
  }, [topics, searchQuery, selectedCategory, selectedSubject, selectedDifficulty, selectedCertification]);

  const getCategoryColor = (category: DomainCategory) => {
    return categories.find((c) => c.value === category)?.color || 'bg-gray-100 text-gray-700';
  };

  const getDifficultyBadge = (difficulty: DifficultyLevel) => {
    const colors = {
      basic: 'bg-green-100 text-green-700',
      intermediate: 'bg-yellow-100 text-yellow-700',
      advanced: 'bg-red-100 text-red-700',
    };
    const labels = {
      basic: '기초',
      intermediate: '중급',
      advanced: '고급',
    };
    return { color: colors[difficulty], label: labels[difficulty] };
  };

  const loadTopicDetail = async (topicId: string) => {
    setIsLoadingTopic(true);
    try {
      const response = await fetch(`/itpe-portal/data/parsedTopics/${topicId}.json`);
      if (!response.ok) {
        throw new Error('Topic not found');
      }
      const topicData = await response.json();
      setSelectedTopic(topicData);
    } catch (error) {
      console.error('Failed to load topic:', error);
      alert('토픽을 불러오는데 실패했습니다.');
    } finally {
      setIsLoadingTopic(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">토픽 위키</h1>
        <p className="text-gray-600">기술사 시험의 핵심 토픽들을 체계적으로 정리했습니다.</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="토픽, 키워드로 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Category Filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Filter className="w-4 h-4" />
              도메인 카테고리
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setSelectedTopic(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.value
                      ? cat.color + ' ring-2 ring-offset-2 ring-primary-500'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Filter className="w-4 h-4" />
              과목 카테고리
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subj) => (
                <button
                  key={subj.value}
                  onClick={() => {
                    setSelectedSubject(subj.value);
                    setSelectedTopic(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedSubject === subj.value
                      ? 'bg-indigo-100 text-indigo-700 ring-2 ring-offset-2 ring-indigo-500'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {subj.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                난이도
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value as DifficultyLevel | 'all');
                  setSelectedTopic(null);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {difficulties.map((diff) => (
                  <option key={diff.value} value={diff.value}>
                    {diff.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Certification Filter */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                기술사
              </label>
              <select
                value={selectedCertification}
                onChange={(e) => {
                  setSelectedCertification(e.target.value as CertificationType | 'all');
                  setSelectedTopic(null);
                }}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {certifications.map((cert) => (
                  <option key={cert.value} value={cert.value}>
                    {cert.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid or Detail View */}
      {isLoadingTopic ? (
        /* Loading State */
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">토픽 로딩 중...</p>
          </div>
        </div>
      ) : selectedTopic ? (
        /* Topic Detail View */
        <div className="space-y-6">
          <button
            onClick={() => setSelectedTopic(null)}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← 목록으로 돌아가기
          </button>

          <div className="card space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h2 className="text-3xl font-bold text-gray-900">{selectedTopic.title}</h2>
                <div className="flex gap-2">
                  {Array.from({ length: selectedTopic.importance }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedTopic.category)}`}>
                  {selectedTopic.subcategory}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyBadge(selectedTopic.difficulty).color}`}>
                  {getDifficultyBadge(selectedTopic.difficulty).label}
                </span>
                {selectedTopic.tags?.includes('2025') && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700">
                    2025 신규
                  </span>
                )}
              </div>
            </div>

            {/* Mnemonic */}
            {selectedTopic.mnemonic && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">암기 두음</h3>
                <p className="text-gray-700 leading-relaxed">{selectedTopic.mnemonic}</p>
              </div>
            )}

            {/* Definition */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">정의</h3>
              <p className="text-gray-700 leading-relaxed">{selectedTopic.definition}</p>
            </div>

            {/* Characteristics */}
            {selectedTopic.characteristics && selectedTopic.characteristics.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">특징</h3>
                <ul className="space-y-2">
                  {selectedTopic.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Elements */}
            {selectedTopic.technicalElements && selectedTopic.technicalElements.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">기술요소</h3>
                <ul className="space-y-2">
                  {selectedTopic.technicalElements.map((element, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Operating Principle */}
            {selectedTopic.operatingPrinciple && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">동작원리</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedTopic.operatingPrinciple}</p>
              </div>
            )}

            {/* Functions */}
            {selectedTopic.functions && selectedTopic.functions.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">기능</h3>
                <ul className="space-y-2">
                  {selectedTopic.functions.map((func, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{func}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedure */}
            {selectedTopic.procedure && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">절차</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedTopic.procedure}</p>
              </div>
            )}

            {/* Keywords */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">키워드</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTopic.keywords.map((keyword) => (
                  <span key={keyword} className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    <Tag className="w-3 h-3" />
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Trends */}
            {selectedTopic.trends && selectedTopic.trends.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  최신 트렌드
                </h3>
                <ul className="space-y-2">
                  {selectedTopic.trends.map((trend, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{trend}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Topics */}
            {selectedTopic.relatedTopics.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">연관 토픽</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTopic.relatedTopics.map((relatedId) => {
                    const relatedTopic = topics.find((t) => t.id === relatedId);
                    return relatedTopic ? (
                      <button
                        key={relatedId}
                        onClick={() => loadTopicDetail(relatedId)}
                        className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors"
                        disabled={isLoadingTopic}
                      >
                        {relatedTopic.title}
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Topics List */
        <>
          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredTopics.length}개의 토픽
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map((topic) => {
            const diffBadge = getDifficultyBadge(topic.difficulty);
            return (
              <button
                key={topic.id}
                onClick={() => loadTopicDetail(topic.id)}
                className="card text-left hover:shadow-lg transition-shadow group"
                disabled={isLoadingTopic}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex gap-0.5">
                      {Array.from({ length: topic.importance }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(topic.category)}`}>
                      {topic.subcategory}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${diffBadge.color}`}>
                      {diffBadge.label}
                    </span>
                    {topic.tags?.includes('2025') && (
                      <span className="px-2 py-1 rounded text-xs font-medium bg-pink-100 text-pink-700">
                        2025 신규
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{topic.definition}</p>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <BookOpen className="w-3 h-3" />
                    <span>{topic.keywords.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
              </button>
            );
          })}
          </div>
        </>
      )}

      {filteredTopics.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
