<script setup lang="ts">
import { ref } from 'vue'

const value = ref<boolean>(true)

</script>

<template>
  <div class="test">
    <vi-switch v-model="value" on-color="blue" off-color="red" />
    <vi-switch v-model="value" disabled />
    <vi-switch v-model="value" loading />
  </div>
</template>

<style scoped>
.test {
  display: flex;
  align-items: center;
  gap: 18px;
}
</style>