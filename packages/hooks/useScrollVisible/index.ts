import { onScopeDispose, watch, isRef } from 'vue'
import { getScrollWidth } from '../../utils/dom/scroll'
import { addClass, removeClass, overflow } from '../../utils/dom/style'
import { useTimeout } from './../useTimeout/index'

import type { Ref } from 'vue'

export interface UseScrollVisible {
  (
    trigger: Ref<boolean>, 
    target: HTMLElement, 
    cls?: string,
    timeout?: number
  ): void
}

/** 
 * 隐藏/显示 指定元素的滚动条
 * @param {Ref<boolean>} trigger 用于触发. 必须是 Vue 的 ref, 当它发生改变时, 会触发 显示/隐藏(`true` 隐藏, `false` 显示)
 * @param {HTMLElement} target 待操作的元素
 * @param {String} cls 可选. 隐藏滚动条的类名, 不传则手动操作 DOM(此参数非常推荐传递)
 * @param {Number} timeout 可选. 延迟显示滚动条(ms)
 **/
export const useScrollVisible: UseScrollVisible = (trigger, target, cls, timeout) => {
  const show = () => {
    if (cls) {
      removeClass(target, cls)
      return
    }
    overflow(target, '')
    target.style.width = ''
  }
  const hide = () => {
    if (cls) {
      addClass(target, cls)
      return
    }
    overflow(target, 'hidden')
    target.style.width = `calc(100% - ${getScrollWidth('px')})`
  }

  if (!isRef(trigger)) {
    throw new Error('`trigger` 必须是一个 Vue 的 `ref` !')
  }

  watch(trigger, (val) => {
    if (val) {
      hide()
      return
    } 
    if (timeout) {
      useTimeout(show, timeout)
      return
    }
    show()
  })

  // 在当前 Hook 作用域停止后还原滚动条
  onScopeDispose(show)
}