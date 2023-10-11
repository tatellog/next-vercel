import styled from 'styled-components'

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

export const TitleCenter = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  width: 100%;
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
    width: auto;
  }
`

export const TitleBackgroundFirst = styled(TitleBackgroundBase)`
  align-self: end;
`
export const TitleBackgroundLast = styled(TitleBackgroundBase)`
  align-self: start;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex-basis: 200px;
`
export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex-basis: 200px;
`
export const SubtitleCenter = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  width: 100%;
  position: absolute;
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
  align-items: center;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 10rem;
  }
`
