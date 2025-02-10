'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WeChatQRCode() {
  const [showQR, setShowQR] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
      >
        <span className="text-[#07C160] font-bold">W</span>
      </button>
      
      <div
        className={`
          absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-4
          transform transition-all duration-300 ease-in-out origin-left
          ${showQR ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
        style={{ width: '240px' }}
      >
        <div className="relative w-[200px] h-[200px] mx-auto">
          <Image
            src="/images/wechat-qr.jpg"
            alt="微信二维码"
            fill
            className="rounded-lg object-contain"
            priority
          />
        </div>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-600">扫码添加微信</p>
        </div>
        
        {/* 左侧小三角 */}
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 shadow-[-3px_3px_5px_rgba(0,0,0,0.05)]"></div>
      </div>
    </div>
  )
} 