interface Images {
  primary?: string
  secondary?: string
  stars: string
}

interface HeroBannerSlide {
  current: any
  id: number
  title: string
  subtitle: string
  backgroundColor: string
  color: string
  images: Images
}

export interface HeroBannerSlideProps {
  currentSlide: HeroBannerSlide
  nextSlide: HeroBannerSlide
  index: number
}
