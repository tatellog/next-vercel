import { Dispatch } from 'react'

export interface Slide {
  id: number
  color: string
  backgroundColor: string
  title: string
  subtitle: string
  images: Images
}

interface Images {
  stars: string
  primary?: string
  secondary?: string
}

export type SetActiveSlideIndex = Dispatch<{
  type: 'SET_ACTIVE_SLIDE'
  payload: number
}>

export interface HeroBannerSliderProps {
  slides: Slide[]
  onSlideChange: (index: number) => void
  autoplay: boolean
}
