import React from 'react'

import { PageLayout } from '@/components/layouts/PageLayout'
import HeroSlider from '@/components/organisms/HeroSlider'
import { slides } from '@/utils'

const MainPage = () => (
  <PageLayout>
    <HeroSlider slides={slides} autoplay={false} />
  </PageLayout>
)
export default MainPage
