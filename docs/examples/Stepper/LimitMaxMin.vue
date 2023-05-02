<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>

<template>
  <vi-flex align="center" gap="8px">
    <span>仅使用 min：</span>
    <vi-stepper v-model="value1" :min="1" />
    <span>一起使用：</span>
    <vi-stepper v-model="value2" :min="1" :max="3" />
  </vi-flex>
</template>