import { Dispatch } from 'react'

interface Slide {
  id: number
  color: string
  backgroundColor: string
  title: string
  subtitle: string
}

export type SetActiveSlideIndex = Dispatch<{
  type: 'SET_ACTIVE_SLIDE'
  payload: number
}>

export interface HeroBannerSliderProps {
  slides: Slide[]
  onSlideChange: (index: number) => void
}
