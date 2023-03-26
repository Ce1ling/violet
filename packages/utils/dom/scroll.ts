/** 
 * 获取滚动条宽度 
 * @param {string} unit 单位，不传递则无单位
 **/
export const getScrollWidth = (unit?: string): string | number => {
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

  return unit ? scrollWidth + unit : scrollWidth
}