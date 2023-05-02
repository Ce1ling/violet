<script lang="ts" setup>
import { Toast } from '../../../packages/components/Toast'

const handleUnclosed = () => {
  Toast({
    closable: true,
    type: 'primary',
    content: '不会自动关闭，不信你可以等，信了点这里 →',
    duration: 0
  })
}
</script>

<template>
  <vi-button @click="handleUnclosed">不自动关闭</vi-button>
</template>