import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { AboutContentHeader, Title, TitleHint } from './styles'

const AboutHeading: React.FC = () => {
  const scrollY = useMotionValue(0)
  const [isFixed, setIsFixed] = useState(false)

  const text = "Sup, I'm Tania Tello"

  const x = useTransform(scrollY, [100, 300], [0, -360])
  const y = useTransform(scrollY, [100, 300], [0, 610])

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY)
      if (window.scrollY >= 480) {
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
          x: x,
          y: y,
          translateZ: 0,
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '-27%' : 0,
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
