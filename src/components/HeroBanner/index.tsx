import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import HeroBannerSlide from '../HeroBannerSlide'

import {
  CustomContent,
  ImageContainer,
  NavigationButton,
  NavigationButtons,
  Primary,
  Secondary,
  StarPrimary,
  StarSecondary,
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
    <CustomContent
      id="hero-banner-container"
      $color={currentSlideData.backgroundColor}
    >
      <HeroBannerSlide
        currentSlide={currentSlideData}
        nextSlide={nextSlideData}
        index={currentSlide.current}
      />
      <ImageContainer
        id="images-container"
        className={`slide-${currentSlide.current}`}
      >
        <StarPrimary className={`star-primary-${currentSlide.current}`}>
          <Image
            src={currentSlideData.images.stars}
            width={30}
            height={30}
            alt={'star-primary'}
          />
        </StarPrimary>
        <Primary className={`primary-${currentSlide.current}`}>
          <Image
            src={currentSlideData.images.primary}
            width={130}
            height={132}
            alt={'primary'}
          />
        </Primary>
        <Secondary className={`secondary-${currentSlide.current}`}>
          <Image
            src={currentSlideData.images.secondary}
            width={130}
            height={132}
            alt={'secondary'}
          />
        </Secondary>
        <StarSecondary className={`star-secondary-${currentSlide.current}`}>
          <Image
            src={currentSlideData.images.stars}
            width={30}
            height={30}
            alt={'star-secondary'}
          />
        </StarSecondary>
      </ImageContainer>
      <NavigationButtons>{navigationButtons}</NavigationButtons>
    </CustomContent>
  )
}

export default HeroBanner
