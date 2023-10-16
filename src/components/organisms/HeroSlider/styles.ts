import styled from 'styled-components'

export const HeroSliderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  height: 100vh;
`
export const SlideWrapper = styled.div<{ $activeIndex: number }>`
  display: grid;
  grid-template-rows: 1fr 70px;
  grid-template-columns: 20% 1fr 15%;
  grid-gap: 10px;
  height: 100vh;

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
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    z-index: 99;
    opacity: 0.2;
  }

  & #next-slide {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
    z-index: 99;
    opacity: 0.2;
    width: max-content;
  }
  & #inactive {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.1875rem;
  place-self: center;
  position: fixed;
  bottom: 3.5rem;
  width: 17.3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
`
