<script setup lang="ts">
import { ref, watch } from 'vue'

const checked = ref<boolean>(true)
watch(checked, (n) => {
  console.log('outside change', n);
})

</script>

<template>
  <div class="test">
    <vi-switch v-model="checked" on-color="blue" off-color="red" />
  </div>
</template>

<style scoped>
.test {
  display: flex;
  align-items: center;
  gap: 18px;
}
</style>