<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <vi-button @click="visible1 = true">打开</vi-button>
  <vi-drawer v-model="visible1" title="外部" width="40%">
    <vi-button @click="visible2 = true">打开内部</vi-button>
    <vi-drawer v-model="visible2" append-to-body>内部</vi-drawer>
  </vi-drawer>
</template>