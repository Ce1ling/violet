// @ts-ignore
import fs from 'fs'
// @ts-ignore
import path from 'path'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { getDocsRoot } from '../utils/getDocsRoot'
import { highlight } from '../utils/highlight'

import type Token from 'markdown-it/lib/token'


interface ContainerOpts {
  validate?(params: string): boolean
  render?(tokens: Token[], index: number): string
}
interface MdPlugin {
  (md: MarkdownIt, key?: string): void
}

export const mdPlugin: MdPlugin = (md, k = 'demo') => {
  // 匹配参数 k 开头，任意结尾的字符串
  const reg = new RegExp(`^${k}\\s*(.*)$`)
  
  md.use(mdContainer, k, {
    // validate 返回 true 则 render，否则不会调用 render 函数
    validate: (params) => !!params.trim().match(reg),
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(reg)
      const title = (m && m[1]) ?? ''
      const filePath = tokens[idx + 2]?.children?.[0].content ?? ''

      if (tokens[idx].nesting === 1) {
        if (!filePath) {
          throw new Error(`错误的文件路径: "${filePath}"`)
        }
        const textFile = fs.readFileSync(
          path.resolve(getDocsRoot(), 'examples', `${filePath}.vue`), 
          'utf-8'
        )

        return `<Demo 
          title="${title}"
          path="${filePath}"
          code="${encodeURIComponent(highlight(textFile, 'vue'))}"
          raw-code="${encodeURIComponent(textFile)}"
        >`
      } else {
        return '</Demo>'
      }
    }
  } as ContainerOpts)
}