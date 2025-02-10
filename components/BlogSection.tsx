'use client'

import { useEffect, useState } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'
import BlogPostCard from '@/components/BlogPostCard'
import type { Post } from '@/utils/mdx'

function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <ScrollAnimation>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto transform transition-all duration-300 hover:scale-x-150"></div>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            {description}
          </p>
        )}
      </div>
    </ScrollAnimation>
  )
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])

  const basePath = process.env.NODE_ENV === 'production' ? '/personalweb' : '';

  useEffect(() => {
    fetch(`${basePath}/api/blog`)
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .catch(console.error)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionTitle 
        title="最新文章" 
        description="分享技术见解和学习心得，记录成长历程"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, 4).map((post, index) => (
          <ScrollAnimation key={post.slug} delay={index * 100}>
            <BlogPostCard post={post} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
} 