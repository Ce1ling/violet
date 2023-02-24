<script setup lang="ts">
interface Props {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'center' | 'end'
  flex?: string
  gap?: string
}
withDefaults(defineProps<Props>(), {
  direction: 'row',
  flex: '1',
  gap: '0'
})
</script>

<template>
  <div class="vi-flex">
    <slot />
  </div>
</template>

<style lang="scss">
.vi-flex {
  display: flex;
  flex-direction: v-bind(direction);
  justify-content: v-bind(justify);
  align-items: v-bind(align);
  flex: v-bind(flex);
  gap: v-bind(gap);
}
</style>