import type { VNode, Ref } from 'vue'


export type TabsHeaderRefEl = HTMLElement | null

export type TabsHeaderNodes = {
  vNode: VNode,
  ref: Ref<TabsHeaderRefEl>
}[] | []