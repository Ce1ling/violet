export interface TransferItem {
  id: string
  label: string
  checked: boolean
  disabled: boolean
  [k: string]: any
}

export interface TransferProps<T> {
  modelValue: string
  list: T
}

export type TransferActionType = 'left' | 'right'

export interface TransferContainerProps<T> {
  title: string
  type: TransferActionType
  list: T
}