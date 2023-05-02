<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['AK-47'])
</script>

<template>
  <vi-flex gap="18px">
    <span>请选择你的武器</span>
    <vi-checkbox-group v-model="value" :min="1" :max="3">
      <vi-checkbox label="AK-47" />
      <vi-checkbox label="AWP" />
      <vi-checkbox label="M4A4" />
      <vi-checkbox label="M4A1-S" />
    </vi-checkbox-group>
  </vi-flex>
</template>