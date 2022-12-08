import { basic } from "../stores/components/basic"
import { form } from "../stores/components/form"
import { layout } from "../stores/components/layout"


export default {
  title: 'Violet',
  description: 'A Vue3 UI Framework',
  themeConfig: {
    // 头部导航
    // nav: [
    //   { text: 'Guide', link: '', activeMatch: '/guide' },
    // ],
    // 侧边栏
    sidebar: [
      { text: '基础组件', items: basic },
      { text: '布局组件', items: layout },
      { text: '表单组件', items: form },
    ],
    // 底部信息。注意：当 sidebar 显示时，footer 则不会显示
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  },
}