import React from 'react'

import { AnimatedContainer, Logo, Subtitle, Title } from './styles'
import { SlideProps } from './types'

const Slide: React.FC<SlideProps> = ({
  text,
  subtitle,
  backgroundColor,
  id,
  index,
  smallSubtitle,
  animate,
}) => (
  <AnimatedContainer
    $backgroundColor={id === 'active-slide' ? backgroundColor : 'transparent'}
    id={id}
    $animate={id === 'active-slide' && animate}
  >
    <Title $prefix={index === 3 && id === 'active-slide'}>
      {index === 0 && id === 'active-slide' ? (
        <>
          {text.split('').map((char, i) => (
            <span
              key={i}
              style={{ opacity: char.toLowerCase() === 'o' ? 0.5 : 1 }}
            >
              {char}
            </span>
          ))}
          <Logo src="/images/svg/react.svg" alt="react-logo" />
        </>
      ) : (
        text
      )}
    </Title>
    <Subtitle className="normal-subtitle">{subtitle}</Subtitle>
    <Subtitle className="small-subtitle">{smallSubtitle}</Subtitle>
  </AnimatedContainer>
)

export default Slide
