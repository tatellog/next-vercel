import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  border-style: solid;
  grid-template-rows: 7.31rem 1fr;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    grid-template-rows: 10.31rem 1fr;
  }
`
