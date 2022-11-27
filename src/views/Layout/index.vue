<script setup lang="ts">
import { ref, reactive } from 'vue';
import Contents from '../Contents/index.vue'
import Examples from './Examples.vue'
import Apis from './Apis.vue'

const isExamplePage = ref(true)
const exampleContents = reactive([
  { title: 'layout example', anchor: '基础用法' }
])
const apiContents = reactive([
  { title: 'layout api', anchor: 'props' }
])
</script>

<template>
  <section class="content">
    <h1 class="title">Layout 布局</h1>
    <p class="desc">快速创建页面布局</p>
    <div class="tabs-wrap">
      <div 
        class="tab-item" 
        :class="{ active: isExamplePage }" 
        @click="isExamplePage = true">
        示例
      </div>
      <div 
        class="tab-item" 
        :class="{ active: !isExamplePage }" 
        @click="isExamplePage = false">
        API
      </div>
    </div>
    <component :is="isExamplePage ? Examples : Apis" />
  </section>
  <Contents 
    class="contents" 
    :list="isExamplePage ? exampleContents : apiContents" 
  />
</template>

<style scoped lang="scss">
.active {
  background-color: var(--primary-color) !important;
  color: #fff !important;
}
.content {
  .tabs-wrap {
    display: flex;
    gap: 5px;
    justify-content: center;
    width: 160px;
    padding: 8px 0;
    margin: 8px 0;
    background-color: #eeeeee;
    border-radius: 5px;
    .tab-item {
      cursor: pointer;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
</style>