<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <vi-stepper v-model="value" :step="3" />
</template>