<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderNav from '../components/HeaderNav/index.vue'
import List from '../components/List/index.vue'
import Content from '../views/Content/index.vue'
import FooterInfo from '../views/FooterInfo/index.vue'



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
  <HeaderNav />
  <main class="main-body">
    <List />
    <section class="doc-content-wrap">
      <Content />
      <FooterInfo />
    </section>
  </main>
  <div title="返回顶部" class="go-top-wrap" v-show="showGoTop" @click="goTop">
    <vi-icon name="top" size="30px" cursor="pointer" />
  </div>
</template>

<style scoped lang="scss">
.main-body {
  display: flex;
  .doc-content-wrap {
    display: flex;
    flex-direction: column;
    flex: 10;
  }
}
.go-top-wrap {
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