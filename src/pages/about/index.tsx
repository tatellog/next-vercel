import React from 'react'
import styled from 'styled-components'

import { PageLayout } from '@/components/layouts/PageLayout'
import ParallaxSection from '@/components/molecules/Parallax'
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
      <ParallaxSection />
    </AboutPageContainer>
  </PageLayout>
)
export default AboutPage
