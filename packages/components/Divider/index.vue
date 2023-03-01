<script setup lang="ts">
type Props = {
  gap?: string
  thick?: string
  color?: string
  borderStyle?: string
  position?: 'start' | 'center' | 'end'
  direction?: 'vertical' | 'horizontal'
}
const props = withDefaults(defineProps<Props>(), {
  gap: '18px',
  thick: '1px',
  color: 'var(--vi-color-primary)',
  borderStyle: 'solid',
  position: 'start',
  direction: 'horizontal'
})
</script>

<template>
  <div class="vi-divider" :class="props.direction">
    <span class="vi-divider__desc" :class="props.position">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
.vi-divider {
  position: relative;
  .vi-divider__desc {
    position: absolute;
    transform: translateY(calc(-50% - (v-bind(thick) / 2)));
    background-color: var(--vi-color-white);
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
  &.horizontal {
    display: block;
    width: 100%;
    margin: v-bind(gap) 0;
    border-top: v-bind(thick) v-bind(borderStyle) v-bind(color);
  }
  &.vertical {
    display: inline-block;
    height: 1em;
    margin: 0 v-bind(gap);
    vertical-align: middle;
    border-left: v-bind(thick) v-bind(borderStyle) v-bind(color);
  }
}
</style>