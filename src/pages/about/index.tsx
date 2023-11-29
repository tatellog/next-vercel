import React from 'react'
import styled from 'styled-components'

import BodyFigure from '@/components/atoms/Illustration/body'
import { PageLayout } from '@/components/layouts/PageLayout'
import CircleAnimation from '@/components/molecules/CircleAnimation'
import Foreground from '@/components/molecules/Foreground'
import Header from '@/components/molecules/Header'
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

const AboutPage: React.FC = () => (
  <PageLayout>
    <AboutPageContainer id="about-page">
      <Header />
      <CircleAnimation />
      <BodyFigure />
      <Foreground />
      <WaterMark />
    </AboutPageContainer>
  </PageLayout>
)
export default AboutPage
