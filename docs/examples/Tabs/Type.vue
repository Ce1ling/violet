<script lang="ts" setup>
import { ref } from 'vue'

const active1 = ref('1')
const active2 = ref('2')
</script>

<template>
  <vi-flex direction="column" gap="18px">
    <vi-tabs v-model="active1" type="normal">
      <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
      <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
      <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
      <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
    </vi-tabs>

    <vi-tabs v-model="active2" type="inner-card">
      <vi-tab label="Vue" name="1">Vue，渐进式 JavaScript 框架</vi-tab>
      <vi-tab label="React" name="2">React，用于构建用户界面的 JavaScript 库</vi-tab>
      <vi-tab label="Svelte" name="3">Svelte，控制性增强的 Web 应用程序</vi-tab>
      <vi-tab label="Solid" name="4">Solid，用于构建用户界面的简单且高性能的响应式</vi-tab>
    </vi-tabs>
  </vi-flex>
</template>