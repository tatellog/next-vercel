import React from 'react'

import { PageLayout } from '@/components/layouts/PageLayout'
import AboutContent from '@/components/molecules/AboutContent'
import AboutFront from '@/components/molecules/AboutFront'
import AboutSkills from '@/components/molecules/AboutSkills'
import InfiniteScroll from '@/components/organisms/InfinityScroll'

const pages = [AboutContent, AboutFront, AboutSkills]

const AboutPage = () => (
  <PageLayout>
    <div>
      <InfiniteScroll pages={pages} initialPage={0} />
    </div>
  </PageLayout>
)
export default AboutPage
