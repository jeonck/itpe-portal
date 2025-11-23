import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { globSync } from 'glob'; // Import globSync

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topicsDir = path.join(__dirname, '../src/data/topics');
const outputJsonPath = path.join(__dirname, '../src/data/topics.json');

// 마크다운 파일 읽기 (재귀적으로 검색)
const files = globSync(`${topicsDir}/**/*.md`, { ignore: '**/README.md' });

const topics = [];

files.forEach((filePath) => { // 'file' -> 'filePath' since globSync returns full paths
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // 정의 추출
  const definitionMatch = content.match(/# 정의\n(.+?)(?=\n##|\n$)/s);
  const definition = definitionMatch ? definitionMatch[1].trim() : '';

  // 특징 추출
  const characteristicsMatch = content.match(/## 특징\n((?:- .+\n?)+)/);
  const characteristics = characteristicsMatch
    ? characteristicsMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim())
    : [];

  const topic = {
    id: data.id,
    title: data.title,
    category: data.category,
    subcategory: data.subcategory,
    subjectCategories: data.subjectCategories || [],
    difficulty: data.difficulty,
    certifications: data.certifications,
    keywords: data.keywords,
    definition,
    characteristics,
    relatedTopics: data.relatedTopics || [],
    importance: data.importance,
    ...(data.trends && { trends: data.trends })
  };

  topics.push(topic);
  console.log(`Processed: ${file}`);
});

// JSON 파일로 저장
fs.writeFileSync(outputJsonPath, JSON.stringify(topics, null, 2), 'utf-8');
console.log(`\n✅ Successfully converted ${topics.length} markdown files to topics.json!`);
