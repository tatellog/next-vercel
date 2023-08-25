import Head from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../NavBar'
import styled from 'styled-components'
import colors from '@/theme/colors'

interface PageLayoutProps {
  children: JSX.Element
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.home.main};
`

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
