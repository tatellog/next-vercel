import React from 'react'

import { WaterMarkContainer, WaterMarkText } from './styles'

const WaterMark = () => {
  const waterMarkText = 'about me'
  return (
    <WaterMarkContainer id="water-mark">
      {waterMarkText.split('').map((char, i) => (
        <WaterMarkText key={i}>{char}</WaterMarkText>
      ))}
    </WaterMarkContainer>
  )
}

export default WaterMark
