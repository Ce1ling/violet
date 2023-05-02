<script setup lang="ts">
import { Toast } from '../../../packages/components/Toast'

const handleClick = (type: string) => {
  Toast[type](`${type} toast 提示`)
}
</script>

<template>
  <vi-row>
    <vi-button @click="handleClick('primary')">主要提示</vi-button>
    <vi-button type="success" @click="handleClick('success')">成功提示</vi-button>
    <vi-button type="info" @click="handleClick('info')">信息提示</vi-button>
    <vi-button type="warning" @click="handleClick('warning')">警告提示</vi-button>
    <vi-button type="danger" @click="handleClick('danger')">危险提示</vi-button>
  </vi-row>
</template>