import React from 'react'

import { SlideContainer, Subtitle, Title } from './styles'
import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({
  text,
  subtitle,
  backgroundColor,
  id,
  index,
  smallSubtitle,
}) => (
  <SlideContainer
    $backgroundColor={id === 'active-slide' ? backgroundColor : 'transparent'}
    id={id}
  >
    <Title $prefix={index === 3 && id === 'active-slide'}>{text}</Title>
    <Subtitle className="normal-subtitle">{subtitle}</Subtitle>
    <Subtitle className="small-subtitle">{smallSubtitle}</Subtitle>
  </SlideContainer>
)

export default Slide
