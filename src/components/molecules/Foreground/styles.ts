import { motion } from 'framer-motion'
import { styled } from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const ForegroundContainer = styled.div`
  display: grid;
  place-items: center;
  place-content: center;
`
export const CircleMedium = styled.div`
  top: 29rem;
  width: 17.3125rem;
  height: 17.3125rem;
  border-radius: 17.3125rem;
  transform: translate(320%, 100%);
  background: #f7eed5;
  position: fixed;
  right: 56%;
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
  right: 10%;
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
