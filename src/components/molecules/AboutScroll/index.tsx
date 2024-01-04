import React from 'react'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../CircleAnimation'
import Header from '../Header'

import { AboutPageContainer, Box, Section } from './styles'

import BodyFigure from '@/components/atoms/Illustration/body'

const AboutScroll = () => {
  // const ref = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['end end', 'start start'],
  // })

  const [refView, inView] = useInView({
    threshold: 1,
    triggerOnce: false,
  })

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  return (
    <>
      <AboutPageContainer>
        <Header />
      </AboutPageContainer>
      <Section>
        <CircleAnimation />
        <BodyFigure />

        {/* <BoxContainer ref={ref} id="boxContainer">
          <figure className="progress">
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </figure>
        </BoxContainer> */}
      </Section>
      <Section>
        <Box
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          exit="hidden"
          transition={{ duration: 2 }}
          ref={refView}
        />
      </Section>
    </>
  )
}

export default AboutScroll
