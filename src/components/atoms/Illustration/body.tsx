import { motion, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'

const ImageContainer = styled(motion.img)`
  width: 14.71894rem;
  height: 10.08725rem;
`

const BodyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const BodyFigure = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 0.5])
  const y = useTransform(scrollY, [0, 350], ['0%', '-123%'])

  return (
    <BodyContainer id="body-image">
      <ImageContainer
        src="/images/svg/big-logo.svg"
        alt=""
        style={{
          y: y,
          scale,
        }}
      />
    </BodyContainer>
  )
}

export default BodyFigure
