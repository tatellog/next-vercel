import Link from 'next/link'
import { PageLayout } from '@/components/layouts/PageLayout'


export default function ContactPage() {
  return (
    <PageLayout>
        <>
          <h1 >Contact Page</h1>
          <h1 className={'title'}>
            Ir a <Link href='/'>Home</Link>
          </h1>
        
          <p className={'description'}>
            Get started by editing {''}
            <code className={'code'}>pages/ContactPage.tsx</code>
          </p>
        </>
    </PageLayout>
  )
} 
 