import Head from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../../NavBar'
import { Container } from './styles'

interface PageLayoutProps {
  children: JSX.Element
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Home - Tania Tello</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </Container>
  )
}
