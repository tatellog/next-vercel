import React, { useState } from 'react'
import styled from 'styled-components'

import Circle from '@/components/atoms/Circle'
import Illustration from '@/components/atoms/Circle/Ilustration'
import { PageLayout } from '@/components/layouts/PageLayout'
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

const AboutPage: React.FC = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const handleScrollChange = (newScrollValue: React.SetStateAction<number>) => {
    setScrollValue(newScrollValue)
  }
  return (
    <PageLayout>
      <AboutPageContainer id="about-page">
        <InfiniteScroll initialPage={0} onScrollChange={handleScrollChange} />
        <WaterMark />
        <Shapes id="foreground-shapes">
          <Circle scroll={scrollValue} prefix="small" name="small-circle" />
          <Illustration scroll={scrollValue} />
        </Shapes>
      </AboutPageContainer>
    </PageLayout>
  )
}
export default AboutPage
