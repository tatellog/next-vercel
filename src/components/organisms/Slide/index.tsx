import React from 'react'

import { SlideContainer, Subtitle, Title } from './styles'
import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({
  text,
  subtitle,
  backgroundColor,
  index,
}) => (
  <SlideContainer $backgroundColor={backgroundColor}>
    <Title $color={index === 3 ? true : false}>{text}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </SlideContainer>
)

export default Slide
