/**
 * Utility functions for loading topics from different sources
 * This provides flexibility to load all topics or topics by category
 */

import type { TopicMetadata } from '../types';

/**
 * Load all topics from the main topics.json file
 * Use this when you need all topics at once
 */
export async function loadAllTopics(): Promise<TopicMetadata[]> {
  const response = await fetch('/src/data/topics.json');
  return response.json();
}

/**
 * Load topics for a specific category
 * More efficient when you only need topics from one category
 *
 * @param category - The subject category code (AL, CA, DB, DS, IM, IS, MG, NW, OS, PM, SE)
 */
export async function loadTopicsByCategory(category: string): Promise<TopicMetadata[]> {
  const response = await fetch(`/src/data/topics-by-category/${category}.json`);
  return response.json();
}

/**
 * Load topics for multiple categories
 * More efficient than loading all topics when you only need a subset
 *
 * @param categories - Array of category codes
 */
export async function loadTopicsByCategories(categories: string[]): Promise<TopicMetadata[]> {
  const promises = categories.map(category => loadTopicsByCategory(category));
  const results = await Promise.all(promises);
  return results.flat();
}

/**
 * Get the list of available categories
 */
export const AVAILABLE_CATEGORIES = [
  'AL', // Algorithms
  'CA', // Computer Architecture
  'DB', // Database
  'DS', // Digital Service
  'IM', // Information Management
  'IS', // Information Security
  'MG', // Management
  'NW', // Network
  'OS', // Operating System
  'PM', // Project Management
  'SE', // Software Engineering
] as const;

export type CategoryCode = typeof AVAILABLE_CATEGORIES[number];

/**
 * Category names in Korean
 */
export const CATEGORY_NAMES: Record<CategoryCode, string> = {
  AL: '알고리즘',
  CA: '컴퓨터구조',
  DB: '데이터베이스',
  DS: '디지털서비스',
  IM: '정보관리',
  IS: '정보보안',
  MG: '관리',
  NW: '네트워크',
  OS: '운영체제',
  PM: '프로젝트관리',
  SE: '소프트웨어공학',
};
