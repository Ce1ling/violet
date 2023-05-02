<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<template>
  <vi-flex direction="column" gap="18px">
    <vi-input v-model="value1" type="textarea" placeholder="文本域" />
    <vi-input v-model="value2" type="textarea" placeholder="文本域（自定义高度）" rows="5" />
    <vi-input v-model="value3" type="textarea" placeholder="文本域（限制输入）" limit="30" show-limit />
  </vi-flex>
</template>