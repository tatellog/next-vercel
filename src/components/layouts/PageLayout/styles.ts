import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5.3125rem 1fr 4.37rem;
  grid-template-columns: 20% 1fr 15%;
  height: 100vh;
  width: 100%;
  margin: 0;

  & #top-menu {
    grid-row: 1;
    grid-column: 1/4;
  }
  & #pages {
    grid-row: 1;
    grid-column: 1/4;
    height: 100vh;
  }

  & #footer {
    grid-row: 3;
    grid-column: 1/4;
    position: fixed;
    place-self: flex-end;
  }
`
