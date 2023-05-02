<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <vi-flex gap="18px">
    <vi-switch v-model="checked" on-icon="Check" off-icon="Close">
      <template #on> On </template>
      <template #off> Off </template>
    </vi-switch>
    <vi-switch v-model="checked" on-icon="Check" off-icon="Close" is-inside width="50px">
      <template #on> On </template>
      <template #off> Off </template>
    </vi-switch>
  </vi-flex>
</template>