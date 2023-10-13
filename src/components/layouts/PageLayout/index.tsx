import React from 'react'

import { Container } from './styles'

import TopMenu from '@/components/organisms/TopMenu'

interface PageLayoutProps {
  children: JSX.Element
  backgroundIndex?: number
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <Container id="main-layout">
    <TopMenu />
    <main>{children}</main>
  </Container>
)
