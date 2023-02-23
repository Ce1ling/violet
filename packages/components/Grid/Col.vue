<script setup lang="ts">
interface Props {
  span?: string | number
}

withDefaults(defineProps<Props>(), {
  span: 1
})

</script>

<template>
  <div class="vi-col">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-col {
  flex: v-bind(span);
}
</style>