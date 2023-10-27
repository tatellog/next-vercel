import React from 'react'
import Image from 'next/image'

import { IllustrationContainer, Line } from './styles'

interface IllustrationProps {
  scroll: number
}

const Illustration: React.FC<IllustrationProps> = ({ scroll }) => {
  const minSizeFace = 5.5
  const maxSizeFace = 9.15431

  const minSizeBody = 11.5
  const maxSizeBody = 19.71894
  const maxTop = 6.33
  const minTop = 3.6
  const maxLine = 21.73819
  const minLine = 16.7

  const dynamicSizeFace = Math.max(minSizeFace, maxSizeFace - scroll / 20)
  const dynamicSizeBody = Math.max(minSizeBody, maxSizeBody - scroll / 10)
  const dynamicTop = Math.max(minTop, maxTop - scroll / 20)
  const dynamicLine = Math.max(minLine, maxLine - scroll / 20)
  const initialTransformBody = 36
  const initialTransformY = 116
  const dynamicLineY = Math.max(
    initialTransformBody,
    initialTransformY - scroll / 20,
  )

  const stylesF = {
    transform: `translate3d(0px, ${
      -scroll / 1.5 + initialTransformBody
    }px, 0px)`,
    width: `${dynamicSizeFace}rem`,
    height: `${dynamicSizeFace}rem`,
  }

  const stylesB = {
    top: `-${dynamicTop}rem`,
    transform: `translate3d(0px, ${
      -scroll / 1.5 + initialTransformBody
    }px, 0px)`,
    width: `${dynamicSizeBody}rem`,
    height: `${dynamicSizeBody}rem`,
  }

  const stylesLine = {
    transform: `translate3d(0px, ${-scroll / 1.5 + dynamicLineY}px, 0px)`,
    width: `${dynamicLine}rem`,
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
        id="face"
        src={'/images/svg/simpleLogo.svg'}
        alt={''}
        height={100}
        width={100}
        style={stylesF}
      />
      <Image
        id="body"
        src={'/images/svg/body-penguin.svg'}
        alt={''}
        height={150}
        width={150}
        style={stylesB}
      />
      <Line style={stylesLine} />
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
