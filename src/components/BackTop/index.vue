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
    TOP
    <!-- <vi-icon name="top" size="30px" /> -->
  </div>
</template>

<style lang="scss">
.back-top-wrap {
  user-select: none;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  &:hover { background-color: #ddd; }
}
</style>