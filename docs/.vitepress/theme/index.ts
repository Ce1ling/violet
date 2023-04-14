import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import * as VioletComponents from '../../../packages/components'
import { format } from '../../../packages/utils/compNameFormat'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'
import './styles/common.scss'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    Object.entries(VioletComponents).forEach(([name, component]) => {
      app.component(format(name, /[A-Z]/g), component)
    })
  },
}