<script setup lang="ts">
import HeaderNav from '../HeaderNav/index.vue'
import ComponentList from '../ComponentList/index.vue'
import ContentView from '../ContentView/index.vue'
import Contents from '../Contents/index.vue'

</script>

<template>
  <HeaderNav />
  <main class="main-body">
    <ComponentList />
    <ContentView />
    <Contents />
  </main>
</template>

<style scoped lang="scss">
.main-body {
  display: flex;
  justify-content: space-between;
  > * {
    border: 1px solid red;
    &:nth-child(odd) { flex: 2; }
    &:not(:nth-child(odd)) { flex: 6; }
  }
}
</style>