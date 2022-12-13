<script setup lang="ts">
import { provide, ref } from 'vue'


const active = ref(0)
provide('active', active)

const handleTabClick = (i: number) => {
  if (active.value === i) { return }
  active.value = i
  
}
</script>

<template>
  <div class="vi-tabs-wrap">
    <div class="vi-tabs__header">
      <div class="vi-tab" 
        v-for="(i, index) in 3"
        :key="index"
        :class="{ active: active === index }" 
        @click="handleTabClick(index)">
        tab {{ i }}
      </div>
    </div>
    <div class="vi-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  color: #fff;
}

.vi-tabs-wrap {
  .vi-tabs__header {
    display: flex;
    gap: 10px;
    // border: 1px solid black;
    border-radius: var(--border-radius);
    user-select: none;
    background-color: #eee;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      background-color: var(--primary-color);
      border-radius: var(--border-radius);
      width: 80px;
      height: 100%;
      position: absolute;
      left: v-bind(active);
      top: 0;
      z-index: -1;
      transition: left .3s;
      cursor: pointer;
    }
    .vi-tab {
      max-width: 80px;
      width: 80px;
      padding: 10px 20px;
      border-radius: var(--border-radius);
      cursor: pointer;
      text-align: center;
      transition: color .3s;
    }
  }
}
</style>