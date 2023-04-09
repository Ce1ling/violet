import { onScopeDispose, watch } from 'vue'
import { getScrollWidth } from '../../utils/dom/scroll'
import { addClass, removeClass, overflow } from '../../utils/dom/style'

import type { Ref } from 'vue'

interface UseScrollVisible {
  (trigger: Ref<boolean>, target: HTMLElement, cls?: string): void
}

/** 
 * 隐藏/显示 网页的滚动条
 * @param {Ref<boolean>} trigger 用于触发 隐藏/显示。它必须是 Ref！为 `true` 时，隐藏滚动条，`false` 显示。
 * @param {HTMLElement} target 需操作的元素
 * @param {String} cls 隐藏滚动条的类名，不传则手动操作 DOM(此参数非常推荐传递)
 **/
export const useScrollVisible: UseScrollVisible = (trigger, target, cls) => {
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

  watch(trigger, (val) => {
    if (val) {
      hide()
    } else {
      show()
    }
  })

  // 在当前 Hook 作用域停止后还原滚动条
  onScopeDispose(show)
}