import React from 'react'

import { Container } from './styles'

import TopMenu from '@/components/organisms/TopMenu'
import Footer from '@/components/organisms/Footer'

interface PageLayoutProps {
  children: JSX.Element
  backgroundIndex?: number
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <Container id="main-layout">
    <TopMenu />
    <main id="pages">{children}</main>
    <Footer />
  </Container>
)
