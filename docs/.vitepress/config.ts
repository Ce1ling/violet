import { 
  basic, 
  layout, 
  form, 
  navigation, 
  message 
} from '../routes/index'

const author = '<a href="https://github.com/Ce1ling" target="_blank">L1en</a>'


export default {
  title: 'Violet',
  description: 'A Vue3 UI Framework',
  lang: 'zh-CN',
  markdown: {
    // 代码块主题
    theme: {
      light: 'material-lighter',
      dark: 'material-palenight'
    },
  },
  themeConfig: {
    // 头部导航
    // nav: [
    //   { text: 'Guide', link: '', activeMatch: '/guide' },
    // ],
    // 头部社交图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ce1ling/violet' },
    ],
    // 侧边栏
    sidebar: [
      { text: '组件测试页', items: [{ text: '组件测试', link: '/components/test/index.md' }] },
      { text: '基础组件', items: basic },
      { text: '布局组件', items: layout },
      { text: '表单组件', items: form },
      { text: '导航组件', items: navigation },
      { text: '消息组件', items: message },
    ],
    // 右侧锚点标题
    outlineTitle: '目录',
    // 文档底部
    docFooter: {
      prev: '',
      next: ''
    },
    // 底部信息。注意：当 sidebar 显示时，footer 则不会显示
    footer: {
      message: `Powered by ❤️ ${author}`,
      copyright: `Copyright © 2021-Present`
    }
  },
}