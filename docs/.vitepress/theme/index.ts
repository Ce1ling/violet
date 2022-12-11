import customeLayout from './Layout.vue'
import { Button, Icon, Layout } from '../../../packages/components'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'

const components = [ 
  { name: 'vi-button', component: Button },
  { name: 'vi-icon', component: Icon },
  { name: 'vi-layout', component: Layout },
]

export default {
  Layout: customeLayout,
  enhanceApp({ app }) {
    components.forEach(item => app.component(item.name, item.component))
  },
}