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
  }

  & #prev-slide {
    grid-row: 1/3;
    grid-column: 1/3;
    z-index: 99;
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
  }

  & #next-slide {
    grid-row: 1 / 3;
    grid-column: 3 / 3;
    z-index: 99;
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
  }
  & #inactive {
    display: none;
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
