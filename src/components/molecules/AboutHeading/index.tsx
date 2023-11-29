import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { AboutContentHeader, Title, TitleHint } from './styles'

const AboutHeading: React.FC = () => {
  const scrollY = useMotionValue(0)
  const [isFixed, setIsFixed] = useState(false)

  const text = "Sup, I'm Tania Tello"

  const translateY = useTransform(scrollY, [0, 300], [0, 580])
  const translateX = useTransform(scrollY, [0, 400], [0, -420])

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY)
      if (window.scrollY >= 420) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', updateScrollY)
    return () => {
      window.removeEventListener('scroll', updateScrollY)
    }
  }, [scrollY])

  return (
    <AboutContentHeader id="heading">
      <motion.h1
        style={{
          x: translateX,
          y: translateY,
          translateZ: 0,
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '-14%' : 0,
          left: isFixed ? '42.5%' : 0,
        }}
      >
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </motion.h1>
      <TitleHint id="subtitle">Scroll to start</TitleHint>
    </AboutContentHeader>
  )
}

export default AboutHeading
