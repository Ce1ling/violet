<script setup lang="ts">
import { computed } from 'vue'

import type { LinkProps, LinkEmits, LinkSlots } from './link'


const props = withDefaults(defineProps<LinkProps>(), {
  type: 'primary',
  disabled: false,
  underline: true
})

const emit = defineEmits<LinkEmits>()

defineSlots<LinkSlots>()

const linkClass = computed(() => [`vi-link--${props.type}`, {
  'is-disabled': props.disabled,
  'has-underline': props.underline
}])

const handleClick = (e: MouseEvent) => {
  return props.disabled ? e.preventDefault() : emit('click', e)
}
</script>

<template>
  <a class="vi-link" :class="linkClass" v-bind="$attrs" @click="handleClick">
    <span class="vi-link__inner">
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </span>
  </a>
</template>

<style lang="scss">
$types: primary, success, warning, danger;

.vi-link {
  display: inline-block;
  color: var(--vi-color-primary);
  text-decoration: none;
  position: relative;

  .vi-link__inner {
    display: flex;
    align-items: center;
  }
  &::after {
    content: '';
    width: 0%;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -2px;
    transition: width var(--vi-animation-duration);
  }
  &:hover { opacity: var(--vi-opacity-half); }
  &.has-underline:hover::after { width: 100%; }
  &.is-disabled { 
    cursor: not-allowed;
    opacity: var(--vi-opacity-half);
    &.has-underline:hover::after { width: 0%; }
  }
  @each $type in $types {
    &--#{$type} {
      color: var(--vi-color-#{$type});
      &::after { background-color: var(--vi-color-#{$type}); }
      .vi-link__inner { color: var(--vi-color-#{$type}); }
    }
  }
}
</style>