<script setup lang="ts">
import { ref, reactive } from 'vue'
import { nanoid } from 'nanoid'


const tabs = reactive([
  { id: nanoid(), name: 'example', label: '示例', content: '这是示例页' },
  { id: nanoid(), name: 'api', label: 'API', content: '这是 API 页' }
])
const tab = ref('example')

const handle = (name: string, e: MouseEvent) => {
  console.log('tab-click', name, e.target)
}
</script>

<template>
  <div>
    <vi-tabs @tab-click="handle" :active="tab">
      <vi-tab 
        v-for="tab in tabs" :key="tab.id"
        :label="tab.label" :name="tab.name">
        {{ tab.content }}
      </vi-tab>
      <!-- <vi-tab label="tab1" name="1"> 1 </vi-tab>
      <vi-tab label="tab2" name="2"> 2 </vi-tab>
      <vi-tab label="tab3" name="3"> 3 </vi-tab> -->
      <!-- <vi-tab label="tab1" name="1"> 1 </vi-tab>
      <vi-tab label="tab2222" name="2"> 2 </vi-tab>
      <vi-tab label="tab3" name="3"> 3 </vi-tab>
      <vi-tab label="tab3" name="4"> 4 </vi-tab>
      <vi-tab label="tab3" name="5"> 5 </vi-tab>
      <vi-tab label="tab3" name="6"> 6 </vi-tab>
      <vi-tab label="tab3" name="7"> 7 </vi-tab>
      <vi-tab label="tab3" name="8"> 8 </vi-tab>
      <vi-tab label="tab3" name="9"> 9 </vi-tab>
      <vi-tab label="tab3" name="10"> 10 </vi-tab>
      <vi-tab label="tab3" name="11"> 11 </vi-tab>
      <vi-tab label="tab3" name="12"> 12 </vi-tab> -->
    </vi-tabs>
  </div>
</template>

<style scoped>
</style>