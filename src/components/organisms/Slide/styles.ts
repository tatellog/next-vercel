import styled from 'styled-components'

import { breakpoints } from '@/theme/constants'

export const SlideContainer = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    color: white;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
  }
`
