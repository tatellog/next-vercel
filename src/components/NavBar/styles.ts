import { styled } from 'styled-components'

import colors from '@/theme/colors'

export const NavBarContainer = styled.nav<{
  $backgroundColor?: string
}>`
  display: flex;
  flex-direction: row;
  height: 3.75rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 1.563rem;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`

export const NavBarItems = styled.div`
  display: flex;
  width: 30%;
`

export const Icon = styled.div`
  margin-left: 1.75rem;
`

export const ReachOutButton = styled.button`
  width: 7.188rem;
  height: 2.188rem;
  padding-top: 0.313rem;
  padding-bottom: 0.313rem;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.main.goldPink};
  border-radius: 2.25rem;
  border-color: transparent;
  margin-right: 1.75rem;
  font-size: 0.75rem;
  &:hover {
    background-color: ${colors.grays.editorHover};
    color: ${colors.main.goldPink};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 1);
  }
`
