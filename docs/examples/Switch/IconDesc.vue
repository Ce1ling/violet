<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <vi-switch v-model="checked" on-icon="Check" off-icon="Close" />
</template>