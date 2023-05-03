<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import SearchModal from './searchModal.vue'
import { useAppend } from '../../hooks/useAppend'


const [append] = useAppend(SearchModal, document.body)

const onKeyDown = (e) => {
  // 热键为 `Ctrl + k`
  if (e.ctrlKey && (e.key === 'k')) { 
    e.preventDefault()
    append()
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))

onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))

</script>

<template>
  <button class="search-btn" @click="append">
    <vi-icon name="Search" />
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
  border-radius: var(--vi-base-radius);
  cursor: pointer;
  background-color: var(--vp-c-bg-alpha-with-backdrop);
  color: #666;
  transition: all .3s;
  margin-right: 18px;
  &:hover { 
    background-color: var(--vp-c-bg-alpha-with-backdrop); 
    border-color: var(--vi-color-primary); 
  }
  .keyboard {
    margin: 0 4px;
    &::before { content: 'CTRL'; }
    &::after { content: 'K'; }
  }
}
</style>