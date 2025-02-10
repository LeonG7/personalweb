'use client'

import { useEffect, useState } from 'react'

interface SkillCardProps {
  name: string
  category: string
  level: number
  icon: string
  color: string
  description?: string
}

export default function SkillCard({ 
  name, 
  category, 
  level, 
  icon, 
  color, 
  description 
}: SkillCardProps) {
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const element = document.getElementById(`skill-${name}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [name])

  return (
    <div
      id={`skill-${name}`}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              stroke={color}
              strokeDasharray={175.93}
              strokeDashoffset={isInView ? 175.93 * (1 - level / 100) : 175.93}
              style={{
                transition: 'stroke-dashoffset 1.5s ease-in-out'
              }}
            />
          </svg>
          {/* 技能图标 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl">{icon}</span>
          </div>
        </div>

        {/* 技能信息 */}
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <span 
              className="text-sm font-medium transition-all duration-1000"
              style={{ color }}
            >
              {isInView ? `${level}%` : '0%'}
            </span>
          </div>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      </div>

      {/* 悬浮效果 */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at center, ${color}10 0%, transparent 70%)`
            : 'none'
        }}
      />
    </div>
  )
} 