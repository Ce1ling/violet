<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const open = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="test">
    <span>基础：</span>
    <vi-button @click="open">open</vi-button>
    <vi-dialog v-model="show" title="tip">
      dialog content
    </vi-dialog>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>