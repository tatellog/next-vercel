import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const IllustrationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  & #spark-left {
    width: 8.71894rem;
    height: 6.08725rem;
    left: -27rem;
    opacity: 0.6;
    top: -13rem;
  }
  & #spark-right {
    top: 10rem;
    right: -30rem;
    width: 8.71894rem;
    height: 6.08725rem;
    opacity: 0.6;
  }

  & img {
    grid-area: 1/1;
    position: absolute;
  }

  & #body {
    width: 18.71894rem;
    height: 14.08725rem;
    position: absolute;
    z-index: 2;
    @media screen and (max-width: ${breakpoints.iPhone14ProMax
        .width}) and (max-height: ${breakpoints.iPhone14ProMax.height}) {
      width: 12.05231rem;
      height: 12.5rem;
      top: 50%;

      position: relative;
    }
  }
`
