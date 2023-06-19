import { mdPlugin } from './plugins/mdPlugin'
import { head } from './config/index'
import { socialLinks, sidebar, docFooter, footer } from './config/themeConfig'

import type { UserConfig } from 'vitepress'

/**
 * @desc 若 `push` 到 `github`, 请设置为 `true`; 若自行部署, 请在打包前设置为 `false`.
 */
const hasBase: boolean = true

export const baseURI = hasBase ? '/violet/' : '/'

export const config: UserConfig = {
  base: baseURI,
  title: 'Violet',
  description: 'A Vue3 UI Components Library',
  lang: 'zh-CN',
  head: head(baseURI),
  themeConfig: {
    socialLinks,
    outlineTitle: '目录',
    sidebar,
    docFooter,
    footer
  },
  markdown: {
    config: md => mdPlugin(md)
  }
}

export default config