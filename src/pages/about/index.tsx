import React from 'react'

import { AboutPageContainer } from './styles'

import Circle from '@/components/atoms/Circle'
import { PageLayout } from '@/components/layouts/PageLayout'
import AboutFront from '@/components/molecules/AboutFront'
import AboutHeading from '@/components/molecules/AboutHeading'
import AboutSkills from '@/components/molecules/AboutSkills'
import InfiniteScroll from '@/components/organisms/InfinityScroll'
import WaterMark from '@/components/organisms/WaterMark'

const pages = [AboutHeading, AboutFront, AboutSkills]

const AboutPage: React.FC = () => (
  <PageLayout>
    <AboutPageContainer id="about-page">
      <InfiniteScroll pages={pages} initialPage={0} />
      <Circle />
      <Circle name="small-circle" />
      <Circle name="medium-circle" />
      <WaterMark />
    </AboutPageContainer>
  </PageLayout>
)
export default AboutPage
