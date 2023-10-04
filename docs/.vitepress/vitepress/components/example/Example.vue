<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{
  path: string
  example: Component
}>()
</script>

<template>
  <div class="example">
    <component :is="example" v-if="example" v-bind="$attrs" />
  </div>
</template>

<style scoped>
.example {
  padding: var(--doc-example-padding);
}
</style>
