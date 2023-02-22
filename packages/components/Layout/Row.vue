<script setup lang="ts">
type Props = {
  gap?: string
  justify?: string
  align?: string
}
withDefaults(defineProps<Props>(), {
  gap: '10px',
  justify: 'flex-start',
  align: 'flex-start'
})

</script>

<template>
  <div class="vi-row">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-row {
  display: flex;
  align-items: v-bind(align);
  justify-content: v-bind(justify);
  gap: v-bind(gap);
}
</style>