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
    grid-template-rows: 5.3125rem 1fr 4.37rem;
    grid-template-columns: 1fr;
  }

  & #top-menu {
    grid-area: header;
    grid-row: 1;
  }
  & #pages {
    grid-area: pages;
    grid-row: 1;
    grid-column: 1;
    height: 100vh;
  }

  & #footer {
    grid-area: footer;
    grid-row: 3;
    grid-column: 1;
    position: fixed;
    place-self: flex-end;
  }
`
