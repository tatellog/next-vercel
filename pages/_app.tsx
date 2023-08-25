import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import GlobalStyle from '@/theme/GlobalStyle'

type NextPageWithLayout = NextPage & {getLayout?: (pge: ReactElement) => ReactNode}

type AppPropsWithLayout = AppProps & {Component: NextPageWithLayout}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
