import React from 'react'
import Image from 'next/image'

import { IllustrationContainer } from './styles'

interface IllustrationProps {
  scroll: number
}

const Illustration: React.FC<IllustrationProps> = ({ scroll }) => {
  const minSizeBody = 11.5
  const maxSizeBody = 19.71894

  const dynamicSizeBody = Math.max(minSizeBody, maxSizeBody - scroll / 10)
  const initialTransformBody = 36

  const stylesB = {
    transform: `translate3d(0px, ${
      -scroll / 1.5 + initialTransformBody
    }px, 0px)`,
    width: `${dynamicSizeBody}rem`,
    height: `${dynamicSizeBody}rem`,
  }

  return (
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
        height={200}
        width={200}
        style={stylesB}
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
}

export default Illustration
