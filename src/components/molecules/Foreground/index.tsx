import React, { useEffect, useState } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

import { CircleMedium, CircleSmall, ForegroundContainer } from './styles'

const Foreground = () => {
  const scrollY = useMotionValue(0)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const finalTopPercentage = 42
  const finalLeftPercentage = 80

  const translateY = useTransform(
    scrollY,
    [0, 300],
    [0, -(finalTopPercentage * windowHeight) / 160],
  )

  const translateX = useTransform(
    scrollY,
    [0, 400],
    [0, -(finalLeftPercentage * windowWidth) / 350 - 150],
  )

  const scale = useTransform(scrollY, [0, 400], [1, 1.6])

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('scroll', updateScrollY)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', updateScrollY)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollY])

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
