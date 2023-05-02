<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <vi-input v-model="value" type="password" placeholder="显示密码" show-pwd />
</template>