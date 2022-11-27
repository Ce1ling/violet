<script setup lang="ts">
import ViButton from '../../../packages/components/Button/index.vue'

const handleClick = () => {
  console.log('button click')
}
</script>

<template>
  <div>
    <vi-button 
      type="primary" 
      @click="handleClick" 
    >按钮</vi-button>
  </div>
</template>

<style scoped>
</style>