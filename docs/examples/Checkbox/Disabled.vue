<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(true)
const value4 = ref(false)
</script>

<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox v-model="value1" label="AK-47" disabled />
    <vi-checkbox v-model="value2" label="AWP" />
    <vi-checkbox v-model="value3" label="M4A4" />
    <vi-checkbox v-model="value4" label="M4A1-S" disabled />
  </vi-flex>
</template>