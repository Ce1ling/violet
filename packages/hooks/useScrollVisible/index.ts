import { onScopeDispose, watch, isRef } from 'vue'
import { getScrollWidth } from '../../utils/dom/scroll'
import { addClass, removeClass } from '../../utils/dom/style'
import { useTimeout } from '../index'

import type { Ref } from 'vue'

export interface UseScrollVisible {
  (
    trigger: Ref<boolean>, 
    target: HTMLElement, 
    timeout?: number,
    cls?: string
  ): void
}

const violetScrollClass = 'vi-scroll-hide'

/** 
 * 隐藏/显示 指定元素的滚动条
 * @param {Ref<boolean>} trigger 用于触发. 必须是 Vue 的 ref, 当它发生改变时, 会触发 显示/隐藏(`true` 隐藏, `false` 显示)
 * @param {HTMLElement} target 待操作的元素
 * @param {Number} timeout 可选. 延迟显示滚动条(ms)
 * @param {String} cls 可选. 隐藏滚动条的类名
 **/
export const useScrollVisible: UseScrollVisible = (trigger, target, timeout, cls = violetScrollClass) => {
  if (!isRef(trigger)) {
    throw new Error('`trigger` 必须是一个 Vue 的 `ref` !')
  }

  watch(trigger, val => {
    if (val) {
      add()
      return
    } 

    if (timeout) {
      useTimeout(remove, timeout)
      return
    }
    remove()
  })

  const add = () => {
    target.style.width = `calc(100% - ${getScrollWidth('px')})`
    addClass(target, cls)
  }
  
  const remove = () => {
    target.style.width = ''
    removeClass(target, cls)
  }
  
  onScopeDispose(remove)
}