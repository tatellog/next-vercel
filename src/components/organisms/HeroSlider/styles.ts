import styled from 'styled-components'

export const HeroSliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 20px;
`
export const SlideWrapper = styled.div<{ $activeIndex: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 20% 1fr 20%;
  grid-gap: 10px;
  height: 100vh;
  width: 100%;
  & .small-subtitle {
    display: none;
  }

  & #slide-control {
    grid-row: 3;
    grid-column: 1/4;
  }

  & #active-slide {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    position: fixed;
    height: 100%;
    width: 100%;
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
    z-index: 99;
    grid-row: 1/3;
    grid-column: 1/3;
    opacity: 0.2;
    width: 25%;
    & h1 {
      overflow: hidden;
      direction: rtl;
      width: 100%;
    }

    & p {
      direction: rtl;
      overflow: hidden;
    }
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }

  & #next-slide {
    z-index: 99;
    grid-row: 1 / 3;
    grid-column: 3 / 3;
    opacity: 0.2;
    & h1 {
      overflow: hidden;
      direction: ltr;
      width: 100%;
    }

    & p {
      direction: ltr;
      overflow: hidden;
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
  gap: 0.1875rem;
  place-self: center;
  width: auto;
  position: fixed;
  height: 3rem;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 3rem;
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
  font-size: 82.93333333333334vmin;
  @media screen and (max-width: 768px) {
    z-index: 1;
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
export const Ilustrations = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
