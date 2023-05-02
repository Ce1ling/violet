<script lang="ts" setup>
import { Toast } from '../../../packages/components/Toast'

const handleClose = () => {
  Toast({
    closable: true,
    type: 'primary',
    content: '可手动关闭'
  })
}
</script>

<template>
  <vi-button @click="handleClose">可手动关闭</vi-button>
</template>