import { nextTick, onScopeDispose, watch } from 'vue'

import type { Ref } from 'vue'

type RefEl = Ref<HTMLElement | undefined>

/**
 * 使一个元素可以被鼠标拖动 
 * @param targetRef 目标元素
 * @param moveRef 触发移动的元素
 * @param movable 是否可移动，请传递 Ref
 */
export const useMovable = (targetRef: RefEl, moveRef: RefEl, movable: Ref<boolean>) => {
  const onMouseDown = (e: MouseEvent) => {
    const targetRect = targetRef.value!.getBoundingClientRect()
    const p = {
      x: e.clientX - targetRect.left,
      y: e.clientY - targetRect.top
    }
    
    const onMouseMove = (e: MouseEvent) => {
      const targetStyle = window.getComputedStyle(targetRef.value!)
      const r = {
        x: e.clientX - p.x - parseInt(targetStyle.marginLeft),
        y: e.clientY - p.y - parseInt(targetStyle.marginTop)
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

  nextTick(() => {
    if (movable.value) { addMouseDown() }
  })

  watch(movable, val => val ? addMouseDown() : removeMouseDown())

  onScopeDispose(removeMouseDown)
}