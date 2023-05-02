<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <vi-switch v-model="checked" on-text="开" off-text="关" />
</template>