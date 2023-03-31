<script setup lang="ts">
import { computed } from 'vue'


interface Props {
  margin?: string
  thick?: string
  color?: string
  borderStyle?: string
  position?: 'start' | 'center' | 'end'
  direction?: 'vertical' | 'horizontal'
}
const props = withDefaults(defineProps<Props>(), {
  margin: '18px',
  thick: '1px',
  color: 'var(--vi-color-primary)',
  borderStyle: 'solid',
  position: 'start',
  direction: 'horizontal'
})

const getClasses = computed(() => `vi-divider--${props.direction}`)
const getStyles = computed(() => {
  const borderStyle = `${props.thick} ${props.borderStyle} ${props.color}`

  if (props.direction === 'horizontal') {
    return {
      margin: `${props.margin} 0`,
      borderTop: borderStyle
    }
  }

  return {
    margin: `0 ${props.margin}`,
    borderLeft: borderStyle
  }
})
const getPositionClass = computed(() => `is-${props.position}`)
const getDescStyles = computed(() => ({
  transform: props.position === 'center' 
    ? `translate(-50%, calc(-50% - (${props.thick} / 2)))`
    : `translateY(calc(-50% - (${props.thick} / 2)))`,
}))

</script>

<template>
  <div class="vi-divider" :class="getClasses" :style="getStyles">
    <span class="vi-divider__desc" :class="getPositionClass" :style="getDescStyles">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
.vi-divider {
  position: relative;
  .vi-divider__desc {
    position: absolute;
    background-color: var(--vi-color-white);
    padding: 0 10px;

    &.is-start {
      top: 0;
      left: 18px;
    }
    &.is-center {
      top: 0;
      left: 50%;
    }
    &.is-end {
      left: unset;
      top: 0;
      right: 18px;
    }
  }
  &--horizontal {
    display: block;
    width: 100%;
  }
  &--vertical {
    display: inline-block;
    height: 1em;
    vertical-align: middle;
  }
}
</style>