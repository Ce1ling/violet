<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(true)
</script>

<template>
  <vi-flex gap="18px">
    <vi-switch v-model="checked1" on-color="#0000ff" />
    <vi-switch v-model="checked2" on-color="#13ce66" off-color="#ff0000" />
  </vi-flex>
</template>
