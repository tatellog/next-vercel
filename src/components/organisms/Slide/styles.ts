import styled from 'styled-components'

import colors from '@/theme/colors'

const commonStyles = `
  text-align: center;
  font-family: Stacion;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const TitleBase = styled.h1`
  color: ${colors.textBanner.wine};
  ${commonStyles}
  font-size: 8rem;
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

export const Title = styled(TitleBase)<{ $color?: boolean }>`
  &::before {
    content: '${({ $color }) => $color && '< '}';
    color: ${({ $color }) =>
      $color ? colors.main.primaryOrange : colors.textBanner.wine};
  }
  &::after {
    content: '${({ $color }) => $color && ' />'}';
    color: ${({ $color }) =>
      $color ? colors.main.primaryOrange : colors.textBanner.wine};
  }
`

export const SubtitleBase = styled.p`
  ${commonSubtitleStyles}
  white-space: pre-line;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
    width: 80%;
  }
`

export const Subtitle = styled(SubtitleBase)``
