<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Icon as ViIcon } from '../index'

import type { TagProps, TagEmits, TagSlots } from './tag'

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  border: false,
  closable: false,
  disabled: false,
  round: false,
})

const emit = defineEmits<TagEmits>()

defineSlots<TagSlots>()

const isClosed = ref(false)

const tagClass = computed(() => [
  `vi-tag--${props.type}`,
  {
    'has-border': props.border,
    'is-disabled': props.disabled,
    'is-round': props.round,
  },
])

const tagStyles = computed(() => ({
  '--vi-tag-border-color': '',
  '--vi-tag-bg-color': '',
  '--vi-tag-color': '',
}))

const handleClose = (e: MouseEvent) => {
  if (props.disabled) {
    return
  }

  isClosed.value = true
  emit('close', e)
}
</script>

<template>
  <div class="vi-tag" :class="tagClass" :style="tagStyles" v-if="!isClosed">
    <span class="vi-tag__content">
      <slot />
    </span>
    <span class="vi-tag__close" v-if="closable">
      <vi-icon
        name="Close"
        @click="handleClose"
        :cursor="disabled ? 'not-allowed' : 'pointer'"
      />
    </span>
  </div>
</template>

<style lang="scss">
$types: primary, success, info, warning, danger;

.vi-tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--vi-base-radius);
  padding: 2px 8px;
  border: 1px solid transparent;
  background-color: var(--vi-tag-bg-color);
  color: var(--vi-tag-color);
  font-size: var(--vi-font-size-base);

  @each $t in $types {
    &--#{$t} {
      --vi-tag-border-color: var(--vi-color-#{$t});
      --vi-tag-bg-color: var(--vi-color-#{$t}-weak);
      --vi-tag-color: var(--vi-color-#{$t});
    }
    @if $t == info {
      &--#{$t} {
        --vi-tag-border-color: #bbbbbb;
        --vi-tag-bg-color: var(--vi-color-#{$t}-weak);
        --vi-tag-color: #707070;
      }
    }
  }

  &__content {
    font-size: var(--vi-font-size-base);
  }

  &__close {
    margin-left: 8px;
    border-radius: 50%;
    transition: background-color var(--vi-animation-duration);

    &:hover {
      background-color: var(--vi-tag-color);
      color: var(--vi-color-white);
    }
  }

  &.has-border {
    border-color: var(--vi-tag-border-color);
  }

  &.is-disabled {
    opacity: var(--vi-opacity-half);
    cursor: not-allowed;

    .vi-tag__close:hover {
      background-color: transparent;
      color: var(--vi-tag-color);
    }
  }

  &.is-round {
    border-radius: var(--vi-rounded);
  }
}
</style>
