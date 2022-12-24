<script setup lang="ts">
import { onMounted } from 'vue'
import { useSearch } from '../../hooks/useSearch'

const { show } = useSearch()

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'k')) {
      e.preventDefault()
      show()
    }
  })
})

</script>

<template>
  <button class="search-btn" @click="show">
    <vi-icon name="search" />
    <div class="keyboard"> + </div>
    <span> 唤起搜索 </span>
  </button>
</template>

<style scoped lang="scss">
.search-btn {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  padding-right: 12px;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  color: #666;
  transition: all .3s;
  &:hover { 
    background-color: var(--vp-c-bg-alpha-with-backdrop); 
    border-color: var(--primary-color); 
  }
  .keyboard {
    margin: 0 4px;
    &::before { content: 'CTRL'; }
    &::after { content: 'K'; }
  }
}
</style>