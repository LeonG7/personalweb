import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function GET() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return NextResponse.json({ posts: [] });
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
            coverImage: parsedData.coverImage || '',
            tags: Array.isArray(parsedData.tags) ? parsedData.tags : []
          };
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return NextResponse.json({ posts: allPostsData });
  } catch (error) {
    console.error('Error getting posts:', error);
    return NextResponse.json({ posts: [] });
  }
} 