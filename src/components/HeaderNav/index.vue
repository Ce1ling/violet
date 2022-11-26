<script setup lang="ts">
import { ref } from 'vue'

const searchVal = ref('')
const handleSearch = () => {
  console.log(`根据关键词 ${searchVal.value} 进行搜索`)
}
</script>

<template>
  <header class="header-wrap">
    <h1>LOGO</h1>
    <div class="search-wrap">
      <i @click="handleSearch">icon</i>
      <input 
        type="text" 
        placeholder="请输入搜索内容" 
        v-model.trim="searchVal"
        @keyup.enter="handleSearch">
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--primary-color);
  padding: 20px;
  h1 {
    font-size: 28px;
    color: var(--primary-color);
    cursor: pointer;
  }
  .search-wrap {
    padding: 0 5px;
    border: 1px solid gray;
    border-radius: 50px;
    overflow: hidden;
    input {
      padding: 5px;
      border: none;
    }
  }
}
</style>