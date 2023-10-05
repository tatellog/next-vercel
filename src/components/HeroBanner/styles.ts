import styled from 'styled-components'

export const SlideContainer = styled.div<{
  $backgroundColor?: string
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
  text-align: center;
`
export const SlideContent = styled.div`
  text-align: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
`
export const TitleA = styled.h1`
  margin: 0 auto;
  padding: 0;
  text-transform: uppercase;
  width: 90%;
  text-align: center;
  font-size: 3.5rem;
`
export const Subtitle = styled.h2`
  margin: 24px auto 0;
  padding: 0;
  width: 80%;
  text-align: center;
  font-size: 1.75rem;
`
