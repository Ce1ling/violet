<script lang="ts" setup>
import { Message } from '../../../packages/components/Message'

const handleClose = () => {
  Message({
    closable: true,
    type: 'primary',
    content: '可手动关闭'
  })
}
</script>

<template>
  <vi-button @click="handleClose">可手动关闭</vi-button>
</template>