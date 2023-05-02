<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <vi-input v-model="value" placeholder="添加前置与后置内容" clearable>
    <template #prepend>http://</template>
    <template #append>.com</template>
  </vi-input>
</template>