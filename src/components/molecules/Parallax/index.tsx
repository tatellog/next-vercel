import React, { useEffect, useState } from 'react'

import { ParallaxSectionWrapper } from './styles'

import ScrollAnimation from '@/animations/ScrollAnimation'
import FirstSection from '@/components/organisms/AboutMeSections/FirstSection'

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
    </ParallaxSectionWrapper>
  )
}

export default ParallaxSection
