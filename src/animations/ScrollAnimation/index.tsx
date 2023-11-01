import React, { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  speed: number
  children: React.ReactNode
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  speed,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    const scrollHandler = () => {
      if (element) {
        const yPos = -window.scrollY * speed
        element.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [speed])

  return <div ref={ref}>{children}</div>
}

export default ScrollAnimation
