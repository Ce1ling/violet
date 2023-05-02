import { 
  basic, 
  layout, 
  form, 
  navigation, 
  message 
} from '../pages/index'
import { mdPlugin } from './plugins/mdPlugin'

import type { UserConfig } from 'vitepress'

/**
 * @desc 若 `push` 到 `github`, 请设置为 `true`; 若自行部署, 请在打包前设置为 `false`.
 */
const hasBase: boolean = true

// 仅在本文件与 404(NotFound.vue) 组件中使用
export const baseURI = hasBase ? '/violet/' : '/'

export const config: UserConfig = {
  base: baseURI,
  title: 'Violet',
  description: 'A Vue3 UI Framework',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: `${baseURI}violet-logo.svg`,  type: 'image/svg+xml' }]
  ],
  markdown: {
    theme: {
      light: 'material-lighter',
      dark: 'material-palenight'
    },
    config: md => mdPlugin(md)
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ce1ling/violet' },
    ],
    sidebar: [
      { text: '基础组件', items: basic },
      { text: '布局组件', items: layout },
      { text: '表单组件', items: form },
      { text: '导航组件', items: navigation },
      { text: '消息组件', items: message },
    ],
    outlineTitle: '目录',
    docFooter: {
      prev: '',
      next: ''
    },
    footer: {
      message: `Powered by ❤️ ${'<a href="https://github.com/Ce1ling" target="_blank">L1en</a>'}`,
      copyright: `Copyright © 2021-Present`
    }
  },
}

export default config