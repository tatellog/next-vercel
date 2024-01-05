import { motion } from 'framer-motion'
import styled from 'styled-components'

import colors from '@/theme/colors'

export const AboutPageContainer = styled.div`
  background: ${colors.main.secondaryPink};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  & #foreground-shapes {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 99%;
    height: 100vh;
  }
`

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.main.secondaryPink};

  .progress {
    position: sticky;
    top: 0;
    width: 80px;
    height: 80px;
    margin: 0;
    padding: 0;
  }

  .progress svg {
    transform: translateX(-100px) rotate(-90deg);
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 5%;
    fill: none;
  }

  .bg {
    stroke: #fe0222;
    opacity: 0.2;
  }

  .progress .indicator {
    stroke: #fe0222;
  }
`
export const BoxContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 2px dotted #fe0222;
  position: relative;
`
export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #3b6fe0;
  border-radius: 20px;
`

export const Square = styled(motion.div)`
  width: '50px';
  height: '50px';
  border-radius: '50%';
  background-color: #fe0222;
  position: 'relative';
`
