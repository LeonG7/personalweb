import { getAllPosts } from '@/utils/mdx'
import Link from 'next/link'
import BlogContent from '@/components/BlogContent'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await getAllPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-gray-600 mb-8">文章未找到</p>
          <Link 
            href="/"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  return <BlogContent post={post} />
} 