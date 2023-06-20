<script setup lang="ts">
import { Message } from '../../../packages/components/Message'

const handlePrimary = () => {
  Message.primary('primary 提示')
}

const handleSuccess = () => {
  Message.success('success 提示')
}

const handleInfo = () => {
  Message.info('info 提示')
}

const handleWarning = () => {
  Message.warning('warning 提示')
}

const handleDanger = () => {
  Message.danger('danger 提示')
}
</script>

<template>
  <vi-row>
    <vi-button @click="handlePrimary">主要提示</vi-button>
    <vi-button type="success" @click="handleSuccess">成功提示</vi-button>
    <vi-button type="info" @click="handleInfo">信息提示</vi-button>
    <vi-button type="warning" @click="handleWarning">警告提示</vi-button>
    <vi-button type="danger" @click="handleDanger">危险提示</vi-button>
  </vi-row>
</template>