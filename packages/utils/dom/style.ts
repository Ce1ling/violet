/**
 * 使用原生 API 方式添加类名(还能够处理一些特殊情况，如：类名出现空格)
 * @param {Element} 待操作的元素
 * @param {String} 待添加的类名(一次只能添加一个)
 */
export const addClass = (el: HTMLElement, cls: string) => {
  if (!el || !cls.trim()) { return }
  if (cls.includes(' ')) {
    throw new Error('CSS className should not contain space or illegal char')
  }

  el.classList.add(cls)
}

/**
 * 使用原生 API 方式移除类名(还能够处理一些特殊情况，如：类名出现空格)
 * @param {Element} 待操作的元素
 * @param {String} 待移除的类名(一次只能移除一个)
 */
export const removeClass = (el: HTMLElement, cls: string) => {
  if (!el || !cls.trim()) { return }
  if (cls.includes(' ')) {
    throw new Error('CSS className should not contain space or illegal char')
  }

  el.classList.remove(cls)
}

/**
 * 使用原生 API 方式操作 `CSS overflow` 属性
 * @param el 待操作的元素
 * @param str 添加的值
 */
export const overflow = (el: HTMLElement, str: string) => {
  if (!el || !el.style) { return }

  el.style.overflow = str
}