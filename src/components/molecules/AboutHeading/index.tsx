import React, { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

import { AboutContentHeader, Title, TitleHint } from './styles'

const AboutHeading: React.FC = () => {
  const scrollY = useMotionValue(0)

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
    <AboutContentHeader id="heading">
      <h1>
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </h1>
      <TitleHint id="subtitle">Scroll to start</TitleHint>
    </AboutContentHeader>
  )
}

export default AboutHeading
