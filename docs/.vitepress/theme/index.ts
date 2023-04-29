import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import * as VioletComponents from '../../../packages/components'
import { format } from '../../utils/format'

import './styles/var.scss'
import './styles/global.scss'
import './styles/custome.scss'
import './styles/common.scss'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    Object.entries(VioletComponents).forEach(([name, component]) => {
      app.component(format('vi', name, /[A-Z]/g), component)
    })
  },
}