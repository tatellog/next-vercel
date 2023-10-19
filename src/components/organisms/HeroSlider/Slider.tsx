import React from 'react'
import Image from 'next/image'

import {
  Attributes,
  BackgroundCircle,
  BackgroundWrapper,
  Ilustrations as Illustrations,
  Primary,
  Secondary,
  StarLeft,
  StarRight,
} from './styles'
import { Slide } from './types'

interface SliderProps {
  slides: Slide[]
  activeIndex: number
}

const Slider: React.FC<SliderProps> = ({ slides, activeIndex }) => {
  const activeSlide = slides[activeIndex]

  return (
    <>
      <BackgroundWrapper id="background-mobile">
        <BackgroundCircle $backgroundColor={String(activeSlide?.color)}>
          {Number(activeSlide?.images.stars?.length) > 0 && (
            <Attributes id="attributes">
              <StarRight>
                <Image
                  src={String(activeSlide?.images.stars)}
                  width={50}
                  height={50}
                  alt="primary-start"
                />
              </StarRight>
              <StarLeft>
                <Image
                  src={String(activeSlide?.images.stars)}
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
              src={String(activeSlide?.images.primary)}
              width={130}
              height={130}
              alt={`image-primary-${activeIndex}`}
            />
          </Primary>
          <Secondary id={`secondary-${activeIndex}`}>
            <Image
              src={String(activeSlide?.images.secondary)}
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
