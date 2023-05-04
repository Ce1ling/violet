<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useTimeout } from '../../../../../packages/hooks/useTimeout'
import { useScrollVisible } from '../../../../../packages/hooks/useScrollVisible'
import { 
  Icon as ViIcon,
  Mask as ViMask
} from '../../../../../packages/components/index'

import type { UseAppendEmits } from '../../../../../packages/hooks/useAppend'


interface Emits extends UseAppendEmits {
  // 虽然继承了，此处不写也可以正常使用，但 Vue 会报警告
  (e: 'useAppend:append'): void
  (e: 'useAppend:remove'): void
}

type Results = {
  id: string 
  title: string
}[]

const emit = defineEmits<Emits>()

const visible = ref(false)
const searchVal = ref<string>('')
const isSearching = ref<boolean>(false)
const isFocus = ref<boolean>(false)
const searchInp = ref<HTMLInputElement>()
const results = ref<Results>([])

const searchIconColor = computed(() => isFocus.value 
  ? 'var(--doc-color-primary)' 
  : 'var(--doc-color-info)'
)

const handleSearch = () => {
  if (isSearching.value || !searchVal.value) { return }
  isSearching.value = true
  useTimeout(() => {
    isSearching.value = false
    // test
    Array.from([{}]).map((_, i) => {
      results.value.push({ 
        id: `id${++i}`, 
        title: `测试数据：${Math.random().toString().slice(2, 8)}` 
      })
    })
  }, 500)
}
const handleMaskClick = () => {
  emit('useAppend:remove')
}

watch(searchVal, val => {
  if (!val) {
    results.value.splice(0, results.value.length)
  }
})

onMounted(() => {
  useScrollVisible(visible, document.body, 'vi-scroll-hide')
  nextTick(() => searchInp.value?.focus())
  visible.value = true
})

onBeforeUnmount(() => {
  visible.value = false
})

</script>

<template>
  <Teleport to="body">
    <vi-mask :visible="visible" @click="handleMaskClick">
      <div class="search-dialog" @click.stop="void">
        <header class="search-header" :class="{ 'is-focus': isFocus }">
          <label>
            <vi-icon 
              v-show="isSearching"
              name="Loading" 
              size="30px" 
              color="var(--vi-color-primary)" 
              loading 
            />
            <vi-icon 
              v-show="!isSearching"
              name="Search" 
              size="30px" 
              :color="searchIconColor" 
              @click="handleSearch"
            />
            <input 
              type="text" 
              placeholder="请输入内容" 
              autocomplete="off"
              class="search-input"
              ref="searchInp" 
              v-model.trim="searchVal"
              @keydown.enter="handleSearch"
              @focus="isFocus = true"
              @blur="isFocus = false"
            />
            <vi-icon 
              name="Close" 
              size="30px" 
              hover-color="var(--vi-color-primary)"
              v-show="searchVal.trim()" 
              @click="searchVal = ''"
            />
          </label>
        </header>
        <section class="search-body">
          <h2>Results</h2>
          <h3 v-show="!results.length">正在开发中，尽请期待...</h3>
          <ul class="result-list">
            <li 
              class="result-item"
              v-for="item in results" 
              :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </section>
        <footer class="search-footer">
          <span>Powered by</span>
          <a href="https://github.com/Ce1ling" target="_blank"> L1en </a>
        </footer>
      </div>
    </vi-mask>
  </Teleport>
</template>

<style scoped lang="scss">
@keyframes search-dialog-fade-up {
  from {
    transform: translate(-50%, -10%);
  }
  to {
    transform: translate(-50%, 0%);
  }
}

.search-dialog {
  width: 500px;
  padding: 20px;
  background-color: var(--vp-c-bg);
  border-radius: var(--doc-base-radius);
  box-shadow: 0 0 10px var(--doc-search-modal-shadow-color);
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  animation: search-dialog-fade-up .3s;
  .search-header {
    display: flex;
    align-items: center;
    padding: 0 5px;
    padding-right: 10px;
    border: 2px solid var(--doc-color-info);
    border-radius: var(--doc-base-radius);
    background-color: var(--vp-c-bg);
    overflow: hidden;
    transition: border-color .3s;
    &.is-focus {
      border-color: var(--doc-color-primary);
    }
    label {
      display: flex;
      align-items: center;
      width: 100%;
      :deep(.vi-icon svg) { transition: all .3s; }
    }
    .search-input {
      width: 100%;
      height: 50px;
      padding: 5px;
      border: none;
      font-size: 18px;
      font-weight: 600;
      background-color: var(--vp-c-bg);
      &::placeholder { font-weight: normal; color: #555; }
    }
  }
  .search-body {
    margin: 10px 0;
    h2 { font-size: 18px; }
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
        background-color: var(--vp-c-bg);
        box-shadow: 2px 2px 5px 2px var(--doc-search-result-item-shadow-color);
        border-radius: var(--vi-base-radius);
        transition: all .2s;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: var(--vi-color-primary);
        }
      }
    }
  }
  .search-footer {
    text-align: right;  
    > a { color: var(--vi-color-primary) }
  }
}
</style>