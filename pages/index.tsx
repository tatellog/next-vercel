import Link from 'next/link'
import { PageLayout } from '@/components/layouts/PageLayout'

export default function HomePage() {
  return (
    <PageLayout>
        <>
          <h1 >Home Page</h1>
          <h1>
            Ir a <Link href='/about'>About</Link>
          </h1>
        
          <p>
            Get started by editing {''}
            <code>pages/HomePage.tsx</code>
          </p>
        </>
    </PageLayout>
  )
} 
  