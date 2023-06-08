export interface SelectOption {
  label: string
  value: string
  [k: string]: any
}

export interface SelectProps<T> {
  modelValue: SelectOption['value']
  options: T
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string): void
}