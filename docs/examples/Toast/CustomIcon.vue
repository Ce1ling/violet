<script lang="ts" setup>
import { Toast } from '../../../packages/components/Toast'

const custome = () => {
  Toast({
    type: 'primary',
    content: '自定义图标',
    prefix: 'Home'
  })
}
</script>

<template>
  <vi-button @click="custome">自定义图标</vi-button>
</template>