import React from 'react'
import { useScroll, useTransform } from 'framer-motion'

import { CircleMedium, CircleSmall, ForegroundContainer } from './styles'

const Foreground = () => {
  //const scale = useTransform(scrollYProgress, [0, 400], [1, 1.6])
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 1.6])
  const y = useTransform(scrollY, [0, 350], ['50%', '15%'])
  const x = useTransform(scrollY, [0, 350], ['15%', '46%'])

  const circleStyle = {
    top: y,
    right: x,
    scale: scale,
  }

  return (
    <ForegroundContainer id="foreground">
      <CircleSmall style={circleStyle} />
      <CircleMedium />
    </ForegroundContainer>
  )
}
export default Foreground
