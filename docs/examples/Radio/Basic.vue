<script setup lang="ts">
import { ref } from 'vue'

const value = ref('1')
</script>

<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="value" label="1">写代码</vi-radio>
    <vi-radio v-model="value" label="2">删代码</vi-radio>
    <vi-radio v-model="value" label="3">改代码</vi-radio>
    <vi-radio v-model="value" label="4">看代码</vi-radio>
  </vi-flex>
</template>