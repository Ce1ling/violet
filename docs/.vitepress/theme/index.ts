import customeLayout from './Layout.vue'
import * as VioletComponents from '../../../packages/components'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'

export default {
  Layout: customeLayout,
  enhanceApp({ app }) {
    Object.entries(VioletComponents).forEach(([name, component]) => {
      app.component(`vi-${name.toLowerCase()}`, component)
    })
  },
}