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
    left: 22rem;
    top: 7rem;
  }
  &.star-primary-1 {
    align-self: flex-start;
  }
  &.star-primary-2 {
    align-self: flex-start;
    top: 17.5rem;
    left: 7rem;
    @media screen and (max-width: 768px) {
      top: 14rem;
      left: 3rem;
    }
  }
  &.star-primary-3 {
    display: none;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    & img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`

export const Primary = styled.div`
  &.primary-0 {
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    top: 6rem;
    right: 20rem;
    & img {
      width: 8rem;
      height: 8rem;
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

  &.primary-1 {
    transform: rotate(15.723deg);
    @media screen and (max-width: 768px) {
      & img {
        width: 7.5rem;
        height: 7rem;
      }
    }
  }

  &.primary-2 {
    position: absolute;
    top: 1rem;
    & img {
      width: 16.3rem;
      height: 9.45rem;
    }
    @media screen and (max-width: 768px) {
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
    transform: rotate(0deg);
    right: 8rem;
    bottom: 0.5rem;
    align-self: flex-end;
    & img {
      width: 3rem;
      height: 5rem;
    }
    @media screen and (max-width: 768px) {
      top: 14rem;
      left: 17.5rem;
      & img {
        width: 1.5rem;
        height: 2.5rem;
      }
    }
  }
  &.secondary-3 {
    display: none;
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
    @media screen and (max-width: 768px) {
      bottom: 5rem;
      right: 1.3rem;
    }
  }
  &.star-secondary-3 {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    & img {
      width: 1.8rem;
      height: 1.8rem;
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
  height: 80%;
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
    width: 298px;
    height: 60px;
    @media screen and (max-width: 768px) {
      width: 50%;
    }
  }

  &.slide-2 {
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 308px;
    @media screen and (max-width: 768px) {
      width: 98%;
      height: 34%;
    }
  }

  &.slide-3 {
    justify-content: center;
    align-items: flex-start;
    width: 90vh;
    height: 45vh;
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
`
