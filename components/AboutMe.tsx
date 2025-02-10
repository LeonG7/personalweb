'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Experience {
  year: string
  title: string
  description: string
}

const experiences: Experience[] = [
  {
    year: '2024',
    title: 'LLM 算法工程师',
    description: '专注于LLM大模型算法微调和应用，结合 AI 技术提升用户体验'
  },
  {
    year: '2023',
    title: 'CV 应用开发',
    description: '深入研究 LLM、CV、NLP 领域，开发智能化解决方案'
  },
  {
    year: '2022',
    title: '开发工程师',
    description: '使用 React 生态系统构建响应式和高性能的 Web 应用'
  }
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<'story' | 'experience'>('story')

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="about">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            关于我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto transform transition-all duration-300 hover:scale-x-150"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左侧：个人简介 */}
          <div className="space-y-6 relative">
            {/* 标签切换 */}
            <div className="flex space-x-4 mb-8">
              {['story', 'experience'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                    activeTab === tab
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab as 'story' | 'experience')}
                >
                  <span className="relative z-10">
                    {tab === 'story' ? '我的故事' : '工作经历'}
                  </span>
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-gradient" />
                  )}
                </button>
              ))}
            </div>

            {/* 内容区域 - 保持现有内容，添加动画类 */}
            <div className="transition-all duration-500">
              {activeTab === 'story' ? (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    你好，我是一休，一名热爱技术与创作的全栈开发者。我专注于人工智能应用，致力于将创新技术转化为实用的解决方案。
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    在技术之外，我热衷于摄影创作，用镜头记录生活中的美好瞬间。我相信技术与艺术的结合能够创造出更多精彩的可能。
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">📍</span>
                      <span className="text-gray-600">北京</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">💼</span>
                      <span className="text-gray-600">算法开发工程师</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">🎯</span>
                      <span className="text-gray-600">AI 技术应用</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-fade-in">
                  {experiences.map((exp, index) => (
                    <div 
                      key={exp.year}
                      className="relative pl-8 pb-8 last:pb-0"
                    >
                      {/* 时间线 */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200">
                        <div className="absolute top-2 -left-1.5 w-3 h-3 rounded-full bg-primary"></div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm text-primary font-medium">{exp.year}</span>
                        <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 右侧：图片展示 */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
              {/* 背景装饰 */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                {/* 动态光效 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 animate-shine"></div>
                </div>
              </div>

              {/* 图片容器 */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src="/images/about-me.jpg"
                  alt="关于我"
                  width={800}
                  height={600}
                  className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  priority
                />
              </div>

              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">热爱技术，热爱生活</h3>
                  <p className="text-sm text-white/90 drop-shadow-lg">
                    用代码构建未来，用镜头记录当下
                  </p>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-gradient-to-br from-secondary to-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
 