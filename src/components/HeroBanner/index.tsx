import React, { useEffect, useState } from 'react'
import HeroSlider, { ButtonsNav, Slide } from 'hero-slider'
import Image from 'next/image'

import {
  CustomContent,
  Primary,
  Secondary,
  StarPrimary,
  StarSecondary,
  Subtitle,
  SubtitleBackgroundFirst,
  SubtitleBackgroundLast,
  Title,
  TitleBackgroundFirst,
  TitleBackgroundLast,
  Wrapper,
} from './styles'
import { HeroBannerSliderProps } from './types'

const HeroBanner: React.FC<HeroBannerSliderProps> = ({
  slides,
  onSlideChange,
}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)

  useEffect(() => {
    setActiveSlide(prevSlide => prevSlide % slides.length)
    setNextSlide(prevNext => prevNext % slides.length)
  }, [slides.length])

  const currentSlide = slides[activeSlide]
  const nextSlideData = slides[nextSlide]
  const existIndex = currentSlide?.color

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
            setNextSlide((nextSlideIndex + 1) % slides.length)
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
                <TitleBackgroundFirst>
                  {nextSlideData.title.substring(0, 2)}
                </TitleBackgroundFirst>
                <TitleBackgroundLast>
                  {slide.title.slice(-2)}
                </TitleBackgroundLast>
                <Primary>
                  <Image
                    src={slide.images?.primary}
                    alt={'primary'}
                    width={118}
                    height={118}
                  />
                </Primary>
                <Subtitle>{slide.subtitle}</Subtitle>
                <SubtitleBackgroundFirst>
                  {nextSlideData.subtitle.substring(0, 11)}
                </SubtitleBackgroundFirst>
                <SubtitleBackgroundLast>
                  {slide.title.slice(-11)}
                </SubtitleBackgroundLast>
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
