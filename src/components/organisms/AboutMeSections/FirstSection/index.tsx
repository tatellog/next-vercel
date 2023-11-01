// components/Section1.tsx
import React from 'react'

import { SectionContainer, Shapes } from './styles'

import Circle from '@/components/atoms/Circle'
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
      <Circle name="small-circle" prefix="small" scroll={scroll} />
      <Illustration scroll={scroll} />
    </Shapes>
  </SectionContainer>
)

export default FirstSection
