import React from 'react'

import { AboutContentHeader, Title, TitleHint } from './styles'

interface AboutHeadingProps {
  scrollDirection: number
}

const AboutHeading: React.FC<AboutHeadingProps> = ({ scrollDirection }) => {
  const text = "Sup, I'm Tania Tello"

  const shouldApplyTransform = scrollDirection > 0 && scrollDirection < 469

  const transform = shouldApplyTransform
    ? `translate3d(-${scrollDirection / 15}em, ${scrollDirection / 10}em, 0px)`
    : 'translate(0px, 0px)'

  return (
    <AboutContentHeader
      id="about-heading"
      $scroll={scrollDirection > 0 ? 'none' : 'infinite'}
    >
      <h1 style={{ opacity: 1, transform: transform }}>
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </h1>
      <TitleHint id="scroll-message" className="animate-down">
        Scroll down
      </TitleHint>
    </AboutContentHeader>
  )
}

export default AboutHeading
