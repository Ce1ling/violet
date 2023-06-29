export interface DividerProps {
  margin?: string
  thick?: string
  color?: string
  borderStyle?: string
  position?: 'start' | 'center' | 'end'
  direction?: 'vertical' | 'horizontal'
}

export interface DividerSlots {
  default?: (props: {}) => any
}