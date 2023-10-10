import styled, { keyframes } from 'styled-components'

import colors from '@/theme/colors'

const commonStyles = `
  text-align: center;
  font-family: Stacion;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

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
  ${commonStyles}
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
  position: relative;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: -25%;
  }
`

const loader = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 180deg;
  }
`
export const StarPrimary = styled.div`
  flex-shrink: 0;
  stroke-width: 11px;
  position: absolute;
  align-self: flex-start;
  left: 22rem;
  top: 14rem;
  animation: ${loader} 1.25s infinite;
  @media screen and (max-width: 768px) {
    position: absolute;
    & img {
      width: 1rem;
      height: 1rem;
    }
  }
`
export const Primary = styled.div`
  width: 7.37rem;
  height: 6.56rem;
  align-self: flex-end;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  top: 16rem;
  right: 22rem;
  @media screen and (max-width: 768px) {
    align-self: center;
    top: 15rem;
    right: auto;
    width: auto;
    & img {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`
export const Secondary = styled.div`
  transform: rotate(15.723deg);
  flex-shrink: 0;
  align-self: flex-start;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  left: 16rem;
  bottom: 18rem;
  @media screen and (max-width: 768px) {
    left: auto;
    top: 35rem;
    align-self: center;

    & img {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`

export const StarSecondary = styled.div`
  transform: rotate(45deg);
  flex-shrink: 0;
  stroke-width: 11px;
  position: absolute;
  align-self: flex-end;
  right: 23rem;
  bottom: 19rem;
  animation: ${loader} 1.25s infinite;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 3rem;
    & img {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Title = styled.h1`
  margin: 0 auto;
  padding: 0;
  color: ${colors.textBanner.wine};
  ${commonStyles}
  font-size: 8rem;
  width: 43%;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    font-family: Stacion;
    width: auto;
  }
`
export const TitleBackgroundFirst = styled.h1`
  position: absolute;
  top: 19.5rem;
  align-self: end;
  z-index: -1;
  color: ${colors.textBanner.wine};
  font-size: 8rem;
  opacity: 0.2;
  ${commonStyles}
  @media screen and (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    font-family: Stacion;
    top: 20.5rem;
    width: auto;
  }
`
export const TitleBackgroundLast = styled.h1`
  position: absolute;
  top: 19.5rem;
  align-self: start;
  z-index: -1;
  color: ${colors.textBanner.wine};
  ${commonStyles}
  font-size: 8rem;
  opacity: 0.2;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    font-family: Stacion;
    top: 20.5rem;
    width: auto;
  }
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
  line-height: 120%;
  width: 41.625rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
    width: 80%;
  }
`

export const SubtitleBackgroundFirst = styled.p`
  position: absolute;
  top: 36.5rem;
  align-self: end;
  z-index: -1;
  opacity: 0.2;
  text-align: center;
  font-family: GT Planar;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
  }
`
export const SubtitleBackgroundLast = styled.p`
  position: absolute;
  top: 36.5rem;
  align-self: start;
  z-index: -1;
  opacity: 0.2;
  text-align: center;
  font-family: GT Planar;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
  }
`
