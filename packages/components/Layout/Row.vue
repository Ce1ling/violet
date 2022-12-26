<script setup lang="ts">


type Props = {
  gap?: string
  justify?: string
  padding?: string
}
const props = withDefaults(defineProps<Props>(), {
  gap: '10px',
  justify: 'flex-start',
  padding: '10px'
})
</script>

<template>
  <div class="vi-row">
    <slot></slot>
  </div>
</template>

<style>
.vi-row {
  display: flex;
  align-items: center;
  justify-content: v-bind(justify);
  gap: v-bind(gap);
  padding: v-bind(padding);
}
</style>