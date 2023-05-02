<script setup lang="ts">
import { ref } from 'vue'

const value = ref('1')
</script>

<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio-group v-model="value" gap="28px">
      <vi-radio label="1">写代码</vi-radio>
      <vi-radio label="2" disabled>删代码</vi-radio>
      <vi-radio label="3">改代码</vi-radio>
      <vi-radio label="4">看代码</vi-radio>
    </vi-radio-group>
  </vi-flex>
</template>