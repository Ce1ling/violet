<script setup lang="ts">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'


const tabs = reactive([
  { id: nanoid(), label: 'example', content: '这是示例页' },
  { id: nanoid(), label: 'api', content: '这是 API 页' }
])

const handle = (i: number) => {
  console.log('handle', i)
}
</script>

<template>
  <div>
    <vi-tabs @change="handle" :data="tabs">
      <vi-tab 
        v-for="tab in tabs" 
        :key="tab" :label="tab.label">
        {{ tab.content }}
      </vi-tab>
    </vi-tabs>
  </div>
</template>

<style scoped>
</style>