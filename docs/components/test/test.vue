<script setup lang="ts">
import { Toast } from '../../../packages/components/Toast'


const click = (type: string) => {
  // Toast('hi toast')
  Toast[type]('some text')
}
</script>

<template>
  <div class="test">
    <vi-button @click="click('primary')">primary</vi-button>
    <vi-button type="success" @click="click('success')">success</vi-button>
    <vi-button type="info" @click="click('info')">info</vi-button>
    <vi-button type="warning" @click="click('warning')">warning</vi-button>
    <vi-button type="danger" @click="click('danger')">danger</vi-button>
  </div>
</template>

<style scoped>
.test {
  display: flex;
  align-items: center;
  gap: 18px;
}
</style>