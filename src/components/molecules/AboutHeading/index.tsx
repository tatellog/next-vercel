import React from 'react'

import { AboutContentHeader, Title } from './styles'

import ScrollHint from '@/components/organisms/ScrollHint'

const AboutHeading: React.FC = () => {
  const text = 'Sup, I’m Tania Tello'
  return (
    <AboutContentHeader id="about-heading">
      <h1 style={{ opacity: 1, transform: 'translate3d(-73.526px, 0px, 0px)' }}>
        {text.split('').map((char, i) => (
          <Title key={i}>{char}</Title>
        ))}
      </h1>
      <ScrollHint />
    </AboutContentHeader>
  )
}
export default AboutHeading
