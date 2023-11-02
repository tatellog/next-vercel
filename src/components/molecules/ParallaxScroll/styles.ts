import { motion } from 'framer-motion'
import styled from 'styled-components'

import colors from '@/theme/colors'
import { breakpoints } from '@/theme/constants'

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
    position: relative;
    z-index: 2;
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

export const Divider = styled.div`
  height: 300px;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    height: 200px;
  }
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
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    display: none;
  }
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
export const CircleHight = styled.div`
  width: 34.6875rem;
  height: 34.6875rem;
  transform: translate(-20%, 40%);
  border-radius: 34.6875rem;
  background: #f7eed5;
  position: fixed;
  top: 25rem;
  z-index: 1;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    width: 26.6875rem;
    height: 28.6875rem;
    transform: translate(-13%, -8%);
    border-radius: 26.6875rem;
    position: absolute;
  }
`

export const CircleMedium = styled.div`
  top: 30rem;
  width: 17.3125rem;
  height: 17.3125rem;
  border-radius: 17.3125rem;
  right: 50%;
  transform: translate(320%, 100%);
  background: #f7eed5;
  position: absolute;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    display: none;
  }
`

export const CircleSmall = styled(motion.div)`
  width: 7.1875rem;
  height: 7.1875rem;
  position: absolute;
  border-radius: 34.6875rem;
  background: #fff;
  right: -100%;
  top: 50%;

  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    width: 4.6875rem;
    height: 4.6875rem;
    border-radius: 4.6875rem;
    display: flex;
    top: 14rem;
    right: -8rem;
  }
`
