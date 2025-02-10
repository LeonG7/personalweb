import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in')
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10'
      case 'down':
        return '-translate-y-10'
      case 'left':
        return 'translate-x-10'
      case 'right':
        return '-translate-x-10'
      default:
        return 'translate-y-10'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${getInitialTransform()} transition-all duration-700 ease-out-expo ${className}`}
    >
      {children}
    </div>
  )
} 