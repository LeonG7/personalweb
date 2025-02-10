import type { Metadata } from 'next'
import { getAllPosts } from '@/utils/mdx'

interface BlogPostLayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const posts = await getAllPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: '文章未找到',
      description: '抱歉，您访问的文章不存在。'
    }
  }

  return {
    title: `${post.title} | 一休的博客`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : []
    }
  }
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      {children}
    </main>
  )
} 