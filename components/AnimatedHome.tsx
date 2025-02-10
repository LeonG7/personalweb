'use client'

import Image from 'next/image'
import Link from 'next/link'
import PhotoGallery from '@/components/PhotoGallery'
import BackgroundVideo from '@/components/BackgroundVideo'
import BlogPostCard from '@/components/BlogPostCard'
import SkillsSection from '@/components/SkillsSection'
import AboutMe from '@/components/AboutMe'
import ScrollAnimation from '@/components/ScrollAnimation'
import type { Post } from '@/utils/mdx'

// 标题组件
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

interface AnimatedHomeProps {
  posts: Post[]
}

export default function AnimatedHome({ posts }: AnimatedHomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] h-screen max-h-[800px] flex items-center justify-center">
        <BackgroundVideo />
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 py-12">
          <ScrollAnimation>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              你好，我是 一休
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
              一名热爱摄影与技术的创作者
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#works" className="btn-primary">查看作品</a>
              <a href="#contact" className="btn-secondary">联系我</a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Skills Section */}
      <section className="pt-8">
        <ScrollAnimation>
          <SkillsSection />
        </ScrollAnimation>
      </section>

      {/* Photography Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle 
          title="我的摄影作品" 
          description="记录生活中的美好瞬间，分享独特的视角"
        />
        <ScrollAnimation>
          <PhotoGallery />
        </ScrollAnimation>
      </section>

      {/* Blog Section */}
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

      {/* About Me Section */}
      <ScrollAnimation>
        <AboutMe />
      </ScrollAnimation>
    </div>
  )
} 