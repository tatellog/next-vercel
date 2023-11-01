// components/Section1.tsx
import React from 'react'

import { SectionContainer, Shapes } from './styles'

import Illustration from '@/components/atoms/Circle/Ilustration'
import AboutHeading from '@/components/molecules/AboutHeading'
import WaterMark from '@/components/organisms/WaterMark'

interface FirstSectionProps {
  scroll: number
}

const FirstSection: React.FC<FirstSectionProps> = ({ scroll }) => (
  <SectionContainer className="section-1">
    <AboutHeading scrollDirection={scroll} />
    <WaterMark />
    <Shapes id="foreground-shapes">
      <Illustration scroll={scroll} />
    </Shapes>
  </SectionContainer>
)

export default FirstSection
