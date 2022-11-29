import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import './global.scss'
import App from './App.vue'
import { Button, Icon } from '../packages/components';

const app = createApp(App)

app.component('vi-button', Button)
app.component('vi-icon', Icon)

app.use(createPinia())
app.use(router)

app.mount('#app')
