<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开 Dialog</vi-button>
  <vi-dialog v-model="visible" width="30%" title="你知道吗">
    香菜是这个世界上最难吃的菜
    <template #footer>
      <vi-button @click="visible = false">确认</vi-button>
      <vi-button type="info" @click="visible = false">取消</vi-button>
    </template>
  </vi-dialog>
</template>