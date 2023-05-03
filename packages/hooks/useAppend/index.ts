import { h, render } from 'vue'

import type { DefineComponent, Component,  VNode } from 'vue'

type UseAppendResult = [
  append: () => void,
  remove: () => void
]

type Origin = DefineComponent | Component | VNode

type Target = HTMLElement

export interface UseAppend {
  (origin: Origin, target: Target): UseAppendResult
}

export interface UseAppendEmits {
  (e: 'useAppend:append'): void
  (e: 'useAppend:remove'): void
}

/**
 * 用于将一个 `Vue 组件的定义` 或 `VNode` 渲染到指定位置. 
 * 如果你想在被渲染的组件内部触发 `append` 或 `remove`, 请引入类型 `UseAppendEmits`. 
 * 之后你就可以看到 `useAppend` 所有的自定义事件了
 * @param {Origin} origin 待渲染的 `Vue 组件的定义` 或 `VNode`
 * @param {Target} target 渲染目标位置
 * @return 返回一个元组 `[append, remove]`. 调用 `append` 渲染, 调用 `remove` 移除.
 */
export const useAppend: UseAppend = (origin, target) => {
  const emits = {
    'onUseAppend:append': () => append(),
    'onUseAppend:remove': () => remove()
  }

  const toVNode = (node: Origin) => {
    return h((node as VNode), emits)
  }
  
  const append = () => {
    render(toVNode(origin), target)
  }

  const remove = () => {
    render(null, target)
  }

  return [append, remove]
}