<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Props {
  showHeight?: number
  hideWidth?: number
  right?: number
  bottom?: number
  zIndex?: number
  round?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showHeight: 500,
  hideWidth: -Infinity,
  right: 50,
  bottom: 50,
  zIndex: 99,
  round: false
})

const show = ref(false)

const customStyle = computed(() => ({ 
  right: props.right + 'px', 
  bottom: props.bottom + 'px', 
  zIndex: props.zIndex 
}))
const classObj = computed(() => ({
  'is-round': props.round
}))

const handleScroll = () => show.value = document.body.offsetWidth > props.hideWidth
  ? window.scrollY >= props.showHeight
  : false
const backtop = () => window.scrollTo({ top: 0 })

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div 
    class="vi-backtop" 
    :class="classObj"
    :style="customStyle"
    @click="backtop"
    v-if="show">
    <slot>
      <vi-icon 
        name="Top" 
        size="44px" 
        color="var(--vi-color-primary)" 
        class="vi-backtop__icon"
      />
    </slot>
  </div>
</template>

<style lang="scss">
.vi-backtop {
  user-select: none;
  position: fixed;
  border: 1px solid var(--vi-color-primary);
  background-color: var(--vi-color-white);
  box-shadow: 0 0 8px var(--vi-color-gray);
  cursor: pointer;
  &:hover {
    background-color: var(--vi-color-primary);
    .vi-backtop__icon svg { color: #fff; }
  }
  &__icon { display: block; }
  &.is-round {
    border-radius: 50%;
  }
}
</style>