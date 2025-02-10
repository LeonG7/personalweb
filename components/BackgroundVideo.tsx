'use client'

const basePath = process.env.NODE_ENV === 'production' ? '/personalweb' : '';

export default function BackgroundVideo() {
  return (
    <>
      {/* 视频容器 */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
        >
          <source src={`${basePath}/videos/background.mp4`} type="video/mp4" />
        </video>
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>
    </>
  )
}