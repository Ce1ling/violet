<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <vi-button @click="visible1 = true">内容居中</vi-button>
  <vi-dialog v-model="visible1" title="嵌套 Dialog" center>
    这是内容
    <vi-dialog 
      v-model="visible2" 
      width="30%" 
      title="整体居中" 
      content="我在屏幕中间"
      box-center
      :show-close-btn="false"
    />
    <template #footer>
      <vi-button @click="visible2 = true">整体居中</vi-button>
    </template>
  </vi-dialog>
</template>