import { computed } from 'vue'

interface GetADByVar {
  (target: HTMLElement, variable: string, radix?: number): number
}

/**
 * 根据 `CSS` 变量获取动画执行时间(结果会缓存)
 * @param {HTMLElement} target 目标元素
 * @param {String} variable 需获取的 CSS 变量
 * @param {Number} radix 可选。将结果与此参数做"乘法"，以便移动小数点获得不同单位
 * @return {Number} 返回 `number` 类型的获取结果，可以是小数
 */
export const getADByVar: GetADByVar = (target, variable, radix) => computed(() => {
  const d = window.getComputedStyle(target).getPropertyValue(variable)
  const r = window.parseFloat(d)
  return radix ? r * radix : r
}).value
