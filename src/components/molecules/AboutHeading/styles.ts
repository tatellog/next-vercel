import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

const commonStyles = `
  color: #673437;
  text-align: center;
  font-style: normal;
 
`

export const AboutContentHeader = styled.div`
  grid-column: 6 / span 8;
  white-space: nowrap; 50vh;
  margin-top: 30vh;
`
export const Title = styled.div`
  position: relative;
  display: inline-block;
  transform-origin: 100% 100%;
  transform: translate(0px, 0px);
  font-weight: 400;
  line-height: 1.5625rem;
  font-family: Stacion;
  font-size: 7.5rem;
  ${commonStyles}

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
    font-size: 4rem;
  }
`
