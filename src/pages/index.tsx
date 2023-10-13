import React from 'react'

import { PageLayout } from '@/components/layouts/PageLayout'
import HeroSlider from '@/components/organisms/HeroSlider'

const slides = [
  {
    text: 'Slide 1',
    subtitle: 'Subtitle 1',
    backgroundColor: 'red',
  },
  {
    text: 'Slide 2',
    subtitle: 'Subtitle 2',
    backgroundColor: 'green',
  },
  {
    text: 'Slide 3',
    subtitle: 'Subtitle 3',
    backgroundColor: 'blue',
  },
  {
    text: 'Slide 4',
    subtitle: 'Subtitle 4',
    backgroundColor: 'orange',
  },
]

const MainPage = () => (
  <PageLayout>
    <HeroSlider slides={slides} autoplay={false} />
  </PageLayout>
)
export default MainPage
