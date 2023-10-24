import React from 'react'
import Image from 'next/image'

import { IllustrationContainer, Line } from './styles'

const Illustration = () => (
  <IllustrationContainer>
    <Image
      id="spark-left"
      src={'/images/svg/sparks.svg'}
      alt={''}
      height={50}
      width={50}
    />
    <Image
      id="face"
      src={'/images/svg/simpleLogo.svg'}
      alt={''}
      height={100}
      width={100}
    />
    <Image
      id="body"
      src={'/images/svg/body-penguin.svg'}
      alt={''}
      height={150}
      width={150}
    />
    <Line />
    <Image
      id="spark-right"
      src={'/images/svg/sparks.svg'}
      alt={''}
      height={50}
      width={50}
    />
  </IllustrationContainer>
)

export default Illustration
