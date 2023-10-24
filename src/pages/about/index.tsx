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
  & #foreground-shapes {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 99%;
    height: 100vh;
  }
`

const Shapes = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  align-content: center;
  justify-content: center;
  place-content: center;
`

const pages = [AboutHeading]

const AboutPage: React.FC = () => (
  <PageLayout>
    <AboutPageContainer id="about-page">
      <InfiniteScroll pages={pages} initialPage={0} />
      <WaterMark />
      <Shapes id="foreground-shapes">
        <Circle />
        <Circle name="small-circle" />
        <Circle name="medium-circle" />
      </Shapes>
    </AboutPageContainer>
  </PageLayout>
)
export default AboutPage
