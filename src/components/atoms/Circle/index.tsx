import React from 'react'

import { CircleBase, CircleContainer } from './styles'

interface CircleProps {
  name?: string
}

const Circle: React.FC<CircleProps> = ({ name }) => (
  <CircleContainer id="background-circle">
    <CircleBase className={name} />
  </CircleContainer>
)

export default Circle
