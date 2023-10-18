import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const HeroSliderContainer = styled.div``
export const SlideWrapper = styled.div<{ $activeIndex: number }>`
  display: grid;
  grid-template-areas:
    'prev active next'
    'control control control';
  grid-template-rows: 1fr 70px;
  grid-template-columns: 20% 1fr 20%;
  grid-gap: 10px;
  height: 100vh;
  margin: 0;

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
    grid-template-areas:
      'active'
      'control';
    grid-template-rows: 1fr 70px;
    grid-template-columns: 1fr;
  }

  & .small-subtitle {
    display: none;
  }

  & #slide-control {
    grid-area: control;
  }

  & #active-slide {
    grid-area: active;
    position: absolute;
    z-index: 0;
    overflow: auto;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
      & .normal-subtitle {
        display: none;
      }

      & p {
        text-align: end;
      }
      & h1 {
        text-align: end;
      }
    }
  }

  & #prev-slide {
    z-index: 1;
    grid-area: prev;
    opacity: 0.2;

    & h1 {
      overflow: hidden;
      direction: rtl;
      width: 100%;
    }

    & p {
      direction: rtl;
      overflow: hidden;
      width: auto;
    }
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }

  & #next-slide {
    z-index: 1;
    grid-area: next;
    opacity: 0.2;
    & h1 {
      overflow: hidden;
      direction: ltr;
      width: 100%;
    }

    & p {
      direction: ltr;
      overflow: hidden;
      width: auto;
    }
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }

  & #inactive {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & .small-subtitle {
      display: block;
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  place-self: center;
  width: auto;
  position: fixed;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 3rem;
  z-index: 3;
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
    justify-content: flex-end;

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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 110%;
  height: 110%;
  position: fixed;
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

export const Ilustrations = styled.div`
  display: flex;
  position: relative;
  & #primary-0 {
    display: none;
  }

  & #secondary-0 {
    display: none;
  }

  & #secondary-1 {
    display: none;
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
