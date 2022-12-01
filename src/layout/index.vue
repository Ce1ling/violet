<script setup lang="ts">
import HeaderNav from '../components/HeaderNav/index.vue'
import List from '../components/List/index.vue'
import Content from '../views/Content/index.vue'
import FooterInfo from '../views/FooterInfo/index.vue'

</script>

<template>
  <HeaderNav />
  <main class="main-body">
    <List />
    <section class="doc-content-wrap">
      <Content />
      <FooterInfo />
    </section>
  </main>
</template>

<style scoped lang="scss">
.main-body {
  display: flex;
  .doc-content-wrap {
    display: flex;
    flex-direction: column;
    flex: 10;
  }
}
</style>