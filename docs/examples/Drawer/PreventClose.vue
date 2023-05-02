<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const beforeClose = (close: () => void) => {
 console.log('before close 阻止了关闭', close)
}
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-drawer v-model="visible" title="阻止关闭" :before-close="beforeClose">
    <span>试着点击右上角 "关闭按钮" 与 "遮罩层"。他们都无法关闭此 Drawer，但下方按钮可以。</span>
    <template #footer>
      <vi-button @click="visible = false">修改 v-model 关闭</vi-button>
    </template>
  </vi-drawer>
</template>