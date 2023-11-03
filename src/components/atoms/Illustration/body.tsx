import { useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'

const ImageContainer = styled(motion.img)`
  position: fixed;
  width: 18.71894rem;
  height: 14.08725rem;
  right: 41%;
`

const BodyFigure = () => {
  const scrollY = useMotionValue(0)
  const translateY = useTransform(scrollY, [0, 300], [80, -245])
  const scale = useTransform(scrollY, [0, 400], [1, 0.67])

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
  )
}

export default BodyFigure
