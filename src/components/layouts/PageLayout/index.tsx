import React from 'react'

import { NavBar } from '../../NavBar'

import { Container } from './styles'

interface PageLayoutProps {
  children: JSX.Element
  backgroundIndex?: number
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  backgroundIndex,
}) => (
  <Container>
    <NavBar backgroundIndex={backgroundIndex} />
    <main>{children}</main>
  </Container>
)
