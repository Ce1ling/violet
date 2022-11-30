<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';


const showGoTop = ref(false)

const handleScroll = () => {
  const halfHeight = window.innerHeight * 0.5
  if (window.scrollY >= halfHeight) { showGoTop.value = true } 
  else { showGoTop.value = false }
}
const goTop = () => window.scrollTo({ top: 0 })

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <router-view />
  <div title="返回顶部" class="go-top-wrap" v-show="showGoTop" @click="goTop"> 
    <vi-icon name="top" size="50px" cursor="pointer" />
  </div>
</template>

<style lang="scss">
.go-top-wrap {
  user-select: none;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  &:hover { background-color: #ddd; }
}
</style>
