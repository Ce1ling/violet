<script lang="ts" setup>
import { Message } from '../../../packages/components/Message'

const handleClose = () => {
  Message({
    closable: true,
    type: 'primary',
    content: '可手动关闭'
  })
}

const handleCloseAll = () => {
  Message.closeAll()
}
</script>

<template>
  <vi-row>
    <vi-button @click="handleClose">可手动关闭</vi-button>
    <vi-button type="danger" @click="handleCloseAll">关闭所有</vi-button>
  </vi-row>
</template>