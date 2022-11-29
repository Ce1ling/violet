import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/assets/icons/')
  ]
})
