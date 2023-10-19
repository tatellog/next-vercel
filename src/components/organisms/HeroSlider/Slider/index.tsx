import React from 'react'
import Image from 'next/image'

import { Slide } from '../types'

import {
  Attributes,
  BackgroundCircle,
  BackgroundWrapper,
  Illustrations,
  Primary,
  Secondary,
  StarLeft,
  StarRight,
} from './styles'

import { defaultSlide } from '@/utils'

interface SliderProps {
  slides: Slide[]
  activeIndex: number
}

const Slider: React.FC<SliderProps> = ({ slides, activeIndex }) => {
  const activeSlide = slides[activeIndex] || defaultSlide
  const placeholder = '/images/svg/react.svg'

  return (
    <>
      <BackgroundWrapper id="background-mobile">
        <BackgroundCircle $backgroundColor={activeSlide?.color ?? ''}>
          {Number(activeSlide?.images.stars?.length) > 0 && (
            <Attributes id="attributes">
              <StarRight>
                <Image
                  src={activeSlide.images.stars ?? placeholder}
                  width={50}
                  height={50}
                  alt="primary-start"
                />
              </StarRight>
              <StarLeft>
                <Image
                  src={activeSlide?.images.stars ?? placeholder}
                  width={50}
                  height={50}
                  alt="secondary-start"
                />
              </StarLeft>
            </Attributes>
          )}
        </BackgroundCircle>
        <Illustrations className={`slide-${activeIndex}`}>
          <Primary id={`primary-${activeIndex}`}>
            <Image
              src={activeSlide?.images.primary ?? placeholder}
              width={130}
              height={130}
              alt={`image-primary-${activeIndex}`}
            />
          </Primary>
          <Secondary id={`secondary-${activeIndex}`}>
            <Image
              src={activeSlide?.images.secondary ?? placeholder}
              width={130}
              height={130}
              alt={`image-secondary-${activeIndex}`}
            />
          </Secondary>
        </Illustrations>
      </BackgroundWrapper>
    </>
  )
}

export default Slider
