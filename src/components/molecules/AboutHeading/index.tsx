import React from 'react'

import {
  AboutContentHeader,
  TextContainer,
  TextDescription,
  Title,
  TitleHint,
} from './styles'

interface AboutHeadingProps {
  scrollDirection: number
}

const AboutHeading: React.FC<AboutHeadingProps> = ({ scrollDirection }) => {
  const text = "Sup, I'm Tania Tello"

  const shouldApplyTransform = scrollDirection > 0 && scrollDirection < 469
  const shouldShowText = scrollDirection >= 320

  const opacity = shouldShowText ? 1 : scrollDirection / 20

  const transform = shouldApplyTransform
    ? `translate3d(-${scrollDirection / 20}em, ${scrollDirection / 10}em, 0px)`
    : 'translate(0px, 0px)'

  const display = shouldShowText ? 'block' : 'none'

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
      <TextContainer style={{ display, opacity }}>
        <TextDescription>
          I’m a 7+ year of experience Front End Engineer. I craft dynamic web
          apps, e-commerce sites, and mobile apps. Eager to learn, tech
          advocate, and women\u2019s mentor for inclusive tech growth.
        </TextDescription>
      </TextContainer>
      <TitleHint id="scroll-message" className="animate-down">
        Scroll down
      </TitleHint>
    </AboutContentHeader>
  )
}

export default AboutHeading
