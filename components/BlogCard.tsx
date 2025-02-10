'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/utils/mdx'

const basePath = process.env.NODE_ENV === 'production' ? '/personalweb' : '';

export default function BlogCard({ post }: { post: Post }) {
  const safeSlug = post.slug
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  return (
    <Link 
      href={`/blog/${safeSlug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`${basePath}${post.coverImage}`}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {/* ... rest of the component ... */}
      </div>
    </Link>
  )
} 