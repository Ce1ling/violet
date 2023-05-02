<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<template>
  <vi-row>
    <vi-button @click="visible1 = true">打开简写的 Dialog</vi-button>
    <vi-button @click="visible2 = true">打开自定义的 Dialog</vi-button>
  </vi-row>
  <vi-dialog 
    v-model="visible1" 
    width="30%" 
    title="简写形式" 
    content="使用 content 属性简写"
    :show-close-btn="false"
  />
  <vi-dialog 
    v-model="visible2" 
    width="30%" 
    :show-close-btn="false">
    <template #header>
      <span>自定义的头部</span>
      <vi-button type="danger" @click="visible2 = false">
        <vi-icon name="Close" />
      </vi-button>
    </template>
    自定义主体内容
    <template #footer>
      自定义底部
      <vi-button @click="visible2 = false">关闭</vi-button>
    </template>
  </vi-dialog>
</template>