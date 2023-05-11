/** 
 * 获取滚动条宽度 
 * @param {String} unit 单位，不传递则无单位
 * @retrun 返回滚动条宽度
 **/
export const getScrollWidth = (unit?: string): string => {
  const div = document.createElement('div')
  div.className = 'vi-scrollbar__wrap'
  div.style.visibility = 'hidden'
  div.style.width = '100px'
  div.style.position = 'absolute'
  div.style.top = '-99999px'
  document.body.appendChild(div)

  const divWidth = div.offsetWidth
  div.style.overflow = 'scroll'

  const innerDiv = document.createElement('div')
  innerDiv.style.width = '100%'
  div.appendChild(innerDiv)

  const innerDivWidth = innerDiv.offsetWidth
  div.parentNode?.removeChild(div)
  const scrollWidth = divWidth - innerDivWidth

  return `${unit ? scrollWidth + unit : scrollWidth}`
}


interface HasScrollBar {
  (direction?: 'x' | 'y' | 'all'): Boolean | [Boolean, Boolean]
}
/**
 * 是否存在滚动条
 * @param {Direction} d 判断的方位。`'x'` 为水平滚动条, `'y'` 为垂直滚动条, `'all'` 为所有滚动条。默认为 `'y'`。
 * @returns 默认返回 `boolean`。`true` 代表有, `false` 代表没有。若 `d` 为 `'all'` 则返回一个二元组, 元素1代表 `'x'`, 元素2 代表 `'y'`。
 */
export const hasScrollBar: HasScrollBar = (d = 'y') => {
  const body = document.body || document.documentElement
  const x = window.innerWidth < body.scrollWidth
  const y = window.innerHeight < body.scrollHeight

  if (d === 'x') {
    return x
  } else if (d === 'y') {
    return y
  } else if (d === 'all') {
    return [x, y]
  } else {
    throw new Error('`参数` 只能为: `x` | `y` | `all` 中的一个')
  }
}