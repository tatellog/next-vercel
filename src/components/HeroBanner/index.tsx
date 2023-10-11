import React, { useEffect, useRef } from 'react'

import {
  CustomContent,
  NavigationButton,
  NavigationButtons,
  Slide,
  Subtitle,
  SubtitleBackgroundFirst,
  SubtitleBackgroundLast,
  Title,
  TitleBackgroundFirst,
  TitleBackgroundLast,
} from './styles'
import { HeroBannerSliderProps } from './types'

import colors from '@/theme/colors'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
  autoplay,
}) => {
  const currentSlide = useRef(0)

  const handleNextSlide = () => {
    currentSlide.current = (currentSlide.current + 1) % slides.length
    onSlideChange(currentSlide.current)
  }

  const handleGoToSlide = (index: number) => {
    currentSlide.current = index
    onSlideChange(index)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (autoplay) {
      intervalId = setInterval(handleNextSlide, 3000)
      onSlideChange(currentSlide.current)
    }

    return () => clearInterval(intervalId)
  }, [autoplay])

  const nextSlideIndex = (currentSlide.current + 1) % slides.length

  const currentSlideData = slides[currentSlide.current]
  const nextSlideData = slides[nextSlideIndex]

  const navigationButtons = slides.map((_, index) => (
    <NavigationButton
      key={index}
      onClick={() => handleGoToSlide(index)}
      style={{
        backgroundColor:
          index === currentSlide.current
            ? currentSlideData.color
            : colors.blackLight,
        border:
          index === currentSlide.current
            ? `2px solid ${currentSlideData.color}`
            : `2px solid ${colors.blackLight}`,
        width: index === currentSlide.current ? '2.625rem' : '0.625rem',
      }}
    ></NavigationButton>
  ))

  return (
    <CustomContent $color={currentSlideData.backgroundColor}>
      <Slide
        key={currentSlideData.id}
        $backgroundColor={currentSlideData.backgroundColor}
      >
        <TitleBackgroundFirst>
          {nextSlideData.title.substring(0, 2)}
        </TitleBackgroundFirst>
        <Title>{currentSlideData.title}</Title>
        <TitleBackgroundLast>
          {nextSlideData.title.slice(-2)}
        </TitleBackgroundLast>
        <SubtitleBackgroundFirst>
          {nextSlideData.subtitle.substring(0, 10)}
        </SubtitleBackgroundFirst>
        <Subtitle>{currentSlideData.subtitle}</Subtitle>
        <SubtitleBackgroundLast>
          {nextSlideData.subtitle.slice(-10)}
        </SubtitleBackgroundLast>
      </Slide>
      <NavigationButtons>{navigationButtons}</NavigationButtons>
    </CustomContent>
  )
}

export default HeroBanner
