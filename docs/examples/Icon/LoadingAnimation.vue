<script lang="ts" setup>
import { ref } from 'vue'

const isLoading = ref(false)
</script>

<template>
  <vi-row align="center">
    <vi-icon name="Loading" size="28px" loading />
    <vi-icon name="Close" size="28px" :loading="isLoading" />
    <vi-button @click="isLoading = !isLoading">测试</vi-button>
  </vi-row>
</template>