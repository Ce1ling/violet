<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(1)
</script>

<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="value1" :to-fixed="1" />
    <vi-stepper v-model="value2" :to-fixed="2" :step="0.3" />
    <vi-stepper v-model="value3" :to-fixed="3" :step="0.03" />
  </vi-flex>
</template>