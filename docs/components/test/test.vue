<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(false)
const val2 = ref(false)
const val3 = ref(true)
const val4 = ref(['group 1'])
const val5 = ref(['min 1'])

</script>

<template>
  <div class="test">
    <vi-flex align="center" gap="18px">
      非 group
      <vi-checkbox v-model="val1" label="1">option1</vi-checkbox>
      <vi-checkbox v-model="val2" label="1">option1</vi-checkbox>
      <vi-checkbox v-model="val3" label="2">option2</vi-checkbox>
    </vi-flex>
    <vi-flex align="center" gap="18px">
      group
      <vi-checkbox-group v-model="val4">
        <vi-checkbox label="group 1">option1</vi-checkbox>
        <vi-checkbox label="group 2">option2</vi-checkbox>
        <vi-checkbox label="group 3">option3</vi-checkbox>
      </vi-checkbox-group>
    </vi-flex>
    <vi-flex align="center" gap="18px">
      group min max
      <vi-checkbox-group v-model="val5" :min="1" :max="3">
        <vi-checkbox label="min 1">option1</vi-checkbox>
        <vi-checkbox label="min 2">option2</vi-checkbox>
        <vi-checkbox label="min 3">option3</vi-checkbox>
        <vi-checkbox label="min 4">option4</vi-checkbox>
      </vi-checkbox-group>
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