<script lang="ts" setup>
const close = () => {
  console.log('closing')
}
</script>

<template>
  <vi-flex direction="column" gap="18px">
    <vi-alert closable pre-icon>
      文字关闭
      <template #close>Got It!</template>
    </vi-alert>
    <vi-alert type="success" closable pre-icon>
      其他图标关闭
      <template #close> <vi-icon name="VisibilityOff" /> </template>
    </vi-alert>
    <vi-alert type="danger" closable pre-icon @close="close">触发 close 事件</vi-alert>
  </vi-flex>
</template>