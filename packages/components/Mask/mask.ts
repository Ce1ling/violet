export interface MaskProps {
  visible: boolean
  disabled?: boolean
  zIndex?: number
}

export interface MaskSlots {
  default?: (props: {}) => any
}