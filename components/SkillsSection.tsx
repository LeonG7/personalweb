'use client'

import { useState, useEffect } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'

interface Skill {
  name: string
  category: string
  level: number
  icon: string
  color: string
  description?: string
}

// 生成 60-100 之间的随机数
function getRandomLevel(): number {
  return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
}

const skills: Skill[] = [
  // 前端技能
  { 
    name: 'React', 
    category: '前端', 
    level: getRandomLevel(), 
    icon: '⚛️', 
    color: '#61DAFB',
    description: '熟练使用 React Hooks 和状态管理，构建高性能组件'
  },
  { 
    name: 'TypeScript', 
    category: '前端', 
    level: getRandomLevel(), 
    icon: '📘', 
    color: '#3178C6',
    description: '使用 TypeScript 开发大型应用，提供类型安全保障'
  },
  { 
    name: 'Next.js', 
    category: '前端', 
    level: getRandomLevel(), 
    icon: '▲', 
    color: '#000000',
    description: '基于 Next.js 构建 SSR 应用，优化性能和 SEO'
  },
  { 
    name: 'Tailwind', 
    category: '前端', 
    level: getRandomLevel(), 
    icon: '🎨', 
    color: '#38B2AC',
    description: '使用 Tailwind 快速构建现代化的 UI 界面'
  },
  
  // 后端技能
  { 
    name: 'Node.js', 
    category: '后端', 
    level: getRandomLevel(), 
    icon: '🟢', 
    color: '#339933',
    description: '开发 RESTful API 和后端服务，处理高并发请求'
  },
  { 
    name: 'Python', 
    category: '后端', 
    level: getRandomLevel(), 
    icon: '🐍', 
    color: '#3776AB',
    description: '使用 Python 进行数据处理和 AI 模型开发'
  },
  { 
    name: 'MySQL', 
    category: '后端', 
    level: getRandomLevel(), 
    icon: '🗄️', 
    color: '#4479A1',
    description: '数据库设计和优化，处理复杂查询和事务'
  },
  
  // AI 技能
  { 
    name: 'LLM', 
    category: 'AI', 
    level: getRandomLevel(), 
    icon: '🤖', 
    color: '#FF4B4B',
    description: '大语言模型应用开发，包括提示词工程和模型微调'
  },
  { 
    name: 'CV', 
    category: 'AI', 
    level: getRandomLevel(), 
    icon: '👁️', 
    color: '#9B4DCA',
    description: '图像识别和处理，目标检测与分割算法应用'
  },
  { 
    name: 'NLP', 
    category: 'AI', 
    level: getRandomLevel(), 
    icon: '📝', 
    color: '#00B4D8',
    description: '文本分析、情感分析和命名实体识别等应用开发'
  },
  
  // 工具技能
  { 
    name: 'Git', 
    category: '工具', 
    level: getRandomLevel(), 
    icon: '📦', 
    color: '#F05032',
    description: '版本控制和团队协作，处理复杂的分支管理'
  },
  { 
    name: 'Docker', 
    category: '工具', 
    level: getRandomLevel(), 
    icon: '🐳', 
    color: '#2496ED',
    description: '容器化应用部署，构建 CI/CD 流程'
  }
]

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [skillStates, setSkillStates] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skillName = entry.target.getAttribute('data-skill')
          if (skillName) {
            setSkillStates(prev => ({
              ...prev,
              [skillName]: entry.isIntersecting
            }))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const elements = document.querySelectorAll('[data-skill]')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [selectedCategory])

  const categories = Array.from(new Set(['全部', ...skills.map(skill => skill.category)]))
  const filteredSkills = selectedCategory === '全部' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollAnimation>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            技能栈
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto transform transition-all duration-300 hover:scale-x-150"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            持续学习，不断进步，专注于人工智能应用
          </p>
        </div>
      </ScrollAnimation>

      {/* 分类标签 */}
      <div className="relative z-20 flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 hover:shadow-md ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 技能卡片网格 */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <ScrollAnimation key={skill.name}>
            <div
              data-skill={skill.name}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-start space-x-4">
                {/* 圆环进度条 */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* 背景圆环 */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      className="stroke-current text-gray-200"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* 进度圆环 */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      className="transition-all duration-1000 ease-out"
                      strokeWidth="8"
                      fill="none"
                      stroke={skill.color}
                      strokeDasharray={175.93}
                      strokeDashoffset={skillStates[skill.name] ? 175.93 * (1 - skill.level / 100) : 175.93}
                      style={{
                        transition: 'stroke-dashoffset 1.5s ease-in-out'
                      }}
                    />
                  </svg>
                  {/* 技能图标 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                </div>

                {/* 技能信息 */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                    <span 
                      className="text-sm font-medium transition-all duration-1000"
                      style={{ color: skill.color }}
                    >
                      {skillStates[skill.name] ? `${skill.level}%` : '0%'}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-gray-500">{skill.description}</p>
                  )}
                </div>
              </div>

              {/* 悬浮效果 */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: hoveredSkill === skill.name 
                    ? `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`
                    : 'none'
                }}
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
