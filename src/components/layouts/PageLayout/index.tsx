import React from 'react'

import { Container } from './styles'

import Footer from '@/components/organisms/Footer'
import TopMenu from '@/components/organisms/TopMenu'

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
