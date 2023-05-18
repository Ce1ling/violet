export interface LinkProps {
  type?: 'primary' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  underline?: boolean
}
export interface LinkEmits {
  (e: 'click', event: MouseEvent): void
}