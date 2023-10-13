import styled from 'styled-components'

import colors from '@/theme/colors'

export const Button = styled.button<{ $active: boolean; $color: string }>`
  background-color: ${({ $color, $active }) =>
    $active ? $color : colors.blackLight};
  color: ${({ $active }) => ($active ? 'white' : colors.blackLight)};
  cursor: pointer;
  width: ${({ $active }) => ($active ? '3rem' : '0.5rem')};
  height: ${({ $active }) => ($active ? '0.625rem' : '0.85rem')};
  border-radius: 3.625rem;
  border: 1px solid black;
  border: ${({ $color, $active }) =>
    $active ? `1px solid  ${$color}` : `1px solid  ${colors.blackLight}`};
  @media screen and (max-width: 768px) {
    width: 1rem;
    height: 1rem;
    border: ${({ $color, $active }) =>
      $active ? `2px solid  ${$color}` : `2px solid  ${colors.blackLight}`};
  }
`
