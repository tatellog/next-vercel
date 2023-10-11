import styled, { keyframes } from 'styled-components'

import colors from '@/theme/colors'

const commonStyles = `
  text-align: center;
  font-family: Stacion;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`

const absolutePosition = `
  position: absolute;
  ${commonStyles}
`
const commonSubtitleStyles = `
color: ${colors.blackLight};
text-align: center;
font-family: GT Planar;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 120%; 
`

export const SlideContainer = styled.div<{ $backgroundColor?: string }>`
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

export const CustomContent = styled.div<{ $color?: string }>`
  background-color: ${({ $color }) => $color};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const loader = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 180deg;
  }
`

export const StarBase = styled.div`
  flex-shrink: 0;
  position: absolute;
  ${commonStyles}
  animation: ${loader} 1.25s infinite;
`

export const StarPrimary = styled(StarBase)`
  align-self: flex-start;
  left: 22rem;
  top: 14rem;
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
  top: 17rem;
  right: 15rem;
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

export const SecondaryBase = styled.div`
  transform: rotate(15.723deg);
  flex-shrink: 0;
  top: 33.5rem;
  left: 10rem;
  position: absolute;
  ${commonStyles}
`

export const Secondary = styled(SecondaryBase)`
  align-self: flex-start;
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

export const StarSecondary = styled(StarBase)`
  transform: rotate(45deg);
  align-self: flex-end;
  right: 17rem;
  bottom: 19rem;
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 3rem;
    & img {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const TitleBase = styled.h1`
  margin: 0 auto;
  padding: 0;
  color: ${colors.textBanner.wine};
  ${commonStyles}
  font-size: 8rem;
  width: 53.625rem;
  white-space: break-spaces;
  @media screen and (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    font-family: Stacion;
    width: auto;
  }
`

export const Title = styled(TitleBase)``

export const TitleBackgroundBase = styled.h1`
  ${absolutePosition}
  color: ${colors.textBanner.wine};
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

export const TitleBackgroundFirst = styled(TitleBackgroundBase)`
  align-self: end;
`

export const TitleBackgroundLast = styled(TitleBackgroundBase)`
  align-self: start;
`

export const SubtitleBase = styled.p`
  ${commonSubtitleStyles}
  width: 41.625rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
    width: 80%;
  }
`

export const Subtitle = styled(SubtitleBase)``

export const SubtitleBackgroundBase = styled.p`
  ${absolutePosition}
  top: 40.5rem;
  opacity: 0.2;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 120%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
  }
`

export const SubtitleBackgroundFirst = styled(SubtitleBackgroundBase)`
  align-self: end;
`

export const SubtitleBackgroundLast = styled(SubtitleBackgroundBase)`
  align-self: start;
`
export const Slide = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NavigationButtons = styled.div`
  bottom: 4.12rem;
  position: absolute;
`

export const NavigationButton = styled.button`
  width: 2.625rem;
  height: 0.625rem;
  border-radius: 3.625rem;
  margin-left: 0.1875rem;
`
