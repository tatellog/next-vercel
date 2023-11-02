import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'

import AboutHeading from '../AboutHeading'

import {
  CircleHight,
  CircleMedium,
  CircleSmall,
  Divider,
  ParallaxContainer,
  ShapesContainer,
  TextContainer,
  TextDescription,
  TitleHint,
} from './styles'

import Illustration from '@/components/atoms/Circle/Ilustration'

const Parallax = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [300, 200], [130, 120])
  const y2 = useTransform(scrollY, [0, 100], [-250, 240])
  const x2 = useTransform(scrollY, [100, 0], [-150, 400])
  const scaleShapesContainer = useTransform(scrollY, [0, 100], [1, 0.65])
  const scaleCircleSmall = useTransform(scrollY, [0, 100], [1, 2.8])
  const translateYCircleSmall = useTransform(scrollY, [0, 100], [-100, -100])
  const translateXCircleSmall = useTransform(scrollY, [0, 100], [200, -170])

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  }

  return (
    <ParallaxContainer>
      <ShapesContainer
        className="shape"
        style={{ y: y1, x: 0, scale: scaleShapesContainer }}
      >
        <Illustration />
        <CircleSmall
          style={{
            y: translateYCircleSmall,
            x: translateXCircleSmall,
            scale: scaleCircleSmall,
          }}
        />
      </ShapesContainer>
      <motion.div className="heading-container" style={{ y: y2, x: x2 }}>
        <AboutHeading />
      </motion.div>
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
