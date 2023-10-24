import styled from 'styled-components'

export const CircleContainer = styled.div`
  opacity: 1;
  position: absolute;

  & .base-circle {
    transform: translate(-114%, 51%);
    font-size: 9.1875rem;
    position: relative;
  }
  & .medium-circle {
    width: 17.3125rem;
    height: 17.3125rem;
    left: 20rem;
    border-radius: 17.3125rem;
    transform: translate(100%, 145%);
    position: relative;
  }

  & .small-circle {
    position: relative;
    width: 7.1875rem;
    height: 7.1875rem;
    border-radius: 7.1875rem;
    background: #ede1e2;
    left: 26.5rem;
  }
`
export const CircleBase = styled.div`
  width: 34.6875rem;
  height: 34.6875rem;
  border-radius: 34.6875rem;
  background: #f7eed5;
`
