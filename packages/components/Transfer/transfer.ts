export interface TransferItem {
  id: string
  label: string
  checked: boolean
  disabled: boolean
  [k: string]: any
}

type TransferTitles = [string, string]

export interface TransferProps<T> {
  modelValue: string
  list: T
  showTotal?: boolean
  titles?: TransferTitles
}

type TransferPropsDefaultsRest<T> = Omit<TransferProps<T>, 'modelValue' | 'list' | 'titles'>

export interface TransferPropsDefaults<T> extends TransferPropsDefaultsRest<T> {
  titles: () => TransferTitles
}

export type TransferActionType = 'left' | 'right'

export interface TransferContainerProps<T> {
  title: string
  type: TransferActionType
  list: T
}