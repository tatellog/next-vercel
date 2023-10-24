import React, { useCallback, useEffect, useState } from 'react'

import { PageContainer } from './styles'

import AboutHeading from '@/components/molecules/AboutHeading'

interface InfinityScrollProps {
  initialPage: number
}

const InfiniteScroll: React.FC<InfinityScrollProps> = ({ initialPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreItems = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleScroll = useCallback(() => {
    if (isLoading) return

    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY

    if (windowHeight + scrollTop >= documentHeight) {
      loadMoreItems()
    }
  }, [isLoading, currentPage, loadMoreItems])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <PageContainer id="page-container">
      <AboutHeading />
      {isLoading && <div>Loading...</div>}
    </PageContainer>
  )
}

export default InfiniteScroll
