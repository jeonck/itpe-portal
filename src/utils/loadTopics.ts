import matter from 'gray-matter';
import type { Topic } from '../types';

// Vite의 import.meta.glob을 사용하여 모든 마크다운 파일을 가져옴
const topicFiles = import.meta.glob<string>('../data/topics/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

export function loadTopics(): Topic[] {
  const topics: Topic[] = [];

  console.log('Loading topics from:', Object.keys(topicFiles));

  for (const path in topicFiles) {
    // README.md 파일 제외
    if (path.includes('README.md')) continue;

    try {
      const fileContent = topicFiles[path] as string;
      const { data, content } = matter(fileContent);

      console.log('Parsing topic:', data.id, data);

      // frontmatter에서 메타데이터 추출
      const topic: Topic = {
        id: data.id,
        title: data.title,
        category: data.category,
        subcategory: data.subcategory,
        subjectCategories: data.subjectCategories || [],
        difficulty: data.difficulty,
        certifications: data.certifications,
        keywords: data.keywords,
        definition: extractDefinition(content),
        characteristics: extractCharacteristics(content),
        relatedTopics: data.relatedTopics || [],
        importance: data.importance,
        trends: data.trends,
      };

      topics.push(topic);
    } catch (error) {
      console.error('Error parsing topic at', path, error);
    }
  }

  console.log('Total topics loaded:', topics.length);
  return topics;
}

// 정의 추출 (# 정의 섹션)
function extractDefinition(content: string): string {
  const match = content.match(/# 정의\n(.+?)(?=\n##|\n$)/s);
  return match ? match[1].trim() : '';
}

// 특징 추출 (## 특징 섹션의 리스트)
function extractCharacteristics(content: string): string[] {
  const match = content.match(/## 특징\n((?:- .+\n?)+)/);
  if (!match) return [];

  return match[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim());
}
