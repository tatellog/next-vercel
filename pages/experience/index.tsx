import Link from 'next/link'
import { PageLayout } from '@/components/layouts/PageLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout/DarkLayout'
import { ReactElement } from 'react'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing {''}
        <code className={'code'}>pages/AboutPage.tsx</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <PageLayout>
      <DarkLayout>{page}</DarkLayout>
    </PageLayout>
  )
}
