<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-drawer v-model="visible" title="外部" width="40%" :show-close="false">
    <template #header>
      <h4>定义头部</h4>
    </template>
    <p> 主体内容 </p>
    <template #footer>
      <span>定义底部</span>
      <vi-button type="info" @click="visible = false">取消</vi-button>
      <vi-button @click="visible = false">确定</vi-button>
    </template>
  </vi-drawer>
</template>