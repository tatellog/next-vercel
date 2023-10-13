// Carousel.tsx
import React, { useEffect, useState } from 'react'

import Slide from '../Slide'
import SliderButton from '../SliderButton'

import { ButtonContainer, HeroSliderContainer, SlideWrapper } from './styles'
import { HeroSliderProps } from './types'

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, autoplay }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (autoplay) {
      intervalId = setInterval(nextSlide, 3000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoplay, activeIndex])

  return (
    <HeroSliderContainer id="slider-container">
      <SlideWrapper $activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            text={slide.title}
            subtitle={slide.subtitle}
            backgroundColor={slide.backgroundColor}
            index={index}
          />
        ))}
      </SlideWrapper>
      <ButtonContainer id="slide-control">
        {slides.map((_, index) => (
          <SliderButton
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            color={slides[index].color}
          />
        ))}
      </ButtonContainer>
    </HeroSliderContainer>
  )
}

export default HeroSlider
