<script setup lang="ts">
</script>

<template>
  <section class="content-wrap">
    <router-view />
  </section>
</template>

<style scoped lang="scss">
.content-wrap {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  :deep(.content) { flex: 8; }
  :deep(.contents) { flex: 2; }
  :deep(.title) { font-size: 28px; }
  :deep(.desc) { margin: 20px 0; }
}
</style>