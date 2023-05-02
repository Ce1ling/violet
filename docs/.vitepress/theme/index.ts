import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import { format } from '../utils/format'
import * as VioletComponents from '../../../packages/components'
import * as DocsComponents from '../vitepress/index'

import './styles/vars.scss'
import './styles/global.scss'
import './styles/custom.scss'
// Violet UI 组件样式
import '../../../packages/theme-chalk/var.scss'
import '../../../packages/theme-chalk/common.scss'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    // 注册 Violet UI 组件
    Object.entries(VioletComponents).forEach(([name, component]) => {
      app.component(format('vi', name, /[A-Z]/g), component)
    })

    // 注册 docs 组件
    Object.entries(DocsComponents).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}