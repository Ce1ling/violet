<script setup lang="ts">
import { provide, ref } from 'vue'

type Item = { 
  id: string 
  label: string
  content: string
}
type Props = {
  data: Array<Item>
}
const props = defineProps<Props>()
const emit = defineEmits(['change'])


const active = ref('example')
provide('active', active)

const handleTabClick = (item: Item) => {
  if (active.value === item.label) { return }
  active.value = item.label
  emit('change', item)
}
</script>

<template>
  <div class="vi-tabs-wrap">
    <div class="vi-tabs__header">
      <div class="vi-tab" 
        v-for="item, i in data"
        :key="item.id"
        :class="{ active: active === item.label }" 
        @click="handleTabClick(item)">
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