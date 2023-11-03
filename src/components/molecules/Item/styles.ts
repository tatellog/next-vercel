import styled from 'styled-components'

export const SectionContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 200px;
    height: 300px;
    border: 2px dotted red;
    position: relative;

    & .progress {
      & svg {
        transform: translateX(-100px) rotate(-90deg);
        & .bg {
          stroke: var(--accent);
          opacity: 0.2;
        }
        & circle {
          stroke-dashoffset: 0;
          stroke-width: 5%;
          fill: none;
        }
        & .indicator {
          stroke: red;
        }
      }
    }

    & .progress {
      stroke: red;
    }
    & .progress {
      position: sticky;
      top: 0;
      width: 80px;
      height: 80px;
      margin: 0;
      padding: 0;
    }
  }
`
