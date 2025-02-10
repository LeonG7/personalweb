import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
  tags?: string[]
}

function normalizeSlug(fileName: string): string {
  return fileName
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    console.log('Posts directory:', postsDirectory)

    if (!fs.existsSync(postsDirectory)) {
      console.log('Posts directory not found, creating...')
      fs.mkdirSync(postsDirectory, { recursive: true })
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    console.log('Found files:', fileNames)

    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => {
          const isMarkdown = fileName.endsWith('.md')
          console.log(`Checking file ${fileName}: ${isMarkdown ? 'is markdown' : 'not markdown'}`)
          return isMarkdown
        })
        .map(async fileName => {
          try {
            console.log('Processing file:', fileName)
            const slug = normalizeSlug(fileName)
            const fullPath = path.join(postsDirectory, fileName)
            
            console.log('Reading file:', fullPath)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
              .replace(/^\uFEFF/, '') // Remove BOM
              .replace(/\u200B/g, '') // Remove zero-width spaces
              .replace(/\r\n/g, '\n') // Normalize line endings
              .trim()

            console.log('Parsing frontmatter...')
            const { data: parsedData, content } = matter(fileContents)

            console.log('Converting markdown to HTML...')
            const processedContent = await remark()
              .use(html)
              .use(remarkGfm)
              .process(content)
            const contentHtml = processedContent.toString()

            const post: Post = {
              slug,
              content: contentHtml,
              title: parsedData.title || fileName.replace(/\.md$/, ''),
              date: parsedData.date || new Date().toISOString(),
              excerpt: parsedData.excerpt || '',
              coverImage: parsedData.coverImage || '',
              tags: Array.isArray(parsedData.tags) ? parsedData.tags : []
            }

            console.log('Successfully processed post:', {
              fileName,
              slug: post.slug,
              title: post.title
            })
            return post
          } catch (error) {
            console.error(`Error processing ${fileName}:`, error)
            return null
          }
        })
    )

    const validPosts = allPostsData.filter((post): post is Post => post !== null)
    console.log('Total valid posts:', validPosts.length)

    return validPosts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  } catch (error) {
    console.error('Error getting posts:', error)
    return []
  }
} 