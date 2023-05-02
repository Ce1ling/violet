<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const open = () => {
  console.log('dialog open')
}
const close = () => {
  console.log('dialog close')
}
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-dialog 
    v-model="visible" 
    width="30%" 
    title="点击遮罩层" 
    box-center 
    :click-mask-close="false"
    @open="open"
    @close="close">
    试着点击遮罩层
  </vi-dialog>
</template>