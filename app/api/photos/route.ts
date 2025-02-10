import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const photosDirectory = path.join(process.cwd(), 'public/photos')
  
  try {
    const filenames = fs.readdirSync(photosDirectory)
    // 只获取图片文件
    const photoFiles = filenames.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    )
    
    return NextResponse.json({ photos: photoFiles })
  } catch (error) {
    console.error('Error reading photos directory:', error)
    return NextResponse.json({ photos: [] })
  }
} 