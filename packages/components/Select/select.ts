export interface SelectOption {
  label: string
  value: string
  [k: string]: any
}

export type SelectModelValue = SelectOption['value'] | SelectOption['value'][]

export interface SelectProps<T> {
  modelValue: SelectModelValue
  options: T
  disabled?: boolean
  clearable?: boolean
  multiple?: boolean
  max?: number
  optionsKey?: string
}

export interface SelectEmits {
  (e: 'update:modelValue', value: SelectModelValue): void
}

export type SelectPropsDefaults<T> = Omit<SelectProps<T>, 'modelValue' | 'options'>