import type { VNode, VNodeArrayChildren } from 'vue'


export interface TabsProps {
  modelValue: string
  activeBgColor?: string
  bgColor?: string
  ifMode?: boolean
  removable?: boolean
  beforeChange?: (name: string) => boolean
}

export interface TabsEmits {
  (e: 'update:modelValue', val: string): void
  (e: 'tab-click', name: string, event: MouseEvent): void
  (e: 'tab-remove', name: string, event: MouseEvent): void
  (e: 'change', newVal: string, oldVal: string): void
}

export interface TabsSlots {
  default?: () => VNode[]
}

export type TabsRenderResult = VNodeArrayChildren | undefined