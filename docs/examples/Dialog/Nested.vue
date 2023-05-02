<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <vi-button @click="visible1 = true">打开 Dialog</vi-button>
  <vi-dialog v-model="visible1" title="嵌套 Dialog">
    <vi-button @click="visible2 = true">打开嵌套</vi-button>
    <vi-dialog 
      v-model="visible2" 
      width="30%" 
      title="我是一个" 
      content="在 Dialog 里面的 Dialog"
    />
  </vi-dialog>
</template>