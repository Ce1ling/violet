<script setup lang="ts">
import { computed } from 'vue'

import type { AsideProps } from './'


const props = defineProps<AsideProps>()

const getStyles = computed(() => ({
  width: props.width || 'var(--vi-aside-width)'
}))

</script>

<template>
  <aside class="vi-aside" :style="getStyles">
    <slot />
  </aside>
</template>

<style lang="scss">
.vi-aside {
  display: block;
  box-sizing: border-box;
  overflow: auto;
}
</style>