import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import './global.scss'
import App from './App.vue'
import { Button, Icon, Layout } from '../packages/components'

// markdown 解析库
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// github主题与样式
import github from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
// 代码高亮库
import hljs from 'highlight.js'

VMdPreview.use(github, {
  Hljs: hljs,
  codeHighlightExtensionMap: {
    vue: 'html',
  },
})
VMdPreview.use(createCopyCodePlugin())

const app = createApp(App)

app.component('vi-button', Button)
app.component('vi-icon', Icon)
app.component('vi-layout', Layout)

app.use(createPinia())
app.use(router)
app.use(VMdPreview)

app.mount('#app')
