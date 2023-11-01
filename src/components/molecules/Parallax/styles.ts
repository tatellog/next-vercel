import styled from 'styled-components'

import colors from '@/theme/colors'

export const ParallaxSectionWrapper = styled.div`
  background-color: ${colors.main.secondaryPink};
  position: relative;
  width: 100%;
  height: 300vh;
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
    height: 100vh;
    z-index: 1;
  }

  /* Styles for the second section */
  & .section-2 {
    height: 100vh;
    z-index: 2;
  }

  /* Styles for the third section */
  & .section-3 {
    height: 100vh;
    z-index: 3;
  }
`
