<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterInfo from './components/FooterInfo.vue'
import SearchBar from './components/SearchBar/index.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <SearchBar class="search-bar-wrap" />
    </template>
    <template #doc-after>
      <FooterInfo />
    </template>
  </Layout>
  <vi-backtop 
    class="docs-backtop"
    :right="100" 
    :bottom="100" 
    shadow-color="var(--doc-backtop-shadow-color)"
  />
</template>

<style scoped lang="scss">
.search-bar-wrap {
  margin: 0 10px;
}
.docs-backtop {
  background-color: var(--doc-bg-color);
  :hover {
    background-color: var(--doc-color-primary);
  }
}
</style>