import React, { useCallback, useEffect, useState } from 'react'

interface InfinityScrollProps {
  pages: React.FC[]
  initialPage: number
}

const InfiniteScroll: React.FC<InfinityScrollProps> = ({
  pages,
  initialPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [isLoading, setIsLoading] = useState(false)
  const stopScroll = currentPage === pages.length - 1

  const loadMoreItems = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleScroll = useCallback(() => {
    if (isLoading || stopScroll) return

    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY

    if (windowHeight + scrollTop >= documentHeight) {
      loadMoreItems()
    }
  }, [isLoading, stopScroll, loadMoreItems])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const renderPages = pages
    .slice(0, currentPage + 1)
    .map((PageComponent, index) => <PageComponent key={index} />)

  return (
    <div>
      {renderPages}
      {isLoading && !stopScroll && <div>Loading...</div>}
      {!stopScroll ? (
        <div id="scroll-message">Scroll down to load more</div>
      ) : (
        <div id="end-message">Youve reached the end.</div>
      )}
    </div>
  )
}

export default InfiniteScroll
