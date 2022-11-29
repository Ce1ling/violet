<script setup lang="ts">
import HeaderNav from '../components/HeaderNav/index.vue'
import List from '../components/List/index.vue'
import Content from '../views/Content/index.vue'

</script>

<template>
  <HeaderNav />
  <main class="main-body">
    <List />
    <Content />
  </main>
</template>

<style scoped lang="scss">
.main-body {
  display: flex;
  > .nav-wrap { max-width: 300px; }
  > .content-wrap { flex: 8; }
}
</style>