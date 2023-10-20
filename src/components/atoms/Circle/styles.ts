import styled from 'styled-components'

export const CircleContainer = styled.div`
  position: absolute;
  & div {
    position: relative;
  }
  & .medium-circle {
    width: 17.3125rem;
    height: 17.3125rem;
    left: 57rem;
    border-radius: 17.3125rem;
    transform: translate(100%, 122%);
  }

  & .small-circle {
    width: 7.1875rem;
    height: 7.1875rem;
    border-radius: 7.1875rem;
    background: #ede1e2;
    left: 57rem;
    transform: translate(100%, 38%);
  }
`
export const CircleBase = styled.div`
  width: 34.6875rem;
  height: 34.6875rem;
  border-radius: 34.6875rem;
  background: #f7eed5;
  transform: translate(-46%, 15%);
`
