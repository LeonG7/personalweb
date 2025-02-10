'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SocialLinks() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-end">
        {/* CSDN */}
        <div className="relative">
          <a
            href="https://blog.csdn.net/disILLL?type=blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={() => setHoveredItem('csdn')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="text-gray-700 font-bold">C</span>
          </a>
          {hoveredItem === 'csdn' && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              访问我的CSDN博客
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-2 h-2 bg-black/75"></div>
            </div>
          )}
        </div>

        {/* 知乎 */}
        <div className="relative">
          <a
            href="https://www.zhihu.com/people/a-lei-79-50"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={() => setHoveredItem('zhihu')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="text-[#0066FF] font-bold">知</span>
          </a>
          {hoveredItem === 'zhihu' && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              访问我的知乎主页
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-2 h-2 bg-black/75"></div>
            </div>
          )}
        </div>

        {/* 微信 */}
        <div className="relative">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={() => setHoveredItem('wechat')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="text-[#07C160] font-bold">W</span>
          </button>
          {hoveredItem === 'wechat' && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-3">
              <Image
                src="/images/wechat-qr.jpg"
                alt="微信二维码"
                width={120}
                height={120}
                className="rounded-lg"
              />
              <div className="text-center mt-2 text-sm text-gray-600">扫码添加微信</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-3 h-3 bg-white"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 