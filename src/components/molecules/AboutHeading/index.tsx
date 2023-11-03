import React, { useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

import { AboutContentHeader, Title } from './styles'

const AboutHeading: React.FC = () => {
  const scrollY = useMotionValue(0)
  const x = useTransform(scrollY, [0, 400], [700, 210])
  const y = useTransform(scrollY, [0, 100], [-100, 80])
  const text = "Sup, I'm Tania Tello"

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
    <AboutContentHeader
      id="about-heading"
      style={{
        x,
        y,
        transition: 'transform 0.5s ease',
        position: 'fixed',
      }}
    >
      <h1>
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </h1>
    </AboutContentHeader>
  )
}

export default AboutHeading
