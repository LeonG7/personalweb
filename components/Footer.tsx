'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WeChatQRCode from './WeChatQRCode'

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo 和简介 */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LeonG7
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              一名热爱摄影与技术的创作者，专注于前端开发和用户体验设计。
            </p>
          </div>

          {/* 导航链接 */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-gray-600 hover:text-primary transition-colors">
                  作品集
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">关注我</h3>
            <div className="flex space-x-4">
              {/* CSDN */}
              <div className="relative">
                <a
                  href="https://blog.csdn.net/disILLL?type=blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredItem('csdn')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-gray-700 font-bold">C</span>
                </a>
                {hoveredItem === 'csdn' && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                    访问我的CSDN博客
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rotate-45 w-2 h-2 bg-black/75"></div>
                  </div>
                )}
              </div>

              {/* 知乎 */}
              <div className="relative">
                <a
                  href="https://www.zhihu.com/people/a-lei-79-50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredItem('zhihu')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-[#0066FF] font-bold">知</span>
                </a>
                {hoveredItem === 'zhihu' && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                    访问我的知乎主页
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform rotate-45 w-2 h-2 bg-black/75"></div>
                  </div>
                )}
              </div>

              {/* 使用新的微信二维码组件 */}
              <WeChatQRCode />
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} LeonG7. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 