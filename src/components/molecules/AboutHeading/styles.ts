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

export const AboutContentHeader = styled.div<{ $scroll?: string }>`
  grid-column: 6 / span 8;
  white-space: nowrap; 50vh;
  margin-top: 25vh;
  & #scroll-message {
    position: fixed;
    z-index: 1;
    display: block;
    bottom: 2.75rem;
    left: 47%;
    
    transform:  translateY(-100%);
    opacity: 1;
  }

  & .animate-down {
    opacity: 1;
    animation: ${animateDown} 1.66s ${({ $scroll }) => $scroll};
  }

  @media screen and (max-width: ${
    breakpoints.iPhone14ProMax.width
  }) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    margin-top: 27vh;

    & #scroll-message {
      left: 38%;
    }
    
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
