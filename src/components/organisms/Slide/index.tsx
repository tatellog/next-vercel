import React from 'react'

import { SlideContainer, Subtitle, Title } from './styles'
import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({
  text,
  subtitle,
  backgroundColor,
  id,
  index,
}) => (
  <SlideContainer
    $backgroundColor={id === 'active-slide' ? backgroundColor : 'transparent'}
    id={id}
  >
    <Title $prefix={index === 3 && id === 'active-slide'}>{text}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </SlideContainer>
)

export default Slide
