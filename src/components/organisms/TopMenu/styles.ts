import styled from 'styled-components'

import colors from '@/theme/colors'
import { breakpoints } from '@/theme/constants'

export const ReachOutButton = styled.button<{
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

export const TopMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 5.31rem;
  gap: 0.625rem;
  transition: filter 0.5s ease;
  @media screen and (max-width: ${breakpoints.mobile.width}) {
    flex-direction: column;
    height: 8rem;
    padding: 0.7rem 0;
  }
`

export const MenuOptions = styled.div<{
  $color?: string
}>`
  display: flex;
  flex-direction: column;
  gap: 5.0625rem;
  width: 35.2rem;
  height: 2.2875rem;
  flex-wrap: wrap;
  text-align: center;
  & a:first-of-type {
    display: none;
  }
  & a {
    font-size: 0.87rem;
  }

  ${({ $color }) =>
    $color &&
    `
    text-align: center;
    
    & a {
      border-radius: 2.1875rem;
      width: 6.81rem;
      height: 2.19rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
  `}
  @media screen and (max-width: ${breakpoints.iPhone14ProMax.width}) {
    justify-content: center;
    gap: 3.0625rem;
    width: 21.5rem;
    display: flex;
    flex-direction: column;
    height: 6rem;
    & a {
      width: 4.5rem;
    }
  }
`
