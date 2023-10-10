type Slide = {
  id: number
  backgroundColor: string
  color: string
  title: string
  subtitle: string
  images: {
    stars: string
    primary: string
    secondary?: string
  }
}

type NextSlide = {
  id: number
  backgroundColor: string
  color: string
  title: string
  subtitle: string
}

export interface SlideProps {
  slide: Slide
  nextSlideData: NextSlide
}

export default Slide
