import React, { useState } from 'react'
import HeroSlider, { ButtonsNav, Slide } from 'hero-slider'
import Image from 'next/image'

import {
  CustomContent,
  Primary,
  Secondary,
  StarPrimary,
  StarSecondary,
  Subtitle,
  Title,
  Wrapper,
} from './styles'
import { HeroBannerSliderProps } from './types'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const existIndex =
    activeSlide === 4 ? slides[0].color : slides[activeSlide]?.color

  return (
    <CustomContent $color={existIndex}>
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
                <StarPrimary>
                  <Image
                    src={slide.images?.stars}
                    alt={'cross'}
                    width={30}
                    height={30}
                  />
                </StarPrimary>
                <Title>{slide.title}</Title>
                <Primary>
                  <Image
                    src={slide.images?.primary}
                    alt={'primary'}
                    width={118}
                    height={118}
                  />
                </Primary>
                <Subtitle>{slide.subtitle}</Subtitle>
                <Secondary>
                  <Image
                    src={slide.images?.secondary}
                    alt={'secondary'}
                    width={130}
                    height={132}
                  />
                </Secondary>
                <StarSecondary>
                  <Image
                    src={slide.images?.stars}
                    alt={'secondary'}
                    width={30}
                    height={30}
                  />
                </StarSecondary>
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
          activeColor={existIndex}
        />
      </HeroSlider>
    </CustomContent>
  )
}

export default HeroBanner
