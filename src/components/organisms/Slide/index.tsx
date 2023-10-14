// Slide.tsx
import React from 'react'

import { SlideContainer } from './styles'
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
    <h2>{text}</h2>
    <p>{subtitle}</p>
  </SlideContainer>
)

export default Slide
