<script setup lang="ts">
import { ref } from 'vue'

const checked = ref<boolean>(true)

</script>

<template>
  <div class="test">
    <!-- 自定义背景色 -->
    <vi-switch v-model="checked" on-color="blue" off-color="red" />
    <!-- 禁用状态 -->
    <vi-switch v-model="checked" disabled />
    <!-- 加载状态 -->
    <vi-switch v-model="checked" loading />
    <!-- 文字描述 -->
    <vi-switch 
      v-model="checked" 
      on-color="orange" 
      on-content="close" 
      off-content="open" 
    />
    <!-- 在内部的文字描述 -->
    <vi-switch 
      v-model="checked" 
      on-color="skyblue" 
      on-content="开" 
      off-content="关" 
      is-inside
    />
  </div>
</template>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}
</style>