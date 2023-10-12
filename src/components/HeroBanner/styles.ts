import styled, { keyframes } from 'styled-components'

const commonStyles = `
  text-align: center;
  font-family: Stacion;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
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
  justify-content: center;
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
  & img {
    width: 2.75rem;
    height: 2.75rem;
  }
  &.star-primary-0 {
    align-self: flex-start;
    left: 22rem;
    top: 14rem;
  }
  &.star-primary-1 {
    align-self: flex-start;
  }
  &.star-primary-2 {
    align-self: flex-start;
    top: 29rem;
    left: 6rem;
    @media screen and (max-width: 768px) {
      top: 22.5rem;
    }
  }
  &.star-primary-3 {
    top: 19.5rem;
    left: 5rem;
    animation: none;
    @media screen and (max-width: 768px) {
      left: -9rem !important;
      top: 8.5rem;
      & img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    & img {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Primary = styled.div`
  &.primary-0 {
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    top: 17rem;
    right: 17rem;
    & img {
      width: 7.375rem;
      height: 6.5625rem;
    }
    @media screen and (max-width: 768px) {
      position: initial;
      margin: 1rem;
      & img {
        width: 5.5rem;
        height: 5.5rem;
      }
    }
}
  }

  &.primary-1 {
    transform: rotate(15.723deg);
    width: 7.37rem;
    height: 6.56rem;
    & img {
      width: 8.5625rem;
      height: 7.5rem;
    }
    @media screen and (max-width: 768px) {
      & img {
        width: 7.5rem;
        height: 5.5rem;
      }
    }
  }
  &.primary-2 {
    position: absolute;
    top: 11rem;
    & img {
      width: 16.3rem;
      height: 9.45rem;
    }
    @media screen and (max-width: 768px) {
      top: 5rem;
      & img {
        width: 9.5rem;
        height: 6.5rem;
      }
    }
  }
  &.primary-3 {
    display: none;
  }
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

  position: absolute;
  ${commonStyles}
`

export const Secondary = styled(SecondaryBase)`
  &.secondary-0 {
    bottom: 10rem;
    left: 12rem;
    @media screen and (max-width: 768px) {
      position: initial;
      margin: 1rem;
      & img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
  &.secondary-1 {
    align-self: flex-start;
    display: none;
  }
  &.secondary-2 {
    filter: drop-shadow(-4px 4px 1px rgba(0, 0, 0, 0.1));
    transform: rotate(5deg);
    bottom: 25rem;
    right: 6rem;
    top: auto;
    left: auto;
    & img {
      width: 3.849rem;
      height: 5.28044rem;
    }
    @media screen and (max-width: 768px) {
      top: 22rem;
      & img {
        width: 1.5rem;
        height: 2.5rem;
      }
    }
  }
  &.secondary-3 {
    transform: rotate(0.77deg);
    top: 27.5rem;
    left: 43rem;
    & img {
      width: 1.5rem;
      height: 4.1875rem;
    }
    @media screen and (max-width: 768px) {
      left: 4.5rem;
      top: 23.5rem;
      align-self: center;

      & img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`

export const StarSecondary = styled(StarBase)`
  align-self: flex-end;
  & img {
    width: 2.75rem;
    height: 2.75rem;
  }
  &.star-secondary-0 {
    right: 17rem;
    bottom: 19rem;
    @media screen and (max-width: 768px) {
      left: 3rem;
      right: auto;
    }
  }
  &.star-secondary-2 {
    top: 21.5rem;
    @media screen and (max-width: 768px) {
      top: 7.5rem;
      right: 9rem;
    }
  }
  &.star-secondary-3 {
    top: 28rem;
    transform: rotate(180deg);
    animation: none;
    @media screen and (max-width: 768px) {
      left: 6rem;
      top: 23.5rem;
      & img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    & img {
      width: 1rem;
      height: 1rem;
    }
  }
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
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 63%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    border: 1px solid red;
  }
  &.slide-0 {
  }

  &.slide-1 {
    justify-content: center;
    align-items: center;
    width: 20rem;
    top: -12rem;
    @media screen and (max-width: 768px) {
      width: 11rem !important;
      top: -8.5rem;
    }
  }

  &.slide-2 {
    justify-content: center;
    align-items: center;
    width: 47rem;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }

  &.slide-3 {
    justify-content: center;
    align-items: flex-start;
    width: 47rem;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
`
