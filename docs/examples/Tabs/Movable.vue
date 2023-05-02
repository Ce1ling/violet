<script setup lang="ts">
import { ref } from 'vue'

const list = ref([
  { name: '1', label: 'Vue', content: 'Vue，渐进式 JavaScript 框架' },
  { name: '2', label: 'React', content: 'React，用于构建用户界面的 JavaScript 库' },
  { name: '3', label: 'Svelte', content: 'Svelte，控制性增强的 Web 应用程序' },
  { name: '4', label: 'Solid', content: 'Solid，用于构建用户界面的简单且高性能的响应式' }
])
const active = ref('1')
const handleRemove = (name: string) => {
  list.value = list.value.filter(v => v.name !== name)
}
</script>

<template>
  <vi-tabs v-model="active" removable @tab-remove="handleRemove">
    <vi-tab 
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      :label="item.label">
      {{ item.content }}
    </vi-tab>
  </vi-tabs>
</template>