import { styled } from 'styled-components'

import colors from '@/theme/colors'

export const LinkContainer = styled.div`
  width: 35%;
  text-align: center;
  & a {
    color: ${colors.blackLight};
    font-size: 0.75rem;
  }
`
