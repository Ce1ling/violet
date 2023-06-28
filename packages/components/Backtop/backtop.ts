export interface BacktopProps {
  showHeight?: number
  hideWidth?: number
  right?: number
  bottom?: number
  zIndex?: number
  round?: boolean
  shadowColor?: string
  bgColor?: string
  normal?: boolean
}

export interface BacktopSlots {
  default?: (props: {}) => any
}