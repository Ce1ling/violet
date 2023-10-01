<script lang="ts" setup>
import { computed } from 'vue'
import { Message } from '../../../../../packages/components/Message'

const props = defineProps<{
  code: string
  rawCode: string
}>()

const decoded = computed(() => decodeURIComponent(props.code))

const onCopy = () => {
  navigator.clipboard
    .writeText(decodeURIComponent(props.rawCode))
    .then(() => Message.success('复制成功'))
    .catch(() => Message.danger('复制失败'))
}
</script>

<template>
  <div class="example-source">
    <div class="example-source__code language-vue" v-html="decoded" />
    <vi-icon
      name="Copy"
      class="example-source-copy"
      title="复制"
      color="#97A5AE"
      hover-color="var(--vi-color-primary)"
      @click="onCopy"
    />
  </div>
</template>

<style scoped lang="scss">
.example-source {
  position: relative;

  &__code {
    --vp-code-block-color: var(--prism-foreground);
    --doc-border-color: transparent;

    &.language-vue {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;

      :deep(code) {
        padding: 0 var(--doc-example-padding);
      }
    }
  }

  &-copy {
    position: absolute;
    top: 10px;
    right: 36px;
    z-index: 999;
  }
}
</style>
