<script setup lang="ts">
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(true)
</script>

<template>
  <vi-flex gap="18px">
    <vi-switch v-model="checked1" on-text="开" off-text="关" is-inside />
    <vi-switch v-model="checked2" on-icon="Check" off-icon="Close" is-inside />
  </vi-flex>
</template>