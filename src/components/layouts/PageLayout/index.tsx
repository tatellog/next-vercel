import React, { FC } from 'react'

import { NavBar } from '../../NavBar'

import { Container } from './styles'

interface PageLayoutProps {
  children: JSX.Element
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <Container>
    <NavBar />
    <main>{children}</main>
  </Container>
)
