import React from 'react'

import { Button } from './styles'
import { SliderButtonProps } from './types'

const SliderButton: React.FC<SliderButtonProps> = ({
  active,
  onClick,
  color,
}) => <Button $active={active} onClick={onClick} $color={color} />

export default SliderButton
