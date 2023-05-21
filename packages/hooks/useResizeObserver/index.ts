export interface UseResizeObserver {
  (handler: ResizeObserverCallback): {
    observe: ResizeObserver['observe'],
    unobserve: ResizeObserver['unobserve'],
    disconnect: ResizeObserver['disconnect']
  }
}

/**
 * 用于监听 DOM 的变化并做出一些处理
 * @param handler 监听到变化后的处理函数
 * @returns 返回一个对象, 对象中的方法为: 
 * `observer` 用于监听指定 DOM;
 * `unobserver` 用于取消监听指定 DOM; 
 * `disconnect` 用于取消所有监听.
 */
export const useResizeObserver: UseResizeObserver = (handler) => {
  const obs = new ResizeObserver(handler)
  
  const observe: ResizeObserver['observe'] = (target) => {
    obs.observe(target)
  }
  const unobserve: ResizeObserver['unobserve'] = (target) => {
    obs.unobserve(target)
  }
  const disconnect: ResizeObserver['disconnect'] = () => {
    obs.disconnect()
  }

  return { observe, unobserve, disconnect }
}