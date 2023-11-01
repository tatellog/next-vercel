import styled from 'styled-components'

export const Shapes = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  align-content: center;
  justify-content: center;
  place-content: center;
`

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: 0.5rem;
  -moz-column-gap: 0rem;
  column-gap: 0rem;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
`
