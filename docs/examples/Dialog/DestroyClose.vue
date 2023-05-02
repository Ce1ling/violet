<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-dialog v-model="visible" width="30%" title="关闭时销毁" destroy>
    在开发者工具中的 Elements 中查看吧！
  </vi-dialog>
</template>