<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref('1')
const val2 = ref('1')
const val3 = ref('1')
const val4 = ref('1')
</script>

<template>
  <div class="test">
    <vi-flex align="center" gap="18px">
      基础
      <vi-radio v-model="val1" label="1">radio 1</vi-radio>
      <vi-radio v-model="val1" label="2">radio 2</vi-radio>
      <vi-radio v-model="val1" label="3">radio 3</vi-radio>
    </vi-flex>

    <vi-flex align="center" gap="18px">
      禁用
      <vi-radio v-model="val2" label="1">radio 1</vi-radio>
      <vi-radio v-model="val2" label="2">radio 2</vi-radio>
      <vi-radio v-model="val2" label="3" disabled>radio 3</vi-radio>
    </vi-flex>

    <vi-flex align="center" gap="18px">
      边框
      <vi-radio v-model="val3" label="1" border>radio 1</vi-radio>
      <vi-radio v-model="val3" label="2" border>radio 2</vi-radio>
      <vi-radio v-model="val3" label="3" disabled border>radio 3</vi-radio>
    </vi-flex>

    <vi-flex align="center" gap="18px">
      按钮
      <vi-radiobtn>
        <vi-radio v-model="val4" label="1">radio 1</vi-radio>
        <vi-radio v-model="val4" label="2">radio 2</vi-radio>
        <vi-radio v-model="val4" label="3" disabled>radio 3</vi-radio>
        <vi-radio v-model="val4" label="4">radio 4</vi-radio>
      </vi-radiobtn>
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