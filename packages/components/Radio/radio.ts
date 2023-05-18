export interface RadioProps {
  modelValue: string
  label: string
  disabled?: boolean
  border?: boolean
  isBtn?: boolean
}

export interface RadioEmits {
  (e: 'update:modelValue', label: string): void
}