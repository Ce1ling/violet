<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>

<template>
  <vi-stepper v-model="value" />
</template>