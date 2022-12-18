<script setup lang="ts">
type Props = {
  label: string
  name: string
}
defineProps<Props>()

</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
</style>