<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(false)
const val3 = ref(true)
const val4 = ref(false)
const val5 = ref(true)
const val6 = ref(false)
const val7 = ref(true)
const val8 = ref(false)
const val9 = ref(true)
const val10 = ref(false)
const val11 = ref(true)
const val12 = ref(false)
const val13 = ref(true)

</script>

<template>
  <div class="test">
    <vi-flex align="center" gap="18px">
      基础
      <vi-checkbox v-model="val1" label="checkbox1" />
      <vi-checkbox v-model="val2" label="checkbox2" />
      <vi-checkbox v-model="val3" label="checkbox3" />
    </vi-flex>

    <vi-flex align="center" gap="18px">
      禁用
      <vi-checkbox v-model="val4" label="checkbox1" disabled />
      <vi-checkbox v-model="val5" label="checkbox2" />
      <vi-checkbox v-model="val6" label="checkbox3" />
    </vi-flex>

    <vi-flex align="center" gap="18px">
      边框
      <vi-checkbox v-model="val7" label="checkbox1" border />
      <vi-checkbox v-model="val8" label="checkbox2" border />
      <vi-checkbox v-model="val9" label="checkbox3" disabled border />
    </vi-flex>

    <vi-flex align="center" gap="18px">
      按钮
      <vi-checkbox-btn>
        <vi-checkbox v-model="val10" label="checkbox1" />
        <vi-checkbox v-model="val11" label="checkbox2" disabled />
        <vi-checkbox v-model="val12" label="checkbox3" disabled />
        <vi-checkbox v-model="val13" label="checkbox4">default slot</vi-checkbox>
      </vi-checkbox-btn>
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