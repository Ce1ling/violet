import { watch, onScopeDispose, isRef, nextTick } from 'vue'

import type { Ref } from 'vue'

type RefEl = Ref<HTMLElement | undefined>

/**
 * 使一个元素可以被鼠标拖动 
 * @param targetRef 待移动的元素
 * @param moveRef 触发移动的元素
 * @param movable 是否可移动，请传递 ref
 */
export const useMovable = async (targetRef: RefEl, moveRef: RefEl, movable: Ref<boolean>) => {
  const onMouseDown = (e: MouseEvent) => {
    const targetRect = targetRef.value!.getBoundingClientRect()
    const p = {
      x: e.clientX - targetRect.left,
      y: e.clientY - targetRect.top
    }
    
    const onMouseMove = (e: MouseEvent) => {
      const { marginLeft, marginTop } = window.getComputedStyle(targetRef.value!)
      const r = {
        x: e.clientX - p.x - parseInt(marginLeft),
        y: e.clientY - p.y - parseInt(marginTop)
      }
      
      targetRef.value!.style.transform = `translate(${r.x}px, ${r.y}px)`
    }
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }
  const addMouseDown = () => {
    moveRef.value?.addEventListener('mousedown', onMouseDown)
  }
  const removeMouseDown = () => {
    moveRef.value?.removeEventListener('mousedown', onMouseDown)
  }

  await nextTick()

  if (
    !(targetRef.value instanceof HTMLElement) || 
    !(moveRef.value instanceof HTMLElement)
  ) {
    throw new Error('[useMovable]: `参数1` 和 `参数2` 必须是一个 DOM 元素。')
  }
  
  if (!isRef(movable)) {
    throw new Error('[useMovable]: `参数3` 必须是一个 ref。')
  }

  if (movable.value) { addMouseDown() }

  watch(movable, val => val ? addMouseDown() : removeMouseDown())

  onScopeDispose(removeMouseDown)
}