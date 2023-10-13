interface Images {
  stars?: string
  primary?: string
  secondary?: string
}

interface Slide {
  id: number
  title: string
  subtitle: string
  backgroundColor: string
  color: string
  images: Images
}
export interface HeroSliderProps {
  slides: Slide[]
  autoplay: boolean
}
