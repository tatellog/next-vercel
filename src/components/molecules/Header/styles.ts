import styled from 'styled-components'

import colors from '@/theme/colors'
import { breakpoints } from '@/theme/constants'

export const HeaderContainer = styled.div`
  text-align: center;
  margin-top: 34rem;
  height: 100vh;
  background-color: ${colors.main.secondaryPink};
  color: #fff;
  & .shape {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
  }

  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: 0.5rem;
  column-gap: 0.5rem;
  column-gap: 0rem;
  width: 100%;
  max-width: 100%;
  max-width: 90vw;
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
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    display: none;
  }
`
