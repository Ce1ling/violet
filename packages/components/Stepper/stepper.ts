export interface StepperProps {
  modelValue: number
  disabled?: boolean
  step?: number
  max?: number
  min?: number
  toFixed?: number
  position?: 'normal' | 'left' | 'right'
  iconSize?: string
}

export interface StepperEmits {
  (e: 'update:modelValue', n: number): void
}

export type StepperAction = 'increment' | 'decrement'