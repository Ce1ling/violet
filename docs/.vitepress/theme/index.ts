import customeLayout from './Layout.vue'
import { Button, Icon, Layout, Tabs } from '../../../packages/components'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'

const components = [ 
  { name: 'vi-button', component: Button },
  { name: 'vi-icon', component: Icon },
  { name: 'vi-layout', component: Layout },
  { name: 'vi-tabs', component: Tabs },
]

export default {
  Layout: customeLayout,
  enhanceApp({ app }) {
    components.forEach(item => app.component(item.name, item.component))
  },
}