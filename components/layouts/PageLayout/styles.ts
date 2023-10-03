import { styled } from 'styled-components'
import colors from '@/theme/colors'

export const Container = styled.div`
  display: grid;
  border-style: solid;
  border-color: red;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
`
