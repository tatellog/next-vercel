import Head  from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../NavBar'
import styles from './Layouts.module.css'

interface MainLayoutProps {
  children: JSX.Element
}


export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Tania Tello</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        {children}
    
      </main> 
    </div>
  )
}
