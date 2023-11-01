import styled from 'styled-components'

import colors from '@/theme/colors'

export const ParallaxSectionWrapper = styled.div`
  background-color: ${colors.main.secondaryPink};
  position: relative;
  width: 100%;
  height: 100vh;
  & .section {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .section-1 {
    height: 280vh;
    z-index: 1;
  }
`
