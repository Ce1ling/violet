<script setup lang="ts">
</script>

<template>
  <section class="content-wrap">
    <router-view />
  </section>
</template>

<style scoped lang="scss">
.content-wrap {
  display: flex;
  justify-content: space-between;
  & :deep(.content) { flex: 8; }
  & :deep(.contents) { flex: 2; }
}
</style>