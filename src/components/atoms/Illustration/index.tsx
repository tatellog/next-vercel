import React from 'react'
import Image from 'next/image'

import { IllustrationContainer } from './styles'

const Illustration: React.FC = () => (
  <IllustrationContainer>
    <Image
      id="spark-left"
      src={'/images/svg/sparks.svg'}
      alt={''}
      height={50}
      width={50}
    />
    <Image
      id="body"
      src={'/images/svg/big-logo.svg'}
      alt={''}
      height={100}
      width={100}
    />
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
