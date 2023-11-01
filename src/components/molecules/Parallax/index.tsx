import React, { useEffect, useState } from 'react'

import { ParallaxSectionWrapper } from './styles'

import ScrollAnimation from '@/animations/ScrollAnimation'
import FirstSection from '@/components/organisms/AboutMeSections/FirstSection'
import SecondSection from '@/components/organisms/AboutMeSections/SecondSection'
import ThirdSection from '@/components/organisms/AboutMeSections/ThirdSection'

const ParallaxSection: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ParallaxSectionWrapper>
      <ScrollAnimation speed={0.5}>
        <FirstSection scroll={scroll} />
      </ScrollAnimation>

      <ScrollAnimation speed={0.5}>
        <SecondSection />
      </ScrollAnimation>

      <ScrollAnimation speed={0.5}>
        <ThirdSection />
      </ScrollAnimation>
    </ParallaxSectionWrapper>
  )
}

export default ParallaxSection
