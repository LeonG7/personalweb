'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/utils/mdx'

interface BlogContentProps {
  post: Post
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* 文章头部 */}
      <header className="mb-12">
        {post.coverImage && (
          <div className="relative aspect-[2/1] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-gray-600">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* 文章内容 */}
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-primary/80"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* 返回按钮 */}
      <div className="mt-12 pt-8 border-t">
        <Link 
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          返回首页
        </Link>
      </div>
    </article>
  )
} 