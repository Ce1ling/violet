import Layout from './Layout.vue'
import button from '../../../packages/components/Button/index.vue'
import icon from '../../../packages/components/Icon/index.vue'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'

const components = [ 
  // UI 组件
  { name: 'vi-button', component: button },
  { name: 'vi-icon', component: icon },
]

export default {
  Layout,
  enhanceApp({ app }) {
    components.forEach(item => app.component(item.name, item.component))
  },
}