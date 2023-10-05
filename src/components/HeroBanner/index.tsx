import React from 'react'
import HeroSlider, { Nav, Slide } from 'hero-slider'

import { Subtitle, TitleA, Wrapper } from './styles'
import { HeroBannerSliderProps } from './types'

import colors from '@/theme/colors'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
}) => (
  <HeroSlider
    autoplay={false}
    animations={{ slidingAnimation: 'wipe' }}
    controller={{
      slidingDuration: 300,
      onBeforeSliding: nextSlide => {
        onSlideChange(nextSlide)
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
          label={'MenuNav'}
        >
          <Wrapper>
            <TitleA style={{ color: slide.textColor }}>{slide.title}</TitleA>
            <Subtitle style={{ color: slide.textColor }}>
              {slide.subtitle}
            </Subtitle>
          </Wrapper>
        </Slide>
      </div>
    ))}
    <Nav
      position={{
        bottom: '9.5rem',
        left: '50%',
        transform: 'translate(-50%)',
      }}
      color={colors.blackLight}
      activeColor={colors.main.goldPink}
    />
  </HeroSlider>
)

export default HeroBanner
