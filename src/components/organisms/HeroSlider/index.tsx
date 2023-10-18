import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Slide from '../Slide'
import SliderButton from '../SliderButton'

import {
  Attributes,
  BackgroundCircle,
  BackgroundWrapper,
  ButtonContainer,
  HeroSliderContainer,
  Ilustrations,
  Primary,
  Secondary,
  SlideWrapper,
  StarLeft,
  StarRight,
} from './styles'
import { CarouselProps } from './types'

const HeroSlider: React.FC<CarouselProps> = ({
  slides,
  autoplay,
  activeIndex,
  setActiveIndex,
}) => {
  const [animateSlide, setAnimateSlide] = useState(false)

  const nextSlide = () => {
    setAnimateSlide(true)
    setActiveIndex((activeIndex + 1) % slides.length)
    setTimeout(() => {
      setAnimateSlide(false)
    }, 1000)
  }

  const handleSliderButtonClick = (clickedIndex: number) => {
    setActiveIndex(clickedIndex)
    setAnimateSlide(true)
    setTimeout(() => {
      setAnimateSlide(false)
    }, 1000)
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
          <Attributes id="attributes">
            <StarRight>
              <Image
                src={slides[activeIndex].images.stars}
                width={50}
                height={50}
                alt="react-image"
              />
            </StarRight>
            <StarLeft>
              <Image
                src={slides[activeIndex].images.stars}
                width={50}
                height={50}
                alt="react-image"
              />
            </StarLeft>
          </Attributes>
        </BackgroundCircle>
        <Ilustrations className={`slide-${activeIndex}`}>
          <Primary id={`primary-${activeIndex}`}>
            <Image
              src={slides[activeIndex].images.primary}
              width={130}
              height={130}
              alt={`image-primary-${activeIndex}`}
            />
          </Primary>
          <Secondary id={`secondary-${activeIndex}`}>
            <Image
              src={slides[activeIndex].images.secondary}
              width={130}
              height={130}
              alt={`image-secondary-${activeIndex}`}
            />
          </Secondary>
        </Ilustrations>
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
            animate={animateSlide}
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
