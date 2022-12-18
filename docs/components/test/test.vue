<script setup lang="ts">
import { ref, reactive } from 'vue'
import { nanoid } from 'nanoid'


const tabs = reactive([
  { id: nanoid(), label: 'example', content: '这是示例页' },
  { id: nanoid(), label: 'api', content: '这是 API 页' }
])
const tab = ref('1')

const handle = (i: number) => {
  console.log('handle', i)
}
</script>

<template>
  <div>
    <vi-tabs @change="handle" :active="tab">
      <vi-tab label="tab1" name="1">1</vi-tab>
      <vi-tab label="tab2222" name="2">2</vi-tab>
      <vi-tab label="tab3" name="3">3</vi-tab>
    </vi-tabs>
  </div>
</template>

<style scoped>
</style>