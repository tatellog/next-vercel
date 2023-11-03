import { useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

import { CircleContainer } from './styles'

const CircleAnimated = () => {
  const scrollY = useMotionValue(0)
  const x = useTransform(scrollY, [0, 400], [0, -510])
  const y = useTransform(scrollY, [0, 400], [0, -280])
  const scale = useTransform(scrollY, [0, 400], [1, 2])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollY)
    return () => {
      window.removeEventListener('scroll', updateScrollY)
    }
  }, [])

  return (
    <CircleContainer
      style={{
        x,
        y,
        scale,
        translateZ: 0,
        opacity,
      }}
    />
  )
}

export default CircleAnimated
