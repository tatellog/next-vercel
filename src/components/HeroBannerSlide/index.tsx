import React from 'react'

import {
  Slide,
  Subtitle,
  SubtitleBackgroundFirst,
  SubtitleBackgroundLast,
  SubtitleCenter,
  SubtitleContainer,
  Title,
  TitleBackgroundFirst,
  TitleBackgroundLast,
  TitleCenter,
  TitleContainer,
} from './styles'
import { HeroBannerSlideProps } from './types'

const HeroBannerSlide: React.FC<HeroBannerSlideProps> = ({
  currentSlide,
  nextSlide,
  index,
}) => {
  const colorPrefix = index === 3 ? true : false
  return (
    <Slide
      id="hero-banner-slide"
      key={currentSlide.id}
      $backgroundColor={currentSlide.backgroundColor}
    >
      <TitleContainer>
        <TitleCenter>
          <Title $color={colorPrefix}>{currentSlide.title}</Title>
        </TitleCenter>
        <TitleBackgroundFirst>
          {nextSlide.title.substring(0, 2)}
        </TitleBackgroundFirst>
        <TitleBackgroundLast>{nextSlide.title.slice(-2)}</TitleBackgroundLast>
      </TitleContainer>
      <SubtitleContainer>
        <SubtitleCenter>
          <Subtitle>{currentSlide.subtitle}</Subtitle>
        </SubtitleCenter>
        <SubtitleBackgroundFirst>
          {nextSlide.subtitle.substring(0, 10)}
        </SubtitleBackgroundFirst>
        <SubtitleBackgroundLast>
          {nextSlide.subtitle.slice(-10)}
        </SubtitleBackgroundLast>
      </SubtitleContainer>
    </Slide>
  )
}

export default HeroBannerSlide
