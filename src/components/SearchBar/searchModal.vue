<script setup lang="ts">
import { nextTick, reactive, ref, watch } from 'vue'
import { hidden } from './useSearch'
import ViIcon from '../../../packages/components/Icon/index.vue'


const searchVal = ref('')
const isSearching = ref(false)
const showClearBtn = ref(false)
type Results = Array<{
  id: string 
  title: string
}>
const results = reactive<Results>([])

watch(searchVal, (val) => {
  if (!val) {
    showClearBtn.value = false
    results.splice(0, results.length)
    return 
  }
  showClearBtn.value = true
})

const handleSearch = () => {
  if (isSearching.value) { return }
  isSearching.value = true
  setTimeout(() => {
    isSearching.value = false
    // test
    new Array({}).map((_, i) => {
      results.push({ 
        id: `id${++i}`, 
        title: `测试：${Math.random().toString().slice(2, 10)}` 
      })
    })
  }, 500);
}

// 自动获取焦点
const searchInp = ref<HTMLInputElement | null>(null)
nextTick(() => searchInp.value?.focus())

</script>

<template>
  <div class="search-modal" @click="hidden">
    <div class="search-dialog" @click.stop="void">
      <header class="search-header">
        <label for="search-inp">
          <vi-icon 
            v-if="isSearching"
            name="loading" size="30px" 
            color="var(--primary-color)" />
          <vi-icon 
            v-else
            name="search" size="30px" 
            color="var(--primary-color)" />
        </label>
        <input 
          type="text" placeholder="请输入内容" autocomplete="off"
          id="search-inp" v-model.trim="searchVal"
          ref="searchInp" @keydown.enter="handleSearch"
        />
        <vi-icon 
          v-show="showClearBtn" 
          name="close" size="30px" 
          hover-color="var(--primary-color)"
          @click="searchVal = ''"
        />
      </header>
      <section class="search-body">
        <h1>Results</h1>
        <h3 v-show="!results.length">没有内容</h3>
        <ul class="result-list">
          <li class="result-item"
            v-for="item in results" :key="item.id">
            {{ item.title }}
          </li>
        </ul>
      </section>
      <footer class="search-footer">
        <span>Powered by</span>
        <a href="https://github.com/Ce1ling" target="_blank"> L1en </a>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-modal {
  width: 100vw;
  height: 100vh;
  background-color: #eeeeeeaa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .search-dialog {
    width: 500px;
    max-width: 500px;
    padding: 20px;
    background-color: #fff;
    border-radius: var(--border-radius);
    box-shadow: 0 0 10px #ddd;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    .search-header {
      display: flex;
      align-items: center;
      padding: 0 5px;
      padding-right: 10px;
      border: 2px solid var(--primary-color);
      border-radius: var(--border-radius);
      background-color: #eee;
      overflow: hidden;
      #search-inp {
        width: 100%;
        height: 50px;
        padding: 5px;
        border: none;
        color: #555;
        font-size: 18px;
        font-weight: 600;
        background-color: #eee;
        &::placeholder { font-weight: normal; }
      }
    }
    .search-body {
      margin: 10px 0;
      h1 { font-size: 18px; }
      h3 {
        margin: 20px 0;
        text-align: center;
      }
      .result-list {
        max-height: 500px;
        margin: 10px 0;
        overflow-y: auto;
        .result-item {
          padding: 20px 10px;
          margin: 10px;
          font-size: 18px;
          background-color: #fff;
          box-shadow: 2px 2px 5px 2px #ddd;
          border-radius: var(--border-radius);
          transition: all .2s;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-color: var(--primary-color);
          }
        }
      }
    }
    .search-footer {
      text-align: right;
    }
  }
}
</style>