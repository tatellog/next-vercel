import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const CircleContainer = styled.div`
  opacity: 1;
  position: fixed;

  & .base-circle {
    font-size: 9.1875rem;
    position: fixed;
    top: 55%;
    right: 0;
    left: -10%;
    transform-origin: 50% 50%;
    @media screen and (max-width: ${breakpoints.iPhone14ProMax
        .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
      top: 33%;
      left: 20%;
      position: fixed;
    }
  }
  & .medium-circle {
    width: 17.3125rem;
    height: 17.3125rem;
    border-radius: 17.3125rem;
    top: 190%;
    left: 190%;
    transform: translate(100%, 120%);
    position: relative;
  }

  & .small-circle {
    position: relative;
    width: 7.1875rem;
    height: 7.1875rem;
    border-radius: 7.1875rem;
    background: #ede1e2;
    left: 26.5rem;
  }
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    display: flex;
  }
`
export const CircleBase = styled.div`
  width: 34.6875rem;
  height: 34.6875rem;
  border-radius: 34.6875rem;
  background: #f7eed5;
  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    width: 16.6875rem;
    height: 16.6875rem;
    border-radius: 16.6875rem;
    display: flex;
  }
`
