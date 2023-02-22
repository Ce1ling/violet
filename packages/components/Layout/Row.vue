<script setup lang="ts">
type Props = {
  gap?: string
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'center' | 'end'
}
withDefaults(defineProps<Props>(), {
  gap: '10px',
  justify: 'start',
  align: 'start'
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