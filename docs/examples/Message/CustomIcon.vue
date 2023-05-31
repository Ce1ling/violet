<script lang="ts" setup>
import { Message } from '../../../packages/components/Message'

const custome = () => {
  Message({
    type: 'primary',
    content: '自定义图标',
    prefix: 'Home'
  })
}
</script>

<template>
  <vi-button @click="custome">自定义图标</vi-button>
</template>