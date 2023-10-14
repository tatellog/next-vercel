interface Images {
  primary?: string
  secondary?: string
  stars?: string
}

interface Slide {
  id: number
  title: string
  subtitle: string
  backgroundColor: string
  color: string
  images: Images
}
export interface CarouselProps {
  slides: Slide[]
  autoplay: boolean
}
