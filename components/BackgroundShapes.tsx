'use client'

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* 左上角的主色块 */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-primary/10 blur-3xl" />
      
      {/* 右侧的装饰色块 */}
      <div className="absolute top-[20%] -right-[5%] w-[35%] h-[50%] rounded-full bg-secondary/10 blur-3xl" />
      
      {/* 左下角的渐变色块 */}
      <div className="absolute bottom-[10%] -left-[5%] w-[30%] h-[40%] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />
      
      {/* 中间的小装饰 */}
      <div className="absolute top-[40%] left-[45%] w-[10%] h-[20%] rounded-full bg-primary/5 blur-2xl" />
    </div>
  )
} 