<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-dialog v-model="visible" title="隐藏遮罩层" :mask="false">
    无遮罩层
  </vi-dialog>
</template>