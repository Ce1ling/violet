<script setup lang="ts">
interface Props {
  span?: string | number
}

withDefaults(defineProps<Props>(), {
  span: 1
})

</script>

<template>
  <div class="vi-col" :style="{ flex: span }">
    <slot />
  </div>
</template>

<style lang="scss">
</style>