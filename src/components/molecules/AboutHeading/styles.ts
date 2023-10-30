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
  position: absolute;
  top: 9rem;
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
  font-weight: 500;
  line-height: 1.5625rem;
  font-family: Stacion;
  font-size: 8.5rem;
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

export const TextContainer = styled.span`
  width: 25.875rem;
  height: 7.3rem;
  position: fixed;
  top: 23rem;
  transform: translate(-13%, 100%);
  white-space: break-spaces;
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
