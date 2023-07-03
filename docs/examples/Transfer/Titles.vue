<script lang="ts" setup>
import { ref } from 'vue'


const value = ref([])
const list = ref([
  { id: '0', label: 'Vue', checked: false, disabled: false},
  { id: '1', label: 'React', checked: false, disabled: false},
  { id: '2', label: 'Svelte', checked: false, disabled: false },
  { id: '3', label: 'Node.js', checked: false, disabled: false },
  { id: '4', label: 'Express', checked: false, disabled: true },
  { id: '5', label: 'Next.js', checked: false, disabled: false },
  { id: '6', label: 'Uniapp', checked: false, disabled: true },
  { id: '7', label: 'Nuxt.js', checked: false, disabled: false },
  { id: '8', label: 'Element Plus', checked: false, disabled: false },
  { id: '9', label: 'Ant Design', checked: false, disabled: false },
])
</script>

<template>
  <vi-transfer 
    v-model="value" 
    :list="list" 
    show-total 
    :titles="['容器1', '容器2']"
  />
</template>

<style scoped>
</style>