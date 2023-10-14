import styled from 'styled-components'

export const SlideContainer = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: black;
  }
  p {
    color: black;
  }
`
