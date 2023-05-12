import { h, render, ref, onMounted } from 'vue'

import type { DefineComponent, Component,  VNode } from 'vue'

type UseAppendResult = [
  append: () => void,
  remove: () => void
]

type Origin = DefineComponent | Component | VNode

export interface UseAppend {
  (origin: Origin, target: string): UseAppendResult
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
 * @param {String} target 目标元素, 一个 `CSS Selector`, 将选中的第一个元素作为渲染目标
 * @return 返回一个元组 `[append, remove]`. 调用 `append` 渲染, 调用 `remove` 移除.
 */
export const useAppend: UseAppend = (origin, target) => {
  const emits = {
    'onUseAppend:append': () => append(),
    'onUseAppend:remove': () => remove()
  }

  const el = ref<Element | null>(null)

  const toVNode = (node: Origin) => {
    return h((node as VNode), emits)
  }
  
  const append = () => {
    render(toVNode(origin), el.value!)
  }

  const remove = () => {
    render(null, el.value!)
  }

  onMounted(() => {
    el.value = document.querySelector(target)
    if (!el.value) {
      throw new Error("[useAppend]: 目标元素为空！请检查元素是否存在。")
    }
  })

  return [append, remove]
}