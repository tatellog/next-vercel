import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const WaterMarkContainer = styled.span`
  position: fixed;
  transform: translate3d(-2.9px, 0px, 0px);
  bottom: 0;
  opacity: 0.5;
  margin-left: -0.28333333em;
  margin-bottom: -0.225em;
  color: #ffc2c5;
  white-space: break-spaces;
`

export const WaterMarkText = styled.div`
  position: relative;
  display: inline-block;
  transform-origin: 100% 100%;
  transform: translate(0px, 0px);
  text-align: center;
  font-family: Stacion;
  font-size: 8.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
    font-size: 4rem;
  }
`
