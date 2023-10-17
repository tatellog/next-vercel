import React, { useEffect, useState } from 'react'

import Slide from '../Slide'
import SliderButton from '../SliderButton'

import {
  BackgroundCircle,
  BackgroundWrapper,
  ButtonContainer,
  HeroSliderContainer,
  Ilustrations,
  SlideWrapper,
} from './styles'
import { CarouselProps } from './types'

const HeroSlider: React.FC<CarouselProps> = ({ slides, autoplay }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length)
  }

  const handleSliderButtonClick = (clickedIndex: number) => {
    setActiveIndex(clickedIndex)
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
      <BackgroundWrapper id="background-mobile">
        <BackgroundCircle $backgroundColor={slides[activeIndex].color}>
          <Ilustrations></Ilustrations>
        </BackgroundCircle>
      </BackgroundWrapper>
      <SlideWrapper $activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            text={slide.title}
            subtitle={slide.subtitle}
            smallSubtitle={slide.smallSubtitle}
            backgroundColor={slide.backgroundColor}
            index={activeIndex}
            id={
              index === activeIndex
                ? 'active-slide'
                : index === (activeIndex + 1) % slides.length
                ? 'next-slide'
                : index === (activeIndex - 1 + slides.length) % slides.length
                ? 'prev-slide'
                : 'inactive'
            }
          />
        ))}
      </SlideWrapper>
      <ButtonContainer id="slide-control">
        {slides.map((_, index) => (
          <SliderButton
            key={index}
            active={index === activeIndex}
            onClick={() => handleSliderButtonClick(index)}
            color={slides[index].color}
          />
        ))}
      </ButtonContainer>
    </HeroSliderContainer>
  )
}

export default HeroSlider
