import styled, { css, keyframes } from 'styled-components'

import colors from '@/theme/colors'

export const focusContract = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(12px);
    filter: blur(0);
    opacity: 1;
  }
`

export const SlideContainer = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* Define the animation */
  animation: none; /* Initially, no animation */
  transition: ease; /* Add a transition effect for opacity */
  opacity: 1;
  letter-spacing: 0.05em; /* Adjust as needed */
  /* Other existing styles */
`

export const AnimatedContainer = styled(SlideContainer)<{ $animate: boolean }>`
  animation: ${({ $animate }) =>
      $animate
        ? css`
            ${focusContract}
          `
        : 'none'}
    1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`
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
  height: 3rem;
  @media screen and (max-width: 768px) {
    height: 2.5rem;
  }
`

export const TitleBase = styled.h1`
  margin: 0 auto;
  padding: 0;
  color: ${colors.textBanner.wine};
  ${commonStyles}
  font-size: 8rem;
  white-space: break-spaces;
  height: 15.8rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 3.8rem;
    height: 7rem;
  }
`

export const Title = styled(TitleBase)<{ $prefix?: boolean }>`
  &::before {
    content: ${({ $prefix }) => $prefix && "'<'"};
    color: ${({ $prefix }) => $prefix && colors.main.primaryOrange};
  }

  &::after {
    content: ${({ $prefix }) => ($prefix ? "'/>'" : '')};
    color: ${({ $prefix }) => $prefix && colors.main.primaryOrange};
  }
`

export const SubtitleBase = styled.p`
  ${commonSubtitleStyles}
  white-space: initial;
  width: 45rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-family: GT Planar;
    width: 80%;
  }
`

export const Subtitle = styled(SubtitleBase)``
