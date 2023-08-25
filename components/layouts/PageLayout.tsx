import Head  from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../NavBar'
import styled from 'styled-components'


interface PageLayoutProps {
  children: JSX.Element
}

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display:flex;
  background-color: #f08080;
`



export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container >
      <Head>
        <title>Home - Tania Tello</title>
      </Head>
      <NavBar />
      <main>
        {children}
    
      </main> 
    </Container>
  )
}
