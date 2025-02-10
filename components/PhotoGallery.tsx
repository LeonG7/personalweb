'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  id: number
  src: string
  title: string
  location: string
  year: number
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/photos/海洋之心.jpg',
    title: '海洋之心',
    location: '海岸线',
    year: 2024
  },
  {
    id: 2,
    src: '/photos/雪山倒影.jpg',
    title: '雪山倒影',
    location: '高山湖泊',
    year: 2024
  },
  {
    id: 3,
    src: '/photos/银河教堂.jpg',
    title: '银河教堂',
    location: '新西兰',
    year: 2024
  },
  {
    id: 4,
    src: '/photos/晨雾渔舟.jpg',
    title: '晨雾渔舟',
    location: '日月潭',
    year: 2024
  },
  {
    id: 5,
    src: '/photos/山巅日落.jpg',
    title: '山巅日落',
    location: '阿尔卑斯山',
    year: 2024
  },
  {
    id: 6,
    src: '/photos/极光之夜.jpg',
    title: '极光之夜',
    location: '挪威',
    year: 2024
  }
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div 
          key={photo.id}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
          onClick={() => setSelectedPhoto(photo)}
        >
          {/* 图片 */}
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover transform transition-all duration-700 ease-out-expo 
                       group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />

          {/* 渐变遮罩 - 优化动画 */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-500"
          />
          
          {/* 照片信息 - 优化动画 */}
          <div 
            className="absolute inset-x-0 bottom-0 p-6 translate-y-6 transform 
                       group-hover:translate-y-0 transition-transform duration-500 ease-out-expo"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg 
                           translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {photo.title}
              </h3>
              <p className="text-white/90 text-sm drop-shadow-lg 
                           translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                {photo.location} · {photo.year}
              </p>
            </div>
          </div>

          {/* 悬浮光效 */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                       group-hover:animate-shine"
          />
        </div>
      ))}

      {/* 大图预览 - 优化动画 */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] p-4 transform scale-95 opacity-0 
                       animate-zoom-in"
            style={{ willChange: 'transform, opacity' }}
          >
            <button 
              className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full 
                         flex items-center justify-center text-white/90 hover:text-white 
                         hover:bg-white/20 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(null)
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{selectedPhoto.title}</h3>
              <p className="text-white/90 drop-shadow-lg">{selectedPhoto.location} · {selectedPhoto.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 