<script setup lang="ts">
import { computed, reactive } from 'vue'

type Props = {
  type?: string
  underline?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  underline: true,
  disabled: false
})
const emit = defineEmits(['click'])

const color = reactive({
  primary: 'var(--vi-color-primary)',
  success: 'var(--vi-color-success)',
  warning: 'var(--vi-color-warning)',
  danger: 'var(--vi-color-danger)'
})

const getColor = computed(() => color[props.type])
const classList = computed(() => {
  const list: string[] = []
  if (props.underline) {
    list.push('has-underline')
  }
  if (props.disabled) {
    list.push('disabled')
    list.splice(list.indexOf('has-underline'), 1)
  }
  return list
})

const handleClick = (e: MouseEvent) => props.disabled 
  ? e.preventDefault() 
  : emit('click', e)
</script>

<template>
  <a class="vi-link" :class="classList" 
    v-bind="$attrs" @click="handleClick">
    <span class="vi-link__text">
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </span>
  </a>
</template>

<style lang="scss">
.vi-link {
  display: inline-block;
  color: v-bind(getColor);
  text-decoration: none;
  position: relative;

  .vi-link__text {
    font-size: inherit;
    color: v-bind(getColor);
    display: flex;
    align-items: center;
  }
  &::after {
    content: '';
    width: 0%;
    height: 2px;
    display: inline-block;
    background-color: v-bind(getColor);
    position: absolute;
    left: 0;
    bottom: -2px;
    transition: width .3s;
  }
  &:hover { opacity: 0.677777; }
  &.has-underline:hover::after { width: 100%; }
  &.disabled { 
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>