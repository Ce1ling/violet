<script setup lang="ts">
import { ref, reactive } from 'vue'
import Contents from '../Contents/index.vue'
import Examples from './Examples.vue'
import Apis from './Apis.vue'
import buttonMD from '../../../docs/components/button.md?raw'

const isExamplePage = ref(true)
const exampleContents = reactive([
  '基础用法', '加载状态', '禁用状态', '文字类型', 
  '自定义背景颜色', '自定义文字颜色'
])
const apiContents = reactive(['props'])
</script>

<template>
  <section class="content">
    <h1 class="title">Button 按钮</h1>
    <p class="desc">基础按钮组件</p>
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
    <v-md-preview :text="buttonMD" ></v-md-preview>
    <component 
      :is="isExamplePage ? Examples : Apis" 
      :anchors="exampleContents" 
    />
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
  padding: 0 10px;
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
      transition: all var(--animation-duration);
    }
  }
}
</style>