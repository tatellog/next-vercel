import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'

const ImageContainer = styled(motion.img)`
  width: 17.71894rem;
  height: 13.08725rem;
`

const BodyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const BodyFigure = () => {
  const scrollY = useMotionValue(0)
  const translateY = useTransform(scrollY, [0, 300], [80, -245])
  const scale = useTransform(scrollY, [0, 400], [1, 0.47])

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollY)
    return () => {
      window.removeEventListener('scroll', updateScrollY)
    }
  }, [])

  return (
    <BodyContainer id="body-image">
      <ImageContainer
        src="/images/svg/big-logo.svg"
        alt=""
        style={{
          x: 0,
          y: translateY,
          scale,
          translateZ: 0,
        }}
      />
    </BodyContainer>
  )
}

export default BodyFigure
