<script lang="ts" setup>
import { ref } from 'vue'

interface Item {
  id: string
  label: string
  checked: boolean
  disabled: boolean
}

const value = ref([])
const list = ref<Item[]>([
  { id: '0', label: '0', checked: false, disabled: false},
  { id: '1', label: '1', checked: false, disabled: false},
  { id: '2', label: '2', checked: false, disabled: false },
  { id: '3', label: '3', checked: false, disabled: false },
  { id: '4', label: '4', checked: false, disabled: true },
  { id: '5', label: '5', checked: false, disabled: false },
  { id: '6', label: '6', checked: false, disabled: true },
  { id: '7', label: '7', checked: false, disabled: false },
  { id: '8', label: '8', checked: false, disabled: false },
  { id: '9', label: '9', checked: false, disabled: false },
])
</script>

<template>
  <div>
    <vi-transfer v-model="value" :list="list" show-total />
  </div>
</template>

<style scoped>
</style>