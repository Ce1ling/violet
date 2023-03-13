<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'
import SearchBar from '../../../packages/components/SearchBar/index.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <FooterInfo />
    </template>
    <template #nav-bar-content-before>
      <SearchBar class="search-bar-wrap" />
    </template>
  </Layout>
  <vi-backtop>
  </vi-backtop>
</template>

<style scoped lang="scss">
.search-bar-wrap {
  margin: 0 10px;
}
</style>