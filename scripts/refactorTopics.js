import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topicsDir = path.join(__dirname, '../src/data/topics');

async function refactorTopics() {
    console.log('Starting topic refactoring...');

    const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.md') && f !== 'README.md');

    for (const file of files) {
        const filePath = path.join(topicsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        if (data.subjectCategories && data.subjectCategories.length > 0) {
            const primaryCategory = data.subjectCategories[0];
            const newDirPath = path.join(topicsDir, primaryCategory);
            const newFilePath = path.join(newDirPath, file);

            // Create directory if it doesn't exist
            if (!fs.existsSync(newDirPath)) {
                fs.mkdirSync(newDirPath, { recursive: true });
                console.log(`Created directory: ${newDirPath}`);
            }

            // Move the file
            fs.renameSync(filePath, newFilePath);
            console.log(`Moved: ${file} -> ${primaryCategory}/${file}`);
        } else {
            console.warn(`Skipping ${file}: No subjectCategories found.`);
            // Optionally move to an 'Other' or 'Uncategorized' directory
        }
    }

    console.log('Topic refactoring complete.');
}

refactorTopics().catch(console.error);
