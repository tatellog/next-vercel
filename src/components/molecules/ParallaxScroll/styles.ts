import { motion } from 'framer-motion'
import styled from 'styled-components'

import colors from '@/theme/colors'

export const ParallaxContainer = styled.div`
  text-align: center;
  height: 300vh;
  background-color: ${colors.main.secondaryPink};
  color: #fff;
  padding-top: 320px;
  & .shape {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
  }

  & .heading-container {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column-gap: 0.5rem;
    -moz-column-gap: 0rem;
    column-gap: 0rem;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }
`
export const ShapesContainer = styled(motion.div)`
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  align-content: center;
  justify-content: center;
  place-content: center;
`

export const TextContainer = styled(motion.div)`
  width: 25.875rem;
  height: 7.3rem;
  margin-left: auto;
  margin-right: auto;
`
export const TextDescription = styled.p`
  color: #2e4458;
  font-family: GT Planar;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  width: 25.875rem;
  height: 7.3rem;
  text-align: justify;
`

export const TitleHint = styled.span`
  color: rgba(46, 68, 88, 0.5);
  font-family: Stacion;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`
