<script setup lang="ts">
import { ref } from 'vue'

const active = ref('1')
const change = () => {
  const state = active.value <= '3' ? Number(active.value) + 1 : 1
  active.value = state.toString()
}
</script>

<template>
  <vi-button @click="change">动态切换</vi-button> <br />
  <vi-tabs v-model="active">
    <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
    <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
    <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
    <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
  </vi-tabs>
</template>