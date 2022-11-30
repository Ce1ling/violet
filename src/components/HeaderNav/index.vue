<script setup lang="ts">
import { useRouter } from 'vue-router'
import SearchBar from '../SearchBar/index.vue'
import { useStore } from '../../stores/list'

const router = useRouter()
const store = useStore()

const handleRouterPush = () => {
  store.setActive(1)
  router.push('/')
}
</script>

<template>
  <header class="header-wrap">
    <h1 @click="handleRouterPush">LOGO</h1>
    <SearchBar />
  </header>
</template>

<style scoped lang="scss">
.header-wrap {
  width: 100%;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999;
  h1 {
    font-size: 28px;
    color: var(--primary-color);
    cursor: pointer;
  }
}
</style>