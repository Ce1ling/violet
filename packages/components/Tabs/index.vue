<script setup lang="ts">
import { ref } from 'vue'


const active = ref('0px')
const handleTabClick = (i: number) => {
  active.value = i === 1 ? '0px' : '90px'
}
</script>

<template>
  <div class="vi-tabs">
    <div class="vi-tab" :class="{ active: active === '0px' }" 
      @click="handleTabClick(1)">
      tab 1
    </div>
    <div class="vi-tab" :class="{ active: active === '90px' }" 
      @click="handleTabClick(2)">
      tab 2
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  color: #fff;
}

.vi-tabs {
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
</style>