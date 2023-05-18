export interface RadioGroupProps {
  modelValue: string
  isButton?: boolean
  border?: boolean
  gap?: string
}

export interface RadioGroupEmits {
  (e: 'update:modelValue', label: string): void
}