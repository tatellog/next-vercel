import Link from 'next/link'
import { PageLayout } from '@/components/layouts/PageLayout'


export default function PricingPage() {
  return (
    <PageLayout>
        <>
          <h1 >Pricing Page</h1>
          <h1 className={'title'}>
            Ir a <Link href='/'>Home</Link>
          </h1>
        
          <p className={'description'}>
            Get started by editing {''}
            <code className={'code'}>pages/PricingPage.tsx</code>
          </p>
        </>
    </PageLayout>
  )
} 