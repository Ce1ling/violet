<script setup lang="ts">
import { ref } from 'vue'

const value = ref('1')
</script>

<template>
  <vi-flex gap="18px">
    <span>你喜欢干什么？</span>
    <vi-radio v-model="value" label="1" border>写代码</vi-radio>
    <vi-radio v-model="value" label="2" border disabled>删代码</vi-radio>
    <vi-radio v-model="value" label="3" border>改代码</vi-radio>
    <vi-radio v-model="value" label="4" border>看代码</vi-radio>
  </vi-flex>
</template>