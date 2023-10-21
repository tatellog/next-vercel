import styled, { keyframes } from 'styled-components'

import { breakpoints } from '@/theme/constants'

const blink = keyframes`
0% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
50% {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 13.25rem;
  bottom: 8.75rem;
  left: 0;
  right: 0;
  width: 1em;
  height: 1em;
  margin: auto;
  z-index: 1;
  font-size: 82.93333333333334vmin;

  & .slide-1 {
    justify-content: center;

    & img {
      left: 16rem;
      display: flex;
      position: absolute;
      transform: rotate(15.819deg);
      @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
        width: 5.5rem;
        top: 3.5rem;
        left: 1.5rem;
      }
    }

    @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
      justify-content: flex-start;
    }
  }
`
export const BackgroundCircle = styled.div<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && $backgroundColor};
  position: absolute;
  width: 60.77777777777779vmin;
  height: 60.77777777777779vmin;
  aspect-ratio: 1;
  opacity: 0.3;
  margin: 0;
  border-radius: 50%;
  transform: translate(0px, 0px);
`

export const Attributes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: flex-start;
  width: 100%;
  height: 100%;

  & .sparkle-left-0 {
    left: -3rem;
    position: absolute;
    filter: drop-shadow(0px 2px gold);
    animation: ${blink} 1s infinite both;
  }

  & .sparkle-right-0 {
    filter: drop-shadow(0px 2px gold);
    position: absolute;
    bottom: -5rem;
    right: -10rem;
    animation: ${blink} 1s infinite both;
  }
`

export const StarRight = styled.div`
  display: flex;
  align-self: flex-end;
  @media screen and (max-width: 768px) {
    transform: rotate(-16.181deg);
    img {
      width: 2.375rem;
      height: 2.5625rem;
    }
  }
`

export const StarLeft = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    transform: rotate(-16.181deg);
    img {
      width: 2.375rem;
      height: 2.5625rem;
    }
  }
`

export const Illustrations = styled.div`
  display: flex;
  position: relative;
  & #primary-0 {
    display: none;
  }

  & #primary-2 {
    img {
      width: 12rem;
      top: 4.3rem;
      position: absolute;
      left: 17rem;
    }
    @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
      & img {
        position: absolute;
        width: 5.5rem;
        left: 2.5rem;
        top: 3.5rem;
      }
    }
  }

  & #secondary-0 {
    display: none;
  }

  & #secondary-1 {
    display: none;
  }
  & #secondary-2 {
    position: absolute;
    right: 4rem;
    top: -9rem;
    & img {
      width: 3.849rem;
      height: 5.28044rem;
    }
    @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
      display: none;
    }
  }

  & #secondary-3 {
    display: none;
  }
  & #primary-3 {
    display: none;
  }
`

export const Primary = styled.div``
export const Secondary = styled.div``
