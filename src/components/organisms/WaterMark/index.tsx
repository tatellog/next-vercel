import React from 'react'

import { WaterMarkContainer, WaterMarkText } from './styles'

const WaterMark = () => {
  const waterMarkText = 'about me'
  return (
    <WaterMarkContainer>
      {waterMarkText.split('').map((char, i) => (
        <WaterMarkText key={i}>{char}</WaterMarkText>
      ))}
    </WaterMarkContainer>
  )
}

export default WaterMark
