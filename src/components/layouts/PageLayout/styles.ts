import { styled } from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'pages pages pages'
    'footer footer footer';
  grid-template-rows: 5.3125rem 1fr 4.37rem;
  grid-template-columns: 1fr;
  height: 100vh;
  width: 100%;
  margin: 0;

  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
    grid-template-areas:
      'header'
      'pages'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 8rem 1fr 2rem;
    height: 100vh;
    width: 100vw;
  }

  & #top-menu {
    grid-area: header;
    grid-row: 1;
  }
  & #pages {
    grid-area: pages;
    grid-row: 1/4;
    width: 100vw;
    height: 100vh;
}
  }

  & #footer {
    grid-area: footer;
    align-self: flex-end;
    width: 100vw;
    height: 3rem;
    border: 2px solid;
    z-index: 10;
    position: static;
    text-align: end;

  }
`
