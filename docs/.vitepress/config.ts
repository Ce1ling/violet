import { 
  basic, 
  layout, 
  form, 
  navigation, 
  message 
} from '../routes/index'

export default {
  base: '/violet/',
  title: 'Violet',
  description: 'A Vue3 UI Framework',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/violet-logo.svg',  type: 'image/svg+xml' }]
  ],
  markdown: {
    theme: {
      light: 'material-lighter',
      dark: 'material-palenight'
    },
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