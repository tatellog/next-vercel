import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import Slide from './Slide'
import Slider from './Slider'
import SliderButton from './SliderButton'
import { ButtonContainer, HeroSliderContainer, SlideWrapper } from './styles'
import { CarouselProps } from './types'

const HeroSlider: React.FC<CarouselProps> = ({
  slides,
  autoplay,
  activeIndex,
  setActiveIndex,
}) => {
  const [animateSlide, setAnimateSlide] = useState(false)

  const nextSlide = useCallback(() => {
    setAnimateSlide(true)
    setActiveIndex((activeIndex + 1) % slides.length)
    setTimeout(() => {
      setAnimateSlide(false)
    }, 3000)
  }, [activeIndex, slides, setActiveIndex])

  const handleSliderButtonClick = useCallback(
    (clickedIndex: number) => {
      setActiveIndex(clickedIndex)
      setAnimateSlide(true)
      setTimeout(() => {
        setAnimateSlide(false)
      }, 1000)
    },
    [setActiveIndex],
  )

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((activeIndex + 1) % slides.length)
    } else if (direction === 'right') {
      setActiveIndex((activeIndex - 1 + slides.length) % slides.length)
    }
    setAnimateSlide(true)
    setTimeout(() => {
      setAnimateSlide(false)
    }, 1000)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      handleSwipe('left')
    },
    onSwipedRight: () => {
      handleSwipe('right')
    },
    trackMouse: true,
  })

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

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex, slides])

  return (
    <div {...swipeHandlers}>
      <HeroSliderContainer id="slider-container">
        <Slider slides={slides} activeIndex={activeIndex} />
        <SlideWrapper $activeIndex={activeIndex} id="slide-wrapper">
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
          <ButtonContainer id="slide-control">
            {slides.map((_, index) => (
              <SliderButton
                key={index}
                active={index === activeIndex}
                onClick={() => handleSliderButtonClick(index)}
                color={activeSlide?.color ?? ''}
              />
            ))}
          </ButtonContainer>
        </SlideWrapper>
      </HeroSliderContainer>
    </div>
  )
}

export default HeroSlider
