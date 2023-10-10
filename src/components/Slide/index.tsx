import React from 'react'
import { Slide as HeroSlide } from 'hero-slider'
import Image from 'next/image'

import {
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
} from '../HeroBanner/styles'

import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({ slide, nextSlideData }) => (
  <HeroSlide background={{ backgroundColor: slide.backgroundColor }}>
    <Wrapper>
      <StarPrimary>
        <Image src={slide.images?.stars} alt="cross" width={30} height={30} />
      </StarPrimary>
      <Title>{slide.title}</Title>
      <TitleBackgroundFirst>
        {nextSlideData.title.substring(0, 2)}
      </TitleBackgroundFirst>
      <TitleBackgroundLast>{slide.title.slice(-2)}</TitleBackgroundLast>
      <Primary>
        <Image
          src={slide.images?.primary}
          alt="primary"
          width={118}
          height={118}
        />
      </Primary>
      <Subtitle>{slide.subtitle}</Subtitle>
      <SubtitleBackgroundFirst>
        {nextSlideData.subtitle.substring(0, 11)}
      </SubtitleBackgroundFirst>
      <SubtitleBackgroundLast>{slide.title.slice(-11)}</SubtitleBackgroundLast>
      <Secondary>
        <Image
          src={slide.images?.secondary}
          alt="secondary"
          width={130}
          height={132}
        />
      </Secondary>
      <StarSecondary>
        <Image
          src={slide.images?.stars}
          alt="secondary"
          width={30}
          height={30}
        />
      </StarSecondary>
    </Wrapper>
  </HeroSlide>
)

export default Slide
