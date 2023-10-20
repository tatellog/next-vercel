import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`
export const HintWrapper = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  & span {
    position: absolute;
    z-index: 1;
    bottom: 2.75rem;
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
    animation: ${slideIn} 1s forwards;
    left: 50%;
  }
`

export const TitleHint = styled.span`
  color: rgba(46, 68, 88, 0.5);
  font-family: Stacion;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 1;
`
