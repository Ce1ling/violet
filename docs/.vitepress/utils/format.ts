/** 
 * 将 `str` 以 `-` 分隔并添加前缀(命名空间)，并转为小写。
 * @param {String} prefix 前缀内容
 * @param {String} str 组件名字符串
 * @param {RegExp} reg 正则表达式
 * @return 字符串，格式为：`prefix`-xxx-xxx
 **/
export function format(prefix: string, str: string, reg: RegExp) {
  const arr = str.split('')
  str.match(reg)?.map(v => arr.splice(arr.indexOf(v), 0, '-'))
  return `${prefix}${arr.join('').toLowerCase()}`
}