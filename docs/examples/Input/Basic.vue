<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <vi-input v-model="value" placeholder="基础 Input" />
</template>