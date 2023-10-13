interface Slide {
  text: string
  subtitle: string
  backgroundColor: string
}
export interface CarouselProps {
  slides: Slide[]
  autoplay: boolean
}
