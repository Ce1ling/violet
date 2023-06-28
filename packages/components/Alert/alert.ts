export enum AlertPrefixIcon {
  'primary' = 'CheckCircleFill',
  'success' = 'CheckCircleFill',
  'info' = 'InfoCircleFill',
  'warning' = 'WarningCircleFill',
  'danger' = 'CloseCircleFill'
}

export interface AlertProps {
  type?: keyof typeof AlertPrefixIcon
  dark?: boolean
  closable?: boolean
  preIcon?: boolean | string
  center?: 'none' | 'text' | 'all'
  title?: string
  content?: string
}

export interface AlertEmits {
  (e: 'close', event: MouseEvent): void
}

export interface AlertSlots {
  default?: (props: {}) => any
  close?: (props: {}) => any
}