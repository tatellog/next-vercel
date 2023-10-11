import { styled } from 'styled-components'

import colors from '@/theme/colors'

export const TopMenuContainer = styled.nav<{
  $backgroundColor?: string
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem;
`

export const MenuOptions = styled.div`
  height: 1.56rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
  width: 21.18rem;
`

export const ContactButton = styled.button<{
  $backgroundColor?: string
}>`
  width: 8.125rem;
  height: 2.4375rem;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 2.25rem;
  border-color: transparent;
  text-align: center;
  font-family: GT Planar;
  font-size: 0.87rem;
  font-weight: 200;
  line-height: 1.5625rem;
  color: ${colors.blackLight};
  &:hover {
    background-color: ${colors.blackLight};
    color: ${colors.main.goldPink};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 1);
  }
`
