<script setup lang="ts">
type Props = {
  gap?: string
  thick?: string
  color?: string
  borderStyle?: string
  position?: 'start' | 'center' | 'end'
}
const props = withDefaults(defineProps<Props>(), {
  gap: '18px',
  thick: '1px',
  color: 'var(--primary-color)',
  borderStyle: 'solid',
  position: 'start'
})
</script>

<template>
  <div class="vi-divider">
    <span class="vi-divider__text" :class="props.position">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss">
.vi-divider {
  display: block;
  width: 100%;
  border-top: v-bind(thick) v-bind(borderStyle) v-bind(color);
  margin: v-bind(gap) 0;
  position: relative;
  .vi-divider__text {
    position: absolute;
    transform: translateY(calc(-50% - (v-bind(thick) / 2)));
    background-color: var(--bg-color);
    padding: 0 10px;

    &.start {
      top: 0;
      left: 18px;
    }
    &.center {
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-50% - (v-bind(thick) / 2)));
    }
    &.end {
      left: unset;
      top: 0;
      right: 18px;
    }
  }
}
</style>