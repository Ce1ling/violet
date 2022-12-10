<script setup lang="ts">
import { nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'
import BackTop from '../../../src/components/BackTop/index.vue'

const { Layout } = DefaultTheme

// 首页在加载动画时隐藏滚动条
nextTick(() => {
  const app: HTMLElement = document.querySelector('#app')!
  app.style.overflow = 'hidden'
  setTimeout(() => app.style.overflow = 'auto', 1000)
})
</script>

<template>
  <Layout> 
    <template #doc-after>
      <FooterInfo />
    </template>
  </Layout>
  <BackTop />
</template>

<style scoped lang="scss">
</style>