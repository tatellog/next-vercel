import { motion } from 'framer-motion'
import { styled } from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const ForegroundContainer = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
  &.progress {
    position: sticky;
    top: 0;
    width: 80px;
    height: 80px;
    margin: 0;
    padding: 0;
  }

  &.progress svg {
    transform: translateX(-100px) rotate(-90deg);
  }

  & circle {
    stroke-dashoffset: 0;
    stroke-width: 5%;
    fill: none;
  }

  &.bg {
    stroke: #fe0222;
    opacity: 0.2;
  }

  .progress .indicator {
    stroke: #fe0222;
  }
`
export const CircleMedium = styled.div`
  top: 29rem;
  width: 17.3125rem;
  height: 17.3125rem;
  border-radius: 17.3125rem;
  transform: translate(320%, 100%);
  background: #f7eed5;
  position: fixed;
  right: 50%;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    display: none;
  }
`

export const CircleSmall = styled(motion.div)`
  width: 7.1875rem;
  height: 7.1875rem;
  position: fixed;
  border-radius: 34.6875rem;
  background: #fff;
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
