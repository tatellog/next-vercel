import React, { useCallback, useState } from 'react'

import HeroBanner from '../HeroBanner'
import { PageLayout } from '../layouts/PageLayout'

import { slides } from '@/utils'

const About = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const handleSlideChange = useCallback(activeSlideIndex => {
    setActiveSlideIndex(Number(activeSlideIndex))
  }, [])

  return (
    <PageLayout backgroundIndex={activeSlideIndex}>
      <HeroBanner slides={slides} onSlideChange={handleSlideChange} />
    </PageLayout>
  )
}

export default About
