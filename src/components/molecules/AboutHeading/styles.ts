import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'

import { breakpoints } from '@/theme/constants'

const commonStyles = `
  color: #673437;
  text-align: center;
  font-style: normal;
 
`

export const animateDown = keyframes`
0% {
  opacity: 0;
  transform: translateY(-100%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`

export const TitleHint = styled.span`
  position: fixed;
  z-index: 1;
  display: block;
  bottom: 2.75rem;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);

  color: rgba(46, 68, 88, 0.5);
  font-family: Stacion;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`

export const AboutContentHeader = styled(motion.div)`

  grid-column: 6/span 8;
  white-space: nowrap;
  margin-top:-4vh;

  & h1 {
    width: max-content;
    white-space: nowrap;
    margin-top: calc(-0.5em *1)
  }

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    grid-column: -2/2;
    & h1 {
      margin-top: calc(-1em*1 + .5ex)
    }
  }


  & #scroll-message {
    position: absolute;
    z-index: 1;
    display: block;
    left: 8%;
    top: 40rem;
    opacity: 1;
  }

  & .animate-down {
    opacity: 1;
    animation: ${animateDown} 1.66s infinite};
  }

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
  height: 200px;
}
`

export const Title = styled(motion.span)`
  position: relative;
  display: inline-block;
  font-weight: 500;
  line-height: 1.5625rem;
  font-family: Stacion;
  font-size: 8.5rem;
  ${commonStyles}

  @media screen and (max-width: ${breakpoints.iPhone14ProMax
    .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    font-size: 3rem;
    left: 12.8rem;
    top: -10rem;
  }
`

export const TextContainer = styled.span`
  width: 25.875rem;
  height: 7.3rem;
  position: fixed;
  top: 24.5rem;
  transform: translate(-13%, 100%);
  white-space: break-spaces;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    font-size: 1rem;
    left: 2.5rem;
    top: 24.5rem;
    width: 8.875rem;
    height: 7.3rem;
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
`
