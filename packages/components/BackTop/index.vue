<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const handleScroll = () => show.value = document.body.offsetWidth > 960
  ? window.scrollY >= (window.innerHeight * 0.5)
  : false
const back = () => window.scrollTo({ top: 0 })

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div title="返回顶部" class="back-top-wrap" v-show="show" @click="back">
    <vi-icon name="Top" size="44px" color="var(--vi-color-primary)" />
  </div>
</template>

<style lang="scss">
.back-top-wrap {
  user-select: none;
  position: fixed;
  right: 100px;
  bottom: 100px;
  z-index: 999999999;
  border: 1px solid var(--vi-color-primary);
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  cursor: pointer;
  .vi-icon { display: block; }
  &:hover {
    background-color: var(--vi-color-primary);
    .vi-icon svg { color: #fff; }
  }
}
</style>