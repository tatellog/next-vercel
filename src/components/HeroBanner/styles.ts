import styled from 'styled-components'

import colors from '@/theme/colors'

export const SlideContainer = styled.div<{
  $backgroundColor?: string
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
  text-align: center;
`
export const SlideContent = styled.div`
  text-align: center;
`

export const CustomContent = styled.div<{
  $color?: string
}>`
  .hero-slider-buttons-nav-container {
    height: 0.64rem;
  }

  .hero-slider-buttons-nav-button {
    height: 0.625rem;
    width: 2.625rem;
    border: ${({ $color }) => `2px solid ${$color}`};
    border-radius: 3.625rem;
    margin-right: 0.1875rem;
  }
  .hero-slider-next {
    display: none;
  }
  .hero-slider-previous {
    display: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  & h1 {
    width: 53.625rem;
  }
  & p {
    width: 41.625rem;
  }
`
export const Title = styled.h1`
  margin: 0 auto;
  padding: 0;
  color: ${colors.textBanner.wine};
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Stacion;
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`
export const Subtitle = styled.p`
  color: ${colors.blackLight};
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: GT Planar;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 1.5rem */
`
