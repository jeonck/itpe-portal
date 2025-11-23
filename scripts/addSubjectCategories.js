import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topicsDir = path.join(__dirname, '../src/data/topics');

// 토픽 ID별 과목 카테고리 매핑
const subjectCategoryMap = {
  'sdlc-001': ['SE'],
  'agile-devops-001': ['SE'],
  'design-pattern-001': ['SE'],
  'test-001': ['SE'],
  'quality-001': ['SE'],
  'db-normalization-001': ['DB'],
  'transaction-001': ['DB'],
  'index-001': ['DB'],
  'dw-dm-etl-001': ['DB'],
  'nosql-001': ['DB'],
  'osi-7layer-001': ['NW'],
  'tcpip-001': ['NW'],
  'routing-001': ['NW'],
  'wireless-001': ['NW'],
  'encryption-001': ['IS'],
  'security-attack-001': ['IS'],
  'security-solution-001': ['IS'],
  'auth-001': ['IS'],
  'ea-001': ['IM'],
  'pmbok-001': ['PM'],
  'cpu-architecture-001': ['CA'],
  'process-scheduling-001': ['OS'],
  'llm-001': ['DS', 'AL'],
  'kubernetes-001': ['DS'],
  'msa-001': ['SE', 'DS'],
  'blockchain-001': ['DS', 'IS'],
};

const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.md') && f !== 'README.md');

files.forEach((file) => {
  const filePath = path.join(topicsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // 과목 카테고리 추가
  const topicId = data.id;
  const subjectCategories = subjectCategoryMap[topicId] || [];

  // frontmatter 재구성
  const updatedData = {
    id: data.id,
    title: data.title,
    category: data.category,
    subcategory: data.subcategory,
    subjectCategories: subjectCategories,
    difficulty: data.difficulty,
    certifications: data.certifications,
    keywords: data.keywords,
    importance: data.importance,
    relatedTopics: data.relatedTopics || [],
    ...(data.trends && { trends: data.trends })
  };

  // 새로운 마크다운 파일 생성
  const newContent = matter.stringify(content, updatedData);

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Updated: ${file} - [${subjectCategories.join(', ')}]`);
});

console.log(`\n✅ Successfully added subject categories to ${files.length} topics!`);
