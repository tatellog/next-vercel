import React, { useMemo, useState } from 'react'
import HeroSlider, { ButtonsNav } from 'hero-slider'

import SlideComponent from '../Slide'

import { CustomContent } from './styles'
import { HeroBannerSliderProps } from './types'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
}) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = (activeSlide + 1) % slides.length
  const currentSlide = slides[activeSlide === 4 ? 0 : activeSlide]
  const nextSlideData = slides[nextSlide]
  const existIndex = currentSlide?.color

  const slideComponents = useMemo(
    () =>
      slides.map((slide, index) => (
        <SlideComponent
          key={index}
          slide={slide}
          nextSlideData={nextSlideData}
        />
      )),
    [slides, nextSlideData],
  )

  return (
    <CustomContent $color={existIndex}>
      <HeroSlider
        autoplay={false}
        animations={{ slidingAnimation: 'wipe' }}
        controller={{
          slidingDuration: 300,
          initialSlide: activeSlide,
          onBeforeSliding(nextSlideIndex) {
            onSlideChange(nextSlideIndex)
            setActiveSlide(nextSlideIndex)
          },
        }}
        height={'100vh'}
      >
        {slideComponents}
        <ButtonsNav
          position={{
            bottom: '9.5rem',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          activeColor={existIndex}
        />
      </HeroSlider>
    </CustomContent>
  )
}

export default HeroBanner
