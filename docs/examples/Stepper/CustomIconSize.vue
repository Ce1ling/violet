<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(1)
</script>

<template>
  <vi-flex gap="18px">
    <vi-stepper v-model="value1" icon-size="22px" />
    <vi-stepper v-model="value2" position="left" icon-size="16px" />
    <vi-stepper v-model="value3" position="right" icon-size="16px" />
  </vi-flex>
</template>