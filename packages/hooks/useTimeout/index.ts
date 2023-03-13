/** 对 window.setTimeout 的封装，可以自动清除定时器，清空引用。 */
export const useTimeout = (handler: Function, time: number): void => {
  let timer: number | null = window.setTimeout(() => {
    handler()
    if (typeof timer === 'number') window.clearTimeout(timer)
    timer = null
  }, time)
}
