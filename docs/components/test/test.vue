<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('1')

</script>

<template>
  <div class="test">
    <vi-flex align="center" gap="18px">
      基础
      <vi-radio-group v-model="val1">
        <vi-radio label="1">option1</vi-radio>
        <vi-radio label="2">option2</vi-radio>
        <vi-radio label="3">option3</vi-radio>
      </vi-radio-group>
    </vi-flex>
  </div>
</template>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>