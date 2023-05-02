<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <vi-flex direction="column" gap="18px">
    <vi-input v-model="value1" placeholder="限制输入 10 个字符" limit="10" />
    <vi-input v-model="value2" placeholder="显示限制输入" limit="10" show-limit />
    <vi-input v-model="value3" placeholder="自定义分隔符" limit="10" show-limit limit-separator=" - " />
  </vi-flex>
</template>