import styled, { keyframes } from 'styled-components'

import { breakpoints } from '@/theme/constants'

const commonStyles = `
  color: #673437;
  text-align: center;
  font-style: normal;
 
`

export const debounce = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-15px);
}
60% {
  transform: translateY(-10px);
}
   
`

export const AboutContentHeader = styled.div`
  grid-column: 6 / span 8;
  white-space: nowrap; 50vh;
  margin-top: 25vh;

  & .scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;

  }

  & .scroll-indicator.show {
    opacity: 1;
    animation: ${debounce} 1.5s infinite;
  }
    

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    margin-top: 27vh;
  }
 
 
`
export const Title = styled.div`
  position: relative;
  display: inline-block;
  transform-origin: 100% 100%;
  transform: translate(0px, 0px);
  font-weight: 500;
  line-height: 1.5625rem;
  font-family: Stacion;
  font-size: 9.3rem;
  ${commonStyles}

  @media screen and (max-width: ${breakpoints.iPhone14ProMax
    .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    font-size: 4rem;
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
