<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'
import BackTop from '../../../packages/components/BackTop/index.vue'

const { Layout } = DefaultTheme
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