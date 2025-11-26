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

  // 암기 두음 추출 (## 암기 두음이 먼저 나옴)
  const mnemonicMatch = content.match(/## 암기 두음\n\s*(.+?)(?=\n#|\n##|\n$)/s);
  const mnemonic = mnemonicMatch ? mnemonicMatch[1].trim() : '';

  // 정의 추출 (# 정의가 암기 두음 다음에 나옴)
  const definitionMatch = content.match(/# 정의\n\s*(.+?)(?=\n##|\n$)/s);
  const definition = definitionMatch ? definitionMatch[1].trim() : '';

// Helper to parse content that might have leading prose and then bullet points
const parseDetailedSection = (sectionContent) => {
  if (!sectionContent) return null;
  const lines = sectionContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const parsedElements = [];
  let currentProse = [];

  for (const line of lines) {
    if (line.startsWith('- ') || line.startsWith('* ')) { // Handle both dash and asterisk bullets
      // If there was prose before this bullet, add it as a separate element
      if (currentProse.length > 0) {
        parsedElements.push(currentProse.join(' ').trim());
        currentProse = [];
      }
      parsedElements.push(line.substring(2).trim());
    } else {
      // Collect prose lines
      currentProse.push(line);
    }
  }
  // Add any remaining prose at the end
  if (currentProse.length > 0) {
    parsedElements.push(currentProse.join(' ').trim());
  }
  return parsedElements.filter(e => e.length > 0); // Filter out any empty elements
};

// 기술요소 추출 (## 기술요소)
    const technicalElementsMatch = content.match(/## 기술요소\n\s*(.+?)(?=\n##|$)/s);
    const technicalElements = technicalElementsMatch
        ? parseDetailedSection(technicalElementsMatch[1])
        : null;

// 동작원리 추출 (## 동작원리)
const operatingPrincipleMatch = content.match(/## 동작원리\n\s*(.+?)(?=\n##|$)/s);
const operatingPrinciple = operatingPrincipleMatch ? operatingPrincipleMatch[1].trim() : null;

// 기능 추출 (## 기능)
const functionsMatch = content.match(/## 기능\n\s*(.+?)(?=\n##|$)/s);
const functions = functionsMatch
  ? parseDetailedSection(functionsMatch[1])
  : null;

  // 절차 추출 (## 절차)
  const procedureMatch = content.match(/## 절차\n\s*(.+?)(?=\n##|$)/s);
  const procedure = procedureMatch ? procedureMatch[1].trim() : null;

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
    ...(mnemonic && { mnemonic }),
    definition,
    ...(technicalElements && { technicalElements }),
    ...(operatingPrinciple && { operatingPrinciple }),
    ...(functions && { functions }),
    ...(procedure && { procedure }),
    characteristics,
    relatedTopics: data.relatedTopics || [],
    importance: data.importance,
    ...(data.trends && { trends: data.trends }),
    ...(data.tags && { tags: data.tags })
  };

  topics.push(topic);
  console.log(`Processed: ${path.basename(filePath)}`);
});

// JSON 파일로 저장
fs.writeFileSync(outputJsonPath, JSON.stringify(topics, null, 2), 'utf-8');
console.log(`\n✅ Successfully converted ${topics.length} markdown files to topics.json!`);
