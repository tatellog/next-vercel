import React, { useState } from 'react'

import { PageLayout } from '@/components/layouts/PageLayout'
import HeroSlider from '@/components/organisms/HeroSlider'
import { slides } from '@/utils'

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <PageLayout activeIndex={activeIndex}>
      <HeroSlider
        slides={slides}
        autoplay={false}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </PageLayout>
  )
}
export default MainPage
