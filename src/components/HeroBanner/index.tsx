import React, { useState } from 'react'
import HeroSlider, { ButtonsNav, Slide } from 'hero-slider'

import { CustomContent, Subtitle, Title, Wrapper } from './styles'
import { HeroBannerSliderProps } from './types'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
}) => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <CustomContent $color={slides[activeSlide]?.color}>
      <HeroSlider
        autoplay={false}
        animations={{ slidingAnimation: 'wipe' }}
        controller={{
          slidingDuration: 300,
          onBeforeSliding(nextSlide) {
            onSlideChange(nextSlide)
            setActiveSlide(nextSlide)
          },
        }}
        height={'100vh'}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Slide
              background={{
                backgroundColor: slide.backgroundColor,
              }}
            >
              <Wrapper>
                <Title>{slide.title}</Title>
                <Subtitle style={{ color: slide.textColor }}>
                  {slide.subtitle}
                </Subtitle>
              </Wrapper>
            </Slide>
          </div>
        ))}
        <ButtonsNav
          position={{
            bottom: '9.5rem',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          activeColor={slides[activeSlide]?.color}
        />
      </HeroSlider>
    </CustomContent>
  )
}

export default HeroBanner
