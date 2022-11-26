<script setup lang="ts">
import { useStore } from '../../stores/content'

const store = useStore()

</script>

<template>
  <section>
    Content 内容 <br />
    {{ store.content }} <br />
    <button @click="store.add"> increment </button>
  </section>
</template>

<style scoped>
</style>