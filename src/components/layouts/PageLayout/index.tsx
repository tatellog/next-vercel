import React from 'react'

import { Container } from './styles'

import Footer from '@/components/organisms/Footer'
import TopMenu from '@/components/organisms/TopMenu'

interface PageLayoutProps {
  children: JSX.Element
  activeIndex?: number
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  activeIndex,
}) => (
  <Container id="main-layout">
    <TopMenu activeIndex={activeIndex} />
    <main id="pages">{children}</main>
    <Footer />
  </Container>
)
