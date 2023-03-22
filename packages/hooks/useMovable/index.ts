import { nextTick, onUnmounted } from 'vue'
import type { Ref } from 'vue'


type ElRef = Ref<HTMLElement | undefined>


/** 使一个元素可以被鼠标拖动 */
export const useMovable = (targetRef: ElRef, moveRef: ElRef, movable: boolean) => {
  const onMouseDown = (e: MouseEvent) => {
    const p = {
      x: e.clientX,
      y: e.clientY 
    }
    const onMouseMove = (e: MouseEvent) => {
      const r = {
        x: e.clientX - p.x,
        y: e.clientY - p.y
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
  onUnmounted(() => moveRef.value?.removeEventListener('mousedown', onMouseDown))
}