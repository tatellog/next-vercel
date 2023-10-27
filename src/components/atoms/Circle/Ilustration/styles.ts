import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const IllustrationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  & #spark-left {
    top: -12rem;
    width: 10.71894rem;
    height: 8.08725rem;
    left: -27rem;
    opacity: 0.6;
  }
  & #spark-right {
    bottom: 8rem;
    right: 15rem;
    width: 10.71894rem;
    height: 8.08725rem;
    opacity: 0.6;
  }

  & img {
    grid-area: 1/1;
    position: absolute;
  }
  & #face {
    z-index: 2;
    width: 8.05231rem;
    height: 9.15431rem;
    @media screen and (max-width: ${breakpoints.iPhone14ProMax
        .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
      width: 6.55231rem;
      height: 7rem;
      position: absolute;
      left: 47%;
      top: 0.2rem;
      transform: translate(-50%, -50%);
    }
  }
  & #body {
    z-index: 1;
    top: -4rem;
    width: 19.71894rem;
    height: 15.08725rem;
    @media screen and (max-width: ${breakpoints.iPhone14ProMax
        .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
      width: 14.05231rem;
      height: 13.5rem;
      position: absolute;
      left: 46%;
      top: 12%;
      transform: translate(-50%, -50%);
    }
  }
`
export const Line = styled.div`
  width: 20.73819rem;
  height: 0.2rem;

  background-color: #292928;
  transform: translateY(6.3rem);

  @media screen and (max-width: ${breakpoints.iPhone14ProMax
      .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
    transform: translateY(4.7rem);
  }
`
