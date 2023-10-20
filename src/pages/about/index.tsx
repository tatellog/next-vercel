import React from 'react'
import styled from 'styled-components'

import Circle from '@/components/atoms/Circle'
import { PageLayout } from '@/components/layouts/PageLayout'
import AboutFront from '@/components/molecules/AboutFront'
import AboutHeading from '@/components/molecules/AboutHeading'
import AboutSkills from '@/components/molecules/AboutSkills'
import InfiniteScroll from '@/components/organisms/InfinityScroll'
import WaterMark from '@/components/organisms/WaterMark'
import colors from '@/theme/colors'

const AboutPageContainer = styled.div`
  background: ${colors.main.secondaryPink};
  min-height: 100vh;
  width: 100vw;
  overflow-y: hidden;
`

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
