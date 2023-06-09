import { SelectOption } from '../select'

import type { Ref } from 'vue'

export interface OptionsProps {
  show: boolean
  options: SelectOption[]
}

export interface OptionsExpose {
  optionsEl: Ref<HTMLElement | null>
}