import React from 'react'
import styled from 'styled-components'

import Circle from '@/components/atoms/Circle'
import { PageLayout } from '@/components/layouts/PageLayout'
import AboutHeading from '@/components/molecules/AboutHeading'
import InfiniteScroll from '@/components/organisms/InfinityScroll'
import WaterMark from '@/components/organisms/WaterMark'
import colors from '@/theme/colors'

const AboutPageContainer = styled.div`
  background: ${colors.main.secondaryPink};
  min-height: 100vh;
  width: 100vw;
  height: 300vh;
  overflow-y: hidden;
`

const pages = [AboutHeading]

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
