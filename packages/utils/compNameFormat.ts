/** 
 * 将组件名格式化为 "vi-xxx-xxx"，并转为小写。
 * @param {String} str 组件名字符串
 * @param {RegExp} reg 正则表达式
 **/
export function format(str: string, reg: RegExp) {
  const arr = str.split('')
  str.match(reg)?.map(v => arr.splice(arr.indexOf(v), 0, '-'))
  return `vi${arr.join('').toLowerCase()}`
}