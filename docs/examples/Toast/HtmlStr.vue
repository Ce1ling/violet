<script lang="ts" setup>
import { Toast } from '../../../packages/components/Toast'

const handleHtmlStr = () => {
  Toast({
    isHtmlStr: true,
    type: 'primary',
    content: '<b>这是 HTML 字符串内容</b>'
  })
}
</script>

<template>
  <vi-button @click="handleHtmlStr">HTML 字符串</vi-button>
</template>