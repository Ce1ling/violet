<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <vi-row>
    <vi-switch v-model="value" size="small" />
    <vi-switch v-model="value" />
    <vi-switch v-model="value" size="large" />
  </vi-row>
</template>
