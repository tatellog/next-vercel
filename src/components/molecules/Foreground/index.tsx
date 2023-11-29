import React, { useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

import { CircleMedium, CircleSmall, ForegroundContainer } from './styles'

const Foreground = () => {
  const scrollY = useMotionValue(0)
  const translateY = useTransform(scrollY, [0, 300], [80, -250])
  const translateX = useTransform(scrollY, [0, 400], [0, -470])
  const scale = useTransform(scrollY, [0, 400], [1, 1.6])

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
    <ForegroundContainer id="foreground">
      <CircleSmall
        style={{
          x: translateX,
          y: translateY,
          scale,
          translateZ: 0,
          top: '42%',
          left: '80%',
          transform: 'translateX(-50%)',
        }}
      />
      <CircleMedium />
    </ForegroundContainer>
  )
}
export default Foreground
