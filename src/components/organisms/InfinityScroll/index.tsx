import { useEffect, useState } from 'react'

import Item from './Item'

const InfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreItems = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1)
      setIsLoading(false)
    }, 1000)
  }

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY

    if (windowHeight + scrollTop >= documentHeight && !isLoading) {
      loadMoreItems()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading])
  return (
    <div>
      {Array.from({ length: currentPage }).map((_, index) => (
        <Item key={index} index={index} />
      ))}
      {isLoading && <div>Loading...</div>}
      {currentPage < 100 && (
        <div id="scroll-message">Scroll down to load more</div>
      )}
    </div>
  )
}

export default InfiniteScroll
