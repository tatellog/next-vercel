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
  grid-auto-rows: 100%;
  grid-template-columns: ${({ $activeIndex }) =>
    `repeat(${$activeIndex + 1}, 100%)`};
  transform: ${({ $activeIndex }) => `translateX(-${$activeIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;
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
  border: 5px solid white;
`
