interface Images {
  primary?: string
  secondary?: string
  stars?: string
}

export interface Slide {
  id: number
  title: string
  subtitle: string
  smallSubtitle: string
  backgroundColor: string
  color: string
  images: Images
}
export interface CarouselProps {
  slides: Slide[]
  autoplay: boolean
  activeIndex: number
  setActiveIndex: (index: number) => void
}
