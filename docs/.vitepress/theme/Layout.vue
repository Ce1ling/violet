<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'
import BackTop from '../../../packages/components/BackTop/index.vue'
import SearchBar from '../../../packages/components/SearchBar/index.vue'
import { Tabs as ViTabs } from '../../../packages/components/index'

const { Layout } = DefaultTheme
const handle = () => {
  console.log('handle');
}
</script>

<template>
  <Layout>
    <template #layout-top>
      123
      <vi-tabs @change="handle">
        <vi-tab v-for="i in 10" :key="i" :label="i - 1">{{ i - 1 }}</vi-tab>
      </vi-tabs>
    </template>
    <template #doc-after>
      <FooterInfo />
    </template>
    <template #nav-bar-content-before>
      <SearchBar class="search-bar-wrap" />
    </template>
  </Layout>
  <BackTop />
</template>

<style scoped lang="scss">
.search-bar-wrap {
  margin: 0 10px;
}
</style>