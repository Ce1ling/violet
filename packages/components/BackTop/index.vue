<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const handleScroll = () => {
  const halfHeight = window.innerHeight * 0.5
  if (window.scrollY >= halfHeight) { show.value = true }
  else { show.value = false }
}
const back = () => window.scrollTo({ top: 0 })

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div title="返回顶部" class="back-top-wrap" v-show="show" @click="back">
    <vi-icon name="top" size="50px" />
  </div>
</template>

<style lang="scss">
.back-top-wrap {
  user-select: none;
  position: fixed;
  right: 100px;
  bottom: 100px;
  z-index: 999999999;
  border: 1px solid var(--border-color);
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  cursor: pointer;
  &:hover { 
    background-color: var(--vp-c-bg-alpha-with-backdrop); 
    filter: brightness(0.8); 
  }
}
</style>