import { styled } from 'styled-components'

import colors from '@/theme/colors'

export const LinkContainer = styled.div`
  text-align: center;
  & a {
    color: ${colors.blackLight};
    font-size: 0.75rem;
    font-family: GT Planar;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
  }
`
