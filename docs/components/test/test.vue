<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('1')
const val2 = ref('2')

const tabs = ref([
  { name: '1', label: 'tab1', content: 'content 1' },
  { name: '2', label: 'tab2', content: 'content 2' },
  { name: '3', label: 'tab3', content: 'content 3' },
  { name: '4', label: 'tab4', content: 'content 4' },
  { name: '5', label: 'tab5', content: 'content 5' },
  { name: '6', label: 'tab6', content: 'content 6' },
])

const remove = (name: string) => {
  tabs.value = tabs.value.filter(item => item.name !== name)
}
const reset = () => {
  tabs.value = [
    { name: '1', label: 'tab1', content: 'content 1' },
    { name: '2', label: 'tab2', content: 'content 2' },
    { name: '3', label: 'tab3', content: 'content 3' },
    { name: '4', label: 'tab4', content: 'content 4' },
    { name: '5', label: 'tab5', content: 'content 5' },
    { name: '6', label: 'tab6', content: 'content 6' },
  ]
}
const change = (val: string, oVal: string) => {
  console.log('change', val, oVal)
}
</script>

<template>
  <div class="test">
    <vi-button @click="reset">重置数据</vi-button>
    <vi-tabs v-model="val1" closable @tab-remove="remove" @change="change">
      <vi-tab 
        v-for="tab in tabs"
        :name="tab.name"
        :label="tab.label" 
      >{{ tab.content }}</vi-tab>
    </vi-tabs>
    <vi-tabs v-model="val2">
      <vi-tab name="1" label="label1">1</vi-tab>
      <vi-tab name="2" label="label2">2</vi-tab>
      <vi-tab name="3" label="label3">3</vi-tab>
    </vi-tabs>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>