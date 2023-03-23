import { nextTick, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'


type ElRef = Ref<HTMLElement | undefined>


/** 使一个元素可以被鼠标拖动 */
export const useMovable = (targetRef: ElRef, moveRef: ElRef, movable: boolean) => {
  const onMouseDown = (e: MouseEvent) => {
    const targetRect = targetRef.value!.getBoundingClientRect()
    const p = {
      x: e.clientX - targetRect.left,
      y: e.clientY - targetRect.top
    }
    
    const onMouseMove = (e: MouseEvent) => {
      const targetStyle = window.getComputedStyle(targetRef.value as Element)
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

  nextTick(() => {
    if (movable) { moveRef.value?.addEventListener('mousedown', onMouseDown) }
  })
  onBeforeUnmount(() => moveRef.value?.removeEventListener('mousedown', onMouseDown))
}