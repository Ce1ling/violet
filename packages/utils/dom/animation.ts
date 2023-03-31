import { computed } from 'vue'

interface GetADByVar {
  (target: HTMLElement, variable: string, unit?: number): number
}

/**
 * 根据获取动画执行时间
 * @param {HTMLElement} target 目标元素
 * @param {String} variable 需获取的 CSS 变量
 * @param {Number} unit 可选。将结果与此参数做"乘法"，以便移动小数点获得各种单位
 * @return {Number} 返回结果
 */
export const getADByVar: GetADByVar = (target, variable, unit) => computed(() => {
  const d = window.getComputedStyle(target).getPropertyValue(variable)
  const r = window.parseFloat(d)
  return unit ? r * unit : r
}).value
