import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: 0.5rem;
  -moz-column-gap: 0rem;
  column-gap: 0rem;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
`
