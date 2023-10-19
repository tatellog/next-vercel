import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const HeroSliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
`
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
    grid-template-rows: 90% 10%;
    grid-template-columns: 1fr;
  }

  & .small-subtitle {
    display: none;
  }

  & #slide-control {
    grid-area: control;
    grid-row: 2;
    width: 100%;
    height: auto;
    position: static;
    align-self: flex-start;
    z-index: 99;
  }

  & #active-slide {
    grid-area: active;
    position: absolute;
    z-index: 0;
    overflow: auto;
    width: 100%;
    height: 100vh;

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
      display: none;
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
      display: none;
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
  align-items: center;
  justify-content: center;
`
