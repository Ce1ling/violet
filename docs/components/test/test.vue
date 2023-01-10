<script setup lang="ts">
import { Toast } from '../../../packages/components/Toast'


const click = () => {
  // Toast('hi toast')
  Toast.primary('some text')
}
</script>

<template>
  <div>
    <vi-button @click="click">toast</vi-button>
  </div>
</template>

<style scoped>
</style>