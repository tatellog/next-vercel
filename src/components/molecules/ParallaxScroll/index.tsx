import React from 'react'
import { useInView } from 'react-intersection-observer'

import AboutHeading from '../AboutHeading'
import CircleAnimation from '../CircleAnimation'

import {
  CircleHight,
  CircleMedium,
  Divider,
  ParallaxContainer,
  TextContainer,
  TextDescription,
  TitleHint,
} from './styles'

import BodyFigure from '@/components/atoms/Illustration/body'

const Parallax = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  const variants = {
    visible: { opacity: 1, scale: 1, y: 400 },
    hidden: { opacity: 0, scale: 0.65, y: 50 },
  }

  return (
    <ParallaxContainer>
      <CircleAnimation />
      <BodyFigure />
      <div className="heading-container">
        <AboutHeading />
      </div>
      <Divider />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {' '}
        {'is in view? ' + inView}
      </div>
      <CircleHight />
      <CircleMedium />
      <TextContainer
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      >
        <TextDescription>
          I’m a 7+ year of experience Front End Engineer. I craft dynamic web
          apps, e-commerce sites, and mobile apps. Eager to learn, tech
          advocate, and women&apos;s mentor for inclusive tech growth.
        </TextDescription>
      </TextContainer>
      <TitleHint id="scroll-message" className="animate-down">
        Scroll down
      </TitleHint>
    </ParallaxContainer>
  )
}

export default Parallax
