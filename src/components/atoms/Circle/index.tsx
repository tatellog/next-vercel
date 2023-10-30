import React from 'react'

import { CircleBase, CircleContainer } from './styles'

interface CircleProps {
  name?: string
  scroll: number
  prefix?: string
}

const Circle: React.FC<CircleProps> = ({ name, scroll, prefix }) => {
  const isActiveSmall = prefix === 'small' ? true : false

  const minSize = 7.1875
  const maxSize = 13.875

  const dynamicSize = Math.max(
    minSize,
    Math.min(maxSize, isActiveSmall ? 5 + Number(scroll) : minSize),
  )
  const styles = {
    transform: `translate3d(-${scroll / 1.0}px, -${scroll / 2}px, 0px)`,
    width: `${dynamicSize}rem`,
    height: `${dynamicSize}rem`,
    borderRadius: `${dynamicSize}rem`,
  }

  return (
    <CircleContainer id="background-circle">
      <CircleBase className={name ? name : 'base-circle'} style={styles} />
    </CircleContainer>
  )
}

export default Circle
