<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const movable = ref(true)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-dialog v-model="visible" width="30%" title="可移动(拖拽)" :movable="movable">
    将鼠标放到 header 区域，然后按下拖动。
    <vi-button @click="movable = !movable">
      切换为 {{ movable ? '不可移动' : '可移动' }}
    </vi-button>
  </vi-dialog>
</template>