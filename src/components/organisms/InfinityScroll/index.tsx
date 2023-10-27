import React, { useCallback, useEffect, useRef, useState } from 'react'

import { PageContainer } from './styles'

import AboutHeading from '@/components/molecules/AboutHeading'

interface InfinityScrollProps {
  initialPage: number
  onScrollChange: (scrollValue: number) => void
}

const InfiniteScroll: React.FC<InfinityScrollProps> = ({
  initialPage,
  onScrollChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [isLoading, setIsLoading] = useState(false)
  const [scroll, setScroll] = useState(0)
  const scrollDirectionRef = useRef(0)

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
    setScroll(scrollTop)
    onScrollChange(scrollTop)

    scrollDirectionRef.current = scrollTop

    if (windowHeight + scrollTop >= documentHeight) {
      loadMoreItems()
    }
  }, [isLoading, currentPage, loadMoreItems, onScrollChange])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <PageContainer id="page-container">
      <AboutHeading scrollDirection={scroll} />
      {isLoading && <div>Loading...</div>}
    </PageContainer>
  )
}

export default InfiniteScroll
