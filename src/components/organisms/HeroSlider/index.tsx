// Carousel.tsx
import React, { useEffect, useState } from 'react'

import Slide from '../Slide'
import SliderButton from '../SliderButton'

import { ButtonContainer, HeroSliderContainer, SlideWrapper } from './styles'
import { CarouselProps } from './types'

const HeroSlider: React.FC<CarouselProps> = ({ slides, autoplay }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length)
  }
  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length)
  }

  const handleSliderButtonClick = (clickedIndex: number) => {
    if (clickedIndex > activeIndex) {
      nextSlide()
    } else if (clickedIndex < activeIndex) {
      prevSlide()
    }
  }
  const getSlideId = (index: number) => {
    if (index === activeIndex) {
      return 'active-slide'
    } else if (index === (activeIndex + 1) % slides.length) {
      return 'next-slide'
    } else if (index === (activeIndex - 1 + slides.length) % slides.length) {
      return 'prev-slide'
    } else {
      return 'inactive'
    }
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
            id={getSlideId(index)}
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
