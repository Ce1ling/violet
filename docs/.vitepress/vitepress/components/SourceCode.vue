<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  code: string
}>()

const decoded = computed(() => decodeURIComponent(props.code))
</script>

<template>
  <div class="example-source-code language-vue" v-html="decoded" />
</template>

<style scoped lang="scss">
.example-source-code {
  --vp-code-block-color: var(--prism-foreground);
  --doc-border-color: transparent;
  
  &.language-vue {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    
    :deep(code) {
      padding: 0 var(--doc-example-padding);
    }
  }
}
</style>