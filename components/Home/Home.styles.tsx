import { styled, keyframes } from 'styled-components'
import colors from '@/theme/colors'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.home.main};
  justify-content: center;
  letter-spacing: 0.1em;
`
const rotateslide = keyframes`   
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 0 0;
  }
  26% {
    background-position: 20px -20px;
  }
  50% {
    background-position: 20px -20px;
  }
  51% {
    background-position: 40px -40px;
  }
  75% {
    background-position: 40px -40px;
  }
  76% {
    background-position: 60px -60px;
  }
  99% {
    background-position: 60px -60px;
  }
  100% {
    background-position: 0 0;
  }
`
export const SubHeader = styled.div`
  width: 50%;
  height: 50%;
`

export const Title = styled.h1`
  text-align: justify;
  font-size: 6rem;
  font-family: 'Cabin Sketch', cursive;
  color: ${colors.neutrals.white};
  font-weight: bold;
  background: url('./repeat-white.png') center repeat;
  animation: ${rotateslide} 0.25s linear forwards infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 50%;
  width: 100%;
`

export const SubTitle = styled.p`
  font-size: 2rem;
  text-align: justify;
  color: ${colors.neutrals.white};
  font-family:
    Source Sans 3,
    sans-serif;
  font-weight: 800;
`
export const LinkedWord = styled.span`
  color: ${colors.home.linkedWord};
`
