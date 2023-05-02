<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <vi-button @click="visible = true">打开</vi-button>
  <vi-drawer v-model="visible" title="爱就一个字">
    我只说一次
    <template #footer>
      <vi-button type="info" @click="visible = false">取消</vi-button>
      <vi-button @click="visible = false">确定</vi-button>
    </template>
  </vi-drawer>
</template>