import prism from 'prismjs'
import MarkdownIt from 'markdown-it'

// 借用 MarkdownIt 的 escapeHtml 工具解析一下 html
const md = MarkdownIt()

function preRender(code: string, lang: string) {
  if (lang === 'text') {
    code = md.utils.escapeHtml(code)
  }
  return `<pre v-pre><code>${code}</code></pre>`
}

/**
 * 用于高亮代码字符串
 * @param code 代码
 * @param lang 目标语言
 * @returns 返回高亮后的代码字符串
 */
export const highlight = (code: string, lang: string) => {
  if (!lang) {
    return preRender(code, 'text')
  }
  lang = lang.toLowerCase()

  const rawLang = lang
  const langMap = {
    vue: 'markup',
    html: 'markup',
    md: 'markdown',
    ts: 'typescript'
  }

  if (langMap.hasOwnProperty(lang)) {
    lang = langMap[lang]
  }

  const isSupport = prism.languages[lang]
  if (!isSupport) {
    throw new Error(`[vitepress] docs 不支持解析此语言："${lang}"`)
  }
  if (isSupport) {
    return preRender(prism.highlight(code, isSupport, lang), rawLang)
  }
  return preRender(code, 'text')
}
