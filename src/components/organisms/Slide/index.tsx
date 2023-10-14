// Slide.tsx
import React from 'react'

import { SlideContainer, Subtitle, Title } from './styles'
import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({
  text,
  subtitle,
  backgroundColor,
  id,
}) => (
  <SlideContainer
    $backgroundColor={id === 'active-slide' ? backgroundColor : 'transparent'}
    id={id}
  >
    <Title>{text}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </SlideContainer>
)

export default Slide
