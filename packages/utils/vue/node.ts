/**
 * 用于检查 DOM 类型，共以下几种：
 *  1. `normal`: 正常节点
 *  2. `fragment`: `v-for` 产生的一个片段节点
 *  3. `comment`: 注释节点
 */
export const checkNodeType = (key: string) => {
  // TODO: key 可能会随 Vue 的升级而变动, 需要找出一个稳定的方法
  // Vue3.2 key 的类型为 `Symbol(Comment)` 等, 而 Vue3.3 key 则变为以下方式
  switch (key) {
    case 'Symbol(v-cmt)':
      return 'comment'
    case 'Symbol(v-fgt)':
      return 'fragment'
    default:
      return 'normal'
  }
}