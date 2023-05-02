<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-dialog v-model="visible" title="解锁滚动条" :lock-scroll="false">
    试着滚动一下鼠标滚轮
  </vi-dialog>
</template>