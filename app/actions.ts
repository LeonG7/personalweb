'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
  tags: string[]
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.log('Posts directory not found, creating...');
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        try {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          let fileContents = fs.readFileSync(fullPath, 'utf8');
          
          fileContents = fileContents
            .replace(/^\uFEFF/, '')
            .replace(/​---/g, '---')
            .replace(/\r\n/g, '\n')
            .trim();

          const matches = fileContents.match(/^---([\s\S]*?)---([\s\S]*)$/);
          
          if (!matches) {
            throw new Error('Invalid frontmatter format');
          }

          const [, frontmatter, content] = matches;
          const parsedData = matter('---\n' + frontmatter.trim() + '\n---\n').data;
          
          return {
            slug,
            content: content.trim(),
            title: parsedData.title || fileName.replace(/\.md$/, ''),
            date: parsedData.date || new Date().toISOString(),
            excerpt: parsedData.excerpt || '',
            coverImage: parsedData.coverImage,
            tags: Array.isArray(parsedData.tags) ? parsedData.tags : []
          };
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is Omit<Post, 'coverImage'> & { coverImage: string | undefined } => post !== null)
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return allPostsData;
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
} 