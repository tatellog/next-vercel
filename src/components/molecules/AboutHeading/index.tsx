import React from 'react'

import { AboutContentHeader, Title } from './styles'

const AboutHeading: React.FC = () => {
  const text = "Sup, I'm Tania Tello"

  return (
    <AboutContentHeader id="about-heading">
      <h1>
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </h1>
    </AboutContentHeader>
  )
}

export default AboutHeading
