import { getScrollWidth } from '../../utils/dom/scroll'


interface UseScrollVisible {
  (t: HTMLElement, cls?: string): { 
    show: () => void, 
    hide: () => void 
  }
}
/** 
 * 隐藏/显示 网页的滚动条
 * @param {HTMLElement} target 需操作的元素
 * @param {String} cls 隐藏滚动条的类名，不传则手动操作 DOM(此参数非常推荐传递)
 * @return {object} { show, hide }，调用 show 显示滚动条，hide 隐藏。
 **/
export const useScrollVisible: UseScrollVisible = (target, cls) => {
  const width = getScrollWidth('px')
  const classList = target.classList
  const style = target.style

  const show = () => {
    cls ? classList.remove(cls) : style.overflow = ''
    style.width = ''
  }
  const hide = () => {
    cls ? classList.add(cls) : style.overflow = 'hidden'
    style.width = `calc(100% - ${width})`
  }

  return {
    show,
    hide
  }
}