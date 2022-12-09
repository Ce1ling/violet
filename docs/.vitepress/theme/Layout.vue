<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout> 
    <template #doc-after>
      <FooterInfo />
    </template>
  </Layout>
</template>

<style scoped lang="scss">
</style>