<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(1)
</script>

<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="value1" position="left" :min="1" :max="5" />
    <vi-stepper v-model="value2" position="right" :min="1" :max="5" />
  </vi-flex>
</template>