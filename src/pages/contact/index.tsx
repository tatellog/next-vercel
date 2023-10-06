import React from 'react'
import Link from 'next/link'

import { PageLayout } from '@/components/layouts/PageLayout'

const ContactPage = () => (
  <PageLayout>
    <>
      <h1>Contact Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p>
        Get started by editing {''}
        <code>pages/ContactPage.tsx</code>
      </p>
    </>
  </PageLayout>
)
export default ContactPage
