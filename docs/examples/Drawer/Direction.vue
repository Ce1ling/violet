<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const direction = ref('l-r')
</script>

<template>
  <vi-row align="center">
    <vi-radio-group v-model="direction">
      <vi-radio label="l-r">左边</vi-radio>
      <vi-radio label="r-l">右边</vi-radio>
      <vi-radio label="t-b">上面</vi-radio>
      <vi-radio label="b-t">下面</vi-radio>
    </vi-radio-group>
    <vi-button @click="visible = true">打开</vi-button>
  </vi-row>
  <vi-drawer v-model="visible" title="爱就一个字" :direction="direction"> 我只说一次 </vi-drawer>
</template>